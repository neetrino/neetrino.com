import { describe, expect, it } from "vitest";
import { isArcaPaymentSuccessful } from "@/lib/server/payment/payment-status";

describe("isArcaPaymentSuccessful", () => {
  it("returns true when paymentState is DEPOSITED", () => {
    expect(
      isArcaPaymentSuccessful({
        paymentAmountInfo: { paymentState: "DEPOSITED" },
        orderStatus: 0,
      }),
    ).toBe(true);
  });

  it("returns true when orderStatus is 2", () => {
    expect(isArcaPaymentSuccessful({ orderStatus: 2 })).toBe(true);
  });

  it("returns false for pending states", () => {
    expect(
      isArcaPaymentSuccessful({
        paymentAmountInfo: { paymentState: "CREATED" },
        orderStatus: 0,
      }),
    ).toBe(false);
  });
});
