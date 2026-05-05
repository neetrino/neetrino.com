"use client";

import { useRef } from "react";
import { ServicesDesktopVectorGridPattern } from "@/components/services/ServicesDesktopVectorGridPattern";
import { useServicesVectorGridShellScale } from "@/components/services/use-services-vector-grid-shell-scale";
import { SERVICES_DESKTOP_CANVAS_TOTAL_HEIGHT_PX } from "@/lib/services-desktop-canvas-height.constants";

const SHELL_CLASS =
  "pointer-events-none absolute inset-0 z-[1] hidden overflow-hidden mix-blend-overlay lg:block" as const;

/**
 * Desktop footer — same `imgVector2` grid as `/services`, scaled and shifted from the services
 * scene bottom (`SERVICES_DESKTOP_CANVAS_TOTAL_HEIGHT_PX`).
 */
export function SiteFooterDesktopGridBackdrop() {
  const shellRef = useRef<HTMLDivElement>(null);
  const scale = useServicesVectorGridShellScale(shellRef);
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
          <ServicesDesktopVectorGridPattern />
        </div>
      </div>
    </div>
  );
}
