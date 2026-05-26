"use client";

import { motion, type Transition } from "motion/react";
import type { ReactNode } from "react";
import {
  HOME_HERO_REVEAL_DURATION_MS,
  HOME_HERO_REVEAL_Y_PX,
  HOME_HERO_TITLE_LINE_STAGGER_MS,
} from "@/lib/motion/home-hero-reveal.constants";
import { resolveMotionDurationMs, usePrefersReducedMotion } from "@/lib/motion/reduced-motion";
import { MOTION_DURATION_MS, MOTION_EASE } from "@/lib/motion/tokens";
import { cn } from "@/lib/utils";

export type HeroRevealProfile = "default" | "homeHero";

type HeroRevealProps = {
  readonly children: ReactNode;
  readonly className?: string;
  readonly delayMs?: number;
  readonly profile?: HeroRevealProfile;
  readonly "data-node-id"?: string;
};

function resolveHeroRevealMotion(profile: HeroRevealProfile, prefersReducedMotion: boolean) {
  if (profile === "homeHero") {
    return {
      durationMs: resolveMotionDurationMs(prefersReducedMotion, HOME_HERO_REVEAL_DURATION_MS),
      y: prefersReducedMotion ? 0 : HOME_HERO_REVEAL_Y_PX,
      ease: MOTION_EASE.smooth,
    };
  }

  return {
    durationMs: resolveMotionDurationMs(prefersReducedMotion, MOTION_DURATION_MS.moderate),
    y: prefersReducedMotion ? 0 : 36,
    ease: MOTION_EASE.out,
  };
}

/** One-shot hero entrance — fade + rise on load. */
export function HeroReveal({
  children,
  className,
  delayMs = 0,
  profile = "default",
  "data-node-id": dataNodeId,
}: HeroRevealProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const { durationMs, y, ease } = resolveHeroRevealMotion(profile, prefersReducedMotion);
  const transition: Transition = {
    duration: durationMs / 1000,
    delay: delayMs / 1000,
    ease,
  };

  return (
    <motion.div
      className={cn(className)}
      data-node-id={dataNodeId}
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}

type HeroTitleLineProps = {
  readonly children: ReactNode;
  readonly className?: string;
  readonly index: number;
  readonly profile?: HeroRevealProfile;
};

/** Staggered mobile/desktop hero title lines. */
export function HeroTitleLine({
  children,
  className,
  index,
  profile = "default",
}: HeroTitleLineProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const { durationMs, ease } = resolveHeroRevealMotion(profile, prefersReducedMotion);
  const staggerMs = profile === "homeHero" ? HOME_HERO_TITLE_LINE_STAGGER_MS : 100;
  const transition: Transition = {
    duration: durationMs / 1000,
    delay: prefersReducedMotion ? 0 : (index * staggerMs) / 1000,
    ease,
  };

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -28 }}
      animate={{ opacity: 1, x: 0 }}
      transition={transition}
    >
      {children}
    </motion.span>
  );
}
