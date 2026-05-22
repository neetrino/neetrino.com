import { heroHandAnimationVideoSrc } from "@/lib/figma-assets";

type HeroHandAnimationVideoProps = {
  readonly className?: string;
};

/**
 * Decorative hero hand wash (Figma Erica Anderson layer) — WebM on CDN, not `next/image`.
 */
export function HeroHandAnimationVideo({ className }: HeroHandAnimationVideoProps) {
  return (
    <video
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
