"use client";

import Image from "next/image";
import { MOBILE_PORTFOLIO_CARD_IMAGE_SIZES } from "@/components/portfolio/portfolio-data";
import { DEFAULT_IMAGE_QUALITY } from "@/lib/image-defaults";
import { PORTFOLIO_MOBILE_BIOTECH_MACBOOK_VIDEO_OVERLAY_STYLE } from "@/lib/portfolio-mobile-biotech-macbook-video-overlay.constants";
import {
  PORTFOLIO_SECOND_BANNER_MACBOOK_VIDEO_ARIA_LABEL,
  PORTFOLIO_SECOND_BANNER_MACBOOK_VIDEO_ASPECT_RATIO,
  PORTFOLIO_SECOND_BANNER_MACBOOK_VIDEO_SRC,
  PORTFOLIO_SECOND_BANNER_MACBOOK_VIDEO_WRAPPER_BASE_CLASS,
} from "@/lib/portfolio-second-banner-macbook-video.constants";

type PortfolioMobileBiotechCardProps = {
  alt: string;
  src: string;
  priority?: boolean;
  loading?: "eager" | "lazy";
  decoding?: "async" | "auto" | "sync";
};

/**
 * Second portfolio hero (CAT / Biotech) — background art plus MacBook screen video like desktop.
 */
export function PortfolioMobileBiotechCard({
  alt,
  src,
  priority,
  loading,
  decoding,
}: PortfolioMobileBiotechCardProps) {
  return (
    <div className="min-w-0">
      <div className="relative aspect-[631/364] w-full overflow-hidden rounded-[24px]">
        <Image
          alt={alt}
          src={src}
          fill
          sizes={MOBILE_PORTFOLIO_CARD_IMAGE_SIZES}
          className="object-cover"
          loading={loading}
          priority={priority}
          decoding={decoding}
          quality={DEFAULT_IMAGE_QUALITY}
        />
        <div
          className={PORTFOLIO_SECOND_BANNER_MACBOOK_VIDEO_WRAPPER_BASE_CLASS}
          style={{
            ...PORTFOLIO_MOBILE_BIOTECH_MACBOOK_VIDEO_OVERLAY_STYLE,
            aspectRatio: PORTFOLIO_SECOND_BANNER_MACBOOK_VIDEO_ASPECT_RATIO,
          }}
          data-name="macbook-screen-video"
        >
          <video
            aria-label={PORTFOLIO_SECOND_BANNER_MACBOOK_VIDEO_ARIA_LABEL}
            className="h-full w-full object-cover"
            src={PORTFOLIO_SECOND_BANNER_MACBOOK_VIDEO_SRC}
            autoPlay
            muted
            playsInline
            loop
            preload="metadata"
          />
        </div>
      </div>
    </div>
  );
}
