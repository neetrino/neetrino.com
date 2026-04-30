"use client";

import type { CSSProperties } from "react";
import { FigmaFillImage } from "@/components/shared/FigmaFillImage";
import { imgVector1 } from "@/lib/about-us-figma-asset-urls";
import {
  ABOUT_VECTOR_GRID_OUTER_HEIGHT_PX,
  ABOUT_VECTOR_GRID_UNIFORM_SCALE,
} from "@/lib/about-us-figma-layout.constants";
import { HOME_DESKTOP_VECTOR_GRID_WRAP_HEIGHT_PX } from "@/lib/home-desktop-layout";

const transformStyle = {
  "--transform-inner-width": "0",
  "--transform-inner-height": "0",
} as CSSProperties;

const HOME_VECTOR_GRID_SLICE_COUNT = Math.ceil(
  HOME_DESKTOP_VECTOR_GRID_WRAP_HEIGHT_PX / ABOUT_VECTOR_GRID_OUTER_HEIGHT_PX,
);

function NeetrinoHomeDesktopVectorGridSlice() {
  return (
    <div
      className="flex w-full flex-none items-center justify-center overflow-hidden"
      style={{ height: ABOUT_VECTOR_GRID_OUTER_HEIGHT_PX }}
    >
      <div
        className="flex-none"
        style={{
          transform: `rotate(90deg) scale(${ABOUT_VECTOR_GRID_UNIFORM_SCALE})`,
          transformOrigin: "center center",
        }}
      >
        <div className="relative h-[1722px] w-[3723px]" data-name="Vector" data-node-id="335:931">
          <FigmaFillImage src={imgVector1} />
        </div>
      </div>
    </div>
  );
}

/** Same cell size as About Us Figma 335:931; stacked slices cover full home canvas to the bottom strip. */
export function NeetrinoHomeDesktopVectorGrid() {
  return (
    <div
      className="-translate-x-1/2 pointer-events-none absolute left-[calc(50%-38px)] top-[-40px] z-0 w-[1722px] overflow-hidden mix-blend-overlay"
      style={{ ...transformStyle, height: HOME_DESKTOP_VECTOR_GRID_WRAP_HEIGHT_PX }}
      aria-hidden
    >
      {Array.from({ length: HOME_VECTOR_GRID_SLICE_COUNT }, (_, sliceIndex) => (
        <div
          key={sliceIndex}
          className="absolute inset-x-0 overflow-hidden"
          style={{
            top: sliceIndex * ABOUT_VECTOR_GRID_OUTER_HEIGHT_PX,
            height: ABOUT_VECTOR_GRID_OUTER_HEIGHT_PX,
          }}
        >
          <NeetrinoHomeDesktopVectorGridSlice />
        </div>
      ))}
    </div>
  );
}
