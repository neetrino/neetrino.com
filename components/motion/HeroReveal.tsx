"use client";

import { motion, type Transition } from "motion/react";
import type { ReactNode } from "react";
import { resolveMotionDurationMs, usePrefersReducedMotion } from "@/lib/motion/reduced-motion";
import { MOTION_DURATION_MS, MOTION_EASE } from "@/lib/motion/tokens";
import { cn } from "@/lib/utils";

type HeroRevealProps = {
  readonly children: ReactNode;
  readonly className?: string;
  readonly delayMs?: number;
  readonly "data-node-id"?: string;
};

/** One-shot hero entrance — fade + rise on load. */
export function HeroReveal({
  children,
  className,
  delayMs = 0,
  "data-node-id": dataNodeId,
}: HeroRevealProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const durationMs = resolveMotionDurationMs(prefersReducedMotion, MOTION_DURATION_MS.moderate);
  const transition: Transition = {
    duration: durationMs / 1000,
    delay: delayMs / 1000,
    ease: MOTION_EASE.out,
  };

  return (
    <motion.div
      className={cn(className)}
      data-node-id={dataNodeId}
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 36 }}
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
};

/** Staggered mobile/desktop hero title lines. */
export function HeroTitleLine({ children, className, index }: HeroTitleLineProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const durationMs = resolveMotionDurationMs(prefersReducedMotion, MOTION_DURATION_MS.moderate);
  const transition: Transition = {
    duration: durationMs / 1000,
    delay: prefersReducedMotion ? 0 : index * 0.1,
    ease: MOTION_EASE.out,
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
