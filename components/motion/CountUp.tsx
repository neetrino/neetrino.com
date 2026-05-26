"use client";

import { useInView } from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";
import { COUNT_UP_DURATION_MS, COUNT_UP_EASE_OUT_POWER } from "@/lib/motion/count-up.constants";
import type { HomeHeroCountUpEasing } from "@/lib/motion/home-hero-count-up.constants";
import {
  HOME_HERO_COUNT_UP_IN_VIEW_AMOUNT,
  HOME_HERO_COUNT_UP_IN_VIEW_MARGIN,
} from "@/lib/motion/home-hero-count-up.constants";
import { formatStatValue, parseStatValue } from "@/lib/motion/parse-stat-value";
import { usePrefersReducedMotion } from "@/lib/motion/reduced-motion";
import { useUserHasScrolled } from "@/lib/motion/use-user-has-scrolled";
import { cn } from "@/lib/utils";

type CountUpProps = {
  readonly value: string;
  readonly className?: string;
  readonly delayMs?: number;
  readonly durationMs?: number;
  readonly easing?: HomeHeroCountUpEasing;
  /** When true, waits for user scroll before counting (hero stats below the fold). */
  readonly startAfterUserScroll?: boolean;
};

function easeOut(progress: number): number {
  return 1 - (1 - progress) ** COUNT_UP_EASE_OUT_POWER;
}

function applyEasing(progress: number, easing: HomeHeroCountUpEasing): number {
  if (easing === "linear") {
    return progress;
  }
  return easeOut(progress);
}

/**
 * Counts from 0 to the numeric part of `value` when scrolled into view (once).
 */
export function CountUp({
  value,
  className,
  delayMs = 0,
  durationMs = COUNT_UP_DURATION_MS,
  easing = "easeOut",
  startAfterUserScroll = false,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, {
    once: true,
    amount: HOME_HERO_COUNT_UP_IN_VIEW_AMOUNT,
    margin: HOME_HERO_COUNT_UP_IN_VIEW_MARGIN,
  });
  const hasUserScrolled = useUserHasScrolled();
  const prefersReducedMotion = usePrefersReducedMotion();
  const parsed = useMemo(() => parseStatValue(value), [value]);
  const finalText = useMemo(() => formatStatValue(parsed.end, parsed), [parsed]);
  const zeroText = useMemo(() => formatStatValue(0, parsed), [parsed]);

  const canStartCountUp =
    isInView && (!startAfterUserScroll || hasUserScrolled || prefersReducedMotion);

  const isAnimating = canStartCountUp && !prefersReducedMotion;
  const [animatedDisplay, setAnimatedDisplay] = useState<string | null>(null);

  const display = prefersReducedMotion
    ? canStartCountUp
      ? finalText
      : zeroText
    : isAnimating
      ? (animatedDisplay ?? zeroText)
      : zeroText;

  useEffect(() => {
    if (!isAnimating) {
      return;
    }

    let rafId = 0;
    let cancelled = false;

    const run = (startMs: number) => {
      rafId = requestAnimationFrame((now) => {
        if (cancelled) {
          return;
        }

        const elapsed = now - startMs - delayMs;
        if (elapsed < 0) {
          run(startMs);
          return;
        }

        const progress = Math.min(elapsed / durationMs, 1);
        const current = parsed.end * applyEasing(progress, easing);
        setAnimatedDisplay(formatStatValue(current, parsed));

        if (progress < 1) {
          run(startMs);
          return;
        }

        setAnimatedDisplay(finalText);
      });
    };

    run(performance.now());

    return () => {
      cancelled = true;
      cancelAnimationFrame(rafId);
    };
  }, [delayMs, durationMs, easing, finalText, isAnimating, parsed]);

  return (
    <span ref={ref} className={cn(className)}>
      {display}
    </span>
  );
}
