"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { serviceDetailHref } from "@/components/services/service-pages-data";
import { whatWeDoDesktopContinueCenterLeftClassName } from "@/lib/what-we-do-desktop-continue-cta-layout";
import { cn } from "@/lib/utils";
import { Group } from "./Group";
import { Group1 } from "./Group1";
import { img2761, imgCloudInfrastructure, imgPc1, imgSafearea } from "./figma-assets";

export function NeetrinoHomeWhatWeDoBottom() {
  const t = useTranslations();
  const locale = useLocale();
  const isHySaaSTileTextCentered = locale === "hy";

  return (
    <>
      <div className="absolute contents left-[590px] top-[129px]" data-node-id="90:542">
        <div className="absolute contents left-[590px] top-[129px]" data-node-id="90:543">
          <div
            className="pointer-events-none absolute bg-[#292929] h-[553px] left-[590px] rounded-[19px] top-[129px] w-[258px]"
            data-node-id="90:544"
          />
          <div
            className={cn(
              "pointer-events-none absolute flex flex-col justify-center font-extralight not-italic leading-[0] text-[20px] text-white top-[577.5px] -translate-y-1/2",
              isHySaaSTileTextCentered
                ? cn(
                    whatWeDoDesktopContinueCenterLeftClassName.saas,
                    "-translate-x-1/2 max-w-[220px] text-center",
                  )
                : "left-[792px] -translate-x-full text-right whitespace-nowrap",
            )}
            data-node-id="90:545"
          >
            <p className="leading-[25px]">{t("home.whatWeDo.cards.saas.subtitle1")}</p>
          </div>
          <div
            className={cn(
              "pointer-events-none absolute flex flex-col justify-center font-bold not-italic leading-[0] text-[22px] text-white top-[199.5px] -translate-y-1/2",
              isHySaaSTileTextCentered
                ? cn(
                    whatWeDoDesktopContinueCenterLeftClassName.saas,
                    "-translate-x-1/2 max-w-[220px] text-center",
                  )
                : "left-[619px] whitespace-nowrap",
            )}
            data-node-id="90:546"
          >
            <p className="leading-[35px]">
              {t("home.whatWeDo.cards.saas.title1")} {t("home.whatWeDo.cards.saas.title2")}
            </p>
          </div>
        </div>
        <div
          className="pointer-events-none absolute h-[190px] left-[622px] top-[310px] w-[195px]"
          data-name="Cloud Infrastructure"
          data-node-id="90:548"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Image
              alt=""
              width={2400}
              height={2400}
              className="absolute h-[140.91%] left-[-17.24%] max-w-none top-[-16.67%] w-[137.44%]"
              src={imgCloudInfrastructure}
            />
          </div>
        </div>
      </div>
      <div
        className="pointer-events-none absolute h-[183px] left-[392px] top-[308px] w-[114px]"
        data-name="PC"
        data-node-id="90:549"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Image
            alt=""
            width={2400}
            height={2400}
            className="absolute h-[155.42%] left-[-74.48%] max-w-none top-[-27.71%] w-[248.96%]"
            src={imgPc1}
          />
        </div>
      </div>
      <Group
        className="-translate-x-1/2 absolute h-[276px] left-[calc(50%+0.5px)] top-[655px] w-[642px]"
        exploreHref="/services"
      />
      <div
        className="pointer-events-none absolute h-[231px] left-[1148px] top-[289px] w-[221px]"
        data-name="-276 1"
        data-node-id="90:552"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Image
            alt=""
            width={2400}
            height={2400}
            className="absolute inset-0 h-full w-full max-w-none object-contain p-[16px]"
            src={img2761}
          />
        </div>
      </div>
      <div
        className="pointer-events-none absolute contents leading-[0] left-[50px] text-white top-[6px] whitespace-nowrap"
        data-node-id="90:553"
      >
        <div
          className="-translate-y-1/2 absolute flex flex-col font-medium justify-center left-[56px] not-italic text-[16px] top-[23.5px]"
          data-node-id="90:554"
        >
          <p className="leading-[35px]">{t("nav.services")}</p>
        </div>
        <div
          className="-translate-y-1/2 absolute flex flex-col font-black italic justify-center left-[50px] text-[35px] top-[58.5px]"
          data-node-id="90:555"
        >
          <p>
            <span className="leading-[35px]">{`${t("home.whatWeDo.titleBefore")} `}</span>
            <span className="leading-[35px] text-[#ff7500]">{t("home.whatWeDo.titleAccent")}</span>
          </p>
        </div>
      </div>
      <Group1 className="absolute h-[553px] left-[50px] top-[129px] w-[258px]" />
      <Link
        href={serviceDetailHref("saas-development")}
        className={cn(
          "pointer-events-auto absolute z-30 flex gap-[4px] content-stretch items-center overflow-clip rounded-[40px] bg-white px-[24px] py-[16px] no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60",
          whatWeDoDesktopContinueCenterLeftClassName.saas,
          "-translate-x-1/2 top-[608px]",
        )}
        data-name="Button 15"
        data-node-id="90:547"
      >
        <div
          className="absolute bg-[#46fff4] blur-[7.5px] inset-[69px_0_-103px_0] opacity-0 rounded-tl-[60px] rounded-tr-[60px]"
          data-name="glow"
          data-node-id="I90:547;13:52"
        />
        <p
          className="font-medium leading-[24px] not-italic relative shrink-0 text-[#252525] text-[18px] whitespace-nowrap"
          data-node-id="I90:547;13:33"
        >
          {t("cta.continue")}
        </p>
        <div
          className="absolute bg-[#46fff4] blur-[7.5px] inset-[64px_0_-98px_0] opacity-0 rounded-tl-[60px] rounded-tr-[60px]"
          data-name="glow"
          data-node-id="I90:547;13:44"
        />
        <div
          className="overflow-clip relative shrink-0 size-[20px]"
          data-name="Right"
          data-node-id="I90:547;13:34"
        >
          <div
            className="absolute inset-[8.33%]"
            data-name="safearea"
            data-node-id="I90:547;13:34;21:1594"
          >
            <Image
              alt=""
              width={2400}
              height={2400}
              className="absolute block max-w-none size-full"
              src={imgSafearea}
            />
          </div>
        </div>
      </Link>
      <Link
        href={serviceDetailHref("ai-product-development")}
        className={cn(
          "pointer-events-auto absolute z-30 flex gap-[4px] content-stretch items-center overflow-clip rounded-[40px] bg-white px-[24px] py-[16px] no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60",
          whatWeDoDesktopContinueCenterLeftClassName.ai,
          "-translate-x-1/2 top-[607px]",
        )}
        data-name="Button 16"
        data-node-id="90:541"
      >
        <div
          className="absolute bg-[#46fff4] blur-[7.5px] inset-[69px_0_-103px_0] opacity-0 rounded-tl-[60px] rounded-tr-[60px]"
          data-name="glow"
          data-node-id="I90:541;13:52"
        />
        <p
          className="font-medium leading-[24px] not-italic relative shrink-0 text-[#252525] text-[18px] whitespace-nowrap"
          data-node-id="I90:541;13:33"
        >
          {t("cta.continue")}
        </p>
        <div
          className="absolute bg-[#46fff4] blur-[7.5px] inset-[64px_0_-98px_0] opacity-0 rounded-tl-[60px] rounded-tr-[60px]"
          data-name="glow"
          data-node-id="I90:541;13:44"
        />
        <div
          className="overflow-clip relative shrink-0 size-[20px]"
          data-name="Right"
          data-node-id="I90:541;13:34"
        >
          <div
            className="absolute inset-[8.33%]"
            data-name="safearea"
            data-node-id="I90:541;13:34;21:1594"
          >
            <Image
              alt=""
              width={2400}
              height={2400}
              className="absolute block max-w-none size-full"
              src={imgSafearea}
            />
          </div>
        </div>
      </Link>
    </>
  );
}
