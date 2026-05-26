"use client";

import { useRouter } from "next/navigation";
import { BlogTranslationTabs } from "@/components/admin/blog/BlogTranslationTabs";
import type { AdminBlogPost } from "@/lib/server/blog/admin";

type BlogPostStatusValue = "DRAFT" | "PUBLISHED";

const BLOG_POST_STATUS = {
  DRAFT: "DRAFT",
  PUBLISHED: "PUBLISHED",
} as const satisfies Record<string, BlogPostStatusValue>;

type BlogPostFormProps = {
  post?: AdminBlogPost;
  action: (formData: FormData) => Promise<void>;
  embedded?: boolean;
  onSaved?: () => void;
};

export function BlogPostForm({ post, action, embedded = false, onSaved }: BlogPostFormProps) {
  const router = useRouter();

  return (
    <form
      action={async (formData) => {
        await action(formData);
        router.refresh();
        onSaved?.();
      }}
      className="space-y-6"
    >
      {post ? <input type="hidden" name="postId" value={post.id} /> : null}
      <section className="rounded-2xl border border-[#151515]/[0.08] bg-[#f8f8fa] p-4">
        <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-[#151515]/40">
          Common fields
        </h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <label className="block">
            <span className="text-sm font-medium text-[#151515]/70">Status</span>
            <select
              className="mt-2 w-full rounded-xl border border-[#151515]/10 bg-white px-4 py-2.5 text-sm outline-none focus:border-[#473dff]"
              defaultValue={post?.status ?? BLOG_POST_STATUS.DRAFT}
              name="status"
            >
              <option value={BLOG_POST_STATUS.DRAFT}>Draft</option>
              <option value={BLOG_POST_STATUS.PUBLISHED}>Published</option>
            </select>
          </label>
          <label className="block">
            <span className="text-sm font-medium text-[#151515]/70">Published date</span>
            <input
              className="mt-2 w-full rounded-xl border border-[#151515]/10 bg-white px-4 py-2.5 text-sm outline-none focus:border-[#473dff]"
              defaultValue={formatDateInput(post?.publishedAt)}
              name="publishedAt"
              type="date"
            />
          </label>
          <label className="block md:col-span-2">
            <span className="text-sm font-medium text-[#151515]/70">Cover image URL</span>
            <input
              className="mt-2 w-full rounded-xl border border-[#151515]/10 bg-white px-4 py-2.5 text-sm outline-none focus:border-[#473dff]"
              defaultValue={post?.coverImageUrl ?? ""}
              name="coverImageUrl"
              placeholder="https://cdn.neetrino.com/figma-assets/example.webp"
            />
          </label>
        </div>
      </section>

      <BlogTranslationTabs post={post} />

      <div className={embedded ? "flex justify-end pb-2" : "sticky bottom-4 flex justify-end"}>
        <button
          className="rounded-full bg-[#151515] px-7 py-3 text-sm font-semibold text-white shadow-lg transition-opacity hover:opacity-90"
          type="submit"
        >
          Save post
        </button>
      </div>
    </form>
  );
}

function formatDateInput(date: Date | null | undefined): string {
  return date ? date.toISOString().slice(0, 10) : "";
}
