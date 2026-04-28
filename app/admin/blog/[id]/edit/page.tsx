import Link from "next/link";
import { notFound } from "next/navigation";
import { AdminShell } from "@/components/admin/AdminShell";
import { BlogPostForm } from "@/components/admin/blog/BlogPostForm";
import { updateBlogPostAction } from "@/app/admin/blog/actions";
import { requireAdminSession } from "@/lib/server/auth/guards";
import { getAdminBlogPost } from "@/lib/server/blog/admin";

type EditBlogPostPageProps = {
  params: Promise<{ id: string }>;
};

export default async function EditBlogPostPage({ params }: EditBlogPostPageProps) {
  await requireAdminSession();
  const { id } = await params;
  const post = await getAdminBlogPost(id);
  if (!post) {
    notFound();
  }

  return (
    <AdminShell>
      <div className="mb-6">
        <Link href="/admin/blog" className="text-sm font-medium text-black/55 hover:text-black">
          Back to posts
        </Link>
        <h1 className="mt-3 text-3xl font-semibold tracking-[-0.04em]">Edit blog post</h1>
      </div>
      <BlogPostForm action={updateBlogPostAction} post={post} />
    </AdminShell>
  );
}
