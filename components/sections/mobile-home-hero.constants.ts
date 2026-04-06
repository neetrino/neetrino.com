/** Mobile home hero (Figma 241:821) — stat cards. */

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
 * Sync with `HeroStatWide`: `top-[42%] -translate-y-1/2`, `-right-[48px]`, `w-[310px] h-[328px]`.
 * Text column: literal `max-w-[56%]` in `HeroSection`.
 */
export const MOBILE_HERO_STAT_WIDE_HAND = {
  widthPx: 310,
  heightPx: 328,
  offsetRightPx: 48,
  anchorTopPercent: 42,
} as const;
