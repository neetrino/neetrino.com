"use client";

import { useRef } from "react";
import { PageBlockReveal } from "@/components/motion/PageBlockReveal";
import { AboutUsFigmaBlock1a } from "@/components/about-us/figma/AboutUsFigmaBlock1a";
import { AboutUsFigmaBlock1b } from "@/components/about-us/figma/AboutUsFigmaBlock1b";
import { AboutUsFigmaBlock1bLower } from "@/components/about-us/figma/AboutUsFigmaBlock1bLower";
import { AboutUsFigmaBlock1c } from "@/components/about-us/figma/AboutUsFigmaBlock1c";
import { AboutUsFigmaBlock2 } from "@/components/about-us/figma/AboutUsFigmaBlock2";
import { AboutUsFigmaBlock3 } from "@/components/about-us/figma/AboutUsFigmaBlock3";
import { MeetOurTeamHeading } from "@/components/about-us/MeetOurTeamHeading";
import { DesktopServicesMeshTiledColumn } from "@/components/services/DesktopServicesMeshTiledColumn";
import {
  ABOUT_DESKTOP_SERVICES_MESH_WRAP_HEIGHT_PX,
  ABOUT_FIGMA_POSITIONING_CANVAS_HEIGHT_PX,
  ABOUT_FIGMA_ROOT_MIN_HEIGHT_PX,
} from "@/lib/about-us-figma-layout.constants";

/**
 * Figma node 335:905 — desktop About canvas (1440-wide design px). Always inside `CanvasScaler` when shown
 * (tablet hybrid in `page.tsx`, `lg+` in `AboutUsFigmaPageContent`).
 */
export function AboutUsFigmaCanvasInner() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative isolate w-full min-w-0 overflow-hidden bg-[#151515]"
      style={{ minHeight: ABOUT_FIGMA_ROOT_MIN_HEIGHT_PX }}
      data-name="ABOUT"
      data-node-id="335:905"
    >
      <DesktopServicesMeshTiledColumn
        wrapHeightDesignPx={ABOUT_DESKTOP_SERVICES_MESH_WRAP_HEIGHT_PX}
      />
      <div className="relative z-[1]">
        <div
          className="relative w-full overflow-visible"
          style={{ height: ABOUT_FIGMA_POSITIONING_CANVAS_HEIGHT_PX }}
          data-name="about-figma-positioning-canvas"
        >
          <PageBlockReveal index={0}>
            <AboutUsFigmaBlock1a containerRef={containerRef} />
          </PageBlockReveal>
          <PageBlockReveal index={1}>
            <AboutUsFigmaBlock1b />
          </PageBlockReveal>
          <PageBlockReveal index={2}>
            <AboutUsFigmaBlock1bLower />
          </PageBlockReveal>
          <PageBlockReveal index={3}>
            <AboutUsFigmaBlock1c />
          </PageBlockReveal>
          <PageBlockReveal index={4}>
            <AboutUsFigmaBlock2 />
          </PageBlockReveal>
          <PageBlockReveal index={5}>
            <AboutUsFigmaBlock3 />
          </PageBlockReveal>
        </div>
        <PageBlockReveal index={6}>
          <MeetOurTeamHeading variant="desktop-figma" />
        </PageBlockReveal>
      </div>
    </div>
  );
}
