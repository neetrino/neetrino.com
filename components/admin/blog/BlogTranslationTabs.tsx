"use client";

import { useState } from "react";
import { locales, type AppLocale } from "@/i18n/routing";
import { BLOG_LOCALE_LABELS } from "@/lib/admin/blog-locale-labels";
import type { AdminBlogPost } from "@/lib/server/blog/admin";
import { cn } from "@/lib/utils";

type BlogTranslationTabsProps = {
  readonly post?: AdminBlogPost;
};

export function BlogTranslationTabs({ post }: BlogTranslationTabsProps) {
  const [activeLocale, setActiveLocale] = useState<AppLocale>("en");

  return (
    <section className="rounded-2xl border border-[#151515]/[0.08] bg-[#f8f8fa] p-4">
      <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-[#151515]/40">
        Translations
      </h2>

      <div
        className="mt-4 flex gap-1 rounded-xl border border-[#151515]/10 bg-white p-1"
        role="tablist"
        aria-label="Blog translation languages"
      >
        {locales.map((locale) => (
          <button
            key={locale}
            type="button"
            role="tab"
            aria-selected={activeLocale === locale}
            onMouseDown={(event) => event.preventDefault()}
            onClick={() => setActiveLocale(locale)}
            className={cn(
              "flex-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
              activeLocale === locale
                ? "bg-[#151515] text-white"
                : "text-[#151515]/55 hover:bg-[#151515]/[0.04] hover:text-[#151515]",
            )}
          >
            {BLOG_LOCALE_LABELS[locale]}
          </button>
        ))}
      </div>

      <div className="mt-4 grid">
        {locales.map((locale) => {
          const translation = post?.translations[locale];
          const isActive = activeLocale === locale;

          return (
            <div
              key={locale}
              role="tabpanel"
              aria-hidden={!isActive}
              className={cn(
                "col-start-1 row-start-1 grid gap-4",
                !isActive && "invisible pointer-events-none",
              )}
            >
              <TextInput label="Slug" name={`${locale}.slug`} value={translation?.slug} />
              <TextInput label="Title" name={`${locale}.title`} value={translation?.title} />
              <TextareaInput
                label="Excerpt / short description"
                name={`${locale}.excerpt`}
                rows={3}
                value={translation?.excerpt}
              />
              <TextareaInput
                label="Content / full text (Markdown)"
                name={`${locale}.content`}
                rows={12}
                value={translation?.content}
              />
              <TextInput
                label="Image alt"
                name={`${locale}.imageAlt`}
                value={translation?.imageAlt}
              />
              <TextInput
                label="SEO title"
                name={`${locale}.seoTitle`}
                value={translation?.seoTitle}
              />
              <TextareaInput
                label="SEO description"
                name={`${locale}.seoDescription`}
                rows={2}
                value={translation?.seoDescription}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}

function TextInput({ label, name, value }: { label: string; name: string; value?: string | null }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-[#151515]/70">{label}</span>
      <input
        className="mt-2 w-full rounded-xl border border-[#151515]/10 bg-white px-4 py-2.5 text-sm outline-none focus:border-[#473dff]"
        defaultValue={value ?? ""}
        name={name}
      />
    </label>
  );
}

function TextareaInput({
  label,
  name,
  rows,
  value,
}: {
  label: string;
  name: string;
  rows: number;
  value?: string | null;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-[#151515]/70">{label}</span>
      <textarea
        className="mt-2 w-full rounded-xl border border-[#151515]/10 bg-white px-4 py-2.5 text-sm outline-none focus:border-[#473dff]"
        defaultValue={value ?? ""}
        name={name}
        rows={rows}
      />
    </label>
  );
}
