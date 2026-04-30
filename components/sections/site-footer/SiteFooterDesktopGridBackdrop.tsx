"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { FigmaFillImage } from "@/components/shared/FigmaFillImage";
import { imgVector2 } from "@/components/services/services-assets";
import { SERVICES_DESKTOP_CANVAS_TOTAL_HEIGHT_PX } from "@/lib/services-desktop-canvas-height.constants";

/** Same width contract as `CanvasScaler` + services scene (`ServicesDesktopScene`). */
const CANVAS_DESIGN_WIDTH_PX = 1440 as const;

const SHELL_CLASS =
  "pointer-events-none absolute inset-0 z-[1] hidden overflow-hidden mix-blend-overlay lg:block" as const;

/**
 * Desktop footer — same `imgVector2` grid as `ServicesDesktopBackdrop`, scaled and shifted so the
 * pattern continues from the bottom of the services canvas (`CanvasScaler` uses `offsetWidth/1440`).
 */
export function SiteFooterDesktopGridBackdrop() {
  const shellRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  const updateScale = useCallback(() => {
    const el = shellRef.current;
    const fallback = typeof window !== "undefined" ? window.innerWidth : CANVAS_DESIGN_WIDTH_PX;
    const w = el && el.offsetWidth > 0 ? el.offsetWidth : fallback;
    setScale(w / CANVAS_DESIGN_WIDTH_PX);
  }, []);

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

  /** Same as `CanvasScaler` inner: `y' = s * (y - sceneHeight)` — use matrix so order matches composition. */
  const ty = -SERVICES_DESKTOP_CANVAS_TOTAL_HEIGHT_PX * scale;

  return (
    <div ref={shellRef} className={SHELL_CLASS} aria-hidden data-name="Footer vector grid">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute left-0 top-0 w-[1440px] origin-top-left will-change-transform"
          style={{
            transform: `matrix(${scale}, 0, 0, ${scale}, 0, ${ty})`,
          }}
        >
          <div className="-translate-x-1/2 absolute left-[calc(50%-38px)] top-[-40px] flex h-[3723px] w-[1722px] items-center justify-center">
            <div className="flex-none rotate-90">
              <div className="relative h-[1722px] w-[3723px]" data-node-id="165:667">
                <FigmaFillImage src={imgVector2} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
