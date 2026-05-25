import { NextRequest, NextResponse } from "next/server";
import { buildPaymentResultRedirect } from "@/lib/server/payment/payment-redirect";
import { parseIdbankCallbackQuery } from "@/lib/server/payment/parse-callback-query";
import { verifyIdbankSuccessCallback } from "@/lib/server/payment/idbank-payment-service";

export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const callbackInput = parseIdbankCallbackQuery(request.nextUrl.searchParams);
    const result = await verifyIdbankSuccessCallback(callbackInput);
    const target = buildPaymentResultRedirect(result.redirectPath, result.orderNumber);
    return NextResponse.redirect(target, { status: 303 });
  } catch (error) {
    console.error("[idbank-successful] Callback handler failed.", error);
    const target = buildPaymentResultRedirect("/payment/fail", "");
    return NextResponse.redirect(target, { status: 303 });
  }
}
