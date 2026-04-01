import Image from "next/image";
import { FIGMA_ASSETS } from "@/lib/figma-assets";

export function DeviceShowcase() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24" aria-label="Device showcase">
      <div className="relative mx-auto max-w-[1200px] px-4 md:px-8">
        <div className="relative mx-auto min-h-[280px] md:min-h-[340px] lg:min-h-[420px]">
          {/* iMac — desktop only */}
          <div className="pointer-events-none absolute -left-4 top-0 z-0 hidden w-[38%] max-w-[340px] lg:block">
            <Image
              src={FIGMA_ASSETS.imgAppleIMac27201911}
              alt=""
              width={680}
              height={620}
              className="h-auto w-full object-contain opacity-90"
            />
          </div>

          {/* iPad — desktop only */}
          <div className="pointer-events-none absolute -right-2 bottom-[8%] z-0 hidden w-[32%] max-w-[280px] lg:block lg:bottom-[12%]">
            <Image
              src={FIGMA_ASSETS.imgSpaceGray1}
              alt=""
              width={560}
              height={720}
              className="h-auto w-full object-contain opacity-95"
            />
          </div>

          {/* MacBook — center */}
          <div className="relative z-10 mx-auto flex w-full max-w-[560px] justify-center md:max-w-[600px] lg:max-w-[640px]">
            <div className="relative w-full">
              <Image
                src={FIGMA_ASSETS.imgBody}
                alt=""
                width={1200}
                height={720}
                className="relative z-0 w-full h-auto"
                priority
              />
              {/* Screen content masked */}
              <div
                className="absolute left-[10.5%] right-[10.5%] top-[6%] z-[1] aspect-[16/10] overflow-hidden rounded-[2px]"
                style={{
                  WebkitMaskImage: `url(${FIGMA_ASSETS.imgAnimation})`,
                  maskImage: `url(${FIGMA_ASSETS.imgAnimation})`,
                  WebkitMaskSize: "contain",
                  maskSize: "contain",
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                  WebkitMaskPosition: "center",
                  maskPosition: "center",
                }}
              >
                <div className="relative h-full w-full">
                  <Image
                    src={FIGMA_ASSETS.imgDelete}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 90vw, 560px"
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 z-[2] flex justify-center">
                <Image
                  src={FIGMA_ASSETS.imgScreen}
                  alt=""
                  width={1200}
                  height={720}
                  className="h-auto w-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* iPhone — md+ */}
          <div className="pointer-events-none absolute bottom-0 right-[2%] z-20 hidden w-[22%] max-w-[200px] md:block lg:right-[6%] lg:w-[18%] lg:max-w-[220px]">
            <Image
              src={FIGMA_ASSETS.imgIPhone14Pro1}
              alt=""
              width={440}
              height={880}
              className="h-auto w-full object-contain drop-shadow-lg"
            />
          </div>
        </div>

        <div className="mt-10 flex justify-center gap-4">
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white transition hover:bg-white/20"
            aria-label="Previous slide"
          >
            <span className="text-lg leading-none" aria-hidden>
              ‹
            </span>
          </button>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white transition hover:bg-white/20"
            aria-label="Next slide"
          >
            <span className="text-lg leading-none" aria-hidden>
              ›
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
