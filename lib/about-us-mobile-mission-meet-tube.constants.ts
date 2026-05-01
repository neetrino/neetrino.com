/**
 * Mobile “tube” Mission → bottom stats (stops before Meet our team) — Figma NEETRINO-WEB `479:1275`
 * (`Rectangle 17418`, width 128px, rounded capsule).
 */

/** Figma frame width (px). */
export const ABOUT_US_MOBILE_MISSION_MEET_TUBE_WIDTH_PX = 128;

/** Stacking: under section copy. */
export const ABOUT_US_MOBILE_MISSION_MEET_TUBE_Z_INDEX = 0;

/**
 * Tube **end** stack scale vs desktop `AboutUsFigmaBlock1a` nodes `335:908`–`335:913` (Bottom C/B/A).
 */
const ABOUT_US_MOBILE_MISSION_MEET_TUBE_END_STACK_SCALE = 0.42;

/** Scaled Bottom C/B frame — desktop `209.581×386`. */
export const ABOUT_US_MOBILE_MISSION_MEET_TUBE_BOTTOM_CB_FRAME_WIDTH_PX = Math.round(
  209.581 * ABOUT_US_MOBILE_MISSION_MEET_TUBE_END_STACK_SCALE,
);
export const ABOUT_US_MOBILE_MISSION_MEET_TUBE_BOTTOM_CB_FRAME_HEIGHT_PX = Math.round(
  386 * ABOUT_US_MOBILE_MISSION_MEET_TUBE_END_STACK_SCALE,
);

/** Bottom C — `inset-[-23.32%_-42.94%]` (Figma `335:908`). */
export const ABOUT_US_MOBILE_MISSION_MEET_TUBE_BOTTOM_C_OUTSET_Y_PCT = 23.32;
export const ABOUT_US_MOBILE_MISSION_MEET_TUBE_BOTTOM_C_OUTSET_X_PCT = 42.94;

/** Bottom B — `inset-[-15.54%_-28.63%]` (Figma `335:909`). */
export const ABOUT_US_MOBILE_MISSION_MEET_TUBE_BOTTOM_B_OUTSET_Y_PCT = 15.54;
export const ABOUT_US_MOBILE_MISSION_MEET_TUBE_BOTTOM_B_OUTSET_X_PCT = 28.63;

/** Scaled Bottom A — desktop `192.667×180` (`335:913`). */
export const ABOUT_US_MOBILE_MISSION_MEET_TUBE_BOTTOM_A_FRAME_WIDTH_PX = Math.round(
  192.667 * ABOUT_US_MOBILE_MISSION_MEET_TUBE_END_STACK_SCALE,
);
export const ABOUT_US_MOBILE_MISSION_MEET_TUBE_BOTTOM_A_FRAME_HEIGHT_PX = Math.round(
  180 * ABOUT_US_MOBILE_MISSION_MEET_TUBE_END_STACK_SCALE,
);

/** Bottom A — `inset-[-27.78%_-25.95%]`. */
export const ABOUT_US_MOBILE_MISSION_MEET_TUBE_BOTTOM_A_OUTSET_Y_PCT = 27.78;
export const ABOUT_US_MOBILE_MISSION_MEET_TUBE_BOTTOM_A_OUTSET_X_PCT = 25.95;

/** Above tube + content (`AboutUsMobileMissionMeetTubeBottom`). */
export const ABOUT_US_MOBILE_MISSION_MEET_TUBE_BOTTOM_Z_INDEX = 2;
