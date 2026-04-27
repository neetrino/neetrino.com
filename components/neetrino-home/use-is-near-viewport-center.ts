"use client";

import { type RefObject, useEffect, useState } from "react";

/** Max vertical distance (fraction of `innerHeight`) between block midline and viewport midline. */
const VIEWPORT_CENTER_VERTICAL_TOLERANCE = 0.22;
/** Same for horizontal (fraction of `innerWidth`). */
const VIEWPORT_CENTER_HORIZONTAL_TOLERANCE = 0.28;

function computeIsNearViewportCenter(el: HTMLElement): boolean {
  const rect = el.getBoundingClientRect();
  const vh = window.innerHeight;
  const vw = window.innerWidth;
  if (rect.bottom <= 0 || rect.top >= vh) return false;

  const blockMidY = (rect.top + rect.bottom) / 2;
  const blockMidX = (rect.left + rect.right) / 2;
  const viewMidY = vh / 2;
  const viewMidX = vw / 2;

  return (
    Math.abs(blockMidY - viewMidY) < vh * VIEWPORT_CENTER_VERTICAL_TOLERANCE &&
    Math.abs(blockMidX - viewMidX) < vw * VIEWPORT_CENTER_HORIZONTAL_TOLERANCE
  );
}

/**
 * True when the element’s center sits near the viewport center (scroll position).
 * Updates on scroll, resize, and element size changes.
 */
export function useIsNearViewportCenter<T extends HTMLElement>(
  rootRef: RefObject<T | null>,
): boolean {
  const [isNearCenter, setIsNearCenter] = useState(false);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    let rafId = 0;
    const run = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setIsNearCenter(computeIsNearViewportCenter(el));
      });
    };

    run();
    window.addEventListener("scroll", run, { passive: true });
    window.addEventListener("resize", run);
    const ro = new ResizeObserver(run);
    ro.observe(el);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", run);
      window.removeEventListener("resize", run);
      ro.disconnect();
    };
  }, [rootRef]);

  return isNearCenter;
}
