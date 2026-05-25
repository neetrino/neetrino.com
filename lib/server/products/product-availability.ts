import "server-only";
import { OrderStatus, ProductStatus, ProductType } from "@/lib/generated/prisma/client";
import type { Product } from "@/lib/generated/prisma/client";
import { getPrisma } from "@/lib/server/db";

export type ProductAvailability =
  | { readonly available: true }
  | {
      readonly available: false;
      readonly reason: "not_found" | "inactive" | "sold" | "one_time_purchased";
    };

export async function productHasPaidOrder(productId: string): Promise<boolean> {
  const paid = await getPrisma().order.findFirst({
    where: { productId, status: OrderStatus.PAID },
    select: { id: true },
  });
  return paid !== null;
}

export async function getProductAvailability(
  product: Product | null,
): Promise<ProductAvailability> {
  if (!product) {
    return { available: false, reason: "not_found" };
  }

  if (product.status === ProductStatus.INACTIVE) {
    return { available: false, reason: "inactive" };
  }

  if (product.status === ProductStatus.SOLD) {
    return { available: false, reason: "sold" };
  }

  if (product.type === ProductType.ONE_TIME) {
    const hasPaid = await productHasPaidOrder(product.id);
    if (hasPaid) {
      return { available: false, reason: "one_time_purchased" };
    }
  }

  return { available: true };
}
