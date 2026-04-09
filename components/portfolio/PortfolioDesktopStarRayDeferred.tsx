"use client";

import Image from "next/image";
import { useIdleMount } from "@/lib/hooks/useIdleMount";
import { imgStar22 } from "@/components/portfolio/portfolio-figma-assets";
import { DEFAULT_IMAGE_QUALITY } from "@/lib/image-defaults";

/** Matches optimized `638bcc05-…webp` (sharp resize inside 2048²). */
const STAR22_WIDTH = 1844;
const STAR22_HEIGHT = 2048;

/**
 * Large rotated light-ray raster — deferred until idle so it does not block first paint.
 * Layout classes match Figma export (`166:1211`).
 */
export function PortfolioDesktopStarRayDeferred() {
  const showStar = useIdleMount();

  if (!showStar) {
    return null;
  }

  return (
    <div className="absolute flex h-[5878.103px] items-center justify-center left-[-797.93px] mix-blend-plus-lighter top-[-3956.96px] w-[5638.546px]">
      <div className="flex-none rotate-[24.39deg]">
        <div className="h-[4590.797px] relative w-[4109.595px]" data-node-id="166:1211">
          <div className="absolute inset-[-2.59%_-2.9%]">
            <Image
              alt=""
              className="block max-w-none size-full"
              height={STAR22_HEIGHT}
              loading="lazy"
              src={imgStar22}
              width={STAR22_WIDTH}
              quality={DEFAULT_IMAGE_QUALITY}
              sizes="120vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
