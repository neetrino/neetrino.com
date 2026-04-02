"use client";

import { useEffect, useState, type ReactNode } from "react";
import { DESKTOP_SCENE_MOUNT_IDLE_TIMEOUT_MS } from "@/lib/desktop-scene-mount.constants";
import { scheduleAfterTwoFramesAndIdle } from "@/lib/schedule-after-frame-idle";

type DesktopSceneMountGateProps = {
  children: ReactNode;
  canvasWidth: number;
  canvasHeight: number;
};

/**
 * Defers mounting heavy canvas children until after first paint + idle,
 * keeping CanvasScaler layout stable with a same-size solid placeholder.
 */
export function DesktopSceneMountGate({
  children,
  canvasWidth,
  canvasHeight,
}: DesktopSceneMountGateProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    return scheduleAfterTwoFramesAndIdle(() => {
      setReady(true);
    }, DESKTOP_SCENE_MOUNT_IDLE_TIMEOUT_MS);
  }, []);

  if (!ready) {
    return (
      <div
        className="bg-[#151515] relative"
        style={{ width: canvasWidth, height: canvasHeight }}
        aria-hidden
      />
    );
  }

  return <>{children}</>;
}
