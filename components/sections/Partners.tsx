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
            className="flex h-12 items-center justify-center lg:h-12 lg:flex-initial"
          >
            <Image
              src={src}
              alt=""
              unoptimized
              width={200}
              height={48}
              className="h-12 w-auto max-w-full object-contain opacity-70"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
