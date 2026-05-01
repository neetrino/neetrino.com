/**
 * World map frame in `CountriesSection` (`AboutUsMobile`, &lt; `lg`).
 *
 * The mission **tube** height follows the in-flow column. Only **`margin-top`** on this
 * frame adds to that height — do **not** use large `mt-*` here to “lower” the map.
 *
 * To move the map **down** without lengthening the tube, change only
 * **`ABOUT_MOBILE_COUNTRIES_MAP_VISUAL_TRANSLATE_Y_CLASS`** (`translate-y-*`).
 */

/** Small gap after the heading; keep modest — larger values stretch the tube. */
export const ABOUT_MOBILE_COUNTRIES_MAP_FLOW_MARGIN_TOP_CLASS = "mt-6";

/** Visual nudge down; does not affect layout height or the tube. */
export const ABOUT_MOBILE_COUNTRIES_MAP_VISUAL_TRANSLATE_Y_CLASS = "translate-y-22";
