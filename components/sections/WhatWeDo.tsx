"use client";

import Image from "next/image";
import { FIGMA_ASSETS } from "@/components/assets";
import sports00065Icon from "@/Sports_00065_.webp";
import aiIntegrationsIcon from "@/-276 1.webp";

const services = [
  {
    title: "WEBSITE",
    subtitle: "Custom Development",
    bg: "bg-[#e8e8f4]",
    textColor: "text-black",
    image: FIGMA_ASSETS.imgPc,
  },
  {
    title: "MOBILE APP",
    subtitle: "App Development",
    bg: "bg-[#ff7500]",
    textColor: "text-white",
    image: FIGMA_ASSETS.imgPc1,
  },
  {
    title: "SAAS PLATFORMS",
    subtitle: "Cloud Solutions",
    bg: "bg-[#292929]",
    textColor: "text-white",
    image: FIGMA_ASSETS.imgCloudInfrastructure,
  },
  {
    title: "CRM SYSTEMS",
    subtitle: "Process Automation",
    bg: "bg-[#473dff]",
    textColor: "text-white",
    image: sports00065Icon,
    imageClassName: "scale-[0.86]",
  },
  {
    title: "AI INTEGRATIONS",
    subtitle: "AI Automation",
    bg: "bg-[#a2b8ee]",
    textColor: "text-[#0f0f0f]",
    image: aiIntegrationsIcon,
    imageClassName: "scale-[0.84]",
  },
] as const;

export function WhatWeDo() {
  return (
    <section className="py-16 md:py-24">
      <div className="section-container">
        <header className="mb-10 md:mb-14 [font-family:Inter,sans-serif]">
          <p className="font-medium text-sm uppercase tracking-wider text-white">
            SERVICES
          </p>
          <h2 className="mt-2 font-black italic text-2xl text-white md:text-3xl lg:text-[35px]">
            WHAT WE <span className="text-[#ff7500]">DO</span>
          </h2>
        </header>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-5 lg:gap-4">
          {services.map((service, index) => (
            <article
              key={service.title}
              className={`relative flex h-[350px] flex-col overflow-hidden rounded-2xl md:h-[400px] lg:h-[450px] ${service.bg} ${index === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              <h3
                className={`shrink-0 px-4 pt-5 font-bold text-lg md:pt-6 md:text-xl ${service.textColor}`}
              >
                {service.title}
              </h3>

              <div className="relative min-h-0 flex-1 overflow-hidden px-3">
                <Image
                  src={service.image}
                  alt=""
                  fill
                  className={`object-contain object-center ${"imageClassName" in service ? service.imageClassName : ""}`}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 20vw"
                />
              </div>

              <div className="flex shrink-0 flex-col gap-3 px-4 pb-5 md:pb-6">
                <p
                  className={`text-base font-extralight ${service.textColor}`}
                >
                  {service.subtitle}
                </p>
                <button
                  type="button"
                  className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 text-[15px] font-medium text-[#252525] transition-opacity hover:opacity-90"
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
