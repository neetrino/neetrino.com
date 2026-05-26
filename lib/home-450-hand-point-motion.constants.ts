/**
 * 450+ pointing hand — one rounded approach, then a straight press toward BAN2.
 * Finger aim in screen space: shallow arc (upper-left), then chord stroke on the card.
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

/** Rounded approach only — single arc before the straight press (px). */
export const HOME_450_HAND_ARC_RADIUS_PX = 18;

/** Straight press toward the card after the arc (px) — larger than the arc radius. */
export const HOME_450_HAND_STRAIGHT_PRESS_DISTANCE_PX = 36;

/** Stroke toward BAN2 — upper-left from the wrist (deg, 0° = right). */
export const HOME_450_HAND_ARC_BEARING_DEG = 148;

const ARC_BEARING_RAD = (HOME_450_HAND_ARC_BEARING_DEG * Math.PI) / 180;

/** Arc apex (one rounded leg: rest → here). */
export const HOME_450_HAND_ARC_MID_X_PX = Math.round(
  Math.cos(ARC_BEARING_RAD) * HOME_450_HAND_ARC_RADIUS_PX * 0.62 -
    Math.sin(ARC_BEARING_RAD) * HOME_450_HAND_ARC_RADIUS_PX * 0.42,
);

export const HOME_450_HAND_ARC_MID_Y_PX = Math.round(
  -Math.sin(ARC_BEARING_RAD) * HOME_450_HAND_ARC_RADIUS_PX * 0.62 -
    Math.cos(ARC_BEARING_RAD) * HOME_450_HAND_ARC_RADIUS_PX * 0.42,
);

/** Straight chord from arc apex toward the tile (right → left in screen space). */
export const HOME_450_HAND_STRAIGHT_PRESS_X_PX = Math.round(
  Math.cos(ARC_BEARING_RAD) * HOME_450_HAND_STRAIGHT_PRESS_DISTANCE_PX,
);

export const HOME_450_HAND_STRAIGHT_PRESS_Y_PX = Math.round(
  -Math.sin(ARC_BEARING_RAD) * HOME_450_HAND_STRAIGHT_PRESS_DISTANCE_PX,
);

/** Pointing loop duration (ms) — slow, smooth stroke. */
export const HOME_450_HAND_POINT_CYCLE_MS = 5400;

/** CSS easing for the hand loop (matches `MOTION_EASE.smooth` feel). */
export const HOME_450_HAND_POINT_EASE = "cubic-bezier(0.37, 0, 0.18, 1)" as const;

/** Transform origin — wrist off-screen right; pivot near index knuckle. */
export const HOME_450_HAND_TRANSFORM_ORIGIN = "88% 72%" as const;
