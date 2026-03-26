'use client';

import { useEffect, useRef, useCallback } from 'react';

const CANVAS_W = 1440;
const CANVAS_H = 4652;

export function CanvasScaler({ children }: { children: React.ReactNode }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  const updateScale = useCallback(() => {
    const wrap = wrapRef.current;
    const inner = innerRef.current;
    if (!wrap || !inner) return;

    const scale = wrap.offsetWidth / CANVAS_W;
    inner.style.transform = `scale(${scale})`;
    wrap.style.height = `${CANVAS_H * scale}px`;
  }, []);

  useEffect(() => {
    updateScale();

    const ro = new ResizeObserver(updateScale);
    ro.observe(wrapRef.current!);
    return () => ro.disconnect();
  }, [updateScale]);

  return (
    <div
      ref={wrapRef}
      className="neetrino-canvas-wrap"
      data-neetrino-canvas
    >
      <div ref={innerRef} className="neetrino-canvas-inner">
        {children}
      </div>
    </div>
  );
}
