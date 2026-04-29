"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { logAdminServerActionDebug } from "@/lib/server/auth/admin-auth-diagnostics";
import { requireAdminSession } from "@/lib/server/auth/guards";
import {
  createAdminBlogPost,
  deleteAdminBlogPost,
  updateAdminBlogPost,
} from "@/lib/server/blog/admin";
import { parseBlogPostFormData } from "@/lib/server/blog/validation";

export async function createBlogPostAction(formData: FormData): Promise<void> {
  await logAdminServerActionDebug("createBlogPost");
  await requireAdminSession();
  const input = parseBlogPostFormData(formData);
  const postId = await createAdminBlogPost(input);

  revalidateBlogPaths();
  redirect(`/admin/blog/${postId}/edit`);
}

export async function updateBlogPostAction(formData: FormData): Promise<void> {
  await logAdminServerActionDebug("updateBlogPost");
  await requireAdminSession();
  const postId = readPostId(formData);
  const input = parseBlogPostFormData(formData);

  await updateAdminBlogPost(postId, input);
  revalidateBlogPaths();
  redirect(`/admin/blog/${postId}/edit`);
}

export async function deleteBlogPostAction(formData: FormData): Promise<void> {
  await logAdminServerActionDebug("deleteBlogPost");
  await requireAdminSession();
  await deleteAdminBlogPost(readPostId(formData));

  revalidateBlogPaths();
  redirect("/admin/blog");
}

function readPostId(formData: FormData): string {
  const postId = formData.get("postId");
  if (typeof postId !== "string" || postId.length === 0) {
    throw new Error("postId is required.");
  }

  return postId;
}

function revalidateBlogPaths(): void {
  revalidatePath("/admin/blog");
  revalidatePath("/en/blog");
  revalidatePath("/ru/blog");
  revalidatePath("/hy/blog");
}
