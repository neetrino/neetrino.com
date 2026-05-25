import type { VerifyIdbankCallbackInput } from "@/lib/server/payment/idbank-payment-service";

/**
 * Parses bank callback query params. ArCa typically sends `orderId`; we use `order` for local id.
 */
export function parseIdbankCallbackQuery(searchParams: URLSearchParams): VerifyIdbankCallbackInput {
  const localOrderId = searchParams.get("order")?.trim() || undefined;
  const localOrderNumber = searchParams.get("orderNumber")?.trim() || undefined;
  const arcaOrderIdFromQuery =
    searchParams.get("orderId")?.trim() || searchParams.get("mdOrder")?.trim() || undefined;

  return {
    localOrderId,
    localOrderNumber,
    arcaOrderIdFromQuery,
  };
}
