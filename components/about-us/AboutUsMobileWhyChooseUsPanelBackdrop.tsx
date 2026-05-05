"use client";

import { createElement, useId } from "react";
import {
  ABOUT_MOBILE_WHY_CHOOSE_PANEL_FLIP_CLASS,
  ABOUT_MOBILE_WHY_CHOOSE_PANEL_PATH_D,
} from "@/lib/about-us-mobile-why-choose.constants";
import { cn } from "@/lib/utils";

/**
 * Figma NEETRINO-WEB `479:1284` — markup order matches Dev Mode export: `foreignObject` → `path` → `defs`.
 * `clipPath` id is dynamic for React `useId()`. Optional wrapper transform via
 * `ABOUT_MOBILE_WHY_CHOOSE_PANEL_FLIP_CLASS` (empty = match reference silhouette).
 */
export function AboutUsMobileWhyChooseUsPanelBackdrop() {
  const reactId = useId();
  const clipId = `about-mobile-why-choose-479-1284-${reactId.replace(/:/g, "")}`;

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 z-0 select-none bg-transparent",
        ABOUT_MOBILE_WHY_CHOOSE_PANEL_FLIP_CLASS,
      )}
      aria-hidden
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 417 865"
        width={417}
        height={865}
        fill="none"
        className="block h-full w-full max-h-none max-w-none bg-transparent"
        preserveAspectRatio="none"
        data-node-id="479:1284"
      >
        <foreignObject x={-24} y={-24} width={465} height={913}>
          {createElement("div", {
            xmlns: "http://www.w3.org/1999/xhtml",
            className: "bg-transparent",
            style: {
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              clipPath: `url(#${clipId})`,
              WebkitClipPath: `url(#${clipId})`,
              height: "100%",
              width: "100%",
            },
          })}
        </foreignObject>
        <path
          data-figma-bg-blur-radius={24}
          d={ABOUT_MOBILE_WHY_CHOOSE_PANEL_PATH_D}
          fill="#D9D9D9"
          fillOpacity={0.1}
        />
        <defs>
          <clipPath id={clipId} transform="translate(24 24)">
            <path d={ABOUT_MOBILE_WHY_CHOOSE_PANEL_PATH_D} />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
