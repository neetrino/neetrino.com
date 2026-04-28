/**
 * Bounding box of the in-row design-options palette (`AboutUsFigmaBlock2` / mobile card).
 * Slightly larger than the flanking 3D icon frames (~209×191) for clearer art.
 */
export const ABOUT_DESIGN_OPTIONS_PALETTE_FRAME_CLASS = "h-[220px] w-[240px]";

/** `next/image` `sizes` — keep in sync with palette frame max width. */
export const ABOUT_DESIGN_OPTIONS_PALETTE_IMAGE_SIZES = "240px";

/**
 * Lifts the in-row palette toward the floating 3D icons.
 */
export const ABOUT_DESIGN_OPTIONS_PALETTE_TRANSLATE_Y_CLASS = "-translate-y-[150px]";

/** HY/RU “100k design options” lines — slightly less lift than the palette so copy tucks under the art. */
export const ABOUT_DESIGN_OPTIONS_FEATURE_COPY_TRANSLATE_Y_CLASS = "-translate-y-[113px]";

/**
 * Figma 335:1178 — shifts the whole four-column caption row up toward the floating 3D icons
 * (all feature lines together, not only the palette column).
 */
export const ABOUT_WHY_CHOOSE_FEATURE_LABELS_ROW_TRANSLATE_Y_CLASS = "-translate-y-[68px]";
