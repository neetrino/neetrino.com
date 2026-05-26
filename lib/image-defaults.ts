/** Default quality for next/image (60–70 range per performance guidelines). */
export const DEFAULT_IMAGE_QUALITY = 65;

/** Hero / LCP imagery — still below 75 to avoid oversized transfers. */
export const HERO_IMAGE_QUALITY = 70;

/** Decorative full-bleed layers on ~1440px desktop layouts. */
export const SIZES_DESKTOP_MAX_1440 = "(max-width: 1440px) 100vw, 1440px";

export const SIZES_FULL_VIEWPORT = "100vw";

/**
 * Per route, mark at most one above-the-fold raster as `priority` (LCP).
 * Header logos and below-fold cards use `loading="eager"` or `lazy` without `priority`.
 */
export const LCP_PRIORITY_GUIDANCE =
  "Use priority on a single hero/LCP raster per viewport; avoid priority on header logos and below-fold grids." as const;
