const AMD_AMOUNT_FORMATTER = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 2,
  minimumFractionDigits: 0,
});

/**
 * Formats an AMD amount with thousands separators (e.g. 300000 → "300,000").
 * Omits trailing `.00` for whole numbers.
 */
export function formatMoneyAMD(amount: number | string): string {
  const numeric = typeof amount === "number" ? amount : Number(amount);
  if (!Number.isFinite(numeric)) {
    return String(amount);
  }
  return AMD_AMOUNT_FORMATTER.format(numeric);
}

/** Amount plus currency label (default AMD). */
export function formatMoneyAMDWithCurrency(amount: number | string, currency = "AMD"): string {
  return `${formatMoneyAMD(amount)} ${currency}`;
}
