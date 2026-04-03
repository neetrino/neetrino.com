"use client";

import { useCallback, useEffect, useState } from "react";
import {
  NEETRINO_DESKTOP_CANVAS_WIDTH_PX,
  NEETRINO_DESKTOP_SCALE_REF_SELECTOR,
} from "@/lib/desktop-header-layout.constants";

const MIN_LAYOUT_WIDTH_PX = 1;

/**
 * Matches `CanvasScaler`: scale = layout reference width / 1440.
 * The reference is always mounted in `app/layout.tsx` (`NeetrinoDesktopScaleReference`) so
 * canvas and non-canvas desktop routes share one geometry contract (no canvas vs clientWidth split).
 */
export function useNeetrinoDesktopScale(): number {
  const [scale, setScale] = useState(1);

  const updateScale = useCallback(() => {
    if (typeof document === "undefined") return;
    const refEl = document.querySelector<HTMLElement>(NEETRINO_DESKTOP_SCALE_REF_SELECTOR);
    const w = refEl?.offsetWidth;
    const widthPx =
      w !== undefined && w >= MIN_LAYOUT_WIDTH_PX ? w : document.documentElement.clientWidth;
    setScale(widthPx / NEETRINO_DESKTOP_CANVAS_WIDTH_PX);
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
    const refEl = document.querySelector<HTMLElement>(NEETRINO_DESKTOP_SCALE_REF_SELECTOR);
    if (refEl) {
      ro.observe(refEl);
    } else {
      ro.observe(document.documentElement);
    }
    window.addEventListener("resize", scheduleRead);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("resize", scheduleRead);
    };
  }, [updateScale]);

  return scale;
}
