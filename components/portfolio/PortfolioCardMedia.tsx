"use client";

import Image from "next/image";
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

/**
 * Renders portfolio card raster: `next/image` for static images, native `<img>` for animated GIFs.
 */
export function PortfolioCardMedia({
  url,
  alt,
  mediaType,
  imageSizes,
  priority,
  loading,
}: PortfolioCardMediaProps) {
  if (mediaType === "gif") {
    return (
      // eslint-disable-next-line @next/next/no-img-element -- GIF animation requires native img
      <img
        src={url}
        alt={alt}
        className="absolute inset-0 size-full object-cover"
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
