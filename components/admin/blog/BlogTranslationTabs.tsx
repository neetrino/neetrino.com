import { locales } from "@/i18n/routing";
import type { AdminBlogPost } from "@/lib/server/blog/admin";

export function BlogTranslationTabs({ post }: { post?: AdminBlogPost }) {
  return (
    <div className="space-y-5">
      {locales.map((locale) => {
        const translation = post?.translations[locale];
        return (
          <section key={locale} className="rounded-3xl border border-black/10 bg-white p-5">
            <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-[#ff7500]">
              {locale}
            </h2>
            <div className="mt-5 grid gap-4">
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
          </section>
        );
      })}
    </div>
  );
}

function TextInput({ label, name, value }: { label: string; name: string; value?: string | null }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-black/70">{label}</span>
      <input
        className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-[#473dff]"
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
      <span className="text-sm font-medium text-black/70">{label}</span>
      <textarea
        className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-[#473dff]"
        defaultValue={value ?? ""}
        name={name}
        rows={rows}
      />
    </label>
  );
}
