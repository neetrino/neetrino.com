import { NextRequest, NextResponse } from "next/server";
import { PAYMENT_RECONCILE_PENDING_MINUTES } from "@/lib/payment.constants";
import { getPaymentReconcileSecret } from "@/lib/server/payment/arca-config";
import { reconcileStalePendingPayments } from "@/lib/server/payment/idbank-payment-service";

function isAuthorized(request: NextRequest): boolean {
  const expected = getPaymentReconcileSecret();
  const headerSecret = request.headers.get("x-payment-reconcile-secret")?.trim();
  if (headerSecret && headerSecret === expected) {
    return true;
  }

  const auth = request.headers.get("authorization")?.trim();
  if (auth?.startsWith("Bearer ")) {
    return auth.slice("Bearer ".length) === expected;
  }

  return false;
}

export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    if (!isAuthorized(request)) {
      return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
    }

    const result = await reconcileStalePendingPayments(PAYMENT_RECONCILE_PENDING_MINUTES);

    return NextResponse.json({
      success: true,
      checked: result.checked,
      paid: result.paid,
      failed: result.failed,
      skipped: result.skipped,
    });
  } catch (error) {
    if (error instanceof Error && error.message.startsWith("Missing required environment")) {
      return NextResponse.json(
        { success: false, error: "Reconcile is not configured." },
        { status: 503 },
      );
    }

    console.error("[idbank-reconcile] Unexpected error.", error);
    return NextResponse.json({ success: false, error: "Reconcile failed." }, { status: 500 });
  }
}
