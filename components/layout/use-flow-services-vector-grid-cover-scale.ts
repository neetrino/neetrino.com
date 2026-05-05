"use client";

import { useCallback, useEffect, useState, type RefObject } from "react";
import { SERVICES_DESKTOP_VECTOR_GRID_PATTERN_OUTER_HEIGHT_PX } from "@/lib/services-desktop-vector-grid-pattern.constants";

const CANVAS_DESIGN_WIDTH_PX = 1440 as const;

/**
 * Uniform scale for flow-page mesh: `max(width/1440, height/3723)` so one Figma `165:667` tile
 * **covers** tall routes (e.g. Contact) without stacking tiles (no seam / “small square” glitches).
 */
export function useFlowServicesVectorGridCoverScale(
  shellRef: RefObject<HTMLDivElement | null>,
): number {
  const [scale, setScale] = useState(1);

  const updateScale = useCallback(() => {
    const el = shellRef.current;
    const fallbackW = typeof window !== "undefined" ? window.innerWidth : CANVAS_DESIGN_WIDTH_PX;
    const fallbackH =
      typeof window !== "undefined"
        ? window.innerHeight
        : SERVICES_DESKTOP_VECTOR_GRID_PATTERN_OUTER_HEIGHT_PX;
    const w = el && el.offsetWidth > 0 ? el.offsetWidth : fallbackW;
    const h = el && el.offsetHeight > 0 ? el.offsetHeight : fallbackH;
    setScale(
      Math.max(
        w / CANVAS_DESIGN_WIDTH_PX,
        h / SERVICES_DESKTOP_VECTOR_GRID_PATTERN_OUTER_HEIGHT_PX,
      ),
    );
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
  }, [updateScale, shellRef]);

  return scale;
}
