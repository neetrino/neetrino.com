"use client";

import { usePathname } from "next/navigation";
import { HomeDesktopHeader } from "@/components/shared/HomeDesktopHeader";
import {
  NEETRINO_DESKTOP_HEADER_BAR_WIDTH_PX,
  NEETRINO_DESKTOP_HEADER_TOP_DESIGN_PX,
} from "@/lib/desktop-header-layout.constants";
import { useNeetrinoDesktopScale } from "@/lib/hooks/useNeetrinoDesktopScale";

/**
 * Fixed desktop chrome: same Home `Awwwards` bar, scaled like `CanvasScaler` so it aligns
 * with in-canvas layouts when the fluid canvas is present.
 */
export function DesktopSiteHeader() {
  const pathname = usePathname();
  const scale = useNeetrinoDesktopScale(pathname);
  const topPx = NEETRINO_DESKTOP_HEADER_TOP_DESIGN_PX * scale;

  return (
    <div
      className="pointer-events-none fixed left-1/2 z-[100] hidden -translate-x-1/2 lg:block"
      style={{ top: topPx }}
    >
      <div
        className="pointer-events-auto"
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "top center",
          width: NEETRINO_DESKTOP_HEADER_BAR_WIDTH_PX,
        }}
      >
        <HomeDesktopHeader className="relative bg-[rgba(255,255,255,0.21)] h-[64px] rounded-[72px] w-[1240px]" />
      </div>
    </div>
  );
}
