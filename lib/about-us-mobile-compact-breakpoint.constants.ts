/**
 * `/about-us` mobile stack: split “compact phone” tuning vs legacy (last committed pre-tune) layout.
 *
 * - **≤ `ABOUT_US_MOBILE_COMPACT_MAX_WIDTH_PX`**: narrow-handset tweaks (e.g. ~360px Galaxy S8+ through ~740px).
 * - **≥ `ABOUT_US_MOBILE_LEGACY_MIN_WIDTH_PX`**: matches `HEAD` for mission/vision + intro body type (product intent ~741–844px phones;
 *   route still unmounts at `neetrino-layout-desktop` ~744px unless that breakpoint changes).
 */
export const ABOUT_US_MOBILE_COMPACT_MAX_WIDTH_PX = 740 as const;

export const ABOUT_US_MOBILE_LEGACY_MIN_WIDTH_PX = 741 as const;
