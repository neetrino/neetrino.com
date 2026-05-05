"use client";

import { useEffect, useState, type RefObject } from "react";
import { ConeDefault } from "@/components/about-us/figma/ConeDefault";
import { ABOUT_FIGMA_POSITIONING_CANVAS_HEIGHT_PX } from "@/lib/about-us-figma-layout.constants";

const CONE_WRAPPER_WIDTH_PX = 191.206;
const CONE_WRAPPER_HEIGHT_PX = 191.206;
const ABOUT_CONE_INITIAL_TOP_PX = 1097;
const ABOUT_CAPSULE_TOP_PX = 1333;
/** Matches Block2 map `inset` bottom `8.13%` vs the 3643px positioning canvas. */
const ABOUT_WORLD_MAP_BOTTOM_PX = ABOUT_FIGMA_POSITIONING_CANVAS_HEIGHT_PX * (1 - 0.0813);
const ABOUT_CAPSULE_BOTTOM_PX = ABOUT_WORLD_MAP_BOTTOM_PX;
const ABOUT_CAPSULE_START_TOP_PX = Math.max(ABOUT_CONE_INITIAL_TOP_PX, ABOUT_CAPSULE_TOP_PX);

/** `top`/`left` use layout px inside the 1440-wide canvas; `getBoundingClientRect` is post-transform when `CanvasScaler` applies `scale()`. */
function readVisualToLayoutScale(container: HTMLElement): number {
  const layoutW = container.offsetWidth;
  if (layoutW <= 0) {
    return 1;
  }
  const visualW = container.getBoundingClientRect().width;
  const scale = visualW / layoutW;
  return scale > 0 && Number.isFinite(scale) ? scale : 1;
}

type AboutUsStickyConeProps = {
  containerRef: RefObject<HTMLDivElement | null>;
};

export function AboutUsStickyCone({ containerRef }: AboutUsStickyConeProps) {
  const [absoluteLeft, setAbsoluteLeft] = useState(0);
  const [absoluteTop, setAbsoluteTop] = useState(ABOUT_CONE_INITIAL_TOP_PX);

  useEffect(() => {
    const updatePosition = () => {
      const container = containerRef.current;

      if (!container) {
        return;
      }

      const rect = container.getBoundingClientRect();
      const layoutScale = readVisualToLayoutScale(container);
      const coneHalfHeightViewportPx = (CONE_WRAPPER_HEIGHT_PX * layoutScale) / 2;
      const viewportCenteredTop = window.innerHeight / 2 - coneHalfHeightViewportPx;
      const finalAbsoluteTop = ABOUT_CAPSULE_BOTTOM_PX - CONE_WRAPPER_HEIGHT_PX;
      const centeredInViewportPx = viewportCenteredTop - rect.top;
      const centeredAbsoluteTopLayout = centeredInViewportPx / layoutScale;

      setAbsoluteTop(
        Math.min(finalAbsoluteTop, Math.max(ABOUT_CAPSULE_START_TOP_PX, centeredAbsoluteTopLayout)),
      );
      setAbsoluteLeft(container.offsetWidth / 2);
    };

    updatePosition();

    window.addEventListener("scroll", updatePosition, { passive: true });
    window.addEventListener("resize", updatePosition);

    return () => {
      window.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", updatePosition);
    };
  }, [containerRef]);

  return (
    <div
      className="-translate-x-1/2 absolute bottom-auto flex items-center justify-center left-1/2 z-0"
      style={{
        left: absoluteLeft,
        top: absoluteTop,
        width: CONE_WRAPPER_WIDTH_PX,
        height: CONE_WRAPPER_HEIGHT_PX,
      }}
    >
      <div className="flex-none rotate-[21.44deg] size-[147.503px]">
        <ConeDefault className="relative size-full" />
      </div>
    </div>
  );
}
