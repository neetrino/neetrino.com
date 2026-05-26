"use client";

import { type RefObject, useEffect } from "react";

/**
 * Pauses CSS animations on matched descendants when the container leaves the viewport.
 */
export function usePauseAnimationWhenOffScreen(
  containerRef: RefObject<HTMLElement | null>,
  animatedSelector: string,
): void {
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const inner = el.querySelectorAll(animatedSelector);
    const obs = new IntersectionObserver(
      ([entry]) => {
        const playState = entry?.isIntersecting ? "running" : "paused";
        inner.forEach((row) => {
          (row as HTMLElement).style.animationPlayState = playState;
        });
      },
      { threshold: 0 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [animatedSelector, containerRef]);
}
