import { NextResponse } from "next/server";
import { AdminUnauthorizedError, requireAdminApiSession } from "@/lib/server/auth/guards";
import { getAdminOrderById } from "@/lib/server/orders/order-repository";
import { getPublicProductUrl } from "@/lib/products/public-product-url";

export const runtime = "nodejs";

type RouteContext = { params: Promise<{ id: string }> };

export async function GET(_request: Request, context: RouteContext): Promise<NextResponse> {
  try {
    await requireAdminApiSession();
    const { id } = await context.params;
    const order = await getAdminOrderById(id);
    if (!order) {
      return NextResponse.json({ success: false, error: "Order not found." }, { status: 404 });
    }
    return NextResponse.json({
      success: true,
      order: {
        ...order,
        productPublicUrl: getPublicProductUrl(order.product.secretSlug),
      },
    });
  } catch (error) {
    if (error instanceof AdminUnauthorizedError) {
      return NextResponse.json({ success: false, error: "Unauthorized." }, { status: 401 });
    }
    console.error("[admin-orders] GET by id failed.", error);
    return NextResponse.json({ success: false, error: "Could not load order." }, { status: 500 });
  }
}
