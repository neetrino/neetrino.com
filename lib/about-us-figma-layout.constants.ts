/**
 * ABOUT Figma frame: original artboard height included the hero robot block (removed).
 * Root min-height must fit the bottom stats row (~3527 + 92px) plus small tail padding.
 * Map/vector `inset` percentages in AboutUsFigmaBlock2 were recalibrated for this height
 * so pixels match the previous 4366px layout.
 */
export const ABOUT_FIGMA_ROOT_MIN_HEIGHT_PX = 3643;

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

/** RU: `aboutPage.value4` (“Уважение друг к другу”) — shift 10px left. */
export const ABOUT_VALUES_RU_VALUE4_LINE_SHIFT_LEFT_CLASS = "-translate-x-[30px]";

/** RU: `aboutPage.value1` (“Любовь к делу”) — nudge right. */
export const ABOUT_VALUES_RU_VALUE1_LINE_SHIFT_RIGHT_CLASS = "translate-x-[28px]";

/** RU: `aboutPage.value2` (“Прозрачность”) — nudge right. */
export const ABOUT_VALUES_RU_VALUE2_LINE_SHIFT_RIGHT_CLASS = "translate-x-[17px]";
