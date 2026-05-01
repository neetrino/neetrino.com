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

/** Horizontal mirror on the feature `Image` for lightning + astronaut rows. */
export const ABOUT_MOBILE_WHY_CHOOSE_FEATURE_ICON_MIRROR_X_CLASS = "-scale-x-100";

/**
 * Astronaut / support row (feature 4): larger head read than `SIDE_ICON`, lifted with copy.
 * `object-top` on the image pairs with `object-cover` to keep the helmet in frame.
 */
export const ABOUT_MOBILE_WHY_CHOOSE_ASTRONAUT_ICON_FRAME_CLASS =
  "relative h-[min(52vw,220px)] w-[min(52vw,220px)] max-w-full shrink-0 -translate-y-30 sm:-translate-y-4";

/** Pull astronaut + feature-4 copy higher toward the lightning block. */
export const ABOUT_MOBILE_WHY_CHOOSE_ASTRONAUT_ROW_PULL_UP_CLASS = "-mt-20 sm:-mt-12";

/** Shift astronaut + feature-4 copy toward the trailing edge (LTR: right). */
export const ABOUT_MOBILE_WHY_CHOOSE_ASTRONAUT_ROW_NUDGE_RIGHT_CLASS =
  "translate-x-[30px] sm:translate-x-[16px]";

/** Tight stack under the astronaut art. */
export const ABOUT_MOBILE_WHY_CHOOSE_ASTRONAUT_ROW_STACK_GAP_CLASS = "gap-0 sm:gap-1";

/** Tuck feature-4 copy higher under the enlarged astronaut frame. */
export const ABOUT_MOBILE_WHY_CHOOSE_ASTRONAUT_COPY_PULL_UP_CLASS = "-mt-25 sm:-mt-6";

/** Shift feature-4 copy left (LTR) under the right-aligned astronaut art. */
export const ABOUT_MOBILE_WHY_CHOOSE_ASTRONAUT_COPY_NUDGE_LEFT_CLASS =
  "-translate-x-[32px] sm:-translate-x-[43px]";

/**
 * Lightning / speed row (feature 3): larger than `SIDE_ICON`.
 * Horizontal nudge applies **only** to the art frame, not feature-3 copy.
 */
export const ABOUT_MOBILE_WHY_CHOOSE_LIGHTNING_ICON_FRAME_CLASS =
  "relative h-[min(72vw,300px)] w-[min(72vw,300px)] max-w-full shrink-0 -translate-x-16 -translate-y-10 sm:-translate-x-8 sm:-translate-y-5 md:-translate-x-10";

/** Pull lightning + copy a bit closer to the palette row above. */
export const ABOUT_MOBILE_WHY_CHOOSE_LIGHTNING_ROW_PULL_UP_CLASS = "-mt-18 sm:-mt-12";

/** Tight stack under the lightning art (matches rocket / palette rhythm). */
export const ABOUT_MOBILE_WHY_CHOOSE_LIGHTNING_ROW_STACK_GAP_CLASS = "gap-0 sm:gap-1";

/** Tuck feature-3 copy higher under the enlarged lightning frame. */
export const ABOUT_MOBILE_WHY_CHOOSE_LIGHTNING_COPY_PULL_UP_CLASS = "-mt-24 sm:-mt-8";

/** Shift feature-3 copy right in LTR (lightning art sits left). */
export const ABOUT_MOBILE_WHY_CHOOSE_LIGHTNING_COPY_NUDGE_RIGHT_CLASS = "pl-[16px] sm:pl-[20px]";

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

/** Vertical offset for palette + feature-2 row: positive pushes block lower under the rocket. */
export const ABOUT_MOBILE_WHY_CHOOSE_PALETTE_ROW_PULL_UP_CLASS = "-mt-28 sm:mt-8";

/** Shift palette + feature-2 copy toward the trailing edge (LTR: right). */
export const ABOUT_MOBILE_WHY_CHOOSE_PALETTE_ROW_NUDGE_RIGHT_CLASS = "translate-x-[35px]";

/** Shift feature-2 copy left (LTR) while the palette tile keeps row nudge. */
export const ABOUT_MOBILE_WHY_CHOOSE_PALETTE_COPY_NUDGE_LEFT_CLASS = "-translate-x-[35px]";

/** Nudge feature-2 copy slightly up toward the palette tile. */
export const ABOUT_MOBILE_WHY_CHOOSE_PALETTE_COPY_PULL_UP_CLASS = "-mt-3 sm:-mt-3";

/** Gap between reflected title stack and first feature row. */
export const ABOUT_MOBILE_WHY_CHOOSE_TITLE_TO_ROWS_MARGIN_TOP_CLASS = "mt-8";

/** Vertical rhythm between zigzag rows. */
export const ABOUT_MOBILE_WHY_CHOOSE_ROW_GAP_CLASS = "gap-10";

/** Blur reflection — same token as Meet our team (`MeetOurTeamHeading`). */
export const ABOUT_MOBILE_WHY_CHOOSE_REFLECTION_BLUR_OFFSET_CLASS = "pt-[5px]";

/** Figma `479:1289` — blurred mirror line under sharp title (`blur-[8px]`, `opacity-50`). */
export const ABOUT_MOBILE_WHY_CHOOSE_REFLECTION_FIGMA_BLUR_OPACITY_CLASS = "blur-[8px] opacity-50";
