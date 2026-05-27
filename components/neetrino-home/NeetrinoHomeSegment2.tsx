"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { MeetOurTeamExplorePill } from "@/components/about-us/MeetOurTeamExplorePill";
import { GenerativeArtScene } from "@/components/ui/anomalous-matter-hero";
import { imgRectangle17417 } from "@/lib/figma-assets";
import { Reveal } from "@/components/motion/Reveal";

export function NeetrinoHomeSegment2() {
  const t = useTranslations();

  return (
    <>
      <div className="-translate-x-1/2 absolute z-0 flex h-[1306px] items-center justify-center left-[calc(50%+11px)] opacity-50 top-[3245px] w-[664px]">
        <div className="flex-none rotate-90">
          <div className="h-[664px] relative w-[1306px]" data-node-id="10:220">
            <div className="absolute inset-[-28.36%_-17.23%_-28.95%_-17.23%]">
              <Image
                alt=""
                width={2400}
                height={2400}
                className="block max-w-none size-full"
                src={imgRectangle17417}
              />
            </div>
          </div>
        </div>
      </div>
      <Reveal
        profile="slow"
        className="-translate-x-1/2 absolute h-[571px] left-[calc(50%-0.5px)] top-[3379px] w-[1439px]"
        data-node-id="10:510"
      >
        <div data-name="WHO WE ARE" id="story" className="relative size-full">
          <div
            className="absolute content-stretch flex flex-col gap-[27px] items-start leading-[0] left-[64px] text-white top-[147px] w-[563px]"
            data-node-id="10:511"
          >
            <div
              className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0 whitespace-nowrap"
              data-node-id="10:512"
            >
              <div
                className="col-1 flex flex-col font-medium justify-center ml-[3px] mt-0 not-italic relative row-1 text-[16px]"
                data-node-id="10:513"
              >
                <p className="leading-[35px]">{t("home.whoWeAre.eyebrow")}</p>
              </div>
              <div
                className="col-1 flex flex-col font-black italic justify-center ml-0 mt-[35px] relative row-1 text-[35px]"
                data-node-id="10:514"
              >
                <p>
                  <span className="leading-[35px]">{`${t("home.whoWeAre.titleBefore")} `}</span>
                  <span className="leading-[35px] text-[#ff7500]">
                    {t("home.whoWeAre.titleAccent")}
                  </span>
                  <span className="leading-[35px]">{` ${t("home.whoWeAre.titleAfter")}`}</span>
                </p>
              </div>
            </div>
            <div
              className="flex flex-col font-light justify-center min-w-full not-italic relative shrink-0 text-[16px] w-[min-content]"
              data-node-id="10:515"
            >
              <p className="mb-0">
                <span className="leading-[24px]">{`${t("home.whoWeAre.paragraph1Prefix")} `}</span>
                <span className="font-bold leading-[24px] not-italic">Neetrino IT</span>
                <span className="leading-[24px]">{` ${t("home.whoWeAre.paragraph1Middle")} `}</span>
                <span className="font-extrabold leading-[24px] not-italic">
                  {t("home.whoWeAre.paragraph1Strong")}
                </span>
                <span className="leading-[24px]">{t("home.whoWeAre.paragraph1Suffix")}</span>
              </p>
              <p>
                <span className="leading-[24px]">{t("home.whoWeAre.paragraph2Prefix")}</span>
                <span className="font-extrabold leading-[24px] not-italic">
                  {t("home.whoWeAre.paragraph2Strong")}
                </span>
              </p>
            </div>
          </div>
          <div className="absolute left-[64px] top-[358px] z-20 flex h-[276px] w-[642px] items-center justify-start">
            <MeetOurTeamExplorePill align="start" href="/contact" />
          </div>
          <div
            className="pointer-events-none absolute left-[721px] top-[-34px] h-[641px] w-[685px]"
            data-name="* 1"
            data-node-id="10:516"
          >
            <GenerativeArtScene className="opacity-90" />
          </div>
        </div>
      </Reveal>
    </>
  );
}
