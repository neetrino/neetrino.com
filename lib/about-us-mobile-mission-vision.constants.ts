/**
 * Mobile About — mission / vision block (`AboutUsMobileMissionVisionSection`).
 *
 * **Width split** (see `about-us-mobile-compact-breakpoint.constants.ts`):
 * - `max-[740px]`: compact handset tuning (Galaxy S8+ class through ~740px).
 * - `min-[741px]`: legacy layout matching last pre-tune `HEAD` for wider phones up to the route’s mobile cap (~744px `neetrino-layout-desktop`).
 */

/**
 * Reflected H2 titles — “THE MISSION” / “THE VISION”.
 * Compact: slightly smaller `clamp` floor; legacy: original `clamp(1.5rem,6.5vw,…)`.
 */
export const ABOUT_MOBILE_MISSION_VISION_TITLE_TEXT_CLASS =
  "font-['Inter:Black_Italic',sans-serif] font-black italic uppercase leading-tight text-white max-[740px]:text-[clamp(1.3125rem,5.5vw,2.125rem)] min-[741px]:text-[clamp(1.5rem,6.5vw,2.125rem)]" as const;

/**
 * Mission column stacks above the vision atmosphere ellipse (it bleeds upward with negative `top`).
 * Vision column stays lower so glow does not paint over mission copy.
 */
export const ABOUT_MOBILE_MISSION_ARTICLE_STACK_CLASS = "relative z-[2]" as const;

/** Vision column — atmosphere `z-0`, copy wrapper uses `ABOUT_MOBILE_VISION_COLUMN_CONTENT_ABOVE_ATMOSPHERE_CLASS`. */
export const ABOUT_MOBILE_VISION_ARTICLE_STACK_CLASS = "relative isolate z-[1]" as const;

/** Keeps heading + body above in-column atmosphere (`z-0`). */
export const ABOUT_MOBILE_VISION_COLUMN_CONTENT_ABOVE_ATMOSPHERE_CLASS = "relative z-[1]" as const;

/**
 * Nudge reflected “THE MISSION” title stack.
 * Compact: `max-[420px]` / `421–639` split; legacy: `translate-x-[10px]` below `sm` only (`HEAD`).
 */
export const ABOUT_MOBILE_MISSION_HEADING_NUDGE_CLASS =
  "max-[740px]:max-[420px]:translate-x-[14px] max-[740px]:min-[421px]:max-sm:translate-x-[10px] max-[740px]:sm:translate-x-0 min-[741px]:translate-x-[10px] min-[741px]:sm:translate-x-0" as const;

/** Move “THE MISSION” + body down together (`< sm`); reset at `sm` for the two-column row. */
export const ABOUT_MOBILE_MISSION_STACK_OFFSET_DOWN_CLASS = "mt-[100px] sm:mt-0";

/**
 * Nudge reflected “THE VISION” title stack toward the start (LTR: left); `< sm` only.
 * Compact: stronger left pull; legacy: `-12px` (`HEAD`).
 */
export const ABOUT_MOBILE_VISION_HEADING_NUDGE_CLASS =
  "max-[740px]:max-sm:-translate-x-[24px] max-[740px]:sm:translate-x-0 min-[741px]:max-sm:-translate-x-[12px] min-[741px]:sm:translate-x-0" as const;

/**
 * Pull “THE VISION” + body up together; only this stack moves (mission / grid gap unchanged).
 * Compact: extra pull below `sm`; legacy: uniform `-270px` (`HEAD`).
 */
export const ABOUT_MOBILE_VISION_STACK_OFFSET_UP_CLASS =
  "max-[740px]:max-sm:-mt-[290px] max-[740px]:sm:-mt-[270px] min-[741px]:-mt-[270px]" as const;

/** Space below reflected mission / vision title stacks before body copy. */
export const ABOUT_MOBILE_MISSION_VISION_BODY_MARGIN_TOP_CLASS = "mt-3 sm:mt-10";

/**
 * Body copy under “THE MISSION” / “THE VISION” (not the reflected H2 titles).
 * Compact: 14px / 22px below `sm`; legacy: 15px / `leading-7` (`HEAD`).
 */
export const ABOUT_MOBILE_MISSION_VISION_BODY_COPY_TEXT_CLASS =
  "font-extralight text-white sm:text-base sm:leading-8 max-[740px]:max-sm:text-[14px] max-[740px]:max-sm:leading-[22px] min-[741px]:max-sm:text-[15px] min-[741px]:max-sm:leading-7" as const;

/** Rag-right copy inside the mission body block. */
export const ABOUT_MOBILE_MISSION_BODY_TEXT_ALIGN_CLASS = "text-right";

/**
 * Narrow column, pinned to the **start** of the mission article (LTR: left).
 * Compact: optional extra left nudge on very narrow widths; legacy: `HEAD` placement only.
 */
export const ABOUT_MOBILE_MISSION_BODY_PLACEMENT_CLASS =
  "-ms-25 me-auto w-full max-w-[min(100%,17.5rem)] sm:max-w-sm max-[740px]:max-[420px]:-translate-x-[20px]" as const;

/**
 * Vision body — same width band as mission, pinned to the **end** of the article (LTR: right).
 * `text-left` keeps lines rag-right at the band’s trailing edge (under THE VISION).
 */
export const ABOUT_MOBILE_VISION_BODY_PLACEMENT_CLASS =
  "ms-auto me-0 w-full max-w-[min(100%,17.5rem)] sm:max-w-sm";

/** Vision body lines — left-aligned inside the placement band. */
export const ABOUT_MOBILE_VISION_BODY_TEXT_ALIGN_CLASS = "text-left";

/**
 * Nudge vision **body** copy toward the trailing edge (LTR: right); `< sm` only — heading stays put.
 * Compact: extra push on `max-[420px]`; legacy: flat `120px` (`HEAD`).
 */
export const ABOUT_MOBILE_VISION_BODY_NUDGE_CLASS =
  "translate-x-[120px] sm:translate-x-0 max-[740px]:max-[420px]:translate-x-[134px]" as const;

/**
 * Ellipse atmosphere behind THE VISION — Figma `479:1273` (same SVG as hero `479:1234`, inset match).
 * Right-anchored so the blue wash sits under the reflected title stack.
 */
export const ABOUT_MOBILE_MISSION_VISION_ATMOSPHERE_ELLIPSE_SLOT_CLASS =
  "pointer-events-none absolute -top-90 right-0 z-0 h-[min(34rem,92vw)] w-[min(140vw,72rem)] max-w-none translate-x-[42%] sm:-top-44 sm:translate-x-[31%]" as const;
