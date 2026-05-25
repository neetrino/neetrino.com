import { NextRequest, NextResponse } from "next/server";
import { startOrderBodySchema } from "@/lib/server/products/product-admin-validation";
import {
  StartProductOrderError,
  startProductOrder,
} from "@/lib/server/products/start-product-order";

export const runtime = "nodejs";

type RouteContext = { params: Promise<{ secretSlug: string }> };

export async function POST(request: NextRequest, context: RouteContext): Promise<NextResponse> {
  try {
    const { secretSlug } = await context.params;
    if (!secretSlug?.trim()) {
      return NextResponse.json({ success: false, error: "Missing product." }, { status: 400 });
    }

    const body: unknown = await request.json();
    const parsed = startOrderBodySchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: "Invalid customer details." },
        { status: 400 },
      );
    }

    const result = await startProductOrder({
      secretSlug,
      customerName: parsed.data.customerName,
      customerEmail: parsed.data.customerEmail,
      customerPhone: parsed.data.customerPhone,
    });

    return NextResponse.json({
      success: true,
      orderId: result.orderId,
      orderNumber: result.orderNumber,
      message: "Order created. Payment integration will be connected next.",
    });
  } catch (error) {
    if (error instanceof StartProductOrderError) {
      return NextResponse.json(
        { success: false, error: error.message, code: error.code },
        { status: error.status },
      );
    }
    console.error("[start-order] failed.", error);
    return NextResponse.json({ success: false, error: "Could not create order." }, { status: 500 });
  }
}
