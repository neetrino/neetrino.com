/**
 * Runs `onReady` after two `requestAnimationFrame` ticks, then idle (or timeout).
 * Safari without `requestIdleCallback` uses a short `setTimeout` fallback.
 */
export function scheduleAfterTwoFramesAndIdle(
  onReady: () => void,
  idleTimeoutMs: number,
): () => void {
  let cancelled = false;
  let raf1 = 0;
  let raf2 = 0;
  let idleCallbackId = 0;
  let timeoutFallbackId = 0;

  const finish = () => {
    if (!cancelled) {
      onReady();
    }
  };

  raf1 = requestAnimationFrame(() => {
    raf2 = requestAnimationFrame(() => {
      if (cancelled) {
        return;
      }
      if (typeof requestIdleCallback === "function") {
        idleCallbackId = requestIdleCallback(finish, {
          timeout: idleTimeoutMs,
        });
      } else {
        timeoutFallbackId = window.setTimeout(finish, Math.min(idleTimeoutMs, 48));
      }
    });
  });

  return () => {
    cancelled = true;
    cancelAnimationFrame(raf1);
    cancelAnimationFrame(raf2);
    if (idleCallbackId !== 0 && typeof cancelIdleCallback === "function") {
      cancelIdleCallback(idleCallbackId);
    }
    if (timeoutFallbackId !== 0) {
      window.clearTimeout(timeoutFallbackId);
    }
  };
}
