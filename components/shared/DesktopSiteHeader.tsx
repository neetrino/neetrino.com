"use client";

import { HomeDesktopHeader } from "@/components/shared/HomeDesktopHeader";
import {
  NEETRINO_DESKTOP_HEADER_BAR_WIDTH_PX,
  NEETRINO_DESKTOP_HEADER_TOP_DESIGN_PX,
} from "@/lib/desktop-header-layout.constants";
import { useNeetrinoDesktopScale } from "@/lib/hooks/useNeetrinoDesktopScale";

/**
 * Fixed desktop chrome: same Home `Awwwards` bar, scaled from `NeetrinoDesktopScaleReference`
 * in the root layout (same width contract as `CanvasScaler` on canvas routes).
 */
export function DesktopSiteHeader() {
  const scale = useNeetrinoDesktopScale();
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
        <HomeDesktopHeader className="relative h-[64px] w-full rounded-[72px] bg-[rgba(255,255,255,0.21)] backdrop-blur-xl backdrop-saturate-150" />
      </div>
    </div>
  );
}
