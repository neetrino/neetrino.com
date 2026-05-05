/** Mobile home hero (Figma 241:821) — stat cards. Blue grid strip matches desktop `NeetrinoHomeSegment1` (`10:426`, `FIGMA_ASSETS.imgRectangle17399`). */

/**
 * Minimum inset of the megatrox title from the content edge so “NEET/RIN/O” never touches
 * the viewport — pairs with `left-[max(<this>px,calc(50%-191px))]` in `HeroSection`.
 * Aligns with section horizontal rhythm (`px-6`, body copy `left-6`).
 */
export const MOBILE_HERO_TITLE_MIN_INSET_PX = 24;

export const MOBILE_HERO_STATS_TOP = [
  {
    value: "8+",
    labelLineKeys: ["home.hero.stats.years", "home.hero.stats.experience"],
    bg: "bg-[#ff7500]",
    text: "text-white",
  },
  {
    value: "97+",
    labelLineKeys: ["home.hero.stats.satisfiedClients"],
    bg: "bg-white",
    text: "text-[#0d266c]",
  },
] as const;

export const MOBILE_HERO_STAT_WIDE = {
  value: "450+",
  labelKey: "home.hero.stats.creations",
  bg: "bg-[#473dff]",
  text: "text-[#fffcfc]",
} as const;

/** “450+” numeral — Figma frame uses 56px; slightly reduced on narrow viewports for balance. */
export const MOBILE_HERO_STAT_WIDE_VALUE_NUMERAL_CLASS = "text-[52px] font-black leading-9";

/**
 * Robot-hand overlay on the 450+ card (mobile hero only).
 * Vertical: `HeroStatWide` uses `top-[87%]` / `-translate-y-1/2` (narrow: `top-[85%]`).
 * Sizes: `w-[271px] h-[287px]` (narrow: `235×252`). Horizontal: `getMobileHomeHeroHandSlotRightCss()` so the hand
 * aligns to the viewport right; larger `styleRightPullPx` moves the sprite further right.
 * Purple card: full width of the `px-6` column (`w-full`), symmetric (no negative margin bleed).
 * Text column: literal `max-w-[56%]` in `HeroSection`, optional `translate(-left,-up)` via
 * `MOBILE_HERO_STAT_WIDE_TEXT_NUDGE_*`.
 */
export const MOBILE_HERO_STAT_WIDE_TEXT_NUDGE_LEFT_PX = 8;
export const MOBILE_HERO_STAT_WIDE_TEXT_NUDGE_UP_PX = 8;

export const MOBILE_HERO_STAT_WIDE_HAND = {
  widthPx: 271,
  heightPx: 287,
  anchorTopPercent: 87,
  /** Subtracted inside `right: calc(... - X)` — higher → hand sits slightly further right on screen. */
  styleRightPullPx: 24,
} as const;

/** Same `right` as robot-hand slot in `HeroStatWide` / `HeroStatHandAtmosphereLayer`. */
export function getMobileHomeHeroHandSlotRightCss(): string {
  return `calc(clamp(-999px, calc((393px - 100vw) / 2), 0px) - ${MOBILE_HERO_STAT_WIDE_HAND.styleRightPullPx}px)`;
}

/**
 * Top edge of the stats column slice — must match `HeroSection` `pt-[88px]` + `min-h-[853px]` before
 * `HeroStatsRegionWithGrid`.
 */
export const MOBILE_HERO_STAT_HAND_ATMOSPHERE_STATS_COLUMN_TOP_CLASS =
  "top-[calc(88px+853px)]" as const;

/**
 * Vertical anchor (px) inside that slice for `241:824` — matches former `top-[87%]` on the purple card
 * (stats row + gaps + ~87% of card body); tune if copy wraps.
 */
export const MOBILE_HERO_STAT_HAND_ATMOSPHERE_ANCHOR_OFFSET_Y_PX = 362 as const;

/** Shared absolute box for hand sprite — same `right` calc as glow; glow uses `HeroStatHandAtmosphereLayer`. */
export const MOBILE_HERO_STAT_WIDE_HAND_SLOT_LAYOUT_CLASS =
  "pointer-events-none absolute top-[87%] h-[287px] w-[271px] -translate-y-1/2 max-[380px]:top-[85%] max-[380px]:h-[252px] max-[380px]:w-[235px]" as const;
