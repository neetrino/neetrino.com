import { SERVICES_DESKTOP_CANVAS_TOTAL_HEIGHT_PX } from "@/lib/services-desktop-canvas-height.constants";

const TW_TAILWIND_TOTAL_PX = 1584;

if (TW_TAILWIND_TOTAL_PX !== SERVICES_DESKTOP_CANVAS_TOTAL_HEIGHT_PX) {
  throw new Error(
    "SERVICES_DESKTOP_CANVAS_MIN_H_CLASS literal must match SERVICES_DESKTOP_CANVAS_TOTAL_HEIGHT_PX",
  );
}

/** Tailwind min-height for the services desktop loading shell (must stay in sync with canvas total). */
export const SERVICES_DESKTOP_CANVAS_MIN_H_CLASS = "min-h-[calc(1584/1440*100vw)]" as const;
