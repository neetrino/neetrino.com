import { NextResponse } from "next/server";
import { AdminUnauthorizedError, requireAdminApiSession } from "@/lib/server/auth/guards";
import {
  PORTFOLIO_UPLOAD_DB_ATTEMPTS_MAX,
  PORTFOLIO_UPLOAD_FORM_FIELD,
  PORTFOLIO_UPLOAD_MAX_BYTES,
} from "@/lib/constants/portfolio-upload.constants";
import {
  getExtensionLower,
  isAllowedPortfolioExtension,
  mimeFromExtension,
} from "@/lib/portfolio/portfolio-upload-filename";
import { getMediaTypeFromFileName } from "@/lib/portfolio/portfolio-media-type";
import { getNextPortfolioSlot } from "@/lib/portfolio/portfolio-slot";
import { getAllPortfolioItemsForAdmin } from "@/lib/server/portfolio/queries";
import { revalidatePortfolioCaches } from "@/lib/server/portfolio/revalidate-public-portfolio";
import { getPrisma } from "@/lib/server/db";
import { getBlogCoverR2Config } from "@/lib/server/storage/blog-cover-r2-config";
import { deletePortfolioMediaFromR2 } from "@/lib/server/storage/delete-portfolio-media-from-r2";
import { uploadPortfolioMediaToR2 } from "@/lib/server/storage/upload-portfolio-media-to-r2";
import {
  bufferMatchesPortfolioMediaMime,
  isAllowedPortfolioUploadMimeType,
} from "@/lib/server/storage/validate-portfolio-media-buffer";

export const runtime = "nodejs";

const UPLOAD_ERROR_DETAIL_MAX_LEN = 400;

type OkJson = {
  success: true;
  item: {
    id: string;
    key: string;
    url: string;
    fileName: string;
    mediaType: string;
    slot: string;
    active: boolean;
  };
};
type ErrJson = { success: false; error: string; detail?: string };

function prismaErrorCode(error: unknown): string | undefined {
  if (typeof error !== "object" || error === null) {
    return undefined;
  }
  const code = (error as { code?: unknown }).code;
  return typeof code === "string" ? code : undefined;
}

function uploadFailureDetail(error: unknown): string | undefined {
  const prismaCode = prismaErrorCode(error);
  if (prismaCode === "P2002") {
    return "A portfolio row with this slot or storage key already exists.";
  }
  if (process.env.NODE_ENV === "development" && error instanceof Error && error.message) {
    return error.message.slice(0, UPLOAD_ERROR_DETAIL_MAX_LEN);
  }
  return undefined;
}

function sanitizeStoredFileName(originalName: string): string {
  const base = originalName.replace(/\\/g, "/").split("/").pop() ?? "upload";
  return base.replace(/[^\w.\-]+/g, "-").slice(0, 200) || "upload";
}

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
          "R2 is not configured. Set R2_ACCOUNT_ID (or CF_ACCOUNT_ID), R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY, R2_BUCKET_NAME, and R2_PUBLIC_URL.",
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

  const file = formData.get(PORTFOLIO_UPLOAD_FORM_FIELD);
  if (!file || !(file instanceof File)) {
    return NextResponse.json({ success: false, error: "No file selected." }, { status: 400 });
  }

  if (file.size === 0) {
    return NextResponse.json({ success: false, error: "No file selected." }, { status: 400 });
  }

  if (file.size > PORTFOLIO_UPLOAD_MAX_BYTES) {
    return NextResponse.json(
      {
        success: false,
        error: `File is too large. Maximum size is ${PORTFOLIO_UPLOAD_MAX_BYTES / (1024 * 1024)} MB.`,
      },
      { status: 400 },
    );
  }

  const ext = getExtensionLower(file.name || "");
  if (!isAllowedPortfolioExtension(ext)) {
    return NextResponse.json(
      { success: false, error: "Invalid file type. Allowed: WebP, PNG, JPEG, GIF." },
      { status: 400 },
    );
  }

  const declaredMime = file.type?.trim() || mimeFromExtension(ext);
  if (!isAllowedPortfolioUploadMimeType(declaredMime)) {
    return NextResponse.json(
      { success: false, error: "Invalid file type. Allowed: WebP, PNG, JPEG, GIF." },
      { status: 400 },
    );
  }

  let buffer: Buffer;
  try {
    buffer = Buffer.from(await file.arrayBuffer());
  } catch {
    return NextResponse.json({ success: false, error: "Could not read file." }, { status: 400 });
  }

  if (!bufferMatchesPortfolioMediaMime(buffer, declaredMime)) {
    return NextResponse.json(
      { success: false, error: "File content does not match the declared image type." },
      { status: 400 },
    );
  }

  const fileName = sanitizeStoredFileName(file.name || "upload");
  const mediaType = getMediaTypeFromFileName(fileName);

  try {
    const prisma = getPrisma();
    let lastError: unknown;

    for (let attempt = 0; attempt < PORTFOLIO_UPLOAD_DB_ATTEMPTS_MAX; attempt++) {
      const uploaded = await uploadPortfolioMediaToR2(config, {
        buffer,
        contentType: declaredMime,
      });

      const keyRow = await prisma.portfolioItem.findUnique({
        where: { key: uploaded.objectKey },
        select: { id: true },
      });
      if (keyRow) {
        await deletePortfolioMediaFromR2(config, uploaded.objectKey).catch(() => {});
        lastError = new Error("Storage key collision; retrying.");
        continue;
      }

      const existing = await getAllPortfolioItemsForAdmin();
      const slot = getNextPortfolioSlot(existing);

      try {
        const row = await prisma.portfolioItem.create({
          data: {
            key: uploaded.objectKey,
            url: uploaded.publicUrl,
            fileName,
            mediaType,
            slot,
            active: true,
          },
        });

        revalidatePortfolioCaches();

        return NextResponse.json({
          success: true,
          item: {
            id: row.id,
            key: row.key,
            url: row.url,
            fileName: row.fileName,
            mediaType: row.mediaType,
            slot: row.slot,
            active: row.active,
          },
        });
      } catch (error: unknown) {
        lastError = error;
        await deletePortfolioMediaFromR2(config, uploaded.objectKey).catch(() => {});
        if (prismaErrorCode(error) === "P2002" && attempt < PORTFOLIO_UPLOAD_DB_ATTEMPTS_MAX - 1) {
          continue;
        }
        throw error;
      }
    }

    throw lastError instanceof Error ? lastError : new Error("Upload retries exhausted.");
  } catch (error: unknown) {
    console.error("[portfolio-upload] failed", error);
    const prismaCode = prismaErrorCode(error);
    if (prismaCode === "P2002") {
      return NextResponse.json(
        {
          success: false,
          error: "Conflict: duplicate slot or storage key after retries.",
          detail: uploadFailureDetail(error),
        },
        { status: 409 },
      );
    }
    const detail = uploadFailureDetail(error);
    const body: ErrJson = {
      success: false,
      error: "Upload failed.",
    };
    if (detail) {
      body.detail = detail;
    } else if (process.env.NODE_ENV !== "development") {
      body.detail = "Storage or database error. Try again later.";
    }
    return NextResponse.json(body, { status: 500 });
  }
}
