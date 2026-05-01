/**
 * Mobile About hero — Figma NEETRINO-WEB `479:1237`–`479:1251` (inside frame `479:1144`).
 */

/** Figma `479:1236` — `13 B` frame size in design px. */
export const ABOUT_US_MOBILE_HERO_ROBOT_DESIGN_WIDTH_PX = 655;
export const ABOUT_US_MOBILE_HERO_ROBOT_DESIGN_HEIGHT_PX = 723;

/**
 * Inner raster crop vs frame — Figma `479:1236` (`overflow-hidden` + positioned `img`).
 */
export const ABOUT_US_MOBILE_HERO_ROBOT_IMAGE_WIDTH_PCT = 100.03;
export const ABOUT_US_MOBILE_HERO_ROBOT_IMAGE_HEIGHT_PCT = 160.83;
export const ABOUT_US_MOBILE_HERO_ROBOT_IMAGE_LEFT_PCT = -0.02;
export const ABOUT_US_MOBILE_HERO_ROBOT_IMAGE_TOP_PCT = -40.09;

/** Nudge the hero robot frame toward the right (screen edge). */
export const ABOUT_US_MOBILE_HERO_ROBOT_TRANSLATE_X_PX = 136;

/** Figma headline `tracking-[1.2691px]` on ~46px lines. */
export const ABOUT_US_MOBILE_HERO_HEADLINE_LETTER_SPACING_PX = 1.27;

/** Gap between stacked headline lines (`479:1237` ~7.993px). */
export const ABOUT_US_MOBILE_HERO_HEADLINE_STACK_GAP_PX = 8;

/** Blur strip behind stat value (Figma `479:1248`–`479:1250`). */
export const ABOUT_US_MOBILE_HERO_STAT_GLOW_BLUR_PX = 8;
export const ABOUT_US_MOBILE_HERO_STAT_GLOW_OPACITY = 0.3;

/**
 * Shared glass tile on mobile About (hero stats, intro) — matches mission tube `ring-white/[0.06]`.
 */
export const ABOUT_US_MOBILE_ABOUT_GLASS_TILE_CLASS =
  "rounded-2xl bg-[rgba(255,255,255,0.04)] ring-1 ring-white/[0.06] backdrop-blur-sm" as const;
