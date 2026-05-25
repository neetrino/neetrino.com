"use client";

import { useEffect, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";

const DEFAULT_CANVAS_W = 1440;
const DEFAULT_CANVAS_H = 4652;

const SCALE_EPSILON = 0.0001;

export function CanvasScaler({
  children,
  canvasWidth = DEFAULT_CANVAS_W,
  canvasHeight = DEFAULT_CANVAS_H,
  wrapClassName,
  innerClassName,
}: {
  children: React.ReactNode;
  canvasWidth?: number;
  canvasHeight?: number;
  /** Merged onto `.neetrino-canvas-wrap` (e.g. tablet hero top bleed + overflow overrides). */
  wrapClassName?: string;
  /** Merged onto `.neetrino-canvas-inner` (e.g. footer: transparent so `z-[1]` grid shows through). */
  innerClassName?: string;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const lastScaleRef = useRef<number | null>(null);

  const updateScale = useCallback(() => {
    const wrap = wrapRef.current;
    const inner = innerRef.current;
    if (!wrap || !inner) return;

    const scale = wrap.offsetWidth / canvasWidth;
    const prev = lastScaleRef.current;
    if (prev !== null && Math.abs(prev - scale) < SCALE_EPSILON) {
      return;
    }
    lastScaleRef.current = scale;
    inner.style.transform = `scale(${scale})`;
    wrap.style.height = `${canvasHeight * scale}px`;
  }, [canvasHeight, canvasWidth]);

  useEffect(() => {
    let rafId = 0;
    const scheduleUpdate = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        updateScale();
      });
    };

    scheduleUpdate();

    const wrap = wrapRef.current;
    if (!wrap) return () => cancelAnimationFrame(rafId);

    const ro = new ResizeObserver(scheduleUpdate);
    ro.observe(wrap);
    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  }, [updateScale]);

  return (
    <div
      ref={wrapRef}
      className={cn("neetrino-canvas-wrap overflow-hidden", wrapClassName)}
      data-neetrino-canvas
    >
      <div
        ref={innerRef}
        className={cn("neetrino-canvas-inner", innerClassName)}
        style={{ minHeight: canvasHeight, willChange: "transform" }}
      >
        {children}
      </div>
    </div>
  );
}
