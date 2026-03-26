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

const doubled = [...partnerLogos, ...partnerLogos];

export function Partners() {
  return (
    <section
      aria-label="Partners"
      style={{ overflow: "hidden", padding: "40px 0", background: "#151515" }}
    >
      <style>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .marquee-inner {
          display: flex;
          align-items: center;
          gap: 80px;
          width: max-content;
          animation: marquee-scroll 25s linear infinite;
        }
        .marquee-inner:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="marquee-inner">
        {doubled.map((src, i) => (
          <div
            key={i}
            style={{ position: "relative", width: 150, height: 44, flexShrink: 0 }}
          >
            <Image
              src={src}
              alt=""
              unoptimized
              fill
              style={{ objectFit: "contain", opacity: 0.7 }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
