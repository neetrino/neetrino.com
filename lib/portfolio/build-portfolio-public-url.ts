import { ASSETS_URL } from "@/lib/assets";

/**
 * Public CDN URL for an R2 object key (same host as marketing assets).
 */
export function buildPortfolioPublicUrl(objectKey: string): string {
  const base = ASSETS_URL.replace(/\/$/, "");
  const key = objectKey.replace(/^\//, "");
  return `${base}/${key}`;
}
