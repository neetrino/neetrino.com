"use client";

import Image from "next/image";
import { isVideoAsset } from "@/lib/portfolio/is-video-asset";
import { normalizePortfolioCardMediaType } from "@/lib/portfolio/portfolio-media-type";

type PortfolioAdminMediaThumbProps = {
  readonly url: string;
  readonly mediaType: string;
  readonly fileName?: string;
};

const THUMB_CLASS = "size-full object-cover" as const;

/**
 * Admin list thumbnail — GIF via `<img>`, WebM via `<video>`, raster via `next/image`.
 */
export function PortfolioAdminMediaThumb({
  url,
  mediaType,
  fileName,
}: PortfolioAdminMediaThumbProps) {
  const kind = normalizePortfolioCardMediaType(mediaType, fileName ? `${fileName}` : url);

  if (kind === "video" || isVideoAsset(url)) {
    return (
      <video
        src={url}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className={THUMB_CLASS}
        aria-hidden
      />
    );
  }

  if (kind === "gif") {
    return (
      // eslint-disable-next-line @next/next/no-img-element -- GIF animation requires native img
      <img src={url} alt="" className={THUMB_CLASS} />
    );
  }

  return <Image src={url} alt="" fill className={THUMB_CLASS} sizes="96px" />;
}
