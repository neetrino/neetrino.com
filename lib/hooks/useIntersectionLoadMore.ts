"use client";

import { useEffect, useRef, useState } from "react";

const DEFAULT_ROOT_MARGIN = "280px 0px 280px 0px";

type UseIntersectionLoadMoreParams = {
  totalCount: number;
  initialVisible: number;
  step: number;
  rootMargin?: string;
};

/**
 * Increments visible count when a sentinel intersects the viewport (progressive list loading).
 */
export function useIntersectionLoadMore({
  totalCount,
  initialVisible,
  step,
  rootMargin = DEFAULT_ROOT_MARGIN,
}: UseIntersectionLoadMoreParams) {
  const [visibleCount, setVisibleCount] = useState(initialVisible);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (visibleCount >= totalCount) return;

    const node = sentinelRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setVisibleCount((c) => Math.min(c + step, totalCount));
        }
      },
      { root: null, rootMargin, threshold: 0 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [visibleCount, totalCount, step, rootMargin]);

  return { visibleCount, sentinelRef };
}
