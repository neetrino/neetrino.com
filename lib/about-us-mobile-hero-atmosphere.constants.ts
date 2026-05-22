import { assetUrl } from "@/lib/assets";

/**
 * Mobile About hero atmosphere — Figma NEETRINO-WEB (back → front):
 * - `479:1172` Rectangle 17417
 * - `479:1169` Vector 27398 (`mix-blend-plus-lighter`)
 * - `479:1234` Ellipse 27
 */

export const ABOUT_US_MOBILE_HERO_ATMOSPHERE_BASE_RECT_SVG_SRC = assetUrl(
  "images/about-us/mobile-hero-atmosphere-rectangle-17417.svg",
);

export const ABOUT_US_MOBILE_HERO_ATMOSPHERE_LOWER_VECTOR_SVG_SRC = assetUrl(
  "images/about-us/mobile-hero-atmosphere-vector-27398.svg",
);

export const ABOUT_US_MOBILE_HERO_ATMOSPHERE_ELLIPSE_SVG_SRC = assetUrl(
  "images/about-us/mobile-hero-atmosphere-ellipse-27.svg",
);

/**
 * Rectangle `479:1172` — lowest wash (~y≈405 in frame); SVG blur ~102.
 */
export const ABOUT_US_MOBILE_HERO_ATMOSPHERE_BASE_RECT_SLOT_CLASS =
  "pointer-events-none absolute left-1/2 top-[min(15rem,42vw)] z-[0] h-[min(24rem,78vw)] w-[min(360vw,170rem)] max-w-none -translate-x-[56%] sm:top-[17rem]" as const;

/** Figma export wrapper (`479:1172`). */
export const ABOUT_US_MOBILE_HERO_ATMOSPHERE_BASE_RECT_INSET_WRAPPER_CLASS =
  "absolute inset-[-50.95%_-15.66%_-51.42%_-15.66%]" as const;

/**
 * Vector `479:1169` — above base rect; wide band (~y≈120). `mix-blend-plus-lighter` on slot.
 */
export const ABOUT_US_MOBILE_HERO_ATMOSPHERE_LOWER_SLOT_CLASS =
  "pointer-events-none absolute left-1/2 top-[min(5.5rem,14vw)] z-[1] h-[min(28rem,92vw)] w-[min(340vw,160rem)] max-w-none -translate-x-[54%] mix-blend-plus-lighter sm:top-[6.5rem]" as const;

/** Figma export — expands asset past slot (`479:1169`). */
export const ABOUT_US_MOBILE_HERO_ATMOSPHERE_LOWER_INSET_WRAPPER_CLASS =
  "absolute inset-[-20.42%_-6.75%]" as const;

/**
 * Ellipse `479:1234` — above Vector; behind robot (`z-[10]`) and copy (`z-[100]`).
 * SVG includes `feGaussianBlur` (~115).
 */
export const ABOUT_US_MOBILE_HERO_ATMOSPHERE_UPPER_SLOT_CLASS =
  "pointer-events-none absolute left-1/2 top-0 z-[2] h-[min(38rem,130vw)] w-[min(200vw,90rem)] max-w-none -translate-x-1/2 -translate-y-[38%]" as const;

/** Figma export wrapper — expands ellipse past slot. */
export const ABOUT_US_MOBILE_HERO_ATMOSPHERE_UPPER_INSET_WRAPPER_CLASS =
  "absolute inset-[-36.86%_-33.19%]" as const;
