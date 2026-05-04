/**
 * Mobile About — mission / vision block (`AboutUsMobileMissionVisionSection`).
 */

/**
 * Mission column stacks above the vision atmosphere ellipse (it bleeds upward with negative `top`).
 * Vision column stays lower so glow does not paint over mission copy.
 */
export const ABOUT_MOBILE_MISSION_ARTICLE_STACK_CLASS = "relative z-[2]" as const;

/** Vision column — atmosphere `z-0`, copy wrapper uses `ABOUT_MOBILE_VISION_COLUMN_CONTENT_ABOVE_ATMOSPHERE_CLASS`. */
export const ABOUT_MOBILE_VISION_ARTICLE_STACK_CLASS = "relative isolate z-[1]" as const;

/** Keeps heading + body above in-column atmosphere (`z-0`). */
export const ABOUT_MOBILE_VISION_COLUMN_CONTENT_ABOVE_ATMOSPHERE_CLASS = "relative z-[1]" as const;

/** Nudge reflected “THE MISSION” title stack toward the trailing edge (LTR: right), `< sm` only. */
export const ABOUT_MOBILE_MISSION_HEADING_NUDGE_CLASS = "translate-x-[10px] sm:translate-x-0";

/** Move “THE MISSION” + body down together (`< sm`); reset at `sm` for the two-column row. */
export const ABOUT_MOBILE_MISSION_STACK_OFFSET_DOWN_CLASS = "mt-[100px] sm:mt-0";

/** Nudge reflected “THE VISION” title stack toward the start (LTR: left) by 12px; `< sm` only. */
export const ABOUT_MOBILE_VISION_HEADING_NUDGE_CLASS = "-translate-x-[12px] sm:translate-x-0";

/** Pull “THE VISION” + body up together; only this stack moves (mission / grid gap unchanged). */
export const ABOUT_MOBILE_VISION_STACK_OFFSET_UP_CLASS = "-mt-[270px]";

/** Space below reflected mission / vision title stacks before body copy. */
export const ABOUT_MOBILE_MISSION_VISION_BODY_MARGIN_TOP_CLASS = "mt-3 sm:mt-10";

/** Rag-right copy inside the mission body block. */
export const ABOUT_MOBILE_MISSION_BODY_TEXT_ALIGN_CLASS = "text-right";

/**
 * Narrow column, pinned to the **start** of the mission article (LTR: left).
 * With `text-right`, lines align to the block’s trailing edge — block sits on the left side.
 */
export const ABOUT_MOBILE_MISSION_BODY_PLACEMENT_CLASS =
  "-ms-25 me-auto w-full max-w-[min(100%,17.5rem)] sm:max-w-sm";

/**
 * Vision body — same width band as mission, pinned to the **end** of the article (LTR: right).
 * `text-left` keeps lines rag-right at the band’s trailing edge (under THE VISION).
 */
export const ABOUT_MOBILE_VISION_BODY_PLACEMENT_CLASS =
  "ms-auto me-0 w-full max-w-[min(100%,17.5rem)] sm:max-w-sm";

/** Vision body lines — left-aligned inside the placement band. */
export const ABOUT_MOBILE_VISION_BODY_TEXT_ALIGN_CLASS = "text-left";

/** Nudge vision **body** copy toward the trailing edge (LTR: right); `< sm` only — heading stays put. */
export const ABOUT_MOBILE_VISION_BODY_NUDGE_CLASS = "translate-x-[120px] sm:translate-x-0";

/**
 * Ellipse atmosphere behind THE VISION — Figma `479:1273` (same SVG as hero `479:1234`, inset match).
 * Right-anchored so the blue wash sits under the reflected title stack.
 */
export const ABOUT_MOBILE_MISSION_VISION_ATMOSPHERE_ELLIPSE_SLOT_CLASS =
  "pointer-events-none absolute -top-90 right-0 z-0 h-[min(34rem,92vw)] w-[min(140vw,72rem)] max-w-none translate-x-[42%] sm:-top-44 sm:translate-x-[31%]" as const;
