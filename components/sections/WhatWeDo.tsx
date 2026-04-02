import Image from "next/image";
import { FIGMA_ASSETS } from "@/lib/figma-assets";
import { interSans } from "@/lib/fonts";

const services = [
  {
    titleLines: ["WEBSITE"] as const,
    subtitleLines: ["Custom", "Development"] as const,
    bg: "bg-[#e8e8f4]",
    textColor: "text-black",
    image: FIGMA_ASSETS.imgPc,
    imageClassName: "object-contain object-left scale-[1.15]",
  },
  {
    titleLines: ["MOBILE APP"] as const,
    subtitleLines: ["App", "Development"] as const,
    bg: "bg-[#ff7500]",
    textColor: "text-white",
    image: FIGMA_ASSETS.imgPc1,
    imageClassName: "object-contain object-left scale-[1.05]",
  },
  {
    titleLines: ["SAAS", "PLATFORMS"] as const,
    subtitleLines: ["Cloud Solutions"] as const,
    bg: "bg-[#292929]",
    textColor: "text-white",
    image: FIGMA_ASSETS.imgCloudInfrastructure,
    imageClassName: "object-contain object-left",
  },
  {
    titleLines: ["CRM SYSTEMS"] as const,
    subtitleLines: ["Process", "Automation"] as const,
    bg: "bg-[#473dff]",
    textColor: "text-white",
    image: FIGMA_ASSETS.imgSports00065,
    imageClassName: "object-cover object-center scale-[0.86]",
  },
  {
    titleLines: ["AI", "INTEGRATIONS"] as const,
    subtitleLines: ["AI Automation"] as const,
    bg: "bg-[#a2b8ee]",
    textColor: "text-[#0f0f0f]",
    image: FIGMA_ASSETS.img2761,
    imageClassName: "object-contain object-left scale-[0.88]",
  },
] as const;

/** Mobile-only section — matches Figma 241:821 service cards (horizontal tiles). */
export function WhatWeDo() {
  return (
    <section className={`bg-[#151515] py-12 ${interSans.className}`}>
      <div className="mx-auto w-full max-w-[480px] px-4 md:px-6">
        <header className="mb-8">
          <p className="text-base font-medium uppercase leading-[35px] tracking-normal text-white">
            SERVICES
          </p>
          <h2 className="mt-1 font-black italic text-[35px] leading-[35px] text-white">
            WHAT WE <span className="text-[#ff7500]">DO</span>
          </h2>
        </header>

        <div className="flex flex-col gap-4">
          {services.map((service) => (
            <article
              key={service.titleLines.join("-")}
              className={`relative flex h-[194px] min-h-[194px] w-full overflow-hidden rounded-[19px] ${service.bg}`}
            >
              <div className="relative h-full w-[48%] shrink-0 overflow-hidden">
                <Image
                  src={service.image}
                  alt=""
                  fill
                  className={`${service.imageClassName}`}
                  sizes="(max-width: 1024px) 48vw, 240px"
                  loading="lazy"
                />
              </div>
              <div className="flex min-h-0 min-w-0 flex-1 flex-col justify-between px-3 py-3 pr-2">
                <div>
                  {service.titleLines.map((line) => (
                    <h3
                      key={line}
                      className={`font-bold text-lg leading-tight ${service.textColor}`}
                    >
                      {line}
                    </h3>
                  ))}
                  <div
                    className={`mt-1 text-base font-extralight leading-[19px] ${service.textColor}`}
                  >
                    {service.subtitleLines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </div>
                <button
                  type="button"
                  className="ml-auto inline-flex w-fit items-center gap-2 self-end rounded-[40px] bg-white px-5 py-3 text-[18px] font-medium text-[#252525] transition-opacity hover:opacity-90"
                >
                  Continue
                  <Image
                    src={FIGMA_ASSETS.imgSafearea}
                    alt=""
                    width={20}
                    height={20}
                    className="size-5 shrink-0"
                  />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
