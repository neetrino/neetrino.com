import { BlogPostStatus } from "@/lib/generated/prisma/client";
import { BlogTranslationTabs } from "@/components/admin/blog/BlogTranslationTabs";
import type { AdminBlogPost } from "@/lib/server/blog/admin";

type BlogPostFormProps = {
  post?: AdminBlogPost;
  action: (formData: FormData) => Promise<void>;
};

export function BlogPostForm({ post, action }: BlogPostFormProps) {
  return (
    <form action={action} className="space-y-6">
      {post ? <input type="hidden" name="postId" value={post.id} /> : null}
      <section className="rounded-3xl border border-black/10 bg-white p-5">
        <h2 className="text-lg font-semibold tracking-[-0.02em]">Common fields</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <label className="block">
            <span className="text-sm font-medium text-black/70">Status</span>
            <select
              className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-[#473dff]"
              defaultValue={post?.status ?? BlogPostStatus.DRAFT}
              name="status"
            >
              <option value={BlogPostStatus.DRAFT}>Draft</option>
              <option value={BlogPostStatus.PUBLISHED}>Published</option>
            </select>
          </label>
          <label className="block">
            <span className="text-sm font-medium text-black/70">Published date</span>
            <input
              className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-[#473dff]"
              defaultValue={formatDateInput(post?.publishedAt)}
              name="publishedAt"
              type="date"
            />
          </label>
          <label className="block md:col-span-2">
            <span className="text-sm font-medium text-black/70">coverImageUrl</span>
            <input
              className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-[#473dff]"
              defaultValue={post?.coverImageUrl ?? ""}
              name="coverImageUrl"
              placeholder="/figma-assets/example.webp or https://example.com/image.webp"
            />
          </label>
        </div>
      </section>

      <BlogTranslationTabs post={post} />

      <div className="sticky bottom-4 flex justify-end">
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
