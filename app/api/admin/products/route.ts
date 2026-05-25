import { NextRequest, NextResponse } from "next/server";
import { AdminUnauthorizedError, requireAdminApiSession } from "@/lib/server/auth/guards";
import { createProductSchema } from "@/lib/server/products/product-admin-validation";
import { createProduct, listAdminProducts } from "@/lib/server/products/product-repository";
import { getPublicProductUrl } from "@/lib/products/public-product-url";

export const runtime = "nodejs";

export async function GET(): Promise<NextResponse> {
  try {
    await requireAdminApiSession();
    const products = await listAdminProducts();
    const items = products.map((p) => ({
      ...p,
      publicUrl: getPublicProductUrl(p.secretSlug),
    }));
    return NextResponse.json({ success: true, products: items });
  } catch (error) {
    if (error instanceof AdminUnauthorizedError) {
      return NextResponse.json({ success: false, error: "Unauthorized." }, { status: 401 });
    }
    console.error("[admin-products] GET failed.", error);
    return NextResponse.json(
      { success: false, error: "Could not load products." },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    await requireAdminApiSession();
    const body: unknown = await request.json();
    const parsed = createProductSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ success: false, error: "Invalid product data." }, { status: 400 });
    }

    const product = await createProduct({
      name: parsed.data.name,
      description: parsed.data.description,
      priceAmd: parsed.data.priceAmd,
      type: parsed.data.type,
    });

    return NextResponse.json({
      success: true,
      product: {
        id: product.id,
        name: product.name,
        secretSlug: product.secretSlug,
        publicUrl: getPublicProductUrl(product.secretSlug),
      },
    });
  } catch (error) {
    if (error instanceof AdminUnauthorizedError) {
      return NextResponse.json({ success: false, error: "Unauthorized." }, { status: 401 });
    }
    console.error("[admin-products] POST failed.", error);
    return NextResponse.json(
      { success: false, error: "Could not create product." },
      { status: 500 },
    );
  }
}
