import { ABOUT_FIGMA_ROOT_MIN_HEIGHT_WITH_MEET_TEAM_PX } from "./about-us-meet-our-team.constants";

/**
 * Fixed height of the **positioning canvas** wrapping blocks `AboutUsFigmaBlock1a`…`Block3`.
 * `AboutUsFigmaBlock2` map markers and layer use `absolute inset-[…%]` — percentages resolve
 * against this box. Do not tie this value to the scroll tail (Meet Our Team); extend the
 * outer root `min-height` instead (`ABOUT_FIGMA_ROOT_MIN_HEIGHT_PX`).
 */
export const ABOUT_FIGMA_POSITIONING_CANVAS_HEIGHT_PX = 3643;

/**
 * Outer ABOUT desktop root: tall enough for Meet Our Team + padding below the 3643px canvas.
 */
export const ABOUT_FIGMA_ROOT_MIN_HEIGHT_PX = ABOUT_FIGMA_ROOT_MIN_HEIGHT_WITH_MEET_TEAM_PX;

/**
 * Figma 335:931 inner vector `w-[3723px]` — after `rotate-90` this span matches vertical extent
 * of the checkerboard before we scale it to `ABOUT_VECTOR_GRID_OUTER_HEIGHT_PX`.
 */
export const ABOUT_VECTOR_GRID_ROTATED_VISUAL_HEIGHT_PX = 3723;

/** Desktop About hero line `aboutPage.hero.everyIdea` — nudge left for long hy copy. */
export const ABOUT_DESKTOP_HERO_EVERY_IDEA_LEFT_CLASS_DEFAULT = "left-[293px]";
export const ABOUT_DESKTOP_HERO_EVERY_IDEA_LEFT_CLASS_HY = "left-[167px]";

/** Mobile About hero — left shift for hy `everyIdea` line (ՅՈՒՐԱՔԱՆՉՅՈՒՐ ԳԱՂԱՓԱՐ). */
export const ABOUT_MOBILE_HERO_EVERY_IDEA_SHIFT_HY_CLASS = "-translate-x-3 sm:-translate-x-5";

/** Desktop About hero large lines — slightly smaller type for hy (long Armenian copy). */
export const ABOUT_DESKTOP_HERO_HEADLINE_TEXT_DEFAULT_CLASS = "text-[105px] tracking-[2.1px]";
export const ABOUT_DESKTOP_HERO_HEADLINE_TEXT_HY_CLASS = "text-[86px] tracking-[1.65px]";
export const ABOUT_DESKTOP_HERO_HEADLINE_LEADING_DEFAULT_CLASS = "leading-[95px]";
export const ABOUT_DESKTOP_HERO_HEADLINE_LEADING_HY_CLASS = "leading-[78px]";

/** Mobile About hero large lines — smaller clamp for hy full hero stack. */
export const ABOUT_MOBILE_HERO_HEADLINE_TEXT_HY_CLASS = "text-[clamp(1.875rem,9.25vw,3.5rem)]";

/** HY: `aboutPage.value1` (heart row) — shift copy left vs default column alignment. */
export const ABOUT_VALUES_HY_VALUE1_HEART_LINE_SHIFT_LEFT_CLASS = "-translate-x-[39px]";

/** HY: `aboutPage.value2` (transparency line) — nudge 20px right from left-aligned column. */
export const ABOUT_VALUES_HY_VALUE2_LINE_SHIFT_RIGHT_CLASS = "translate-x-[35px]";

/** HY: `aboutPage.value3` (continuous development) — shift 30px left. */
export const ABOUT_VALUES_HY_VALUE3_LINE_SHIFT_LEFT_CLASS = "-translate-x-[30px]";

/** HY: `aboutPage.value4` (mutual respect) — shift 10px left. */
export const ABOUT_VALUES_HY_VALUE4_LINE_SHIFT_LEFT_CLASS = "-translate-x-[10px]";
