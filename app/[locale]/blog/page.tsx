import type { Metadata } from "next";
import { BlogIndexPageFrame } from "@/components/blog/BlogIndexPageFrame";
import { BlogIndexCard } from "@/components/blog/BlogIndexCard";
import { getPublishedBlogIndexItems } from "@/lib/server/blog/public";
import { getTranslations } from "next-intl/server";
import type { AppLocale } from "@/lib/i18n/locales";
import { getLocaleAlternates } from "@/lib/metadata";
import { pageTitleMegatroxFontClass } from "@/lib/page-title-megatrox-font.constants";
import { cn } from "@/lib/utils";

type BlogPageProps = {
  params: Promise<{ locale: AppLocale }>;
};

export const dynamic = "force-dynamic";

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
  const blogItems = await getPublishedBlogIndexItems(locale);

  return (
    <BlogIndexPageFrame
      title={
        <h1
          className={cn(
            "text-3xl font-normal tracking-[-0.04em] text-white md:text-4xl",
            pageTitleMegatroxFontClass(locale),
          )}
        >
          {t("blogPage.title")}
        </h1>
      }
      cards={
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-7 lg:mt-14 lg:grid-cols-3 lg:gap-8">
          {blogItems.map((item) => (
            <BlogIndexCard key={item.id} item={item} />
          ))}
        </div>
      }
    />
  );
}
