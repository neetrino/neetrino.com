/**
 * Mobile About hero robot (`479:1236`) — size, crop, and placement.
 * Edit this file to scale or move the robot; shell layout is `AboutUsMobileHeroRobot`.
 *
 * **Width:** `w-[min(99vw, …rem)]` — on viewports narrower than the `rem` cap, **width is ~`99vw`**
 * only, so raising the `rem` value does nothing until the screen is wide enough. Use
 * `ABOUT_US_MOBILE_HERO_ROBOT_VISUAL_SCALE` (or raise the `vw` share) to grow the robot on phones.
 */

/** Below hero copy stack (`z-[50]`); absolute overlay. */
export const ABOUT_US_MOBILE_HERO_ROBOT_ROOT_CLASS =
  "pointer-events-none absolute right-0 top-[-4px] z-[10]" as const;

/** Figma `479:1236` — `13 B` frame size in design px. */
export const ABOUT_US_MOBILE_HERO_ROBOT_DESIGN_WIDTH_PX = 655;
export const ABOUT_US_MOBILE_HERO_ROBOT_DESIGN_HEIGHT_PX = 723;

/**
 * Inner raster crop vs frame — Figma `479:1236` (`overflow-hidden` + positioned `img`).
 */
export const ABOUT_US_MOBILE_HERO_ROBOT_IMAGE_WIDTH_PCT = 100.03;
export const ABOUT_US_MOBILE_HERO_ROBOT_IMAGE_HEIGHT_PCT = 160.83;
export const ABOUT_US_MOBILE_HERO_ROBOT_IMAGE_LEFT_PCT = -0.02;
export const ABOUT_US_MOBILE_HERO_ROBOT_IMAGE_TOP_PCT = -40.09;

/** Frame offset in px (positive X = toward the right edge of the hero). */
export const ABOUT_US_MOBILE_HERO_ROBOT_TRANSLATE_X_PX = 256;
export const ABOUT_US_MOBILE_HERO_ROBOT_TRANSLATE_Y_PX = 0;

/**
 * Extra uniform scale (applied with `transform-origin: top right`). Works when width is vw-capped.
 */
export const ABOUT_US_MOBILE_HERO_ROBOT_VISUAL_SCALE = 1.3;

/**
 * Frame width (`aspect-ratio` box). Larger `rem` caps help on wide phones / `sm+`.
 */
export const ABOUT_US_MOBILE_HERO_ROBOT_FRAME_WIDTH_CLASS = "w-[min(102vw,50rem)]" as const;
export const ABOUT_US_MOBILE_HERO_ROBOT_FRAME_WIDTH_SM_CLASS = "sm:w-[min(102vw,54rem)]" as const;

/** Passed to `next/image` `sizes` for the hero robot raster. */
export const ABOUT_US_MOBILE_HERO_ROBOT_IMAGE_SIZES = "(max-width: 640px) 102vw, 54rem" as const;
