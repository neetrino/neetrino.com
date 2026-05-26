/**
 * 450+ pointing hand — arc tap with finger angle sweep (rest → press).
 * Finger aim in screen space: shallow arc toward BAN2 (upper-left), not vertical.
 */

/** Finger elevation at rest (deg above horizontal, toward the card). */
export const HOME_450_HAND_FINGER_ANGLE_REST_DEG = 42;

/** Finger elevation when pressing the card (deg above horizontal). */
export const HOME_450_HAND_FINGER_ANGLE_PRESS_DEG = 24;

/**
 * CSS `rotate` on `.home-450-hand-point-inner` (after `-scale-y-100 rotate-180`).
 * Tuned visually — do not use `angle - 90`; the flipped asset inverts the mapping.
 */
export const HOME_450_HAND_ROTATE_REST_DEG = 16;

export const HOME_450_HAND_ROTATE_PRESS_DEG = -6;

/** Halfway rotation between rest and press (for arc keyframe). */
export const HOME_450_HAND_ROTATE_MID_DEG =
  (HOME_450_HAND_ROTATE_REST_DEG + HOME_450_HAND_ROTATE_PRESS_DEG) / 2;

/** Arc radius of the tap stroke (px). */
export const HOME_450_HAND_ARC_RADIUS_PX = 24;

/** Stroke toward BAN2 — upper-left from the wrist (deg, 0° = right). */
export const HOME_450_HAND_ARC_BEARING_DEG = 148;

const ARC_BEARING_RAD = (HOME_450_HAND_ARC_BEARING_DEG * Math.PI) / 180;

/** Press endpoint along the arc (toward the card: left + up in screen space). */
export const HOME_450_HAND_ARC_PRESS_X_PX = Math.round(
  Math.cos(ARC_BEARING_RAD) * HOME_450_HAND_ARC_RADIUS_PX,
);

export const HOME_450_HAND_ARC_PRESS_Y_PX = Math.round(
  -Math.sin(ARC_BEARING_RAD) * HOME_450_HAND_ARC_RADIUS_PX,
);

/** Midpoint on the rounded stroke (bulge away from the chord). */
export const HOME_450_HAND_ARC_MID_X_PX = Math.round(
  HOME_450_HAND_ARC_PRESS_X_PX * 0.5 -
    Math.sin(ARC_BEARING_RAD) * HOME_450_HAND_ARC_RADIUS_PX * 0.38,
);

export const HOME_450_HAND_ARC_MID_Y_PX = Math.round(
  HOME_450_HAND_ARC_PRESS_Y_PX * 0.5 -
    Math.cos(ARC_BEARING_RAD) * HOME_450_HAND_ARC_RADIUS_PX * 0.38,
);

/** Pointing loop duration (ms) — slow, smooth stroke. */
export const HOME_450_HAND_POINT_CYCLE_MS = 5400;

/** CSS easing for the hand loop (matches `MOTION_EASE.smooth` feel). */
export const HOME_450_HAND_POINT_EASE = "cubic-bezier(0.37, 0, 0.18, 1)" as const;

/** Transform origin — wrist off-screen right; pivot near index knuckle. */
export const HOME_450_HAND_TRANSFORM_ORIGIN = "88% 72%" as const;
