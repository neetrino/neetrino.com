"use client";

import { useEffect, useState, type ReactNode } from "react";
import { DESKTOP_DECOR_DEFER_IDLE_TIMEOUT_MS } from "@/lib/desktop-scene-mount.constants";
import { scheduleAfterTwoFramesAndIdle } from "@/lib/schedule-after-frame-idle";

type DeferAfterPaintProps = {
  children: ReactNode;
  idleTimeoutMs?: number;
};

/**
 * Mounts children after paint + idle to trim the first commit cost of heavy decor.
 */
export function DeferAfterPaint({
  children,
  idleTimeoutMs = DESKTOP_DECOR_DEFER_IDLE_TIMEOUT_MS,
}: DeferAfterPaintProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    return scheduleAfterTwoFramesAndIdle(() => {
      setReady(true);
    }, idleTimeoutMs);
  }, [idleTimeoutMs]);

  if (!ready) {
    return null;
  }

  return <>{children}</>;
}
