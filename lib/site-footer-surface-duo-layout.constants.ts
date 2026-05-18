import { SURFACE_DUO_PORTRAIT_LEFT_GUTTER_COLUMN_CLASS } from "@/lib/surface-duo-portrait-layout.constants";

/**
 * Surface Duo single-screen portrait (~540×720) — `surface-duo-portrait` in `app/globals.css`.
 * Left-aligns mobile footer column + bottom strip (vs centered narrow phone stack); Figma `539:1824`.
 */

export const SITE_FOOTER_MOBILE_SURFACE_DUO_OUTER_STACK_CLASS =
  `${SURFACE_DUO_PORTRAIT_LEFT_GUTTER_COLUMN_CLASS} surface-duo-portrait:max-w-[min(100%,22.75rem)]` as const;

/** Overrides `max-md:block` on the bottom bleed so `items-start` can apply. */
export const SITE_FOOTER_MOBILE_SURFACE_DUO_BOTTOM_BLEED_CLASS =
  "surface-duo-portrait:!flex surface-duo-portrait:!flex-col surface-duo-portrait:items-start surface-duo-portrait:px-4 surface-duo-portrait:sm:px-5" as const;

export const SITE_FOOTER_MOBILE_SURFACE_DUO_SOCIAL_ROW_CLASS =
  "surface-duo-portrait:justify-start surface-duo-portrait:px-0" as const;

export const SITE_FOOTER_MOBILE_SURFACE_DUO_COPYRIGHT_CLASS =
  "surface-duo-portrait:text-left" as const;
