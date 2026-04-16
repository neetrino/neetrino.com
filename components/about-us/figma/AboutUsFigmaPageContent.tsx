"use client";

import { useRef } from "react";
import { AboutUsFigmaBlock1a } from "@/components/about-us/figma/AboutUsFigmaBlock1a";
import { AboutUsFigmaBlock1b } from "@/components/about-us/figma/AboutUsFigmaBlock1b";
import { AboutUsFigmaBlock1bLower } from "@/components/about-us/figma/AboutUsFigmaBlock1bLower";
import { AboutUsFigmaBlock1c } from "@/components/about-us/figma/AboutUsFigmaBlock1c";
import { AboutUsFigmaBlock2 } from "@/components/about-us/figma/AboutUsFigmaBlock2";
import { AboutUsFigmaBlock3 } from "@/components/about-us/figma/AboutUsFigmaBlock3";
import { ABOUT_FIGMA_ROOT_MIN_HEIGHT_PX } from "@/lib/about-us-figma-layout.constants";

/** Figma node 335:905 - page body only (no Awwwards / no Footer v2 per master prompt §3.2). */
export function AboutUsFigmaPageContent() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative mx-auto w-full max-w-[1440px] bg-[#151515]"
      style={{ minHeight: ABOUT_FIGMA_ROOT_MIN_HEIGHT_PX }}
      data-name="ABOUT"
      data-node-id="335:905"
    >
      <AboutUsFigmaBlock1a containerRef={containerRef} />
      <AboutUsFigmaBlock1b />
      <AboutUsFigmaBlock1bLower />
      <AboutUsFigmaBlock1c />
      <AboutUsFigmaBlock2 />
      <AboutUsFigmaBlock3 />
    </div>
  );
}
