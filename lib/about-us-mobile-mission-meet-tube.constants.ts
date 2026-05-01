/**
 * Mobile “tube” Mission → bottom stats (stops before Meet our team) — Figma NEETRINO-WEB `479:1275`
 * (`Rectangle 17418`: Figma width **128px** — rendered a touch wider on mobile, height **2190px**, radius **151px**).
 */

/** Max tube width (px) on mobile — wider than Figma 128 for presence on small screens. */
export const ABOUT_US_MOBILE_MISSION_MEET_TUBE_WIDTH_PX = 172;

/** Fluid lower bound inside `min(WIDTH_PX, max(rem, vw))` (`AboutUsMobileMissionMeetTube`). */
export const ABOUT_US_MOBILE_MISSION_MEET_TUBE_WIDTH_FLUID_MIN_REM = 3.85;

/** Fluid vw segment for narrow viewports. */
export const ABOUT_US_MOBILE_MISSION_MEET_TUBE_WIDTH_FLUID_VW = 24;

/**
 * Tube-end glow stack — slightly wider than the capsule (`AboutUsMobileMissionMeetTubeBottom`).
 */
export const ABOUT_US_MOBILE_MISSION_MEET_TUBE_BOTTOM_MAX_WIDTH_PX = 260;
export const ABOUT_US_MOBILE_MISSION_MEET_TUBE_BOTTOM_MAX_WIDTH_VW = 66;

/** Figma `479:1275` corner radius (MCP `rounded-[151px]`). */
export const ABOUT_US_MOBILE_MISSION_MEET_TUBE_BORDER_RADIUS_PX = 151;

/**
 * Capsule extends this many pixels **below** the mission stack (negative `bottom` inset).
 * Lengthens the tube on mobile without changing layout flow.
 */
export const ABOUT_US_MOBILE_MISSION_MEET_TUBE_EXTEND_BELOW_PX = 160;

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
