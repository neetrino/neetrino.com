"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type DeferredMountProps = {
  /** Tailwind `top-*` for a 1px-tall sentinel (canvas coordinates). */
  topClassName: string;
  children: ReactNode;
  rootMargin?: string;
};

/**
 * Mounts `children` only after the sentinel nears the viewport.
 * Use one instance wrapping several siblings to preserve DOM order (stacking / z-index).
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
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          io.disconnect();
        }
      },
      { root: null, rootMargin, threshold: 0 },
    );
    io.observe(el);
    return () => io.disconnect();
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
