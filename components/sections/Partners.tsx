"use client";

import { FIGMA_ASSETS } from "@/components/assets";

const partnerLogos = [
  { src: FIGMA_ASSETS.imgLayer1,  w: 78,  h: 73  },
  { src: FIGMA_ASSETS.imgLayer2,  w: null, h: null },
  { src: FIGMA_ASSETS.imgLayer3,  w: null, h: null },
  { src: FIGMA_ASSETS.imgLayer4,  w: null, h: null },
  { src: FIGMA_ASSETS.imgLayer5,  w: null, h: null },
  { src: FIGMA_ASSETS.imgLayer6,  w: null, h: null },
  { src: FIGMA_ASSETS.imgVector8, w: null, h: null },
  { src: FIGMA_ASSETS.imgVector9, w: null, h: null },
];

const MAX_H = 60;
const doubledPartnerLogos = [...partnerLogos, ...partnerLogos];

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
        {doubledPartnerLogos.map((logo, i) => (
          <img
            key={`${logo.src}-${i}`}
            src={logo.src}
            alt="Partner logo"
            style={{
              width:  logo.w ? Math.round(logo.w * MAX_H / logo.h!) : 150,
              height: logo.h ? MAX_H : 44,
              opacity: 0.7,
              flexShrink: 0,
              display: "block",
            }}
          />
        ))}
      </div>
    </section>
  );
}
