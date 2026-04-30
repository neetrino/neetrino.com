/**
 * In-row design-options palette (`AboutUsFigmaBlock2` / mobile). EN/RU use the same
 * enlarged frame as HY; HY-only row tweaks stay in `ABOUT_DESIGN_OPTIONS_FEATURE_COPY_SHIFT_X_HY_CLASS` etc.
 */
export const ABOUT_DESIGN_OPTIONS_PALETTE_FRAME_CLASS_DEFAULT = "h-[220px] w-[240px]";
export const ABOUT_DESIGN_OPTIONS_PALETTE_FRAME_CLASS_HY = "h-[220px] w-[240px]";

/** `next/image` `sizes` — match max rendered width per locale palette frame. */
export const ABOUT_DESIGN_OPTIONS_PALETTE_IMAGE_SIZES_DEFAULT = "240px";
export const ABOUT_DESIGN_OPTIONS_PALETTE_IMAGE_SIZES_HY = "240px";

export const ABOUT_DESIGN_OPTIONS_PALETTE_TRANSLATE_Y_CLASS_DEFAULT = "-translate-y-[155px]";
export const ABOUT_DESIGN_OPTIONS_PALETTE_TRANSLATE_Y_CLASS_HY = "-translate-y-[155px]";

export const ABOUT_DESIGN_OPTIONS_FEATURE_COPY_TRANSLATE_Y_CLASS_DEFAULT = "-translate-y-[112px]";
export const ABOUT_DESIGN_OPTIONS_FEATURE_COPY_TRANSLATE_Y_CLASS_HY = "-translate-y-[112px]";

/** HY: lines under the palette — slight shift right (pairs with vertical translate on same node). */
export const ABOUT_DESIGN_OPTIONS_FEATURE_COPY_SHIFT_X_HY_CLASS = "translate-x-[35px]";

/** Figma 335:1178 row anchor (pairs with `-translate-x-1/2` on the row). */
export const ABOUT_WHY_CHOOSE_FEATURE_LABELS_ROW_LEFT_CLASS_DEFAULT = "left-[calc(50%-11.5px)]";

/** HY: row 335:1178 — horizontal anchor (see `feat: armVersion Fix` layout). */
export const ABOUT_WHY_CHOOSE_FEATURE_LABELS_ROW_LEFT_CLASS_HY = "left-[calc(50%-104.5px)]";

/** EN/RU: lift the four-column feature caption row toward the icons (`feat: engVersionFix`). */
export const ABOUT_WHY_CHOOSE_FEATURE_LABELS_ROW_TRANSLATE_Y_CLASS_DEFAULT = "-translate-y-[68px]";

/** HY: lift + tune for long Armenian copy (independent of EN/RU default). */
export const ABOUT_WHY_CHOOSE_FEATURE_LABELS_ROW_TRANSLATE_Y_CLASS_HY = "-translate-y-[80px]";
