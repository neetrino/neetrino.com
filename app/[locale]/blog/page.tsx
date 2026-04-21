import type { Metadata } from "next";
import { BlogIndexCard } from "@/components/blog/BlogIndexCard";
import { Footer } from "@/components/sections/Footer";
import { getBlogIndexItems } from "@/lib/blog-page.constants";
import { getTranslations } from "next-intl/server";
import type { AppLocale } from "@/lib/i18n/locales";
import { interSans } from "@/lib/fonts";
import { getLocaleAlternates } from "@/lib/metadata";
import {
  NEETRINO_DESKTOP_CANVAS_WIDTH_PX,
  NEETRINO_DESKTOP_HEADER_CLEARANCE_DESIGN_PX,
} from "@/lib/desktop-header-layout.constants";

type BlogPageProps = {
  params: Promise<{ locale: AppLocale }>;
};

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations();
  const title = t("blogPage.title");
  const description = t("blogPage.description");
  return { title, description, alternates: getLocaleAlternates(locale, "/blog") };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { locale } = await params;
  const t = await getTranslations();
  const blogItems = getBlogIndexItems(locale);

  return (
    <div className="min-h-dvh w-full min-w-0 overflow-x-hidden bg-[#151515]">
      <main
        className={`mx-auto max-w-6xl px-6 pt-24 pb-16 lg:pt-[calc(${NEETRINO_DESKTOP_HEADER_CLEARANCE_DESIGN_PX}*100vw/${NEETRINO_DESKTOP_CANVAS_WIDTH_PX})] ${interSans.className}`}
      >
        <header className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-normal tracking-[-0.04em] text-white font-[family-name:var(--font-megatrox)] md:text-4xl">
            {t("blogPage.title")}
          </h1>
        </header>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-7 lg:mt-14 lg:grid-cols-3 lg:gap-8">
          {blogItems.map((item) => (
            <BlogIndexCard key={item.id} item={item} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
