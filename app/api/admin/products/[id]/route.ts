import { NextRequest, NextResponse } from "next/server";
import { AdminUnauthorizedError, requireAdminApiSession } from "@/lib/server/auth/guards";
import { updateProductSchema } from "@/lib/server/products/product-admin-validation";
import {
  deactivateProduct,
  getAdminProductById,
  updateProduct,
} from "@/lib/server/products/product-repository";
import { getPublicProductUrl } from "@/lib/products/public-product-url";

export const runtime = "nodejs";

type RouteContext = { params: Promise<{ id: string }> };

export async function GET(_request: NextRequest, context: RouteContext): Promise<NextResponse> {
  try {
    await requireAdminApiSession();
    const { id } = await context.params;
    const product = await getAdminProductById(id);
    if (!product) {
      return NextResponse.json({ success: false, error: "Product not found." }, { status: 404 });
    }
    return NextResponse.json({
      success: true,
      product: { ...product, publicUrl: getPublicProductUrl(product.secretSlug) },
    });
  } catch (error) {
    if (error instanceof AdminUnauthorizedError) {
      return NextResponse.json({ success: false, error: "Unauthorized." }, { status: 401 });
    }
    console.error("[admin-products] GET by id failed.", error);
    return NextResponse.json({ success: false, error: "Could not load product." }, { status: 500 });
  }
}

export async function PATCH(request: NextRequest, context: RouteContext): Promise<NextResponse> {
  try {
    await requireAdminApiSession();
    const { id } = await context.params;
    const body: unknown = await request.json();
    const parsed = updateProductSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ success: false, error: "Invalid product data." }, { status: 400 });
    }

    const existing = await getAdminProductById(id);
    if (!existing) {
      return NextResponse.json({ success: false, error: "Product not found." }, { status: 404 });
    }

    const product = await updateProduct(id, {
      name: parsed.data.name,
      description: parsed.data.description,
      priceAmd: parsed.data.priceAmd,
      type: parsed.data.type,
      status: parsed.data.status,
    });

    return NextResponse.json({
      success: true,
      product: {
        id: product.id,
        secretSlug: product.secretSlug,
        publicUrl: getPublicProductUrl(product.secretSlug),
      },
    });
  } catch (error) {
    if (error instanceof AdminUnauthorizedError) {
      return NextResponse.json({ success: false, error: "Unauthorized." }, { status: 401 });
    }
    console.error("[admin-products] PATCH failed.", error);
    return NextResponse.json(
      { success: false, error: "Could not update product." },
      { status: 500 },
    );
  }
}

export async function DELETE(_request: NextRequest, context: RouteContext): Promise<NextResponse> {
  try {
    await requireAdminApiSession();
    const { id } = await context.params;
    const existing = await getAdminProductById(id);
    if (!existing) {
      return NextResponse.json({ success: false, error: "Product not found." }, { status: 404 });
    }

    await deactivateProduct(id);
    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof AdminUnauthorizedError) {
      return NextResponse.json({ success: false, error: "Unauthorized." }, { status: 401 });
    }
    console.error("[admin-products] DELETE failed.", error);
    return NextResponse.json(
      { success: false, error: "Could not deactivate product." },
      { status: 500 },
    );
  }
}
