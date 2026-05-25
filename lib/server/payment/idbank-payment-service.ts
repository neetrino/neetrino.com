import "server-only";
import { OrderStatus, PaymentStatus } from "@/lib/generated/prisma/client";
import { PAYMENT_FAIL_PATH, PAYMENT_SUCCESS_PATH } from "@/lib/payment.constants";
import { getArcaOrderStatusExtended } from "@/lib/server/payment/arca-client";
import { isArcaPaymentSuccessful } from "@/lib/server/payment/payment-status";
import type { Payment } from "@/lib/generated/prisma/client";
import {
  findPaymentByArcaOrderId,
  listStalePendingPayments,
  markOrderAndPaymentCancelled,
  markOrderAndPaymentFailed,
  markOrderAndPaymentPaid,
} from "@/lib/server/payment/order-repository";
import {
  findOrderWithPaymentsById,
  findOrderWithPaymentsByNumber,
  type OrderWithPayments,
} from "@/lib/server/orders/order-repository";

export type InitiateIdbankPaymentInput = {
  readonly amountAmd: number;
  readonly description: string;
  readonly customerName?: string;
  readonly customerEmail?: string;
  readonly customerPhone?: string;
};

export type InitiateIdbankPaymentResult = {
  readonly orderId: string;
  readonly orderNumber: string;
  readonly redirectUrl: string;
};

export type VerifyIdbankCallbackInput = {
  readonly localOrderId?: string;
  readonly localOrderNumber?: string;
  readonly arcaOrderIdFromQuery?: string;
};

export type VerifyIdbankCallbackResult = {
  readonly success: boolean;
  readonly orderNumber: string;
  readonly redirectPath: string;
};

function getLatestPayment(order: OrderWithPayments): Payment | null {
  return order.payments[0] ?? null;
}

export async function initiateIdbankPayment(
  _input: InitiateIdbankPaymentInput,
): Promise<InitiateIdbankPaymentResult> {
  void _input;
  throw new Error(
    "IDBank payment must be started from a product order. Use product checkout flow first.",
  );
}

async function resolveOrderContext(input: VerifyIdbankCallbackInput) {
  if (input.localOrderId) {
    const order = await findOrderWithPaymentsById(input.localOrderId);
    if (order) {
      return order;
    }
  }

  if (input.localOrderNumber) {
    const order = await findOrderWithPaymentsByNumber(input.localOrderNumber);
    if (order) {
      return order;
    }
  }

  if (input.arcaOrderIdFromQuery) {
    const payment = await findPaymentByArcaOrderId(input.arcaOrderIdFromQuery);
    if (payment) {
      return findOrderWithPaymentsById(payment.orderId);
    }
  }

  return null;
}

export async function verifyIdbankSuccessCallback(
  input: VerifyIdbankCallbackInput,
): Promise<VerifyIdbankCallbackResult> {
  const order = await resolveOrderContext(input);
  if (!order) {
    return {
      success: false,
      orderNumber: input.localOrderNumber ?? "",
      redirectPath: PAYMENT_FAIL_PATH,
    };
  }

  const payment = getLatestPayment(order);
  if (!payment) {
    return {
      success: false,
      orderNumber: order.orderNumber,
      redirectPath: PAYMENT_FAIL_PATH,
    };
  }

  if (payment.status === PaymentStatus.PAID && order.status === OrderStatus.PAID) {
    return {
      success: true,
      orderNumber: order.orderNumber,
      redirectPath: PAYMENT_SUCCESS_PATH,
    };
  }

  const arcaOrderId =
    input.arcaOrderIdFromQuery ?? payment.arcaOrderId ?? payment.providerTransactionId;
  if (!arcaOrderId) {
    await markOrderAndPaymentFailed(order.id, payment.id);
    return {
      success: false,
      orderNumber: order.orderNumber,
      redirectPath: PAYMENT_FAIL_PATH,
    };
  }

  try {
    const statusResponse = await getArcaOrderStatusExtended(arcaOrderId);
    if (isArcaPaymentSuccessful(statusResponse)) {
      await markOrderAndPaymentPaid(order.id, payment.id, statusResponse);
      return {
        success: true,
        orderNumber: order.orderNumber,
        redirectPath: PAYMENT_SUCCESS_PATH,
      };
    }

    await markOrderAndPaymentFailed(order.id, payment.id, statusResponse);
    return {
      success: false,
      orderNumber: order.orderNumber,
      redirectPath: PAYMENT_FAIL_PATH,
    };
  } catch (error) {
    console.error("[idbank-payment] Success callback verification failed.", {
      orderId: order.id,
      paymentId: payment.id,
      error: error instanceof Error ? error.message : "unknown",
    });
    return {
      success: false,
      orderNumber: order.orderNumber,
      redirectPath: PAYMENT_FAIL_PATH,
    };
  }
}

export async function handleIdbankFailedCallback(
  input: VerifyIdbankCallbackInput,
): Promise<VerifyIdbankCallbackResult> {
  const order = await resolveOrderContext(input);
  if (!order) {
    return {
      success: false,
      orderNumber: input.localOrderNumber ?? "",
      redirectPath: PAYMENT_FAIL_PATH,
    };
  }

  const payment = getLatestPayment(order);
  if (!payment) {
    return {
      success: false,
      orderNumber: order.orderNumber,
      redirectPath: PAYMENT_FAIL_PATH,
    };
  }

  const arcaOrderId = input.arcaOrderIdFromQuery ?? payment.arcaOrderId;
  if (arcaOrderId) {
    try {
      const statusResponse = await getArcaOrderStatusExtended(arcaOrderId);
      if (isArcaPaymentSuccessful(statusResponse)) {
        await markOrderAndPaymentPaid(order.id, payment.id, statusResponse);
        return {
          success: true,
          orderNumber: order.orderNumber,
          redirectPath: PAYMENT_SUCCESS_PATH,
        };
      }
      await markOrderAndPaymentFailed(order.id, payment.id, statusResponse);
    } catch {
      await markOrderAndPaymentCancelled(order.id, payment.id);
    }
  } else {
    await markOrderAndPaymentCancelled(order.id, payment.id);
  }

  return {
    success: false,
    orderNumber: order.orderNumber,
    redirectPath: PAYMENT_FAIL_PATH,
  };
}

export type ReconcilePaymentsResult = {
  readonly checked: number;
  readonly paid: number;
  readonly failed: number;
  readonly skipped: number;
};

export async function reconcileStalePendingPayments(
  olderThanMinutes: number,
): Promise<ReconcilePaymentsResult> {
  const threshold = new Date(Date.now() - olderThanMinutes * 60 * 1000);
  const pending = await listStalePendingPayments(threshold);

  let paid = 0;
  let failed = 0;
  let skipped = 0;

  for (const payment of pending) {
    const arcaOrderId = payment.arcaOrderId ?? payment.providerTransactionId;
    if (!arcaOrderId) {
      skipped += 1;
      continue;
    }

    try {
      const statusResponse = await getArcaOrderStatusExtended(arcaOrderId);
      if (isArcaPaymentSuccessful(statusResponse)) {
        await markOrderAndPaymentPaid(payment.orderId, payment.id, statusResponse);
        paid += 1;
      } else {
        await markOrderAndPaymentFailed(payment.orderId, payment.id, statusResponse);
        failed += 1;
      }
    } catch (error) {
      console.error("[idbank-payment] Reconcile skipped payment.", {
        paymentId: payment.id,
        orderId: payment.orderId,
        error: error instanceof Error ? error.message : "unknown",
      });
      skipped += 1;
    }
  }

  return {
    checked: pending.length,
    paid,
    failed,
    skipped,
  };
}
