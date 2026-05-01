/**
 * Mobile “Why choose us” — NEETRINO-WEB ~`479:1287`–`479:1295` (inside panel `479:1284`).
 */

/** Figma `479:1284` panel silhouette (`viewBox="0 0 417 865"`). */
export const ABOUT_MOBILE_WHY_CHOOSE_PANEL_PATH_D =
  "M417 120.313C417 89.9374 392.376 65.3131 362 65.3131H347.764C329.469 65.3131 312.371 56.2159 302.15 41.0426L290.85 24.2704C280.629 9.09721 263.531 0 245.236 0H55C24.6243 0 0 24.6243 0 55V810C0 840.376 24.6243 865 55 865H362C392.376 865 417 840.376 417 810V120.313Z";

/**
 * Optional CSS transform on the frosted panel wrapper. Empty = native path (high top edge on the **left**),
 * matching mobile Figma reference `479:1284`.
 */
export const ABOUT_MOBILE_WHY_CHOOSE_PANEL_FLIP_CLASS = "";

/**
 * Slight bleed beyond `.section-container` so panel does not hard-stick to viewport edges.
 * Silhouette comes from SVG, not `rounded-*`.
 */
export const ABOUT_MOBILE_WHY_CHOOSE_PANEL_OUTER_CLASS =
  "relative isolate bg-transparent -mx-2 w-[calc(100%+1rem)] overflow-hidden md:-mx-3 md:w-[calc(100%+1.5rem)]";

/** Inner horizontal padding — restores alignment with sibling sections after bleed. */
export const ABOUT_MOBILE_WHY_CHOOSE_PANEL_INNER_PAD_CLASS = "px-4 md:px-6";

/** 3D feature icons beside copy rows. */
export const ABOUT_MOBILE_WHY_CHOOSE_SIDE_ICON_FRAME_CLASS =
  "relative h-[min(36vw,150px)] w-[min(36vw,150px)] shrink-0";

/**
 * Rocket frame (feature 1): `width: 292.049px`, `height: 290.751px`, `transform: rotate(-1.366deg)`.
 * Slight `-translate-x` / `-translate-y` nudge the frame vs copy.
 */
export const ABOUT_MOBILE_WHY_CHOOSE_ROCKET_ICON_FRAME_CLASS =
  "relative h-[290.751px] w-[292.049px] max-w-full shrink-0 -translate-x-10 -translate-y-10 -rotate-[1.366deg]";

/** Shift rocket + feature-1 copy 10px left (LTR) as one column. */
export const ABOUT_MOBILE_WHY_CHOOSE_ROCKET_ROW_NUDGE_LEFT_CLASS = "-translate-x-[10px]";

/** Tighter stack under the rocket than other feature rows (`gap-3 sm:gap-4`). */
export const ABOUT_MOBILE_WHY_CHOOSE_ROCKET_ROW_STACK_GAP_CLASS = "gap-0 sm:gap-1";

/** Nudge feature-1 copy up toward the rocket (large frame + `object-contain` leaves footroom). */
export const ABOUT_MOBILE_WHY_CHOOSE_ROCKET_COPY_PULL_UP_CLASS = "-mt-25 sm:-mt-3";

/** Shift feature-1 copy toward the trailing edge in LTR (was requested as right nudge). */
export const ABOUT_MOBILE_WHY_CHOOSE_ROCKET_COPY_NUDGE_RIGHT_CLASS = "pl-[20px]";

/** Palette tile — Figma `479:1285` sits beside right-aligned copy. */
export const ABOUT_MOBILE_WHY_CHOOSE_PALETTE_FRAME_CLASS =
  "relative h-[min(52vw,210px)] w-[min(58vw,240px)] shrink-0";

/** Tighter stack between palette tile and feature-2 copy (rocket row uses the same rhythm). */
export const ABOUT_MOBILE_WHY_CHOOSE_PALETTE_ROW_STACK_GAP_CLASS = "gap-0 sm:gap-1";

/** Pull palette + feature-2 copy up toward the rocket block. */
export const ABOUT_MOBILE_WHY_CHOOSE_PALETTE_ROW_PULL_UP_CLASS = "-mt-38 sm:-mt-8";

/** Shift palette + feature-2 copy toward the trailing edge (LTR: right). */
export const ABOUT_MOBILE_WHY_CHOOSE_PALETTE_ROW_NUDGE_RIGHT_CLASS = "translate-x-[35px]";

/** Shift feature-2 copy left (LTR) while the palette tile keeps row nudge. */
export const ABOUT_MOBILE_WHY_CHOOSE_PALETTE_COPY_NUDGE_LEFT_CLASS = "-translate-x-[35px]";

/** Gap between reflected title stack and first feature row. */
export const ABOUT_MOBILE_WHY_CHOOSE_TITLE_TO_ROWS_MARGIN_TOP_CLASS = "mt-8";

/** Vertical rhythm between zigzag rows. */
export const ABOUT_MOBILE_WHY_CHOOSE_ROW_GAP_CLASS = "gap-10";

/** Blur reflection — same token as Meet our team (`MeetOurTeamHeading`). */
export const ABOUT_MOBILE_WHY_CHOOSE_REFLECTION_BLUR_OFFSET_CLASS = "pt-[5px]";

/** Figma `479:1289` — blurred mirror line under sharp title (`blur-[8px]`, `opacity-50`). */
export const ABOUT_MOBILE_WHY_CHOOSE_REFLECTION_FIGMA_BLUR_OPACITY_CLASS = "blur-[8px] opacity-50";
