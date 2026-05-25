import "server-only";
import { OrderStatus, PaymentProvider, PaymentStatus, Prisma } from "@/lib/generated/prisma/client";
import type { Order, Payment } from "@/lib/generated/prisma/client";
import { getPrisma } from "@/lib/server/db";
import { markProductStatusAfterOrderPaid } from "@/lib/server/products/mark-product-after-payment";
import type {
  ArcaOrderStatusExtendedResponse,
  ArcaRegisterResponse,
} from "@/lib/server/payment/arca-types";

export type OrderWithLatestPayment = Order & {
  readonly payments: readonly Payment[];
};

export {
  findOrderWithPaymentsById,
  findOrderWithPaymentsByNumber,
} from "@/lib/server/orders/order-repository";

export async function createPendingPaymentForOrder(orderId: string): Promise<Payment> {
  const order = await getPrisma().order.findUnique({ where: { id: orderId } });
  if (!order) {
    throw new Error("createPendingPaymentForOrder: order not found.");
  }

  return getPrisma().payment.create({
    data: {
      orderId: order.id,
      provider: PaymentProvider.IDBANK_ARCA,
      status: PaymentStatus.PENDING,
      amount: order.amount,
      currency: order.currency,
    },
  });
}

export async function attachArcaRegistration(
  paymentId: string,
  registerResponse: ArcaRegisterResponse,
): Promise<Payment> {
  const arcaOrderId = registerResponse.orderId;
  if (!arcaOrderId) {
    throw new Error("attachArcaRegistration: missing ArCa orderId.");
  }

  return getPrisma().payment.update({
    where: { id: paymentId },
    data: {
      arcaOrderId,
      arcaOrderNumber: registerResponse.orderNumber ?? null,
      providerTransactionId: arcaOrderId,
      rawRegisterResponse: registerResponse as Prisma.InputJsonValue,
    },
  });
}

export async function findPaymentByArcaOrderId(arcaOrderId: string): Promise<Payment | null> {
  return getPrisma().payment.findFirst({
    where: { arcaOrderId },
    orderBy: { createdAt: "desc" },
  });
}

export async function markOrderAndPaymentPaid(
  orderId: string,
  paymentId: string,
  statusResponse: ArcaOrderStatusExtendedResponse,
): Promise<{ readonly alreadyPaid: boolean }> {
  const prisma = getPrisma();
  const now = new Date();

  const result = await prisma.$transaction(async (tx) => {
    const order = await tx.order.findUnique({ where: { id: orderId } });
    const payment = await tx.payment.findUnique({ where: { id: paymentId } });

    if (!order || !payment) {
      throw new Error("markOrderAndPaymentPaid: order or payment not found.");
    }

    if (order.status === OrderStatus.PAID && payment.status === PaymentStatus.PAID) {
      return { alreadyPaid: true };
    }

    await tx.payment.update({
      where: { id: paymentId },
      data: {
        status: PaymentStatus.PAID,
        paidAt: payment.paidAt ?? now,
        rawStatusResponse: statusResponse as Prisma.InputJsonValue,
      },
    });

    await tx.order.update({
      where: { id: orderId },
      data: {
        status: OrderStatus.PAID,
        paidAt: order.paidAt ?? now,
      },
    });

    return { alreadyPaid: false };
  });

  if (!result.alreadyPaid) {
    await markProductStatusAfterOrderPaid(orderId);
  }

  return result;
}

export async function markOrderAndPaymentFailed(
  orderId: string,
  paymentId: string,
  statusResponse?: ArcaOrderStatusExtendedResponse,
): Promise<void> {
  const prisma = getPrisma();
  const now = new Date();

  await prisma.$transaction(async (tx) => {
    const order = await tx.order.findUnique({ where: { id: orderId } });
    const payment = await tx.payment.findUnique({ where: { id: paymentId } });

    if (!order || !payment) {
      return;
    }

    if (order.status === OrderStatus.PAID) {
      return;
    }

    await tx.payment.update({
      where: { id: paymentId },
      data: {
        status: PaymentStatus.FAILED,
        failedAt: payment.failedAt ?? now,
        ...(statusResponse ? { rawStatusResponse: statusResponse as Prisma.InputJsonValue } : {}),
      },
    });

    if (order.status === OrderStatus.PENDING) {
      await tx.order.update({
        where: { id: orderId },
        data: {
          status: OrderStatus.FAILED,
          failedAt: order.failedAt ?? now,
        },
      });
    }
  });
}

export async function markOrderAndPaymentCancelled(
  orderId: string,
  paymentId: string,
): Promise<void> {
  const prisma = getPrisma();
  const now = new Date();

  await prisma.$transaction(async (tx) => {
    const order = await tx.order.findUnique({ where: { id: orderId } });
    const payment = await tx.payment.findUnique({ where: { id: paymentId } });

    if (!order || !payment) {
      return;
    }

    if (order.status === OrderStatus.PAID) {
      return;
    }

    await tx.payment.update({
      where: { id: paymentId },
      data: {
        status: PaymentStatus.CANCELLED,
        failedAt: payment.failedAt ?? now,
      },
    });

    if (order.status === OrderStatus.PENDING) {
      await tx.order.update({
        where: { id: orderId },
        data: {
          status: OrderStatus.CANCELLED,
          cancelledAt: order.cancelledAt ?? now,
        },
      });
    }
  });
}

export async function listStalePendingPayments(olderThan: Date): Promise<readonly Payment[]> {
  return getPrisma().payment.findMany({
    where: {
      status: PaymentStatus.PENDING,
      arcaOrderId: { not: null },
      createdAt: { lt: olderThan },
    },
    orderBy: { createdAt: "asc" },
    take: 50,
  });
}
