/** Device id `0…3` — must match `videoSlotRefs` index (iPhone, iPad, MacBook, iMac). */
export type ShowcaseFrontDeviceId = 0 | 1 | 2 | 3;

/**
 * When the block enters the viewport center band, restart **all** slot videos from 0; play only the front.
 * MacBook uses two different `<video>` nodes (front vs orbit); resetting every slot keeps iPhone / iPad /
 * iMac aligned with that “always from the start” behavior on scroll and orbit change.
 * When it leaves the band, all pause at frame 0.
 */
export function syncShowcaseVideosToViewportCenter(
  videos: readonly (HTMLVideoElement | null)[],
  isCentered: boolean,
  wasCenteredRef: { current: boolean },
  frontDeviceId: ShowcaseFrontDeviceId,
  previousFrontWhileCenteredRef: { current: ShowcaseFrontDeviceId | null },
): void {
  const hasAny = videos.some((v) => v != null);
  if (!hasAny) return;

  if (!isCentered) {
    for (const v of videos) {
      if (v != null) {
        v.pause();
        v.currentTime = 0;
      }
    }
    wasCenteredRef.current = false;
    previousFrontWhileCenteredRef.current = null;
    return;
  }

  const viewportJustEntered = !wasCenteredRef.current;
  const orbitFrontChanged =
    previousFrontWhileCenteredRef.current !== null &&
    previousFrontWhileCenteredRef.current !== frontDeviceId;

  if (viewportJustEntered || orbitFrontChanged) {
    for (const v of videos) {
      if (v != null) v.currentTime = 0;
    }
  }

  for (let id = 0 as ShowcaseFrontDeviceId; id <= 3; id += 1) {
    const v = videos[id];
    if (v == null) continue;
    if (id === frontDeviceId) {
      void v.play().catch(() => {});
    } else {
      v.pause();
    }
  }

  wasCenteredRef.current = true;
  previousFrontWhileCenteredRef.current = frontDeviceId;
}
