"use client";

import { AboutUsFigmaCanvasInner } from "@/components/about-us/figma/AboutUsFigmaCanvasInner";
import { CanvasScaler } from "@/components/layout/CanvasScaler";
import { ABOUT_FIGMA_ROOT_MIN_HEIGHT_PX } from "@/lib/about-us-figma-layout.constants";

/**
 * Desktop About (`lg+`): scale the 1440px Figma canvas to the viewport (iPad Pro, laptops) — same contract as
 * `/` and tablet hybrid on this route (`page.tsx`). Without `CanvasScaler`, fixed layout px overflow below 1440.
 */
export function AboutUsFigmaPageContent() {
  return (
    <div className="hidden w-full min-w-0 lg:block">
      <CanvasScaler canvasHeight={ABOUT_FIGMA_ROOT_MIN_HEIGHT_PX}>
        <AboutUsFigmaCanvasInner />
      </CanvasScaler>
    </div>
  );
}
