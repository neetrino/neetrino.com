/**
 * Orbit prev/next — `bottom` as % of `EllipseDeviceShowcase` aspect box. **Smaller %** = lower, closer to
 * device row; **larger %** = higher. **Literals** for Tailwind JIT.
 */
export const ELLIPSE_DEVICE_SHOWCASE_ORBIT_NAV_POSITION_CLASS = "bottom-[22%]" as const;

/**
 * Horizontal anchor with `-translate-x-1/2`: **negative** px in `calc` = left of center; **positive** = right.
 */
export const ELLIPSE_DEVICE_SHOWCASE_ORBIT_NAV_LEFT_CLASS = "left-[calc(50%-10px)]" as const;
