"use client";

import { motion, type Transition } from "motion/react";
import type { CSSProperties, ReactNode } from "react";
import {
  SCROLL_REVEAL_DURATION_MS,
  SCROLL_REVEAL_SLOW_DURATION_MS,
  SCROLL_REVEAL_SLOW_Y_PX,
  SCROLL_REVEAL_VIEWPORT_AMOUNT,
  SCROLL_REVEAL_VIEWPORT_MARGIN,
  SCROLL_REVEAL_Y_PX,
} from "@/lib/motion/scroll-reveal.constants";
import { resolveMotionDurationMs, usePrefersReducedMotion } from "@/lib/motion/reduced-motion";
import { MOTION_EASE } from "@/lib/motion/tokens";
import { cn } from "@/lib/utils";

export type RevealProfile = "default" | "slow";

type RevealProps = {
  readonly children?: ReactNode;
  readonly className?: string;
  readonly delayMs?: number;
  readonly profile?: RevealProfile;
  readonly style?: CSSProperties;
  readonly "data-node-id"?: string;
};

function resolveRevealMotion(profile: RevealProfile, prefersReducedMotion: boolean) {
  if (profile === "slow") {
    return {
      durationMs: resolveMotionDurationMs(prefersReducedMotion, SCROLL_REVEAL_SLOW_DURATION_MS),
      y: prefersReducedMotion ? 0 : SCROLL_REVEAL_SLOW_Y_PX,
      ease: MOTION_EASE.smooth,
    };
  }

  return {
    durationMs: resolveMotionDurationMs(prefersReducedMotion, SCROLL_REVEAL_DURATION_MS),
    y: prefersReducedMotion ? 0 : SCROLL_REVEAL_Y_PX,
    ease: MOTION_EASE.out,
  };
}

/**
 * Fade + rise when the block scrolls into view (once).
 * Use on section wrappers — not on canvas scale roots.
 */
export function Reveal({
  children,
  className,
  delayMs = 0,
  profile = "slow",
  style,
  "data-node-id": dataNodeId,
}: RevealProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const { durationMs, y, ease } = resolveRevealMotion(profile, prefersReducedMotion);
  const transition: Transition = {
    duration: durationMs / 1000,
    delay: prefersReducedMotion ? 0 : delayMs / 1000,
    ease,
  };

  return (
    <motion.div
      className={cn(className)}
      style={style}
      data-node-id={dataNodeId}
      data-reveal-root=""
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        amount: SCROLL_REVEAL_VIEWPORT_AMOUNT,
        margin: SCROLL_REVEAL_VIEWPORT_MARGIN,
      }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
