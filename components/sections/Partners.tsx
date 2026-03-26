"use client";

import Image from "next/image";
import { FIGMA_ASSETS } from "@/components/assets";

const partnerLogos = [
  FIGMA_ASSETS.imgLayer1,
  FIGMA_ASSETS.imgLayer2,
  FIGMA_ASSETS.imgLayer3,
  FIGMA_ASSETS.imgLayer4,
  FIGMA_ASSETS.imgLayer5,
  FIGMA_ASSETS.imgLayer6,
  FIGMA_ASSETS.imgVector8,
  FIGMA_ASSETS.imgVector9,
] as const;

export function Partners() {
  return (
    <section className="section-container py-12 md:py-16" aria-label="Partners">
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:flex lg:flex-wrap lg:items-center lg:justify-center lg:gap-12">
        {partnerLogos.map((src, i) => (
          <div
            key={`${src}-${i}`}
            className="relative mx-auto h-12 w-full max-w-[160px] lg:flex-initial"
          >
            <Image
              src={src}
              alt=""
              unoptimized
              fill
              className="object-contain opacity-70"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
