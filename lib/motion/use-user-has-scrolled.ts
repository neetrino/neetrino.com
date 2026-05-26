"use client";

import { useEffect, useState } from "react";

import { HOME_HERO_COUNT_UP_SCROLL_Y_MIN_PX } from "@/lib/motion/home-hero-count-up.constants";

function readHasUserScrolled(minScrollYPx: number): boolean {
  return typeof window !== "undefined" && window.scrollY >= minScrollYPx;
}

/**
 * True after the user has scrolled the page (not merely opened at scrollY=0).
 */
export function useUserHasScrolled(minScrollYPx = HOME_HERO_COUNT_UP_SCROLL_Y_MIN_PX): boolean {
  const [hasScrolled, setHasScrolled] = useState(() => readHasUserScrolled(minScrollYPx));

  useEffect(() => {
    if (hasScrolled) {
      return;
    }

    const onScroll = () => {
      if (window.scrollY >= minScrollYPx) {
        setHasScrolled(true);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [hasScrolled, minScrollYPx]);

  return hasScrolled;
}
