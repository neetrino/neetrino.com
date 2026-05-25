import "server-only";

export function generateOrderNumber(): string {
  const suffix = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `NTR-${Date.now()}-${suffix}`;
}
