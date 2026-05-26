"use client";

import { useEffect, useState } from "react";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)" as const;

/**
 * Returns `true` when the user prefers reduced motion.
 * SSR-safe: defaults to `false` until mounted.
 */
export function usePrefersReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(REDUCED_MOTION_QUERY);
    const syncPreference = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    syncPreference();
    mediaQuery.addEventListener("change", syncPreference);
    return () => {
      mediaQuery.removeEventListener("change", syncPreference);
    };
  }, []);

  return prefersReducedMotion;
}

/** Pick full motion duration or instant when reduced motion is preferred. */
export function resolveMotionDurationMs(prefersReducedMotion: boolean, durationMs: number): number {
  return prefersReducedMotion ? 0 : durationMs;
}
