import { NextRequest, NextResponse } from "next/server";
import { ArcaClientError } from "@/lib/server/payment/arca-types";
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
      language: parsed.data.language,
    });

    return NextResponse.json({
      success: true,
      orderId: result.orderId,
      orderNumber: result.orderNumber,
      redirectUrl: result.redirectUrl,
    });
  } catch (error) {
    if (error instanceof StartProductOrderError) {
      return NextResponse.json(
        { success: false, error: error.message, code: error.code },
        { status: error.status },
      );
    }

    if (error instanceof ArcaClientError) {
      console.error("[start-order] ArCa error.", { code: error.code, message: error.message });
      return NextResponse.json(
        { success: false, error: "Payment registration failed. Please try again." },
        { status: 502 },
      );
    }

    if (error instanceof Error && error.message.startsWith("Missing required environment")) {
      console.error("[start-order] Configuration error.", error.message);
      return NextResponse.json(
        { success: false, error: "Payment service is not configured." },
        { status: 503 },
      );
    }

    console.error("[start-order] failed.", error);
    return NextResponse.json(
      { success: false, error: "Could not start payment." },
      { status: 500 },
    );
  }
}
