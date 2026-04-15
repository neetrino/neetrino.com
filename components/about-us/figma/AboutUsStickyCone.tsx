"use client";

import { useEffect, useState, type RefObject } from "react";
import { ConeDefault } from "@/components/about-us/figma/ConeDefault";

const CONE_WRAPPER_WIDTH_PX = 191.206;
const CONE_WRAPPER_HEIGHT_PX = 191.206;
const CONE_CENTER_OFFSET_X_PX = -11.4;
const ABOUT_CONE_INITIAL_TOP_PX = 1097;
const ABOUT_WORLD_MAP_TOP_PX = 2823;

type StickyMode = "before" | "stuck" | "after";

type AboutUsStickyConeProps = {
  containerRef: RefObject<HTMLDivElement | null>;
};

export function AboutUsStickyCone({ containerRef }: AboutUsStickyConeProps) {
  const [mode, setMode] = useState<StickyMode>("before");
  const [fixedLeft, setFixedLeft] = useState(0);
  const [fixedTop, setFixedTop] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      const container = containerRef.current;

      if (!container) {
        return;
      }

      const rect = container.getBoundingClientRect();
      const containerTopPage = window.scrollY + rect.top;
      const viewportCenteredTop = window.innerHeight / 2 - CONE_WRAPPER_HEIGHT_PX / 2;
      const stickyStart = containerTopPage + ABOUT_CONE_INITIAL_TOP_PX - viewportCenteredTop;
      const finalAbsoluteTop = ABOUT_WORLD_MAP_TOP_PX - CONE_WRAPPER_HEIGHT_PX / 2;
      const stickyEnd = containerTopPage + finalAbsoluteTop - viewportCenteredTop;

      if (window.scrollY < stickyStart) {
        setMode("before");
      } else if (window.scrollY >= stickyEnd) {
        setMode("after");
      } else {
        setMode("stuck");
      }

      setFixedTop(viewportCenteredTop);
      setFixedLeft(rect.left + rect.width / 2 + CONE_CENTER_OFFSET_X_PX - CONE_WRAPPER_WIDTH_PX / 2);
    };

    updatePosition();

    window.addEventListener("scroll", updatePosition, { passive: true });
    window.addEventListener("resize", updatePosition);

    return () => {
      window.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", updatePosition);
    };
  }, [containerRef]);

  if (mode === "stuck") {
    return (
      <div
        className="pointer-events-none fixed z-10 flex items-center justify-center"
        style={{
          left: fixedLeft,
          top: fixedTop,
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

  return (
    <div
      className="-translate-x-1/2 absolute bottom-auto flex items-center justify-center left-[calc(50%-11.4px)] z-10"
      style={{
        top: mode === "after" ? ABOUT_WORLD_MAP_TOP_PX - CONE_WRAPPER_HEIGHT_PX / 2 : ABOUT_CONE_INITIAL_TOP_PX,
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
