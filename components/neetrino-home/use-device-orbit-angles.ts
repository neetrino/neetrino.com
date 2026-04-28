"use client";

import { useEffect, useRef, useState } from "react";

export type OrbitDeviceId = 0 | 1 | 2 | 3;

export type OrbitSlotOrder = readonly [OrbitDeviceId, OrbitDeviceId, OrbitDeviceId, OrbitDeviceId];

const DEVICE_IDS: readonly OrbitDeviceId[] = [0, 1, 2, 3];

/** Matches `ORBIT_MS` in `EllipseDeviceShowcase`. */
export const ORBIT_DURATION_MS = 720;

/** Ellipse in % of scene: `left` uses % of width, `top` uses % of height. */
export type OrbitEllipseParams = Readonly<{
  cx: number;
  cy: number;
  rx: number;
  ry: number;
}>;

const BASE_ORBIT: OrbitEllipseParams = {
  cx: 50,
  cy: 30.5,
  rx: 28.5,
  ry: 19.2,
};

/**
 * Orbit when device `k` is in the center — only that row is used (`frontDeviceId === k`).
 * Change `cx`/`cy` to shift the whole ring; `rx`/`ry` tighten or widen horizontal / vertical spread.
 */
export const ORBIT_WHEN_FRONT: Record<OrbitDeviceId, OrbitEllipseParams> = {
  0: BASE_ORBIT,
  1: BASE_ORBIT,
  2: BASE_ORBIT,
  3: BASE_ORBIT,
};

function orbitForFront(frontId: OrbitDeviceId): OrbitEllipseParams {
  return ORBIT_WHEN_FRONT[frontId];
}

/** Slot 0 = left, 1 = top, 2 = front, 3 = right — angles on the oval (radians). */
const SLOT_ANGLE_RAD: readonly [number, number, number, number] = [
  Math.PI,
  -Math.PI / 2,
  Math.PI / 2,
  0,
];

function slotIndexForDevice(order: OrbitSlotOrder, id: OrbitDeviceId): 0 | 1 | 2 | 3 {
  return order.indexOf(id) as 0 | 1 | 2 | 3;
}

function anglesForOrder(order: OrbitSlotOrder): Record<OrbitDeviceId, number> {
  const out = {} as Record<OrbitDeviceId, number>;
  for (const id of DEVICE_IDS) {
    out[id] = SLOT_ANGLE_RAD[slotIndexForDevice(order, id)];
  }
  return out;
}

function ordersEqual(a: OrbitSlotOrder, b: OrbitSlotOrder): boolean {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}

function shortestAngleDelta(from: number, to: number): number {
  let d = to - from;
  while (d > Math.PI) d -= 2 * Math.PI;
  while (d < -Math.PI) d += 2 * Math.PI;
  return d;
}

function easeOutCubic(t: number): number {
  return 1 - (1 - t) ** 3;
}

export function orbitPercentPosition(
  angleRad: number,
  frontDeviceId: OrbitDeviceId,
): { left: string; top: string } {
  const o = orbitForFront(frontDeviceId);
  const x = o.cx + o.rx * Math.cos(angleRad);
  const y = o.cy + o.ry * Math.sin(angleRad);
  return { left: `${x}%`, top: `${y}%` };
}

/**
 * Smooth orbital motion: each device’s angle is eased toward the target slot angle,
 * so frames move along the ellipse instead of linearly in `left`/`top` between anchors.
 */
export function useDeviceOrbitAngles(deviceAtSlot: OrbitSlotOrder): Record<OrbitDeviceId, number> {
  const [angles, setAngles] = useState<Record<OrbitDeviceId, number>>(() =>
    anglesForOrder(deviceAtSlot),
  );
  const anglesRef = useRef(angles);
  const settledOrderRef = useRef<OrbitSlotOrder>(deviceAtSlot);

  useEffect(() => {
    anglesRef.current = angles;
  }, [angles]);

  useEffect(() => {
    if (ordersEqual(settledOrderRef.current, deviceAtSlot)) return;

    let cancelled = false;
    const startAngles: Record<OrbitDeviceId, number> = { ...anglesRef.current };
    const endAngles = anglesForOrder(deviceAtSlot);
    const t0 = performance.now();
    let raf = 0;

    const step = (now: number) => {
      if (cancelled) return;
      const u = Math.min(1, (now - t0) / ORBIT_DURATION_MS);
      const t = easeOutCubic(u);
      const next: Record<OrbitDeviceId, number> = { ...startAngles };
      for (const id of DEVICE_IDS) {
        next[id] = startAngles[id] + shortestAngleDelta(startAngles[id], endAngles[id]) * t;
      }
      anglesRef.current = next;
      setAngles(next);
      if (u < 1) {
        raf = requestAnimationFrame(step);
      } else {
        settledOrderRef.current = deviceAtSlot;
      }
    };

    raf = requestAnimationFrame(step);
    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
    };
  }, [deviceAtSlot]);

  return angles;
}
