import "server-only";
import { OrderStatus } from "@/lib/generated/prisma/client";
import { findOrderById } from "@/lib/server/orders/order-repository";

export type PublicOrderSummary = {
  readonly id: string;
  readonly orderNumber: string;
  readonly status: OrderStatus;
  readonly amount: string;
  readonly currency: string;
  readonly productName: string;
};

export async function getPublicOrderSummary(
  orderId: string | undefined,
): Promise<PublicOrderSummary | null> {
  if (!orderId?.trim()) {
    return null;
  }

  const order = await findOrderById(orderId.trim());
  if (!order) {
    return null;
  }

  return {
    id: order.id,
    orderNumber: order.orderNumber,
    status: order.status,
    amount: order.amount.toString(),
    currency: order.currency,
    productName: order.productName,
  };
}
