/**
 * Mobile Mission tube orange cube — Figma `479:1274` (`Cone/Default`).
 * Full vertical band: top of tube → bottom + bleed runway; scroll drives linear progress, light blur.
 */

import { ABOUT_US_MOBILE_MISSION_MEET_TUBE_EXTEND_BELOW_PX } from "@/lib/about-us-mobile-mission-meet-tube.constants";

const ABOUT_US_DESKTOP_CONE_WRAPPER_PX = 191.206;
const ABOUT_US_DESKTOP_CONE_INNER_PX = 147.503;

/**
 * Wrapper size on narrow tube (stash used 76px vs desktop `191.206`).
 */
export const ABOUT_US_MOBILE_STICKY_CONE_WRAPPER_PX = 76;

export const ABOUT_US_MOBILE_STICKY_CONE_INNER_PX = Math.round(
  (ABOUT_US_DESKTOP_CONE_INNER_PX / ABOUT_US_DESKTOP_CONE_WRAPPER_PX) *
    ABOUT_US_MOBILE_STICKY_CONE_WRAPPER_PX,
);

/** Min `top` inside the mission wrapper — 10px below the tube top (visual nudge). */
export const ABOUT_US_MOBILE_STICKY_CONE_SCROLL_TOP_INSET_PX = 35;

/** Extra clearance subtracted at max travel (`rawFinalTop` in stash was `trackH - wrapper - this + runway`). */
export const ABOUT_US_MOBILE_STICKY_CONE_SCROLL_BOTTOM_INSET_PX = 0;

/**
 * Max-scroll `top` bonus — tube draws past in-flow bottom by `EXTEND_BELOW`; the cube follows that runway.
 */
export const ABOUT_US_MOBILE_STICKY_CONE_SCROLL_BOTTOM_RUNWAY_PX =
  ABOUT_US_MOBILE_MISSION_MEET_TUBE_EXTEND_BELOW_PX;

/** Light glow on the cube wrapper (stash). */
export const ABOUT_US_MOBILE_STICKY_CONE_BLUR_CLASS = "blur-[3px]" as const;

/** Figma / desktop tilt. */
export const ABOUT_US_MOBILE_STICKY_CONE_ROTATE_DEG = 21.44;

/** Above tube (`0`), below tube-end stack (`2`) and section copy (`z-10`). */
export const ABOUT_US_MOBILE_STICKY_CONE_Z_INDEX = 1;
