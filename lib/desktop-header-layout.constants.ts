/** 1440px Figma desktop width — matches `CanvasScaler` / `.neetrino-canvas-inner`. */
export const NEETRINO_DESKTOP_CANVAS_WIDTH_PX = 1440;

/**
 * Layout-mounted element (`NeetrinoDesktopScaleReference`) — same width contract as
 * `.neetrino-canvas-wrap` so desktop header scale is route-agnostic.
 */
export const NEETRINO_DESKTOP_SCALE_REF_SELECTOR =
  "[data-neetrino-desktop-scale-reference]" as const;

/** Home desktop header offset from top of scaled canvas (design px @1×). */
export const NEETRINO_DESKTOP_HEADER_TOP_DESIGN_PX = 27;

/**
 * Design-space distance from canvas top to bottom of the 64px header bar
 * (27 + 64) — used for flow pages that sit under the fixed desktop chrome.
 */
export const NEETRINO_DESKTOP_HEADER_CLEARANCE_DESIGN_PX = 91;

/**
 * Extra top inset under desktop chrome (design px @1×): base clearance plus gap so the first
 * content row sits lower — visually “drops” the page below the pill.
 */
export const NEETRINO_DESKTOP_HEADER_CLEARANCE_RELAXED_DESIGN_PX =
  NEETRINO_DESKTOP_HEADER_CLEARANCE_DESIGN_PX + 16;

/** Home desktop header pill width — Figma ABOUT `Awwwards` (335:1424): `w-[1340px]`. */
export const NEETRINO_DESKTOP_HEADER_BAR_WIDTH_PX = 1340;
