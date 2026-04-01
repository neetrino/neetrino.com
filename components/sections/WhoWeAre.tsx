"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
import { FIGMA_ASSETS } from "@/lib/figma-assets";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "500", "700", "800", "900"],
  style: ["normal", "italic"],
});

export function WhoWeAre() {
  return (
    <section
      id="story"
      className={`section-container py-16 md:py-24 ${inter.className}`}
      aria-labelledby="who-we-are-heading"
    >
      <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-8">
        <div className="w-full shrink-0 lg:w-1/2">
          <p className="text-sm font-medium uppercase tracking-wider text-white">
            BUILD WITH PURPOSE
          </p>
          <h2
            id="who-we-are-heading"
            className="mt-3 text-2xl font-black italic text-white md:text-3xl lg:text-[35px]"
          >
            <span className="text-white">WHO </span>
            <span className="text-[#ff7500]">WE</span>
            <span className="text-white"> ARE</span>
          </h2>
          <div className="mt-6 space-y-4 text-sm font-light leading-relaxed text-white md:text-base">
            <p>
              Over the past 8 years, <strong className="font-bold">Neetrino IT</strong> has
              developed more than <strong className="font-extrabold">400 online resources</strong>,
              ranging from simple websites to large-scale internet portals and e-commerce platforms
            </p>
            <p>
              We specialize in website development, AI and bot solutions, CRM system integration,
              mobile app development, as well as SEO and SMM optimization—
              <strong className="font-extrabold">
                delivering a comprehensive digital presence for your business.
              </strong>
            </p>
          </div>
        </div>
        <div className="relative flex w-full justify-center lg:w-1/2 lg:justify-end">
          <div className="relative aspect-[4/3] w-full max-w-xl mix-blend-exclusion lg:max-w-none">
            <Image
              src={FIGMA_ASSETS.img1}
              alt=""
              fill
              className="object-contain object-center"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
