/**
 * Mobile footer robot strip + image — `SiteFooterMobileBackdrop539` (Figma `539:1824`).
 * `translate` nudges the profile vs the export; tune here only (avoid inline magic in the component).
 */
export const SITE_FOOTER_MOBILE_ROBOT_STRIP_CLASS =
  "pointer-events-none absolute inset-y-0 right-0 z-[2] w-[min(82vw,620px)] min-w-[260px] overflow-hidden" as const;

/** `translate` nudges the profile vs the export — higher = more negative `-translate-y`; right = larger positive `translate-x`. */
export const SITE_FOOTER_MOBILE_ROBOT_IMAGE_CLASS =
  "pointer-events-none object-cover object-left-top origin-left-top scale-[1.35] -translate-y-[35%] translate-x-[25%]" as const;
