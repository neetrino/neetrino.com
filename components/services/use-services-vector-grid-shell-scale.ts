"use client";

import { useCallback, useEffect, useRef, useState, type RefObject } from "react";

const CANVAS_DESIGN_WIDTH_PX = 1440 as const;

/**
 * `offsetWidth / 1440` — same contract as `CanvasScaler` and `SiteFooterDesktopGridBackdrop`.
 */
export function useServicesVectorGridShellScale(
  shellRef: RefObject<HTMLDivElement | null>,
): number {
  const [scale, setScale] = useState(1);

  const updateScale = useCallback(() => {
    const el = shellRef.current;
    const fallback = typeof window !== "undefined" ? window.innerWidth : CANVAS_DESIGN_WIDTH_PX;
    const w = el && el.offsetWidth > 0 ? el.offsetWidth : fallback;
    setScale(w / CANVAS_DESIGN_WIDTH_PX);
  }, [shellRef]);

  useEffect(() => {
    const rafId = requestAnimationFrame(() => {
      updateScale();
    });
    const ro = new ResizeObserver(() => {
      updateScale();
    });
    const el = shellRef.current;
    if (el) ro.observe(el);
    window.addEventListener("resize", updateScale);
    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      window.removeEventListener("resize", updateScale);
    };
  }, [updateScale]);

  return scale;
}
