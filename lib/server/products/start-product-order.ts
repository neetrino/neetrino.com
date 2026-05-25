import "server-only";
import { getProductAvailability } from "@/lib/server/products/product-availability";
import { getProductBySecretSlug } from "@/lib/server/products/product-repository";
import { createPendingProductOrder } from "@/lib/server/orders/order-repository";

export type StartProductOrderInput = {
  readonly secretSlug: string;
  readonly customerName: string;
  readonly customerEmail: string;
  readonly customerPhone: string;
};

export type StartProductOrderResult = {
  readonly orderId: string;
  readonly orderNumber: string;
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

  const order = await createPendingProductOrder({
    product: product!,
    customerName: input.customerName,
    customerEmail: input.customerEmail,
    customerPhone: input.customerPhone,
  });

  return {
    orderId: order.id,
    orderNumber: order.orderNumber,
  };
}
