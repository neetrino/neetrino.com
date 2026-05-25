"use client";

import { useEffect, useRef } from "react";
import { heroHandAnimationVideoSrc } from "@/lib/figma-assets";

type HeroHandAnimationVideoProps = {
  readonly className?: string;
};

/**
 * Decorative hero hand wash (Figma Erica Anderson layer) — WebM on CDN, not `next/image`.
 * Pauses when off-screen to avoid decode cost during scroll.
 */
export function HeroHandAnimationVideo({ className }: HeroHandAnimationVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        if (entry.isIntersecting) {
          void el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden
      className={className}
      src={heroHandAnimationVideoSrc}
    />
  );
}
