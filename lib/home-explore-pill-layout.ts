/** Desktop Explore control — `Link` is the visible black pill (`w` + centering in `Group`). */
export const homeExplorePillWidthDefaultClassName = "w-[134px]" as const;
/** Armenian `cta.explore` (“Տեսնել ավելին”) — wider pill. */
export const homeExplorePillWidthHyClassName = "w-[206px]" as const;
/** Russian `cta.explore` («Смотреть») — slightly wider than default. */
export const homeExplorePillWidthRuClassName = "w-[152px]" as const;

/** Center the control inside the `642×276` Figma `Group` / `Group2` wrapper. */
export const homeExplorePillLinkCenterInGroupClassName =
  "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" as const;

/** Left edge of pill at wrapper origin; vertically centered (Who we are column). */
export const homeExplorePillLinkStartVerticallyInGroupClassName =
  "left-0 top-1/2 -translate-y-1/2" as const;

/** Decorative ellipse under the label — default: from start of pill (Figma). */
export const homeExplorePillEllipseUnderlayFromStartClassName = "left-[22px]" as const;
/** Same underlay anchored from the right (wide `hy` label in What we do). */
export const homeExplorePillEllipseUnderlayFromEndClassName = "left-auto right-[22px]" as const;
