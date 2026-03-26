'use client';

import { useEffect, useRef, useCallback } from 'react';

const DEFAULT_CANVAS_W = 1440;
const DEFAULT_CANVAS_H = 4652;

export function CanvasScaler({
  children,
  canvasWidth = DEFAULT_CANVAS_W,
  canvasHeight = DEFAULT_CANVAS_H,
}: {
  children: React.ReactNode;
  canvasWidth?: number;
  canvasHeight?: number;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  const updateScale = useCallback(() => {
    const wrap = wrapRef.current;
    const inner = innerRef.current;
    if (!wrap || !inner) return;

    const scale = wrap.offsetWidth / canvasWidth;
    inner.style.transform = `scale(${scale})`;
    wrap.style.height = `${canvasHeight * scale}px`;
  }, [canvasHeight, canvasWidth]);

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
