/**
 * Mobile footer robot — tall right strip behind copy (`z-0`); Figma mobile footer art.
 * Composite Tailwind strings for JIT.
 */
/** Wider strip + higher min so the robot reads larger on small screens. */
export const SITE_FOOTER_MOBILE_ROBOT_DECORATION_CLASS =
  "pointer-events-none absolute inset-y-0 right-0 z-[1] w-[min(82vw,620px)] min-w-[260px] overflow-hidden" as const;

/**
 * Figma `722:742` — profile faces left; strip is viewport-right. `scale` zooms figure inside the strip
 * (`origin-left-top` keeps head anchored while growing). Negative `translate-y` nudges the bitmap upward
 * inside the strip; less negative = figure sits slightly lower (mobile tweak vs Figma).
 */
export const SITE_FOOTER_MOBILE_ROBOT_IMAGE_CLASS =
  "object-cover object-left-top origin-left-top scale-[1.35] -translate-y-[22%]" as const;
