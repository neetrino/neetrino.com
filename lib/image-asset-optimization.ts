/**
 * Whether a CDN/marketing asset URL points at an SVG (skip Next image optimizer).
 */
export function isSvgAssetSrc(src: string): boolean {
  const normalized = src.split("?")[0]?.toLowerCase() ?? "";
  return normalized.endsWith(".svg");
}

/**
 * Next.js `Image` `unoptimized` — SVG only; raster assets should use the optimizer + `sizes`.
 */
export function imageUnoptimizedForSrc(src: string): boolean {
  return isSvgAssetSrc(src);
}
