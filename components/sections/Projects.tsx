import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Reveal } from "@/components/motion/Reveal";
import { HomeProjectsGrid } from "@/components/home/HomeProjectsGrid";
import { ExploreHoverFlare } from "@/components/neetrino-home/ExploreHoverFlare";
import { FIGMA_ASSETS } from "@/lib/figma-assets";
import { interSans } from "@/lib/fonts";
import type { PublicPortfolioCard } from "@/lib/portfolio/public-portfolio.dto";

type ProjectsProps = {
  items: readonly PublicPortfolioCard[];
};

export async function Projects({ items }: ProjectsProps) {
  const t = await getTranslations();

  return (
    <section
      id="blog"
      className={`section-container pt-16 pb-15 md:py-24 ${interSans.className}`}
      aria-labelledby="projects-heading"
    >
      <Reveal profile="slow" className="mb-10 md:mb-12">
        <header>
          <p className="text-sm font-medium uppercase tracking-wider text-white">
            {t("portfolioPage.eyebrow")}
          </p>
          <h2
            id="projects-heading"
            className="mt-2 text-2xl font-black italic md:text-3xl lg:text-[35px]"
          >
            <span className="text-white">{t("home.projects.titleBefore")}</span>
            <span className="text-[#ff7500]"> {t("home.projects.titleAccent")}</span>
          </h2>
        </header>
      </Reveal>

      <HomeProjectsGrid items={items} />

      <Reveal profile="slow" className="mt-10 flex justify-center">
        <div className="group relative inline-flex items-center justify-center">
          <Link
            href="/portfolio"
            className="relative z-10 inline-flex items-center gap-2 rounded-full border border-[#6a92ff] bg-black px-8 py-4 text-lg font-medium text-white transition-opacity hover:opacity-90"
          >
            {t("cta.explore")}
            <Image
              src={FIGMA_ASSETS.imgSafearea}
              alt=""
              width={20}
              height={20}
              className="size-5 shrink-0 brightness-0 invert"
              aria-hidden
            />
          </Link>
          <ExploreHoverFlare positionClassName="left-1/2 top-1/2 h-[100px] w-[min(100vw-2rem,360px)] max-w-none -translate-x-1/2 -translate-y-1/2" />
        </div>
      </Reveal>
    </section>
  );
}
