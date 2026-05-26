export type ParsedStatValue = {
  readonly prefix: string;
  readonly end: number;
  readonly suffix: string;
  readonly decimals: number;
};

/**
 * Splits display strings like `8+`, `97%`, `450+` into animatable number + affixes.
 */
export function parseStatValue(value: string): ParsedStatValue {
  const trimmed = value.trim();
  const match = trimmed.match(/^([^0-9]*)(\d+(?:\.\d+)?)(.*)$/);

  if (!match) {
    return { prefix: "", end: 0, suffix: trimmed, decimals: 0 };
  }

  const [, prefix = "", numeric = "0", suffix = ""] = match;
  const end = Number(numeric);
  const fraction = numeric.split(".")[1];
  const decimals = fraction ? fraction.length : 0;

  return { prefix, end, suffix, decimals };
}

/** Formats a partial count for display (keeps `+`, `%`, etc.). */
export function formatStatValue(current: number, parsed: ParsedStatValue): string {
  const rounded =
    parsed.decimals > 0 ? current.toFixed(parsed.decimals) : String(Math.round(current));
  return `${parsed.prefix}${rounded}${parsed.suffix}`;
}
