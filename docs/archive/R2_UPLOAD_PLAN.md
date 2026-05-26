# R2 asset upload plan

This document describes how local image and GIF (and other listed media) files are discovered, how they map to Cloudflare R2 object keys, and how to run the uploader **without** reading any `.env` files.

## Scope

**Scanned roots** (relative to repo root):

- `public/`
- `app/`
- `components/`
- `src/` (if present)

**Skipped paths** (not scanned for media inside):

- `node_modules/`
- `.next/`
- `out/`
- `rules-template/`

**Extensions**: `.png`, `.jpg`, `.jpeg`, `.webp`, `.gif`, `.svg`, `.avif`, `.ico`

## Inventory (analysis at plan time)

| Area                  | Notes                                                                               |
| --------------------- | ----------------------------------------------------------------------------------- |
| `public/`             | Bulk of assets: `images/`, `figma-assets/`, `about-us-figma/`, icons, favicon, etc. |
| `app/`                | Next.js metadata icons (e.g. `icon.png`, `apple-icon.png`)                          |
| `components/`, `src/` | Scanned; may be empty for media in this repo                                        |

**Total (verified via dry-run)**: **253** media files (`pnpm assets:r2-upload -- --dry-run`).

Implementation: `scripts/assets/r2-upload-assets.mjs` (CLI + S3 + report) and `scripts/assets/r2-upload-lib.mjs` (scanning, hashing, config parsing; no secrets logged).

## Object key mapping

R2 keys use **forward slashes**. Local paths use repo-relative POSIX paths (`/`).

| Local path pattern  | R2 object key       | Example public URL                  |
| ------------------- | ------------------- | ----------------------------------- |
| `public/<rest>`     | `<rest>`            | `{R2_PUBLIC_URL}/<rest>`            |
| `app/<rest>`        | `app/<rest>`        | `{R2_PUBLIC_URL}/app/<rest>`        |
| `components/<rest>` | `components/<rest>` | `{R2_PUBLIC_URL}/components/<rest>` |
| `src/<rest>`        | `src/<rest>`        | `{R2_PUBLIC_URL}/src/<rest>`        |

**Example**

- Local: `public/images/hero/main.png`
- R2 key: `images/hero/main.png`
- URL: `https://<your-public-host>/images/hero/main.png`

**Example (App Router icons)**

- Local: `app/apple-icon.png`
- R2 key: `app/apple-icon.png`

This keeps `public/` assets at the bucket “root” (same as browser paths under `/`), and namespaces non-`public` files by their top-level folder to avoid collisions.

## Content-Type

The upload script sets `Content-Type` from file extension (PNG, JPEG, WebP, GIF, SVG, AVIF, ICO).

## Skip unchanged

On each file the script computes **SHA-256** of the local file. After the first upload, objects carry user metadata `integrity-sha256`. A later run **skips** `PutObject` when the remote metadata matches the local hash unless you pass **`--force`**.

## Security

- Do **not** commit `r2-upload-config.local.json` (see `.gitignore`).
- Do not pass secrets in shell history if avoidable; prefer a **local JSON config** path with `--config`.
- The script does **not** read `.env`, `.env.local`, or `dotenv`, and does not log secret values.

## Commands

**Dry run** (no credentials, no network):

```bash
pnpm assets:r2-upload -- --dry-run
```

**Upload** (credentials via config file you create locally):

```bash
pnpm assets:r2-upload -- --config ./r2-upload-config.local.json
```

**Config JSON shape** (fill values yourself; file must not be committed):

```json
{
  "cfAccountId": "<CF_ACCOUNT_ID>",
  "r2AccessKeyId": "<R2_ACCESS_KEY_ID>",
  "r2SecretAccessKey": "<R2_SECRET_ACCESS_KEY>",
  "r2BucketName": "<R2_BUCKET_NAME>",
  "r2PublicUrl": "https://<your-r2-public-base>"
}
```

Optional: same fields as long CLI flags (see `pnpm assets:r2-upload -- --help`). Avoid putting the secret on the command line when possible.

## After upload

The script writes **`R2_UPLOAD_REPORT.md`** at the repo root with counts, skip/fail rows, and a full **local path → R2 key → public URL** table plus recommended next steps for switching the app to R2 URLs.

**This task does not** change imports, delete local files, or read any `.env` files.
