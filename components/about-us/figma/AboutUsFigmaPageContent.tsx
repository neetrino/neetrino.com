"use client";

import { AboutUsFigmaCanvasInner } from "@/components/about-us/figma/AboutUsFigmaCanvasInner";

/** Full-width desktop About (`lg+`). Tablet hybrid uses `CanvasScaler` + `AboutUsFigmaCanvasInner` in `page.tsx`. */
export function AboutUsFigmaPageContent() {
  return (
    <div className="hidden w-full min-w-0 lg:block">
      <AboutUsFigmaCanvasInner />
    </div>
  );
}
