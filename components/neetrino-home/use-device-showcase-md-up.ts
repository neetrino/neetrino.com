"use client";

import { useSyncExternalStore } from "react";

/** Aligns with Tailwind `md:` (768px). */
const DEVICE_SHOWCASE_MD_UP_QUERY = "(min-width: 768px)" as const;

function subscribeMdUp(onStoreChange: () => void) {
  const mq = window.matchMedia(DEVICE_SHOWCASE_MD_UP_QUERY);
  mq.addEventListener("change", onStoreChange);
  return () => mq.removeEventListener("change", onStoreChange);
}

function getMdUpSnapshot() {
  return window.matchMedia(DEVICE_SHOWCASE_MD_UP_QUERY).matches;
}

function getMdUpServerSnapshot() {
  return false;
}

/** `true` when viewport is `md` and up (Tailwind `md:` / 768px). Reserved for layout; not used for video src. */
export function useDeviceShowcaseMdUp(): boolean {
  return useSyncExternalStore(subscribeMdUp, getMdUpSnapshot, getMdUpServerSnapshot);
}
