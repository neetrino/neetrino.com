/** Mobile home hero (Figma 241:821) — stat cards. */

/**
 * Minimum inset of the megatrox title from the content edge so “NEET/RIN/O” never touches
 * the viewport — pairs with `left-[max(<this>px,calc(50%-191px))]` in `HeroSection`.
 * Aligns with section horizontal rhythm (`px-6`, body copy `left-6`).
 */
export const MOBILE_HERO_TITLE_MIN_INSET_PX = 24;

export const MOBILE_HERO_STATS_TOP = [
  {
    value: "8+",
    labelLines: ["Years of", "experience"] as const,
    bg: "bg-[#ff7500]",
    text: "text-white",
  },
  {
    value: "97+",
    labelLines: ["Satisfied clients"] as const,
    bg: "bg-white",
    text: "text-[#0d266c]",
  },
] as const;

export const MOBILE_HERO_STAT_WIDE = {
  value: "450+",
  label: "Creations",
  bg: "bg-[#473dff]",
  text: "text-[#fffcfc]",
} as const;

/**
 * Robot-hand overlay on the 450+ card (mobile hero only).
 * Vertical: `HeroStatWide` uses `top-[87%]` / `-translate-y-1/2` (narrow: `top-[85%]`).
 * Sizes: `w-[271px] h-[287px]` (narrow: `235×252`). Horizontal: `style.right` in `HeroSection`
 * uses `calc(clamp(-999px, (393px - 100vw) / 2, 0px) - 12px)` so the hand aligns to the
 * real viewport right edge, not only the centered 393px column.
 * Text column: literal `max-w-[56%]` in `HeroSection`.
 */
export const MOBILE_HERO_STAT_WIDE_HAND = {
  widthPx: 271,
  heightPx: 287,
  offsetRightPx: 48,
  anchorTopPercent: 87,
} as const;
