"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type DeferredMountProps = {
  /** Tailwind `top-*` for a 1px-tall sentinel (canvas coordinates). */
  topClassName: string;
  children: ReactNode;
  rootMargin?: string;
};

const PX_MARGIN = /^(\d+(?:\.\d+)?)px$/;

/** After reload while scrolled, layout/scroll restore often runs after first paint — no `scroll` event. */
const SCROLL_RESTORE_RECHECK_DELAYS_MS = [0, 50, 150, 400, 1000, 1600] as const;

/**
 * Parses vertical expansion from `IntersectionObserver` rootMargin shorthand (px only).
 */
function parseRootMarginVerticalPx(rootMargin: string): {
  topPx: number;
  bottomPx: number;
} {
  const parts = rootMargin.trim().split(/\s+/);
  const px = (token: string): number => {
    const m = PX_MARGIN.exec(token);
    return m ? Number(m[1]) : 0;
  };
  if (parts.length === 0) {
    return { topPx: 0, bottomPx: 0 };
  }
  if (parts.length === 1) {
    const v = px(parts[0]);
    return { topPx: v, bottomPx: v };
  }
  if (parts.length === 2) {
    const tb = px(parts[0]);
    return { topPx: tb, bottomPx: tb };
  }
  if (parts.length === 3) {
    return { topPx: px(parts[0]), bottomPx: px(parts[2]) };
  }
  return { topPx: px(parts[0]), bottomPx: px(parts[2]) };
}

function expandedViewportCoversSentinel(el: HTMLElement, topPx: number, bottomPx: number): boolean {
  const r = el.getBoundingClientRect();
  const vTop = -topPx;
  const vBottom = window.innerHeight + bottomPx;
  return r.top < vBottom && r.bottom > vTop;
}

/**
 * Mount when the sentinel is near the viewport **or** already fully above the expanded
 * top edge (user scrolled past it — e.g. refresh mid-page). IO/“intersection only” misses
 * the second case because a line above the viewport does not intersect the root.
 */
function shouldMountDeferredSubtree(el: HTMLElement, topPx: number, bottomPx: number): boolean {
  if (expandedViewportCoversSentinel(el, topPx, bottomPx)) {
    return true;
  }
  const r = el.getBoundingClientRect();
  const vTop = -topPx;
  return r.bottom <= vTop;
}

/**
 * Mounts `children` only after the sentinel nears the viewport.
 * Use one instance wrapping several siblings to preserve DOM order (stacking / z-index).
 *
 * Uses geometry (near or **past** sentinel) plus scroll/resize/load/pageshow + delayed
 * checks so IO/transform timing and scroll-restore do not leave a permanent blank region.
 */
export function DeferredMount({
  topClassName,
  children,
  rootMargin = "240px 0px 240px 0px",
}: DeferredMountProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const { topPx, bottomPx } = parseRootMarginVerticalPx(rootMargin);
    const timeoutIds: number[] = [];
    let cancelled = false;
    let finished = false;
    let io: IntersectionObserver | null = null;

    const tryGeometry = () => {
      if (finished) return;
      if (shouldMountDeferredSubtree(el, topPx, bottomPx)) {
        finish();
      }
    };

    const onScrollOrResize = () => {
      tryGeometry();
      if (!finished && io) {
        for (const entry of io.takeRecords()) {
          if (entry.isIntersecting) {
            finish();
            break;
          }
        }
      }
    };

    const onLoadOrPageShow = () => {
      requestAnimationFrame(() => {
        onScrollOrResize();
        requestAnimationFrame(onScrollOrResize);
      });
    };

    const teardownObservation = () => {
      io?.disconnect();
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      window.removeEventListener("load", onLoadOrPageShow);
      window.removeEventListener("pageshow", onLoadOrPageShow);
      for (const id of timeoutIds) {
        window.clearTimeout(id);
      }
      timeoutIds.length = 0;
    };

    function finish() {
      if (cancelled || finished) return;
      finished = true;
      teardownObservation();
      if (!cancelled) {
        setShow(true);
      }
    }

    io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting || shouldMountDeferredSubtree(el, topPx, bottomPx)) {
          finish();
        }
      },
      { root: null, rootMargin, threshold: 0 },
    );
    io.observe(el);

    tryGeometry();
    requestAnimationFrame(() => {
      tryGeometry();
      if (!finished && io) {
        for (const entry of io.takeRecords()) {
          if (entry.isIntersecting) {
            finish();
            break;
          }
        }
      }
      requestAnimationFrame(tryGeometry);
    });

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    window.addEventListener("pageshow", onLoadOrPageShow);
    if (document.readyState === "complete") {
      onLoadOrPageShow();
    } else {
      window.addEventListener("load", onLoadOrPageShow);
    }

    for (const ms of SCROLL_RESTORE_RECHECK_DELAYS_MS) {
      timeoutIds.push(window.setTimeout(onScrollOrResize, ms));
    }

    return () => {
      cancelled = true;
      teardownObservation();
    };
  }, [rootMargin]);

  return (
    <>
      <div
        ref={ref}
        className={`pointer-events-none absolute left-0 z-0 h-px w-full max-w-[1440px] ${topClassName}`}
        aria-hidden
      />
      {show ? children : null}
    </>
  );
}
