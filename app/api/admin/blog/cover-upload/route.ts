import { NextResponse } from "next/server";
import { AdminUnauthorizedError, requireAdminApiSession } from "@/lib/server/auth/guards";
import {
  BLOG_COVER_UPLOAD_FORM_FIELD,
  BLOG_COVER_UPLOAD_MAX_BYTES,
} from "@/lib/constants/blog-cover-upload.constants";
import { getBlogCoverR2Config } from "@/lib/server/storage/blog-cover-r2-config";
import {
  isAllowedBlogCoverMimeType,
  uploadBlogCoverToR2,
} from "@/lib/server/storage/upload-blog-cover-to-r2";
import { bufferMatchesBlogCoverMime } from "@/lib/server/storage/validate-blog-cover-buffer";

export const runtime = "nodejs";

type OkJson = { success: true; publicUrl: string; key: string };
type ErrJson = { success: false; error: string };

export async function POST(request: Request): Promise<NextResponse<OkJson | ErrJson>> {
  try {
    await requireAdminApiSession();
  } catch (error: unknown) {
    if (error instanceof AdminUnauthorizedError) {
      return NextResponse.json({ success: false, error: "Unauthorized." }, { status: 401 });
    }
    throw error;
  }

  const config = getBlogCoverR2Config();
  if (!config) {
    return NextResponse.json(
      {
        success: false,
        error:
          "Blog image upload is not configured. Set R2_ACCOUNT_ID (or CF_ACCOUNT_ID), R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY, R2_BUCKET_NAME, and R2_PUBLIC_URL.",
      },
      { status: 503 },
    );
  }

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json({ success: false, error: "Invalid multipart body." }, { status: 400 });
  }

  const file = formData.get(BLOG_COVER_UPLOAD_FORM_FIELD);
  if (!file || !(file instanceof File)) {
    return NextResponse.json({ success: false, error: "No file selected." }, { status: 400 });
  }

  if (file.size === 0) {
    return NextResponse.json({ success: false, error: "No file selected." }, { status: 400 });
  }

  if (file.size > BLOG_COVER_UPLOAD_MAX_BYTES) {
    return NextResponse.json(
      {
        success: false,
        error: `File is too large. Maximum size is ${BLOG_COVER_UPLOAD_MAX_BYTES / (1024 * 1024)} MB.`,
      },
      { status: 400 },
    );
  }

  const contentType = file.type;
  if (!isAllowedBlogCoverMimeType(contentType)) {
    return NextResponse.json(
      { success: false, error: "Invalid file type. Allowed: JPEG, PNG, WebP, AVIF (not SVG)." },
      { status: 400 },
    );
  }

  let buffer: Buffer;
  try {
    buffer = Buffer.from(await file.arrayBuffer());
  } catch {
    return NextResponse.json({ success: false, error: "Could not read file." }, { status: 400 });
  }

  if (buffer.length > BLOG_COVER_UPLOAD_MAX_BYTES) {
    return NextResponse.json(
      {
        success: false,
        error: `File is too large. Maximum size is ${BLOG_COVER_UPLOAD_MAX_BYTES / (1024 * 1024)} MB.`,
      },
      { status: 400 },
    );
  }

  if (!bufferMatchesBlogCoverMime(buffer, contentType)) {
    return NextResponse.json(
      { success: false, error: "File content does not match the declared image type." },
      { status: 400 },
    );
  }

  try {
    const result = await uploadBlogCoverToR2(config, {
      buffer,
      contentType,
      originalFileName: file.name || "upload",
    });
    return NextResponse.json({
      success: true,
      publicUrl: result.publicUrl,
      key: result.objectKey,
    });
  } catch {
    return NextResponse.json(
      { success: false, error: "Upload failed. Check R2 credentials and try again." },
      { status: 500 },
    );
  }
}
