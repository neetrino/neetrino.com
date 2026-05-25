import { NextRequest, NextResponse } from "next/server";
import { buildPaymentResultRedirect } from "@/lib/server/payment/payment-redirect";
import { parseIdbankCallbackQuery } from "@/lib/server/payment/parse-callback-query";
import { handleIdbankFailedCallback } from "@/lib/server/payment/idbank-payment-service";

export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const callbackInput = parseIdbankCallbackQuery(request.nextUrl.searchParams);
    const result = await handleIdbankFailedCallback(callbackInput);
    const target = buildPaymentResultRedirect(result.redirectPath, result.orderId);
    return NextResponse.redirect(target, { status: 303 });
  } catch (error) {
    console.error("[idbank-failed] Callback handler failed.", error);
    const target = buildPaymentResultRedirect("/payment/fail", "");
    return NextResponse.redirect(target, { status: 303 });
  }
}
