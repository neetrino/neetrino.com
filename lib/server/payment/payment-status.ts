import { ARCA_ORDER_STATUS_PAID, ARCA_PAYMENT_STATE_DEPOSITED } from "@/lib/payment.constants";
import type { ArcaOrderStatusExtendedResponse } from "@/lib/server/payment/arca-types";

/**
 * Returns true only when ArCa reports a deposited payment or paid order status.
 */
export function isArcaPaymentSuccessful(statusResponse: ArcaOrderStatusExtendedResponse): boolean {
  const paymentState = statusResponse.paymentAmountInfo?.paymentState;
  if (paymentState === ARCA_PAYMENT_STATE_DEPOSITED) {
    return true;
  }

  return statusResponse.orderStatus === ARCA_ORDER_STATUS_PAID;
}
