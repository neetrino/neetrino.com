import { NextResponse } from "next/server";
import { AdminUnauthorizedError, requireAdminApiSession } from "@/lib/server/auth/guards";
import { listAdminOrders } from "@/lib/server/orders/order-repository";

export const runtime = "nodejs";

export async function GET(): Promise<NextResponse> {
  try {
    await requireAdminApiSession();
    const orders = await listAdminOrders();
    return NextResponse.json({ success: true, orders });
  } catch (error) {
    if (error instanceof AdminUnauthorizedError) {
      return NextResponse.json({ success: false, error: "Unauthorized." }, { status: 401 });
    }
    console.error("[admin-orders] GET failed.", error);
    return NextResponse.json({ success: false, error: "Could not load orders." }, { status: 500 });
  }
}
