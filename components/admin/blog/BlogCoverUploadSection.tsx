"use client";

import { useCallback, useRef, useState } from "react";
import {
  BLOG_COVER_UPLOAD_ALLOWED_MIME_TYPES,
  BLOG_COVER_UPLOAD_FORM_FIELD,
  BLOG_COVER_UPLOAD_MAX_BYTES,
} from "@/lib/constants/blog-cover-upload.constants";

const CLIENT_ALLOWED_MIME = new Set<string>(BLOG_COVER_UPLOAD_ALLOWED_MIME_TYPES);

const ACCEPT_ATTR = BLOG_COVER_UPLOAD_ALLOWED_MIME_TYPES.join(",");

type CoverUploadJson =
  | { success: true; publicUrl: string; key: string }
  | { success: false; error?: string };

type BlogCoverUploadSectionProps = {
  readonly initialCoverImageUrl: string | null;
};

export function BlogCoverUploadSection({ initialCoverImageUrl }: BlogCoverUploadSectionProps) {
  const [coverImageUrl, setCoverImageUrl] = useState(() => (initialCoverImageUrl ?? "").trim());
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const applyCoverUrl = useCallback((nextUrl: string) => {
    setCoverImageUrl(nextUrl.trim());
  }, []);

  const uploadFile = useCallback(
    async (file: File) => {
      setUploadError(null);

      if (file.size === 0) {
        setUploadError("No file selected.");
        return;
      }

      if (file.size > BLOG_COVER_UPLOAD_MAX_BYTES) {
        setUploadError(
          `File is too large. Maximum size is ${String(BLOG_COVER_UPLOAD_MAX_BYTES / (1024 * 1024))} MB.`,
        );
        return;
      }

      if (!CLIENT_ALLOWED_MIME.has(file.type)) {
        setUploadError("Invalid file type. Allowed: JPEG, PNG, WebP, AVIF (not SVG).");
        return;
      }

      setIsUploading(true);
      try {
        const body = new FormData();
        body.append(BLOG_COVER_UPLOAD_FORM_FIELD, file);
        const res = await fetch("/api/admin/blog/cover-upload", {
          method: "POST",
          body,
          credentials: "include",
        });

        let data: CoverUploadJson;
        try {
          data = (await res.json()) as CoverUploadJson;
        } catch {
          setUploadError("Invalid response from server.");
          return;
        }

        if (data.success && typeof data.publicUrl === "string" && data.publicUrl.length > 0) {
          applyCoverUrl(data.publicUrl);
          return;
        }

        const message =
          !data.success && typeof data.error === "string" && data.error.length > 0
            ? data.error
            : `Upload failed${res.status ? ` (${String(res.status)})` : ""}.`;
        setUploadError(message);
      } catch {
        setUploadError("Network or server error. Try again.");
      } finally {
        setIsUploading(false);
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      }
    },
    [applyCoverUrl],
  );

  const onFileChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        void uploadFile(file);
      }
    },
    [uploadFile],
  );

  const onDragEnter = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setDragActive(true);
  }, []);

  const onDragLeave = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    const next = event.relatedTarget;
    if (next instanceof Node && event.currentTarget.contains(next)) {
      return;
    }
    setDragActive(false);
  }, []);

  const onDragOver = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();
      event.stopPropagation();
      if (event.dataTransfer.types.includes("Files")) {
        event.dataTransfer.dropEffect = isUploading ? "none" : "copy";
      }
    },
    [isUploading],
  );

  const onDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();
      event.stopPropagation();
      setDragActive(false);
      if (isUploading) {
        return;
      }
      const file = event.dataTransfer.files?.[0];
      if (file) {
        void uploadFile(file);
      } else {
        setUploadError("No file selected.");
      }
    },
    [isUploading, uploadFile],
  );

  const openFilePicker = useCallback(() => {
    if (!isUploading) {
      fileInputRef.current?.click();
    }
  }, [isUploading]);

  const clearCover = useCallback(() => {
    setUploadError(null);
    setCoverImageUrl("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }, []);

  const hasPreview = coverImageUrl.length > 0;

  return (
    <div className="space-y-4 md:col-span-2">
      <input
        name="coverImageUrl"
        onChange={(event) => setCoverImageUrl(event.target.value)}
        type="hidden"
        value={coverImageUrl}
      />

      <div>
        <span className="text-sm font-medium text-black/70">Cover image</span>
        <p className="mt-1 text-xs text-black/50">
          Drag and drop an image here, or choose a file (max 5 MB: JPEG, PNG, WebP, AVIF). Saving
          stores the public URL only; old files on R2 are not removed when you replace the cover.
        </p>
        {/* TODO: Add optional cleanup of superseded R2 objects (same bucket/prefix) when cover URL changes. */}
      </div>

      <input
        ref={fileInputRef}
        accept={ACCEPT_ATTR}
        aria-hidden
        className="sr-only"
        disabled={isUploading}
        onChange={onFileChange}
        tabIndex={-1}
        type="file"
      />

      <div
        aria-busy={isUploading}
        className={`flex min-h-[140px] w-full max-w-xl cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed px-4 py-6 text-center transition-colors ${
          dragActive
            ? "border-[#473dff] bg-[#473dff]/[0.06]"
            : "border-black/15 bg-black/[0.02] hover:border-black/25 hover:bg-black/[0.04]"
        } ${isUploading ? "pointer-events-none opacity-60" : ""}`}
        onClick={openFilePicker}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDragOver={onDragOver}
        onDrop={onDrop}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openFilePicker();
          }
        }}
        role="button"
        tabIndex={0}
      >
        <span className="text-sm font-medium text-black/80">
          {dragActive ? "Drop image to upload" : "Drop image here or click to browse"}
        </span>
        <span className="text-xs text-black/45">JPEG, PNG, WebP, AVIF · max 5 MB · no SVG</span>
        {isUploading ? (
          <span className="text-sm font-medium text-[#473dff]" aria-live="polite">
            Uploading…
          </span>
        ) : null}
      </div>

      {uploadError ? (
        <p
          className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900"
          role="alert"
        >
          {uploadError}
        </p>
      ) : null}

      {hasPreview ? (
        <div className="space-y-2">
          <div className="relative h-40 w-full max-w-md overflow-hidden rounded-2xl border border-black/10 bg-black/[0.04]">
            {/* eslint-disable-next-line @next/next/no-img-element -- admin preview; arbitrary HTTPS URLs */}
            <img alt="" className="h-full w-full object-cover" src={coverImageUrl} />
          </div>
          <button
            className="text-sm font-medium text-black/50 underline decoration-black/20 underline-offset-2 hover:text-black/80"
            disabled={isUploading}
            onClick={(event) => {
              event.stopPropagation();
              clearCover();
            }}
            type="button"
          >
            Remove cover
          </button>
        </div>
      ) : (
        <p className="text-sm text-black/45">No cover preview yet.</p>
      )}
    </div>
  );
}
