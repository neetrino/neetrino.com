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
 * Keep in sync with `HeroStatWide` Tailwind: `w-[300px] h-[260px] -right-11 -bottom-6 scale-[1.38]`.
 */
export const MOBILE_HERO_STAT_WIDE_HAND = {
  widthPx: 300,
  heightPx: 260,
  offsetRightPx: 44,
  offsetBottomPx: 24,
  scale: 1.38,
} as const;
