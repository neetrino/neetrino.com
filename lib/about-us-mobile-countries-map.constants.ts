import { assetUrl } from "@/lib/assets";

/**
 * World map frame in `CountriesSection` (`AboutUsMobile`, &lt; `lg`).
 *
 * The mission **tube** height follows the in-flow column. Only **`margin-top`** on this
 * frame adds to that height — do **not** use large `mt-*` here to “lower” the map.
 *
 * To move the map **down** without lengthening the tube, change only
 * **`ABOUT_MOBILE_COUNTRIES_MAP_VISUAL_TRANSLATE_Y_CLASS`** (`translate-y-*`).
 */

/** Section root — atmosphere `z-0` (in flow first), foreground wrapper `ABOUT_MOBILE_COUNTRIES_SECTION_FOREGROUND_STACK_CLASS`. */
export const ABOUT_MOBILE_COUNTRIES_SECTION_CLASS =
  "relative isolate overflow-visible pt-6 pb-10" as const;

/** Heading + map — always above `AboutUsMobileCountriesHeadingAtmosphere`. */
export const ABOUT_MOBILE_COUNTRIES_SECTION_FOREGROUND_STACK_CLASS = "relative z-[1]" as const;

/** Figma `479:1235` Ellipse 29 — left wash behind the reflected countries title. */
export const ABOUT_MOBILE_COUNTRIES_ATMOSPHERE_ELLIPSE_SVG_SRC = assetUrl(
  "images/about-us/mobile-countries-atmosphere-ellipse-29.svg",
);

/**
 * Decorative wash — first layer in `ABOUT_MOBILE_COUNTRIES_SECTION_CLASS` (`z-0`); heading + map sit in
 * `ABOUT_MOBILE_COUNTRIES_SECTION_FOREGROUND_STACK_CLASS`. Anchored start (LTR: left).
 * Inset expansion matches hero / mission–vision ellipse exports.
 */
export const ABOUT_MOBILE_COUNTRIES_ATMOSPHERE_ELLIPSE_SLOT_CLASS =
  "pointer-events-none absolute left-0 top-0 z-0 h-[min(52rem,138vw)] w-[min(168vw,92rem)] max-w-none -translate-x-[40%] -translate-y-[52%]" as const;

/** Small gap after the heading; keep modest — larger values stretch the tube. */
export const ABOUT_MOBILE_COUNTRIES_MAP_FLOW_MARGIN_TOP_CLASS = "mt-6";

/** Visual nudge down; does not affect layout height or the tube. */
export const ABOUT_MOBILE_COUNTRIES_MAP_VISUAL_TRANSLATE_Y_CLASS = "translate-y-22";
