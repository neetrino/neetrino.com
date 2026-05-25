import "server-only";
import { OrderStatus, ProductStatus, ProductType } from "@/lib/generated/prisma/client";
import { getPrisma } from "@/lib/server/db";

/**
 * When an order becomes PAID: ONE_TIME products become SOLD; PERMANENT stay ACTIVE.
 * Call from payment integration later — not used by placeholder checkout.
 */
export async function markProductStatusAfterOrderPaid(orderId: string): Promise<void> {
  const order = await getPrisma().order.findUnique({
    where: { id: orderId },
    include: { product: true },
  });

  if (!order || order.status !== OrderStatus.PAID) {
    return;
  }

  if (order.product.type === ProductType.ONE_TIME) {
    await getPrisma().product.update({
      where: { id: order.productId },
      data: { status: ProductStatus.SOLD },
    });
  }
}
