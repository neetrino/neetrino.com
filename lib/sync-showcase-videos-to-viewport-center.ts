/**
 * When the block enters the viewport center band, restart from 0 and play.
 * When it leaves, pause (freeze frame).
 */
export function syncShowcaseVideosToViewportCenter(
  videos: readonly (HTMLVideoElement | null)[],
  isCentered: boolean,
  wasCenteredRef: { current: boolean },
): void {
  const ready = videos.filter((v): v is HTMLVideoElement => v != null);
  if (ready.length === 0) return;

  if (isCentered) {
    if (!wasCenteredRef.current) {
      for (const v of ready) {
        v.currentTime = 0;
      }
    }
    for (const v of ready) {
      void v.play().catch(() => {});
    }
  } else {
    for (const v of ready) {
      v.pause();
    }
  }

  wasCenteredRef.current = isCentered;
}
