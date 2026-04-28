/**
 * Desktop home (scaled Figma canvas): vertical rhythm for the device orbit block.
 * - Lower value = closer to content above (Who we are / explore + Liquid).
 * - Partner offset lifts the logo strip from the canvas bottom (keeps gap under devices tight).
 */
/**
 * Desktop canvas Y for device orbit. Increasing this only to shrink the gap to brands widens space above
 * (Who we are / Liquid). Prefer `HOME_DESKTOP_PARTNERS_STRIP_BOTTOM_OFFSET_PX` and Partners `lg:-mt-*`.
 */
export const HOME_DESKTOP_DEVICE_SHOWCASE_CANVAS_TOP_PX = 4280;

/**
 * Desktop: lifts partner strip from canvas bottom (layout px).
 * Higher = closer to orbit; lower = strip sits closer to footer (less empty band under logos).
 */
export const HOME_DESKTOP_PARTNERS_STRIP_BOTTOM_OFFSET_PX = 380;
