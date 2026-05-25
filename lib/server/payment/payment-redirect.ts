import "server-only";
import { getArcaRuntimeConfig } from "@/lib/server/payment/arca-config";

export function buildPaymentResultRedirect(path: string, orderId: string): string {
  const { appUrl } = getArcaRuntimeConfig();
  const url = new URL(path, `${appUrl}/`);
  if (orderId) {
    url.searchParams.set("order", orderId);
  }
  return url.toString();
}
