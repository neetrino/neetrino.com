import type { Transition, Variants } from "motion/react";

import { MOTION_DURATION_MS, MOTION_EASE } from "@/lib/motion/tokens";

type DrawerTransitionOptions = Readonly<{
  durationMs: number;
}>;

export const drawerBackdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

export const drawerCardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

export const drawerOverlayVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.04 },
  },
  exit: {
    transition: { staggerChildren: 0.03, staggerDirection: -1 },
  },
};

export function createDrawerTransition({ durationMs }: DrawerTransitionOptions): Transition {
  return {
    duration: durationMs / 1000,
    ease: MOTION_EASE.out,
  };
}

export const scrollRevealHidden = {
  opacity: 0,
  y: 24,
} as const;

export const scrollRevealVisible = {
  opacity: 1,
  y: 0,
} as const;

export function createScrollRevealTransition(durationMs: number, delayMs = 0): Transition {
  return {
    duration: durationMs / 1000,
    delay: delayMs / 1000,
    ease: MOTION_EASE.out,
  };
}

export const DRAWER_MOTION_DURATION_MS = MOTION_DURATION_MS.subtle;
