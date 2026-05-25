/**
 * Converts AMD major units to ArCa minor units (AMD × 100).
 */
export function amountAmdToMinorUnits(amountAmd: number): number {
  if (!Number.isFinite(amountAmd) || amountAmd <= 0) {
    throw new Error("amountAmd must be a positive finite number.");
  }

  const minor = Math.round(amountAmd * 100);
  if (minor <= 0) {
    throw new Error("amountAmd is too small after conversion to minor units.");
  }

  return minor;
}
