import Image from "next/image";
import { useTranslations } from "next-intl";
import { FIGMA_ASSETS } from "@/lib/figma-assets";

const partnerLogos = [
  { src: FIGMA_ASSETS.imgLayer1, w: 78, h: 73 },
  { src: FIGMA_ASSETS.imgLayer3, w: 126, h: 57, fixed: true as const },
  { src: FIGMA_ASSETS.imgLayer5, w: 54, h: 77, fixed: true as const },
  { src: FIGMA_ASSETS.imgVector8, w: 140, h: 42, fixed: true as const },
  { src: FIGMA_ASSETS.imgVector9, w: 109, h: 63, fixed: true as const },
];

const MAX_H = 48;

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
  const t = useTranslations();

  return (
    <section
      aria-label={t("partners.sectionAria")}
      className="max-w-full min-w-0 bg-transparent pt-0 pb-15 mt-0 lg:mt-0 lg:bg-[#151515] lg:px-0 lg:pb-8 lg:pt-0 lg:leading-none lg:[&_span]:m-0 lg:[&_span]:block lg:[&_span]:leading-none"
      style={{
        overflow: "hidden",
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
          .marquee-inner {
            align-items: flex-end;
            line-height: 0;
            margin: 0;
            padding: 0;
          }
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
              alt={t("partners.logoAlt")}
              width={width}
              height={height}
              className="block shrink-0 self-end opacity-70"
              sizes="(max-width: 1024px) 96px, 128px"
              loading="lazy"
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
              alt={t("partners.logoAlt")}
              width={width}
              height={height}
              className="block shrink-0 self-end opacity-70"
              sizes="(max-width: 1024px) 96px, 128px"
              loading="lazy"
            />
          );
        })}
      </div>
    </section>
  );
}
