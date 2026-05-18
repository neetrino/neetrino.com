import { PORTFOLIO_FIRST_BANNER_HEIGHT_PX } from "@/lib/portfolio-desktop-first-banner.constants";

/** Desktop home canvas — first projects marquee row (`NeetrinoHomeProjectsMarquee`). */
export const HOME_PROJECTS_MARQUEE_FIRST_ROW_TOP_PX = 2334 as const;

/** Vertical gap between the two marquee rows on the desktop home canvas (Figma). */
export const HOME_PROJECTS_MARQUEE_ROWS_GAP_PX = 45 as const;

export const HOME_PROJECTS_MARQUEE_SECOND_ROW_TOP_PX =
  HOME_PROJECTS_MARQUEE_FIRST_ROW_TOP_PX +
  PORTFOLIO_FIRST_BANNER_HEIGHT_PX +
  HOME_PROJECTS_MARQUEE_ROWS_GAP_PX;

/** Clip height for each marquee row — keep in sync with `PORTFOLIO_FIRST_BANNER_HEIGHT_PX`. */
export const HOME_PROJECTS_MARQUEE_CLIP_HEIGHT_CLASS = "h-[364px]" as const;

export const HOME_PROJECTS_MARQUEE_FIRST_ROW_TOP_CLASS = "top-[2334px]" as const;

/** `2334 + PORTFOLIO_FIRST_BANNER_HEIGHT_PX (364) + HOME_PROJECTS_MARQUEE_ROWS_GAP_PX (45)`. */
export const HOME_PROJECTS_MARQUEE_SECOND_ROW_TOP_CLASS = "top-[2743px]" as const;
