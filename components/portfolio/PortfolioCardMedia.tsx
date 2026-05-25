"use client";

import Image from "next/image";
import { isVideoAsset } from "@/lib/portfolio/is-video-asset";
import type { PortfolioCardMediaType } from "@/lib/portfolio/portfolio-media-type";
import { DEFAULT_IMAGE_QUALITY } from "@/lib/image-defaults";

type PortfolioCardMediaProps = {
  url: string;
  alt: string;
  mediaType: PortfolioCardMediaType;
  /** Pass `next/image` `sizes` for the viewport (mobile vs desktop grid). */
  imageSizes: string;
  priority?: boolean;
  loading?: "eager" | "lazy";
};

const COVER_CLASS = "absolute inset-0 size-full object-cover" as const;

/**
 * Portfolio card media: `next/image` for static images, `<img>` for GIF, `<video>` for WebM/video.
 */
export function PortfolioCardMedia({
  url,
  alt,
  mediaType,
  imageSizes,
  priority,
  loading,
}: PortfolioCardMediaProps) {
  const useVideo = mediaType === "video" || isVideoAsset(url);

  if (useVideo) {
    return (
      <video
        src={url}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className={COVER_CLASS}
        aria-hidden={alt === ""}
      />
    );
  }

  if (mediaType === "gif") {
    return (
      // eslint-disable-next-line @next/next/no-img-element -- GIF animation requires native img
      <img
        src={url}
        alt={alt}
        className={COVER_CLASS}
        loading={priority ? "eager" : (loading ?? "lazy")}
        decoding="async"
      />
    );
  }

  return (
    <Image
      src={url}
      alt={alt}
      fill
      sizes={imageSizes}
      className="object-cover"
      loading={loading}
      priority={priority}
      decoding="async"
      quality={DEFAULT_IMAGE_QUALITY}
    />
  );
}
