/**
 * Home desktop “What we do” tiles are 258px wide; CTA pills use
 * `left-[cardLeft+129px] -translate-x-1/2` (129px = half tile width).
 */

/** Center tile titles/subtitles on desktop + mobile (longer copy). */
export function isWhatWeDoCardCopyCenteredLocale(locale: string): boolean {
  return locale === "hy" || locale === "ru";
}

/** Orange mobile tile (`left-[320px]`) + half width 129px → horizontal center of the tile. */
const WHAT_WE_DO_DESKTOP_ORANGE_TILE_CENTER_LEFT = "left-[449px]" as const;

/** Same horizontal anchor as the mobile-tile CTA (subtitle centering for `hy`, etc.). */
export const whatWeDoDesktopOrangeTileHorizontalCenterClassName =
  WHAT_WE_DO_DESKTOP_ORANGE_TILE_CENTER_LEFT;

export const whatWeDoDesktopContinueCenterLeftClassName = {
  /** Orange mobile tile, `left-[320px]` */
  mobile: WHAT_WE_DO_DESKTOP_ORANGE_TILE_CENTER_LEFT,
  /** Purple CRM tile, `left-[860px]` */
  crm: "left-[989px]",
  /** Dark SaaS (“black”) tile, `left-[590px]` — also `hy` title/subtitle horizontal anchor */
  saas: "left-[719px]",
  /** Blue AI tile (last card), `left-[1130px]` — `hy`: title/subtitle horizontal anchor */
  ai: "left-[1259px]",
} as const;

/**
 * `hy` CRM — **whole column** (subtitle + button) on the desktop canvas.
 * Changing this moves **both** lines up/down together. It does **not** change the space
 * between the subtitle and «Շարունակել» — use `whatWeDoHyCrmSubtitleToContinueGapClassName` for that.
 */
export const whatWeDoDesktopHyCrmSubtitleButtonStackTopClassName = "top-[548px]" as const;

/**
 * `hy` CRM — **only** the gap between the **subtitle block** and the **Continue** button
 * (flex `gap-*` on the column that stacks them). Desktop + mobile import this.
 * Example: `gap-[8px]` … `gap-[20px]`.
 */
export const whatWeDoHyCrmSubtitleToContinueGapClassName = "gap-[12px]" as const;

/** Nudge CRM subtitle copy up (`hy`); does not move the Continue button. */
export const whatWeDoHyCrmSubtitleLiftOnlyClassName = "-translate-y-[9px]" as const;

/** `ru` only: website tile — subtitle nudge up vs inset (tuned vs default). */
export const whatWeDoRuWebsiteSubtitleNudgeUpClassName = "-translate-y-[14px]" as const;

/**
 * `ru` only: orange mobile-tile subtitle vertical anchor (centered layout).
 * Default / `hy`: `top-[576.5px]` with `-translate-y-1/2`.
 */
export const whatWeDoRuOrangeMobileSubtitleTopClassName = "top-[562px]" as const;
