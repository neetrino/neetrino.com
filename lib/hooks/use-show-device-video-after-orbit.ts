"use client";

import { useEffect, useState } from "react";

/** Delay before mounting showcase screen video after a device becomes front (orbit animation). */
export const DEVICE_SHOWCASE_VIDEO_MOUNT_DELAY_MS = 400 as const;

/**
 * Mounts screen video only after the device is front and the orbit transition has settled.
 */
export function useShowDeviceVideoAfterOrbit(isFront: boolean): boolean {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    if (!isFront) {
      return undefined;
    }
    const t = setTimeout(() => setShowVideo(true), DEVICE_SHOWCASE_VIDEO_MOUNT_DELAY_MS);
    return () => {
      clearTimeout(t);
      setShowVideo(false);
    };
  }, [isFront]);

  return isFront && showVideo;
}
