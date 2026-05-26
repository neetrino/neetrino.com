import "server-only";
import { DEFAULT_PAYMENT_LANGUAGE, type PaymentLanguageCode } from "@/lib/payment.constants";
import {
  buildIdbankSuccessReturnUrl,
  getArcaRuntimeConfig,
} from "@/lib/server/payment/arca-config";
import { registerArcaOrder } from "@/lib/server/payment/arca-client";
import { ArcaClientError } from "@/lib/server/payment/arca-types";
import { amountDecimalToMinorUnits } from "@/lib/server/payment/amount-amd";
import {
  attachArcaRegistration,
  createPendingPaymentForOrder,
} from "@/lib/server/payment/order-repository";
import { createPendingProductOrder } from "@/lib/server/orders/order-repository";
import { getProductAvailability } from "@/lib/server/products/product-availability";
import { getProductBySecretSlug } from "@/lib/server/products/product-repository";

export type StartProductOrderInput = {
  readonly secretSlug: string;
  readonly language?: PaymentLanguageCode;
};

export type StartProductOrderResult = {
  readonly orderId: string;
  readonly orderNumber: string;
  readonly redirectUrl: string;
};

export class StartProductOrderError extends Error {
  readonly status: number;
  readonly code: string;

  constructor(status: number, code: string, message: string) {
    super(message);
    this.name = "StartProductOrderError";
    this.status = status;
    this.code = code;
  }
}

function buildPaymentDescription(productName: string, description: string | null): string {
  const trimmed = description?.trim();
  if (trimmed && trimmed.length > 0) {
    return trimmed.length > 500 ? `${trimmed.slice(0, 497)}...` : trimmed;
  }
  return productName;
}

export async function startProductOrder(
  input: StartProductOrderInput,
): Promise<StartProductOrderResult> {
  const product = await getProductBySecretSlug(input.secretSlug.trim());
  const availability = await getProductAvailability(product);

  if (!availability.available) {
    const status = availability.reason === "one_time_purchased" ? 409 : 404;
    const code =
      availability.reason === "one_time_purchased"
        ? "PRODUCT_UNAVAILABLE"
        : "PRODUCT_NOT_AVAILABLE";
    throw new StartProductOrderError(status, code, "This product is not available for purchase.");
  }

  const activeProduct = product!;

  const order = await createPendingProductOrder({ product: activeProduct });

  const payment = await createPendingPaymentForOrder(order.id);

  let appUrl: string;
  try {
    appUrl = getArcaRuntimeConfig().appUrl;
  } catch (error) {
    const message = error instanceof Error ? error.message : "Payment configuration error.";
    throw new StartProductOrderError(503, "PAYMENT_NOT_CONFIGURED", message);
  }

  const returnUrl = buildIdbankSuccessReturnUrl(appUrl, order.id);
  const amountMinorUnits = amountDecimalToMinorUnits(order.amount);
  const description = buildPaymentDescription(activeProduct.name, activeProduct.description);
  const language = input.language ?? DEFAULT_PAYMENT_LANGUAGE;

  let registerResponse;
  try {
    registerResponse = await registerArcaOrder({
      orderNumber: order.orderNumber,
      amountMinorUnits,
      returnUrl,
      description,
      language,
    });
  } catch (error) {
    if (error instanceof ArcaClientError) {
      throw new StartProductOrderError(
        502,
        "PAYMENT_REGISTER_FAILED",
        "Payment registration failed. Please try again.",
      );
    }
    throw error;
  }

  await attachArcaRegistration(payment.id, registerResponse);

  const redirectUrl = registerResponse.formUrl;
  if (!redirectUrl) {
    throw new StartProductOrderError(
      502,
      "PAYMENT_REGISTER_FAILED",
      "Payment registration did not return a redirect URL.",
    );
  }

  return {
    orderId: order.id,
    orderNumber: order.orderNumber,
    redirectUrl,
  };
}
