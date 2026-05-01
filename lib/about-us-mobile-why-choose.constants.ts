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

/** Palette tile — Figma `479:1285` sits beside right-aligned copy. */
export const ABOUT_MOBILE_WHY_CHOOSE_PALETTE_FRAME_CLASS =
  "relative h-[min(52vw,210px)] w-[min(58vw,240px)] shrink-0";

/** Gap between reflected title stack and first feature row. */
export const ABOUT_MOBILE_WHY_CHOOSE_TITLE_TO_ROWS_MARGIN_TOP_CLASS = "mt-8";

/** Vertical rhythm between zigzag rows. */
export const ABOUT_MOBILE_WHY_CHOOSE_ROW_GAP_CLASS = "gap-10";

/** Blur reflection — same token as Meet our team (`MeetOurTeamHeading`). */
export const ABOUT_MOBILE_WHY_CHOOSE_REFLECTION_BLUR_OFFSET_CLASS = "pt-[5px]";

/** Figma `479:1289` — blurred mirror line under sharp title (`blur-[8px]`, `opacity-50`). */
export const ABOUT_MOBILE_WHY_CHOOSE_REFLECTION_FIGMA_BLUR_OPACITY_CLASS = "blur-[8px] opacity-50";
