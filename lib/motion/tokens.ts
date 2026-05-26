/** Shared motion timing — subtle tier (plan 2 default). */
export const MOTION_DURATION_MS = {
  instant: 0,
  fast: 200,
  subtle: 280,
  moderate: 360,
  /** Home hero entrances — slow fade/rise. */
  expressive: 1040,
} as const;

export type MotionDurationKey = keyof typeof MOTION_DURATION_MS;

/** Cubic-bezier tuples for `motion` transitions. */
export const MOTION_EASE = {
  out: [0.16, 1, 0.3, 1] as const,
  inOut: [0.4, 0, 0.2, 1] as const,
  /** Long hero reveals — gentle deceleration. */
  smooth: [0.33, 1, 0.32, 1] as const,
} as const;

export type MotionEaseKey = keyof typeof MOTION_EASE;
