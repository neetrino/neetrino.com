"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import {
  neetrinoHomeProjectsMarqueeDoubledStrip,
  neetrinoHomeProjectsMarqueeRowA,
  neetrinoHomeProjectsMarqueeRowB,
  type NeetrinoHomeProjectMarqueeItem,
} from "@/lib/neetrino-home-projects-marquee.constants";

type MarqueeRowProps = {
  direction: "left" | "right";
  items: readonly NeetrinoHomeProjectMarqueeItem[];
};

function MarqueeRow({ direction, items }: MarqueeRowProps) {
  const t = useTranslations();
  const looped = neetrinoHomeProjectsMarqueeDoubledStrip(items);

  return (
    <div className="home-projects-marquee-clip h-[378px]">
      <div
        className={
          direction === "right"
            ? "home-projects-marquee-row-inner home-projects-marquee-row-inner--to-right"
            : "home-projects-marquee-row-inner home-projects-marquee-row-inner--to-left"
        }
      >
        {looped.map((item, index) => (
          <article
            key={`${item.titleKey}-${String(index)}`}
            className="group relative h-[378px] w-[420px] shrink-0 overflow-hidden rounded-[31px]"
          >
            <Image
              src={item.image}
              alt={t(item.titleKey)}
              fill
              sizes="420px"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-t from-black/55 to-transparent"
              aria-hidden
            />
          </article>
        ))}
      </div>
    </div>
  );
}

export function NeetrinoHomeProjectsMarquee() {
  return (
    <>
      <div className="absolute top-[2334px] left-0 z-[11] w-[1440px]">
        <MarqueeRow direction="right" items={neetrinoHomeProjectsMarqueeRowA} />
      </div>
      <div className="absolute top-[2757px] left-0 z-[12] w-[1440px]">
        <MarqueeRow direction="left" items={neetrinoHomeProjectsMarqueeRowB} />
      </div>
    </>
  );
}
