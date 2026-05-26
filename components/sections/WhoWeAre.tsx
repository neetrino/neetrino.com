"use client";

import { useTranslations } from "next-intl";
import { MeetOurTeamExplorePill } from "@/components/about-us/MeetOurTeamExplorePill";
import { Reveal } from "@/components/motion/Reveal";
import { interSans } from "@/lib/fonts";
import { SCROLL_REVEAL_SLOW_STAGGER_MS } from "@/lib/motion/scroll-reveal.constants";

export function WhoWeAre() {
  const t = useTranslations();

  return (
    <section
      id="story"
      className={`section-container relative overflow-x-clip py-10 md:py-16 ${interSans.className}`}
      aria-labelledby="who-we-are-heading"
    >
      <Reveal profile="slow" className="flex flex-col gap-5">
        <div className="w-full shrink-0">
          <p className="text-sm font-medium uppercase tracking-wider text-white">
            {t("home.whoWeAre.eyebrow")}
          </p>
          <h2
            id="who-we-are-heading"
            className="mt-2 text-2xl font-black italic text-white md:text-3xl lg:text-[35px]"
          >
            <span className="text-white">{t("home.whoWeAre.titleBefore")} </span>
            <span className="text-[#ff7500]">{t("home.whoWeAre.titleAccent")}</span>
            <span className="text-white"> {t("home.whoWeAre.titleAfter")}</span>
          </h2>
          <div className="mt-4 space-y-3 text-sm font-light leading-relaxed text-white md:text-base">
            <p>
              {t("home.whoWeAre.paragraph1Prefix")}{" "}
              <strong className="font-bold">Neetrino IT</strong>{" "}
              {t("home.whoWeAre.paragraph1Middle")}{" "}
              <strong className="font-extrabold">{t("home.whoWeAre.paragraph1Strong")}</strong>
              {t("home.whoWeAre.paragraph1Suffix")}
            </p>
            <p>
              {t("home.whoWeAre.paragraph2Prefix")}
              <strong className="font-extrabold">{t("home.whoWeAre.paragraph2Strong")}</strong>
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal
        profile="slow"
        className="relative z-10 mt-5 flex justify-start"
        delayMs={SCROLL_REVEAL_SLOW_STAGGER_MS}
      >
        <MeetOurTeamExplorePill align="start" href="/contact" />
      </Reveal>
    </section>
  );
}
