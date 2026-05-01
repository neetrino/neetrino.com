"use client";

import { useEffect, useState, type CSSProperties, type RefObject } from "react";
import { ConeDefault } from "@/components/about-us/figma/ConeDefault";
import {
  ABOUT_US_MOBILE_STICKY_CONE_BLUR_CLASS,
  ABOUT_US_MOBILE_STICKY_CONE_INNER_PX,
  ABOUT_US_MOBILE_STICKY_CONE_ROTATE_DEG,
  ABOUT_US_MOBILE_STICKY_CONE_SCROLL_BOTTOM_INSET_PX,
  ABOUT_US_MOBILE_STICKY_CONE_SCROLL_BOTTOM_RUNWAY_PX,
  ABOUT_US_MOBILE_STICKY_CONE_SCROLL_TOP_INSET_PX,
  ABOUT_US_MOBILE_STICKY_CONE_WRAPPER_PX,
  ABOUT_US_MOBILE_STICKY_CONE_Z_INDEX,
} from "@/lib/about-us-mobile-sticky-cone.constants";
import { cn } from "@/lib/utils";

type AboutUsMobileStickyConeProps = {
  containerRef: RefObject<HTMLDivElement | null>;
};

function computePosition(container: HTMLDivElement): { left: number; top: number } | null {
  const trackH = container.clientHeight;
  const wrapper = ABOUT_US_MOBILE_STICKY_CONE_WRAPPER_PX;

  if (trackH <= 0) {
    return null;
  }

  const rect = container.getBoundingClientRect();
  const containerDocTop = window.scrollY + rect.top;
  const viewportCenterDoc = window.scrollY + window.innerHeight / 2;

  /** 0 when the viewport center reaches the tube top; 1 after it has moved a full `trackH` down the section. */
  const rawProgress = (viewportCenterDoc - containerDocTop) / trackH;
  const progress = Math.min(1, Math.max(0, rawProgress));

  const startTop = ABOUT_US_MOBILE_STICKY_CONE_SCROLL_TOP_INSET_PX;
  const rawEndTop =
    trackH -
    wrapper -
    ABOUT_US_MOBILE_STICKY_CONE_SCROLL_BOTTOM_INSET_PX +
    ABOUT_US_MOBILE_STICKY_CONE_SCROLL_BOTTOM_RUNWAY_PX;
  const endTop = Math.max(startTop, rawEndTop);
  const top = startTop + progress * (endTop - startTop);

  return { left: rect.width / 2, top };
}

/**
 * Scroll-linked cone on the mobile mission tube — same asset/tilt as desktop `AboutUsStickyCone`;
 * `top` is linear in scroll progress from tube top through bottom + runway (wrapper blur).
 */
export function AboutUsMobileStickyCone({ containerRef }: AboutUsMobileStickyConeProps) {
  const [absoluteLeft, setAbsoluteLeft] = useState(0);
  const [absoluteTop, setAbsoluteTop] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      const container = containerRef.current;
      if (!container) {
        return;
      }
      const next = computePosition(container);
      if (!next) {
        return;
      }
      setAbsoluteLeft(next.left);
      setAbsoluteTop(next.top);
    };

    updatePosition();

    const container = containerRef.current;
    const resizeObserver =
      typeof ResizeObserver !== "undefined" && container
        ? new ResizeObserver(updatePosition)
        : null;
    if (resizeObserver && container) {
      resizeObserver.observe(container);
    }

    window.addEventListener("scroll", updatePosition, { passive: true });
    window.addEventListener("resize", updatePosition);

    return () => {
      resizeObserver?.disconnect();
      window.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", updatePosition);
    };
  }, [containerRef]);

  const conePositionStyle = {
    left: absoluteLeft,
    top: absoluteTop,
    width: ABOUT_US_MOBILE_STICKY_CONE_WRAPPER_PX,
    height: ABOUT_US_MOBILE_STICKY_CONE_WRAPPER_PX,
    zIndex: ABOUT_US_MOBILE_STICKY_CONE_Z_INDEX,
  } satisfies CSSProperties;

  return (
    <div
      className={cn(
        "-translate-x-1/2 pointer-events-none absolute bottom-auto left-1/2 flex select-none items-center justify-center",
        ABOUT_US_MOBILE_STICKY_CONE_BLUR_CLASS,
      )}
      style={conePositionStyle}
      data-name="Cone/Default"
      data-node-id="479:1274"
      aria-hidden
    >
      <div
        className="flex-none"
        style={{
          width: ABOUT_US_MOBILE_STICKY_CONE_INNER_PX,
          height: ABOUT_US_MOBILE_STICKY_CONE_INNER_PX,
          transform: `rotate(${ABOUT_US_MOBILE_STICKY_CONE_ROTATE_DEG}deg)`,
        }}
      >
        <ConeDefault className="relative size-full" />
      </div>
    </div>
  );
}
