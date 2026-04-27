import Link from "next/link";
import { AdminShell } from "@/components/admin/AdminShell";
import { BlogPostForm } from "@/components/admin/blog/BlogPostForm";
import { createBlogPostAction } from "@/app/admin/blog/actions";
import { requireAdminSession } from "@/lib/server/auth/guards";

export default async function NewBlogPostPage() {
  await requireAdminSession();

  return (
    <AdminShell>
      <div className="mb-6">
        <Link href="/admin/blog" className="text-sm font-medium text-black/55 hover:text-black">
          Back to posts
        </Link>
        <h1 className="mt-3 text-3xl font-semibold tracking-[-0.04em]">Create blog post</h1>
      </div>
      <BlogPostForm action={createBlogPostAction} />
    </AdminShell>
  );
}
