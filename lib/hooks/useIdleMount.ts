"use client";

import { useEffect, useState } from "react";

const IDLE_CALLBACK_TIMEOUT_MS = 2000;

/**
 * Sets `true` after the browser is idle (or timeout), for deferring decorative content.
 */
export function useIdleMount(): boolean {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const w = window;
    let cancelled = false;
    const fire = () => {
      if (!cancelled) setReady(true);
    };

    let idleId: number | undefined;
    /** Browser timers use numeric ids; avoids NodeJS.Timeout vs number mismatch in tsc. */
    let timeoutId: number | undefined;

    if (typeof w.requestIdleCallback === "function") {
      idleId = w.requestIdleCallback(fire, { timeout: IDLE_CALLBACK_TIMEOUT_MS });
    } else {
      timeoutId = w.setTimeout(fire, 0);
    }

    return () => {
      cancelled = true;
      if (idleId !== undefined && typeof w.cancelIdleCallback === "function") {
        w.cancelIdleCallback(idleId);
      }
      if (timeoutId !== undefined) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  return ready;
}
