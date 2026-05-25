import "server-only";
import { Prisma, ProductStatus, ProductType } from "@/lib/generated/prisma/client";
import type { Product } from "@/lib/generated/prisma/client";
import { getPrisma } from "@/lib/server/db";
import { generateProductSecretSlug } from "@/lib/server/products/secret-slug";

export type AdminProductRow = {
  readonly id: string;
  readonly name: string;
  readonly description: string | null;
  readonly price: string;
  readonly currency: string;
  readonly type: ProductType;
  readonly status: ProductStatus;
  readonly secretSlug: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly orderCount: number;
};

export type CreateProductInput = {
  readonly name: string;
  readonly description?: string;
  readonly priceAmd: number;
  readonly type: ProductType;
};

export type UpdateProductInput = {
  readonly name?: string;
  readonly description?: string | null;
  readonly priceAmd?: number;
  readonly type?: ProductType;
  readonly status?: ProductStatus;
};

function decimalFromAmd(amountAmd: number): Prisma.Decimal {
  return new Prisma.Decimal(amountAmd.toFixed(2));
}

function toAdminRow(product: Product, orderCount: number): AdminProductRow {
  return {
    id: product.id,
    name: product.name,
    description: product.description,
    price: product.price.toString(),
    currency: product.currency,
    type: product.type,
    status: product.status,
    secretSlug: product.secretSlug,
    createdAt: product.createdAt,
    updatedAt: product.updatedAt,
    orderCount,
  };
}

export async function listAdminProducts(): Promise<readonly AdminProductRow[]> {
  const products = await getPrisma().product.findMany({
    orderBy: { createdAt: "desc" },
    include: { _count: { select: { orders: true } } },
  });

  return products.map((p) => toAdminRow(p, p._count.orders));
}

export async function getAdminProductById(id: string): Promise<AdminProductRow | null> {
  const product = await getPrisma().product.findUnique({
    where: { id },
    include: { _count: { select: { orders: true } } },
  });

  return product ? toAdminRow(product, product._count.orders) : null;
}

export async function getProductBySecretSlug(secretSlug: string): Promise<Product | null> {
  return getPrisma().product.findUnique({
    where: { secretSlug },
  });
}

export async function createProduct(input: CreateProductInput): Promise<Product> {
  return getPrisma().product.create({
    data: {
      name: input.name.trim(),
      description: input.description?.trim() || null,
      price: decimalFromAmd(input.priceAmd),
      currency: "AMD",
      type: input.type,
      status: ProductStatus.ACTIVE,
      secretSlug: generateProductSecretSlug(),
    },
  });
}

export async function updateProduct(id: string, input: UpdateProductInput): Promise<Product> {
  return getPrisma().product.update({
    where: { id },
    data: {
      ...(input.name !== undefined ? { name: input.name.trim() } : {}),
      ...(input.description !== undefined
        ? { description: input.description?.trim() || null }
        : {}),
      ...(input.priceAmd !== undefined ? { price: decimalFromAmd(input.priceAmd) } : {}),
      ...(input.type !== undefined ? { type: input.type } : {}),
      ...(input.status !== undefined ? { status: input.status } : {}),
    },
  });
}

export async function deactivateProduct(id: string): Promise<Product> {
  return getPrisma().product.update({
    where: { id },
    data: { status: ProductStatus.INACTIVE },
  });
}
