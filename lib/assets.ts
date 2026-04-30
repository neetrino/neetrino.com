/** Public CDN base for raster/SVG marketing assets (Cloudflare R2). Not from env — single deploy-time source of truth. */
export const ASSETS_URL = "https://cdn.neetrino.com";

/**
 * Builds an absolute asset URL under {@link ASSETS_URL}.
 * @param path - Path after the host, with or without a leading slash (e.g. `figma-assets/x.webp` or `/images/a.webp`).
 */
export function assetUrl(path: string): string {
  const cleanBase = ASSETS_URL.replace(/\/$/, "");
  const cleanPath = path.replace(/^\//, "");
  return `${cleanBase}/${cleanPath}`;
}
