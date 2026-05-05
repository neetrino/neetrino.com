/**
 * Desktop footer Figma frame `10:237` (1440×590). `SiteFooter` uses `CanvasScaler` for viewports under 1440px (iPad Pro).
 *
 * Wrap + inner modifiers: default `.neetrino-canvas-*` uses solid `#151515`, which hides `SiteFooterDesktopGridBackdrop`
 * (`mix-blend-overlay`, `z-[1]`). Footer-specific classes keep atmosphere + grid visible while the Figma layer scales.
 */
export const SITE_FOOTER_DESKTOP_CANVAS_WIDTH_PX = 1440 as const;

export const SITE_FOOTER_DESKTOP_CANVAS_HEIGHT_PX = 590 as const;

export const SITE_FOOTER_DESKTOP_CANVAS_WRAP_MODIFIER_CLASS =
  "neetrino-canvas-wrap--footer-scaler" as const;

export const SITE_FOOTER_DESKTOP_CANVAS_INNER_MODIFIER_CLASS =
  "neetrino-canvas-inner--footer-desktop" as const;
