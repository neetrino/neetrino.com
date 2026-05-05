import { PORTFOLIO_DESKTOP_SCENE_MAX_HEIGHT_PX } from "@/lib/portfolio-desktop-scene-dimensions.constants";

/**
 * Tailwind classes matching scaled CanvasScaler **maximum** portfolio height × 1440.
 * Services uses `SERVICES_DESKTOP_CANVAS_MIN_H_CLASS` from
 * `components/services/services-desktop-loading.constants.ts` (Tailwind scan + sync assert).
 *
 * Must match `PORTFOLIO_DESKTOP_SCENE_MAX_HEIGHT_PX` (Tailwind needs a static arbitrary value).
 */
export const PORTFOLIO_DESKTOP_CANVAS_MIN_H_CLASS =
  `min-h-[calc(${String(PORTFOLIO_DESKTOP_SCENE_MAX_HEIGHT_PX)}/1440*100vw)]` as const;
