"use client";

import { useEffect, useRef, useState } from "react";

/** Pixels from top before sticky header glass/blur activates. */
export const NAVBAR_STICKY_SCROLL_THRESHOLD_PX = 12;

/**
 * True when `window.scrollY` exceeds `thresholdPx` — for fixed header frosted chrome.
 */
export function useScrolledPastThreshold(
  thresholdPx: number = NAVBAR_STICKY_SCROLL_THRESHOLD_PX,
): boolean {
  const [scrolled, setScrolled] = useState(false);
  const prevRef = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      const next = window.scrollY > thresholdPx;
      if (next !== prevRef.current) {
        prevRef.current = next;
        setScrolled(next);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [thresholdPx]);

  return scrolled;
}
