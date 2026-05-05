"use client";

import { useTranslations } from "next-intl";
import { Group } from "./Group";
import { NeetrinoHomeProjectsMarquee } from "./NeetrinoHomeProjectsMarquee";

export function NeetrinoHomeSegment4() {
  const t = useTranslations();

  return (
    <>
      <div
        className="absolute h-[1173px] left-px top-[2106px] w-[1440px]"
        data-name="PROJECTS"
        data-node-id="10:489"
        id="blog"
      >
        <div
          className="absolute contents leading-[0] left-[51px] text-white top-[51px] whitespace-nowrap"
          data-node-id="10:506"
        >
          <div
            className="-translate-y-1/2 absolute flex flex-col font-medium justify-center left-[57px] not-italic text-[16px] top-[68.5px]"
            data-node-id="10:507"
          >
            <p className="leading-[35px]">{t("portfolioPage.eyebrow")}</p>
          </div>
          <div
            className="-translate-y-1/2 absolute flex flex-col font-black italic justify-center left-[51px] text-[35px] top-[103.5px]"
            data-node-id="10:508"
          >
            <p>
              <span className="leading-[35px]">{t("home.projects.titleBefore")}</span>
              <span className="leading-[35px] text-[#ff7500]">{` ${t("home.projects.titleAccent")}`}</span>
            </p>
          </div>
        </div>
        <Group
          className="-translate-x-1/2 absolute top-[987px] left-1/2 z-[20] h-[276px] w-[642px]"
          exploreHref="/portfolio"
        />
      </div>
      <NeetrinoHomeProjectsMarquee />
    </>
  );
}
