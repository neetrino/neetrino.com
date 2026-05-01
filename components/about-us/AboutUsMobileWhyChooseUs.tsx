"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { AboutUsMobileWhyChooseUsPanelBackdrop } from "@/components/about-us/AboutUsMobileWhyChooseUsPanelBackdrop";
import { interSans } from "@/lib/fonts";
import {
  img02A0Ab86C3Fe4B8381Ab86B982Bb800C1,
  imgAboutPaletteDesignOptions,
  imgChatGptImageApr32026At011015Pm1,
  imgChatGptImageMar272026At064658Pm1,
} from "@/lib/about-us-figma-asset-urls";
import {
  ABOUT_MOBILE_WHY_CHOOSE_PANEL_INNER_PAD_CLASS,
  ABOUT_MOBILE_WHY_CHOOSE_PANEL_OUTER_CLASS,
  ABOUT_MOBILE_WHY_CHOOSE_PALETTE_FRAME_CLASS,
  ABOUT_MOBILE_WHY_CHOOSE_PALETTE_ROW_PULL_UP_CLASS,
  ABOUT_MOBILE_WHY_CHOOSE_PALETTE_ROW_NUDGE_RIGHT_CLASS,
  ABOUT_MOBILE_WHY_CHOOSE_PALETTE_COPY_NUDGE_LEFT_CLASS,
  ABOUT_MOBILE_WHY_CHOOSE_PALETTE_COPY_PULL_UP_CLASS,
  ABOUT_MOBILE_WHY_CHOOSE_PALETTE_ROW_STACK_GAP_CLASS,
  ABOUT_MOBILE_WHY_CHOOSE_FEATURE_ICON_MIRROR_X_CLASS,
  ABOUT_MOBILE_WHY_CHOOSE_LIGHTNING_COPY_NUDGE_RIGHT_CLASS,
  ABOUT_MOBILE_WHY_CHOOSE_LIGHTNING_COPY_PULL_UP_CLASS,
  ABOUT_MOBILE_WHY_CHOOSE_LIGHTNING_ICON_FRAME_CLASS,
  ABOUT_MOBILE_WHY_CHOOSE_LIGHTNING_ROW_PULL_UP_CLASS,
  ABOUT_MOBILE_WHY_CHOOSE_LIGHTNING_ROW_STACK_GAP_CLASS,
  ABOUT_MOBILE_WHY_CHOOSE_REFLECTION_BLUR_OFFSET_CLASS,
  ABOUT_MOBILE_WHY_CHOOSE_REFLECTION_FIGMA_BLUR_OPACITY_CLASS,
  ABOUT_MOBILE_WHY_CHOOSE_ROW_GAP_CLASS,
  ABOUT_MOBILE_WHY_CHOOSE_ROCKET_ROW_NUDGE_LEFT_CLASS,
  ABOUT_MOBILE_WHY_CHOOSE_ROCKET_ROW_STACK_GAP_CLASS,
  ABOUT_MOBILE_WHY_CHOOSE_ROCKET_COPY_PULL_UP_CLASS,
  ABOUT_MOBILE_WHY_CHOOSE_ROCKET_COPY_NUDGE_RIGHT_CLASS,
  ABOUT_MOBILE_WHY_CHOOSE_ROCKET_ICON_FRAME_CLASS,
  ABOUT_MOBILE_WHY_CHOOSE_SIDE_ICON_FRAME_CLASS,
  ABOUT_MOBILE_WHY_CHOOSE_TITLE_TO_ROWS_MARGIN_TOP_CLASS,
} from "@/lib/about-us-mobile-why-choose.constants";
import { DEFAULT_IMAGE_QUALITY } from "@/lib/image-defaults";
import { cn } from "@/lib/utils";

const WHY_CHOOSE_TITLE_SIZE_CLASS = "text-[clamp(1.5rem,6.5vw,1.875rem)]";
const WHY_CHOOSE_TITLE_LEADING_CLASS = "leading-[clamp(2rem,8vw,2.1875rem)]";
const WHY_CHOOSE_BODY_CLASS = cn(
  interSans.className,
  "text-base font-extrabold leading-[22px] text-[#f5f5f5] not-italic",
);

const WHY_CHOOSE_SHARP_TITLE_CLASS = cn(
  interSans.className,
  "relative z-[1] m-0 inline-flex max-w-full flex-col items-start justify-center leading-[0] font-black italic text-white",
  WHY_CHOOSE_TITLE_SIZE_CLASS,
);

/** Same type metrics as sharp line so reflection width matches the word (`479:1289`). */
const WHY_CHOOSE_BLUR_TITLE_CLASS = cn(
  interSans.className,
  "relative inline-flex max-w-full flex-col items-start justify-center leading-[0] font-black italic text-white",
  WHY_CHOOSE_TITLE_SIZE_CLASS,
  ABOUT_MOBILE_WHY_CHOOSE_REFLECTION_FIGMA_BLUR_OPACITY_CLASS,
);

type AboutPageT = ReturnType<typeof useTranslations<"aboutPage">>;

function WhyChooseUsTitleLineParts({ t }: { t: AboutPageT }) {
  const lineClass = WHY_CHOOSE_TITLE_LEADING_CLASS;
  return (
    <>
      <span className={cn(lineClass)}>{t("why")} </span>
      <span className={cn(lineClass, "text-[#ff7500]")}>{t("choose")} </span>
      <span className={cn(lineClass)}>{t("usQuestion")}</span>
    </>
  );
}

function WhyChooseUsReflectedHeading({ t }: { t: AboutPageT }) {
  return (
    <div className="flex w-full min-w-0 flex-col items-start">
      <h2
        id="about-mobile-why-choose-heading"
        className={cn(WHY_CHOOSE_SHARP_TITLE_CLASS, "max-w-full text-left")}
        data-node-id="479:1288"
      >
        <p className="m-0 leading-[0]">
          <WhyChooseUsTitleLineParts t={t} />
        </p>
      </h2>
      <div
        className={cn(
          "pointer-events-none inline-flex max-w-full shrink-0 items-start justify-start",
          ABOUT_MOBILE_WHY_CHOOSE_REFLECTION_BLUR_OFFSET_CLASS,
        )}
        aria-hidden
        data-node-id="479:1289"
      >
        <div className="-scale-y-100 flex-none">
          <div className={cn(WHY_CHOOSE_BLUR_TITLE_CLASS, "text-left")}>
            <p className="m-0 leading-[0]">
              <WhyChooseUsTitleLineParts t={t} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureCopyBlock({
  line1Key,
  line2Key,
  align,
  t,
}: {
  line1Key: "feature1Line1" | "feature2Line1" | "feature3Line1" | "feature4Line1";
  line2Key: "feature1Line2" | "feature2Line2" | "feature3Line2" | "feature4Line2";
  align: "left" | "right";
  t: AboutPageT;
}) {
  const line2 = t(line2Key);
  const preLine = line2.includes("\n");
  const alignClass = align === "right" ? "text-right" : "text-left";
  return (
    <div className={cn(WHY_CHOOSE_BODY_CLASS, "min-w-0 w-full max-w-md", alignClass)}>
      <p className="mb-0">{t(line1Key)}</p>
      <p className={cn(preLine && "whitespace-pre-line")}>{line2}</p>
    </div>
  );
}

function SideIcon({
  src,
  alt,
  sizes,
  className,
  imageClassName,
}: {
  src: string;
  alt: string;
  sizes: string;
  className: string;
  imageClassName: string;
}) {
  return (
    <div className={className}>
      <Image
        alt={alt}
        src={src}
        fill
        sizes={sizes}
        className={imageClassName}
        quality={DEFAULT_IMAGE_QUALITY}
        loading="lazy"
      />
    </div>
  );
}

/**
 * Mobile “Why choose us” — Figma NEETRINO-WEB `479:1287`–`479:1295` (panel `479:1284`).
 */
export function AboutUsMobileWhyChooseUs() {
  const t = useTranslations("aboutPage");

  return (
    <div className={ABOUT_MOBILE_WHY_CHOOSE_PANEL_OUTER_CLASS}>
      <AboutUsMobileWhyChooseUsPanelBackdrop />
      <section
        className={cn(
          "relative z-10 bg-transparent py-8 sm:py-10",
          ABOUT_MOBILE_WHY_CHOOSE_PANEL_INNER_PAD_CLASS,
        )}
        aria-labelledby="about-mobile-why-choose-heading"
      >
        <WhyChooseUsReflectedHeading t={t} />
        <div
          className={cn(
            "flex flex-col",
            ABOUT_MOBILE_WHY_CHOOSE_TITLE_TO_ROWS_MARGIN_TOP_CLASS,
            ABOUT_MOBILE_WHY_CHOOSE_ROW_GAP_CLASS,
          )}
        >
          <div
            className={cn(
              "flex w-full flex-col items-start",
              ABOUT_MOBILE_WHY_CHOOSE_ROCKET_ROW_NUDGE_LEFT_CLASS,
              ABOUT_MOBILE_WHY_CHOOSE_ROCKET_ROW_STACK_GAP_CLASS,
            )}
          >
            <SideIcon
              src={imgChatGptImageMar272026At064658Pm1}
              alt=""
              sizes="292px"
              className={cn(ABOUT_MOBILE_WHY_CHOOSE_ROCKET_ICON_FRAME_CLASS)}
              imageClassName="object-contain object-center"
            />
            <div
              className={cn(
                ABOUT_MOBILE_WHY_CHOOSE_ROCKET_COPY_PULL_UP_CLASS,
                ABOUT_MOBILE_WHY_CHOOSE_ROCKET_COPY_NUDGE_RIGHT_CLASS,
                "min-w-0 w-full",
              )}
            >
              <FeatureCopyBlock
                line1Key="feature1Line1"
                line2Key="feature1Line2"
                align="left"
                t={t}
              />
            </div>
          </div>

          <div
            className={cn(
              "flex w-full flex-col items-end",
              ABOUT_MOBILE_WHY_CHOOSE_PALETTE_ROW_PULL_UP_CLASS,
              ABOUT_MOBILE_WHY_CHOOSE_PALETTE_ROW_NUDGE_RIGHT_CLASS,
              ABOUT_MOBILE_WHY_CHOOSE_PALETTE_ROW_STACK_GAP_CLASS,
            )}
          >
            <SideIcon
              src={imgAboutPaletteDesignOptions}
              alt=""
              sizes="240px"
              className={cn(ABOUT_MOBILE_WHY_CHOOSE_PALETTE_FRAME_CLASS)}
              imageClassName="object-contain object-center"
            />
            <div
              className={cn(
                ABOUT_MOBILE_WHY_CHOOSE_PALETTE_COPY_PULL_UP_CLASS,
                ABOUT_MOBILE_WHY_CHOOSE_PALETTE_COPY_NUDGE_LEFT_CLASS,
                "min-w-0 self-end",
              )}
            >
              <FeatureCopyBlock
                line1Key="feature2Line1"
                line2Key="feature2Line2"
                align="right"
                t={t}
              />
            </div>
          </div>

          <div
            className={cn(
              "flex w-full flex-col items-start",
              ABOUT_MOBILE_WHY_CHOOSE_LIGHTNING_ROW_PULL_UP_CLASS,
              ABOUT_MOBILE_WHY_CHOOSE_LIGHTNING_ROW_STACK_GAP_CLASS,
            )}
          >
            <SideIcon
              src={imgChatGptImageApr32026At011015Pm1}
              alt=""
              sizes="300px"
              className={cn(ABOUT_MOBILE_WHY_CHOOSE_LIGHTNING_ICON_FRAME_CLASS)}
              imageClassName={cn(
                "object-contain object-left object-bottom",
                ABOUT_MOBILE_WHY_CHOOSE_FEATURE_ICON_MIRROR_X_CLASS,
              )}
            />
            <div
              className={cn(
                ABOUT_MOBILE_WHY_CHOOSE_LIGHTNING_COPY_PULL_UP_CLASS,
                ABOUT_MOBILE_WHY_CHOOSE_LIGHTNING_COPY_NUDGE_RIGHT_CLASS,
                "min-w-0 w-full",
              )}
            >
              <FeatureCopyBlock
                line1Key="feature3Line1"
                line2Key="feature3Line2"
                align="left"
                t={t}
              />
            </div>
          </div>

          <div className="flex w-full flex-col items-end gap-3 sm:gap-4">
            <SideIcon
              src={img02A0Ab86C3Fe4B8381Ab86B982Bb800C1}
              alt=""
              sizes="150px"
              className={cn(ABOUT_MOBILE_WHY_CHOOSE_SIDE_ICON_FRAME_CLASS)}
              imageClassName={cn(
                "object-cover object-center",
                ABOUT_MOBILE_WHY_CHOOSE_FEATURE_ICON_MIRROR_X_CLASS,
              )}
            />
            <FeatureCopyBlock
              line1Key="feature4Line1"
              line2Key="feature4Line2"
              align="right"
              t={t}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
