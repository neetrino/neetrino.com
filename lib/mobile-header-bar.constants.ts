/**
 * Mobile site header bar — Figma `479:1416` (outer pill: logo + Menu).
 * Background a touch lighter than `rgba(40,43,103,0.38)` so the bar does not merge with saturated blue content.
 */
export const MOBILE_HEADER_BAR_SURFACE_CLASS =
  "rounded-full border border-white/[0.08] bg-[rgba(56,62,132,0.42)] backdrop-blur-md backdrop-saturate-150" as const;

export const MOBILE_HEADER_BAR_PADDING_CLASS = "px-6 py-3" as const;

/** Figma ~23.99px / 12px; Tailwind px-6 = 24px, py-3 = 12px */

export const MOBILE_HEADER_BAR_SCROLLED_ENHANCEMENT_CLASS =
  "border-white/12 shadow-lg shadow-black/25" as const;

/** Space below safe area — navbar sits slightly lower on mobile. */
export const MOBILE_HEADER_ROOT_TOP_PADDING_CLASS = "pt-4" as const;

/** Logo slot — Figma `479:1417` (~96×32). */
export const MOBILE_HEADER_LOGO_LINK_CLASS =
  "relative h-8 w-24 shrink-0 min-[360px]:h-9 min-[360px]:w-[118px] sm:h-9 sm:w-[140px]" as const;
