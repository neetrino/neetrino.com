/**
 * Mobile About — bottom stats row (`AboutUsMobile` `BottomStatsSection`), `bg-clip-text` value fill.
 * Glow: blurred duplicate text behind the sharp layer (see `BottomStatsSection` grid).
 */

/** `380+` active users — `linear-gradient(90deg, #473DFF 0%, #6B5FFF 100%)`. */
export const ABOUT_MOBILE_BOTTOM_STAT_VALUE_380_PLUS_GRADIENT =
  "linear-gradient(90deg, #473DFF 0%, #6B5FFF 100%)";

/** Solid fill for the **backdrop** blur layer (sharp front keeps full gradient). */
const ABOUT_MOBILE_BOTTOM_STAT_GLOW_BACKDROP_TEXT_CLASS_BY_VALUE: Readonly<Record<string, string>> =
  {
    "380+": "text-[#6B5FFF]",
    "400+": "text-[#ff7500]",
    "25+": "text-[#ffe4cc]",
  };

export function aboutMobileBottomStatGlowBackdropTextClass(value: string): string {
  return ABOUT_MOBILE_BOTTOM_STAT_GLOW_BACKDROP_TEXT_CLASS_BY_VALUE[value] ?? "text-white/70";
}
