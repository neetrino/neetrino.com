/**
 * Invisible full-viewport width probe for `useNeetrinoDesktopScale`.
 * Matches the fluid canvas contract (`CanvasScaler` wrap = 100% of the desktop content width)
 * so flow routes without `[data-neetrino-canvas]` use the same scale as Home / Services / Portfolio.
 *
 * Keep `data-neetrino-desktop-scale-reference` in sync with `NEETRINO_DESKTOP_SCALE_REF_SELECTOR`.
 */
export function NeetrinoDesktopScaleReference() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 top-0 h-0 overflow-hidden"
      data-neetrino-desktop-scale-reference=""
    />
  );
}
