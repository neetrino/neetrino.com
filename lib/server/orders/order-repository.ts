import "server-only";
import { OrderStatus } from "@/lib/generated/prisma/client";
import type { Order, Payment, Product } from "@/lib/generated/prisma/client";
import { getPrisma } from "@/lib/server/db";
import { generateOrderNumber } from "@/lib/server/orders/order-number";

export type AdminOrderRow = {
  readonly id: string;
  readonly orderNumber: string;
  readonly productId: string;
  readonly productName: string;
  readonly amount: string;
  readonly currency: string;
  readonly customerName: string | null;
  readonly customerEmail: string | null;
  readonly customerPhone: string | null;
  readonly status: OrderStatus;
  readonly paidAt: Date | null;
  readonly createdAt: Date;
  readonly updatedAt: Date;
};

export type AdminOrderDetail = AdminOrderRow & {
  readonly failedAt: Date | null;
  readonly cancelledAt: Date | null;
  readonly product: {
    readonly id: string;
    readonly name: string;
    readonly type: string;
    readonly status: string;
    readonly secretSlug: string;
  };
};

export type CreateProductOrderInput = {
  readonly product: Product;
  readonly customerName: string;
  readonly customerEmail: string;
  readonly customerPhone: string;
};

function toAdminRow(order: Order): AdminOrderRow {
  return {
    id: order.id,
    orderNumber: order.orderNumber,
    productId: order.productId,
    productName: order.productName,
    amount: order.amount.toString(),
    currency: order.currency,
    customerName: order.customerName,
    customerEmail: order.customerEmail,
    customerPhone: order.customerPhone,
    status: order.status,
    paidAt: order.paidAt,
    createdAt: order.createdAt,
    updatedAt: order.updatedAt,
  };
}

export async function listAdminOrders(): Promise<readonly AdminOrderRow[]> {
  const orders = await getPrisma().order.findMany({
    orderBy: { createdAt: "desc" },
  });
  return orders.map(toAdminRow);
}

export async function getAdminOrderById(id: string): Promise<AdminOrderDetail | null> {
  const order = await getPrisma().order.findUnique({
    where: { id },
    include: { product: true },
  });

  if (!order) {
    return null;
  }

  return {
    ...toAdminRow(order),
    failedAt: order.failedAt,
    cancelledAt: order.cancelledAt,
    product: {
      id: order.product.id,
      name: order.product.name,
      type: order.product.type,
      status: order.product.status,
      secretSlug: order.product.secretSlug,
    },
  };
}

export async function findOrderById(orderId: string): Promise<Order | null> {
  return getPrisma().order.findUnique({ where: { id: orderId } });
}

export async function createPendingProductOrder(input: CreateProductOrderInput): Promise<Order> {
  return getPrisma().order.create({
    data: {
      orderNumber: generateOrderNumber(),
      productId: input.product.id,
      productName: input.product.name,
      amount: input.product.price,
      currency: input.product.currency,
      customerName: input.customerName.trim(),
      customerEmail: input.customerEmail.trim(),
      customerPhone: input.customerPhone.trim(),
      status: OrderStatus.PENDING,
    },
  });
}

export async function markOrderPaid(
  orderId: string,
  paidAt: Date = new Date(),
): Promise<Order | null> {
  const order = await getPrisma().order.findUnique({ where: { id: orderId } });
  if (!order || order.status === OrderStatus.PAID) {
    return order;
  }

  return getPrisma().order.update({
    where: { id: orderId },
    data: {
      status: OrderStatus.PAID,
      paidAt: order.paidAt ?? paidAt,
    },
  });
}

export async function markOrderFailed(orderId: string): Promise<void> {
  const order = await getPrisma().order.findUnique({ where: { id: orderId } });
  if (!order || order.status === OrderStatus.PAID) {
    return;
  }

  await getPrisma().order.update({
    where: { id: orderId },
    data: {
      status: OrderStatus.FAILED,
      failedAt: order.failedAt ?? new Date(),
    },
  });
}

export async function markOrderCancelled(orderId: string): Promise<void> {
  const order = await getPrisma().order.findUnique({ where: { id: orderId } });
  if (!order || order.status === OrderStatus.PAID) {
    return;
  }

  await getPrisma().order.update({
    where: { id: orderId },
    data: {
      status: OrderStatus.CANCELLED,
      cancelledAt: order.cancelledAt ?? new Date(),
    },
  });
}

export type OrderWithPayments = Order & {
  readonly payments: readonly Payment[];
};

export async function findOrderWithPaymentsById(
  orderId: string,
): Promise<OrderWithPayments | null> {
  return getPrisma().order.findUnique({
    where: { id: orderId },
    include: { payments: { orderBy: { createdAt: "desc" } } },
  });
}

export async function findOrderWithPaymentsByNumber(
  orderNumber: string,
): Promise<OrderWithPayments | null> {
  return getPrisma().order.findUnique({
    where: { orderNumber },
    include: { payments: { orderBy: { createdAt: "desc" } } },
  });
}
