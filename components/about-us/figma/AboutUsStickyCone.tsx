"use client";

import { useEffect, useState, type RefObject } from "react";
import { ConeDefault } from "@/components/about-us/figma/ConeDefault";
import { ABOUT_FIGMA_ROOT_MIN_HEIGHT_PX } from "@/lib/about-us-figma-layout.constants";

const CONE_WRAPPER_WIDTH_PX = 191.206;
const CONE_WRAPPER_HEIGHT_PX = 191.206;
const ABOUT_CONE_INITIAL_TOP_PX = 1097;
const ABOUT_CAPSULE_TOP_PX = 1333;
const ABOUT_WORLD_MAP_BOTTOM_PX = ABOUT_FIGMA_ROOT_MIN_HEIGHT_PX * (1 - 0.0813);
const ABOUT_CAPSULE_BOTTOM_PX = ABOUT_WORLD_MAP_BOTTOM_PX;
const ABOUT_CAPSULE_START_TOP_PX = Math.max(ABOUT_CONE_INITIAL_TOP_PX, ABOUT_CAPSULE_TOP_PX);

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
      const containerTopPage = window.scrollY + rect.top;
      const viewportCenteredTop = window.innerHeight / 2 - CONE_WRAPPER_HEIGHT_PX / 2;
      const finalAbsoluteTop = ABOUT_CAPSULE_BOTTOM_PX - CONE_WRAPPER_HEIGHT_PX;
      const centeredAbsoluteTop = window.scrollY - containerTopPage + viewportCenteredTop;

      setAbsoluteTop(
        Math.min(finalAbsoluteTop, Math.max(ABOUT_CAPSULE_START_TOP_PX, centeredAbsoluteTop)),
      );
      setAbsoluteLeft(rect.width / 2);
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
