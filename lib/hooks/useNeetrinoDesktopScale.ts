"use client";

import { useCallback, useEffect, useState } from "react";
import { NEETRINO_DESKTOP_CANVAS_WIDTH_PX } from "@/lib/desktop-header-layout.constants";

/**
 * Matches `CanvasScaler`: scale = (canvas wrap width or viewport) / 1440.
 * Re-subscribes on `pathname` so routes with/without `[data-neetrino-canvas]` update correctly.
 */
export function useNeetrinoDesktopScale(pathname: string): number {
  const [scale, setScale] = useState(1);

  const updateScale = useCallback(() => {
    if (typeof document === "undefined") return;
    const canvas = document.querySelector<HTMLElement>("[data-neetrino-canvas]");
    const w = canvas?.offsetWidth ?? document.documentElement.clientWidth;
    setScale(w / NEETRINO_DESKTOP_CANVAS_WIDTH_PX);
  }, []);

  useEffect(() => {
    let raf = 0;
    const scheduleRead = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        updateScale();
      });
    };

    scheduleRead();
    const ro = new ResizeObserver(scheduleRead);
    const canvas = document.querySelector<HTMLElement>("[data-neetrino-canvas]");
    if (canvas) {
      ro.observe(canvas);
    } else {
      ro.observe(document.documentElement);
    }
    window.addEventListener("resize", scheduleRead);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("resize", scheduleRead);
    };
  }, [pathname, updateScale]);

  return scale;
}
