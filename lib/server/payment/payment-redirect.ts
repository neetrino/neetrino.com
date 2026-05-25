import "server-only";
import { getArcaRuntimeConfig } from "@/lib/server/payment/arca-config";

/** `order` query param is the public order number (or legacy cuid). */
export function buildPaymentResultRedirect(path: string, orderNumber: string): string {
  const { appUrl } = getArcaRuntimeConfig();
  const url = new URL(path, `${appUrl}/`);
  if (orderNumber) {
    url.searchParams.set("order", orderNumber);
  }
  return url.toString();
}
