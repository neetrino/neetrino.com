"use client";

import { usePathname } from "@/i18n/navigation";
import { useRef } from "react";
import { ServicesDesktopVectorGridPattern } from "@/components/services/ServicesDesktopVectorGridPattern";
import { useFlowServicesVectorGridCoverScale } from "@/components/layout/use-flow-services-vector-grid-cover-scale";
import { desktopRouteHasEmbeddedServicesVectorGrid } from "@/lib/desktop-flow-services-vector-grid";

const SHELL_CLASS =
  "pointer-events-none absolute inset-0 z-0 hidden overflow-hidden mix-blend-overlay lg:block" as const;

/**
 * Full-bleed `/services`-style mesh on flow routes — **one** `165:667` pattern, uniform cover scale
 * (`max(w/1440, h/3723)`) so tall pages fill without tiling seams.
 */
export function DesktopFlowServicesVectorGrid() {
  const pathname = usePathname() ?? "";
  const shellRef = useRef<HTMLDivElement>(null);
  const scale = useFlowServicesVectorGridCoverScale(shellRef);

  if (desktopRouteHasEmbeddedServicesVectorGrid(pathname)) {
    return null;
  }

  return (
    <div ref={shellRef} className={SHELL_CLASS} aria-hidden data-name="Flow services vector grid">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute left-0 top-0 w-[1440px] origin-top-left will-change-transform"
          style={{
            transform: `matrix(${scale}, 0, 0, ${scale}, 0, 0)`,
          }}
        >
          <ServicesDesktopVectorGridPattern />
        </div>
      </div>
    </div>
  );
}
