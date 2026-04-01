import Image from "next/image";
import { FIGMA_ASSETS } from "@/lib/figma-assets";

const partnerLogos = [
  { src: FIGMA_ASSETS.imgLayer1, w: 78, h: 73 },
  { src: FIGMA_ASSETS.imgLayer3, w: 157, h: 71, fixed: true as const },
  { src: FIGMA_ASSETS.imgLayer5, w: 67, h: 96, fixed: true as const },
  { src: FIGMA_ASSETS.imgVector8, w: 175, h: 53, fixed: true as const },
  { src: FIGMA_ASSETS.imgVector9, w: 136, h: 79, fixed: true as const },
];

const MAX_H = 60;

function logoDimensions(logo: (typeof partnerLogos)[number]) {
  if ("fixed" in logo && logo.fixed) {
    return { width: logo.w, height: logo.h };
  }
  if (logo.w && logo.h) {
    return { width: Math.round((logo.w * MAX_H) / logo.h), height: MAX_H };
  }
  return { width: 150, height: 44 };
}

const marqueeBaseLogos = [...partnerLogos, ...partnerLogos, ...partnerLogos];
const doubledPartnerLogos = [...marqueeBaseLogos, ...marqueeBaseLogos];

export function Partners() {
  return (
    <section
      aria-label="Partners"
      style={{
        overflow: "hidden",
        padding: "40px 0",
        background: "transparent",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <style>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .marquee-inner {
          display: flex;
          align-items: center;
          gap: clamp(72px, 6vw, 120px);
          width: max-content;
          animation: marquee-scroll 40s linear infinite;
        }
        .mobile-extra-row {
          margin-top: 24px;
          animation-direction: reverse;
        }
        @media (min-width: 1024px) {
          .marquee-inner:hover {
            animation-play-state: paused;
          }
        }
        @media (min-width: 1024px) {
          .mobile-extra-row {
            display: none;
          }
        }
      `}</style>
      <div className="marquee-inner">
        {doubledPartnerLogos.map((logo, i) => {
          const { width, height } = logoDimensions(logo);
          return (
            <Image
              key={`${logo.src}-${i}`}
              src={logo.src}
              alt="Partner logo"
              width={width}
              height={height}
              className="block shrink-0 opacity-70"
              sizes="(max-width: 1024px) 120px, 160px"
            />
          );
        })}
      </div>
      <div className="marquee-inner mobile-extra-row">
        {doubledPartnerLogos.map((logo, i) => {
          const { width, height } = logoDimensions(logo);
          return (
            <Image
              key={`mobile-${logo.src}-${i}`}
              src={logo.src}
              alt="Partner logo"
              width={width}
              height={height}
              className="block shrink-0 opacity-70"
              sizes="(max-width: 1024px) 120px, 160px"
            />
          );
        })}
      </div>
    </section>
  );
}
