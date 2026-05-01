/**
 * Mobile About — mission / vision block (`AboutUsMobileMissionVisionSection`).
 */

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
