"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
import { FIGMA_ASSETS } from "@/lib/figma-assets";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["200", "900"],
  display: "swap",
});

const stats = [
  {
    value: "8+",
    label: "Years of experience",
    cardClass: "bg-[#ff7500] text-white",
  },
  {
    value: "97%",
    label: "Satisfied clients",
    cardClass: "bg-white text-[#0d266c]",
  },
  {
    value: "450+",
    label: "Creations",
    cardClass: "bg-[#473dff] text-white",
  },
] as const;

export function HeroSection() {
  return (
    <section
      className={`relative overflow-hidden bg-[#151515] min-h-[80vh] md:min-h-[70vh] lg:min-h-[90vh] ${inter.className}`}
    >
      {/* 1. Background — flipped vertically */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src={FIGMA_ASSETS.imgPhilippHubertDVVjhUcdb30Unsplash1}
          alt=""
          fill
          className="object-cover"
          style={{ transform: "scaleY(-1)" }}
          sizes="100vw"
          priority
        />
      </div>

      {/* 3. Erica Anderson — tablet+ only */}
      <div className="pointer-events-none absolute inset-0 z-[6] hidden mix-blend-lighten opacity-60 md:block">
        <Image
          src={FIGMA_ASSETS.imgEricaAnderson1}
          alt=""
          fill
          className="rotate-[12deg] scale-110 object-cover"
          sizes="100vw"
        />
      </div>

      {/* 5. Bottom gradient overlay */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[15] h-40 md:h-52 lg:h-64">
        <Image
          src={FIGMA_ASSETS.imgRectangle17399}
          alt=""
          fill
          className="object-cover object-bottom"
          sizes="100vw"
        />
      </div>

      <div className="relative z-20 mx-auto w-full max-w-[1440px] px-4 pb-10 pt-8 md:px-6 lg:px-8 lg:pb-14 lg:pt-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:min-h-[min(55vh,640px)]">
          {/* 4–2. Logo + robot — mobile first, desktop right column */}
          <div className="relative z-10 order-1 flex min-h-[min(48vh,400px)] w-full flex-col items-center justify-center lg:z-auto lg:order-2 lg:min-h-[min(58vh,560px)] lg:flex-1">
            <div className="pointer-events-none absolute inset-0 z-[5] flex items-center justify-center px-2">
              <Image
                src="/NEETRINO.svg"
                alt="NEETRINO"
                width={1186}
                height={128}
                className="-mt-12 h-auto w-[min(92%,280px)] max-w-full opacity-90 md:w-[min(85%,400px)] lg:mt-0 lg:w-[min(92%,720px)]"
                priority
              />
            </div>

            <div className="relative z-10 flex w-full justify-center">
              <div className="relative aspect-[3/4] w-[min(80vw,300px)] md:w-[min(48vw,300px)] lg:w-[min(42vw,380px)]">
                <Image
                  src={FIGMA_ASSETS.img30}
                  alt=""
                  fill
                  className="object-contain object-bottom"
                  sizes="(max-width: 768px) 72vw, (max-width: 1024px) 48vw, 42vw"
                  priority
                />
              </div>
            </div>
          </div>

          {/* 6. Text — below visual on mobile, left on desktop */}
          <div className="relative z-20 order-2 -mt-14 max-w-[500px] text-center lg:z-auto lg:order-1 lg:mt-0 lg:shrink-0 lg:text-left">
            <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-md md:px-5 md:py-4 lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:backdrop-blur-none">
              <p className="font-extralight leading-relaxed text-white text-lg md:text-xl px-1 lg:px-0">
                We build <span className="font-black text-white">high-performance websites</span>{" "}
                and digital solutions that help businesses grow, engage audiences, and stand out
                online.
              </p>
            </div>
          </div>
        </div>

        {/* Stat cards */}
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-4 lg:mt-12 lg:gap-6">
          {stats.map((item) => (
            <div key={item.label} className={`rounded-2xl p-5 ${item.cardClass}`}>
              <p className="font-black text-4xl md:text-5xl">{item.value}</p>
              <p className="mt-2 font-extralight text-base">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
