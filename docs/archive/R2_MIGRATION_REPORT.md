# R2 static asset migration

## R2 public base URL

`https://cdn.neetrino.com`

Runtime URLs are built with `assetUrl()` from `lib/assets.ts`, which uses the `ASSETS_URL` constant (no environment variables for this migration).

## Files changed (code and config)

| File                                                                   | Change                                                                                                                 |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `lib/assets.ts`                                                        | **New** — `ASSETS_URL`, `assetUrl()`.                                                                                  |
| `lib/public-image-paths.ts`                                            | All `/images/...` → `assetUrl("images/...")`.                                                                          |
| `lib/about-us-figma-asset-urls.ts`                                     | All `/about-us-figma/...` → `assetUrl("about-us-figma/...")`; comment updates.                                         |
| `lib/figma-assets.ts`                                                  | All `/figma-assets/...` → `assetUrl("figma-assets/...")`.                                                              |
| `lib/device-showcase-assets.ts`                                        | MacBook frame PNG → `assetUrl("device-showcase/macbook-frame.png")`.                                                   |
| `components/neetrino-home/figma-assets.ts`                             | Same pattern as `lib/figma-assets` for home bundle; comment update.                                                    |
| `components/portfolio/portfolio-figma-assets.ts`                       | Portfolio-specific Figma paths → `assetUrl`.                                                                           |
| `components/services/services-assets.ts`                               | Services Figma paths → `assetUrl`.                                                                                     |
| `components/portfolio/PortfolioDesktopPagination.tsx`                  | Pagination arrow SVGs → `assetUrl`.                                                                                    |
| `components/neetrino-home/explore-hover-flare.constants.ts`            | Explore flare PNG → `assetUrl`.                                                                                        |
| `components/admin/blog/BlogPostForm.tsx`                               | Image URL placeholder text updated to CDN example.                                                                     |
| `scripts/neetrino/NeetrinoHome.full.tsx`                               | Reference home asset map → `assetUrl` + import.                                                                        |
| `docs/reference/figma-exports/get-design-context-node-335-905-RAW.tsx` | Reference export paths → `assetUrl` + import.                                                                          |
| `next.config.ts`                                                       | `images.remotePatterns` extended with `hostname: "cdn.neetrino.com"`, `pathname: "/**"` (existing patterns preserved). |

## References replaced (pattern)

- `/figma-assets/<file>` → `assetUrl("figma-assets/<file>")`
- `/about-us-figma/<file>` → `assetUrl("about-us-figma/<file>")`
- `/images/<path>` → `assetUrl("images/<path>")`
- `/device-showcase/macbook-frame.png` → `assetUrl("device-showcase/macbook-frame.png")`

All resolved URLs are of the form `https://cdn.neetrino.com/<same path as before without leading slash>`.

## Local files deleted (after two successful `pnpm build` runs)

Entire contents removed from:

- `public/figma-assets/` (all migrated PNG/WebP/SVG/GIF assets used by the app)
- `public/about-us-figma/` (all WebP assets for About)
- `public/images/` including `what-we-do/`, `portfolio/`, `neetrino-home/explore-hover-flare.png`
- `public/device-showcase/macbook-frame.png` only

**Count:** hundreds of individual image/SVG/GIF files under the above trees (see git history for the full list).

## Files intentionally kept (local `public` / App Router)

- `app/icon.png`, `app/apple-icon.png` (Next metadata routes; not modified)
- `public/favicon.png` (if present in repo)
- `public/device-showcase/other-devices.mp4`, `public/device-showcase/iphone-screen.mov` (video, not part of image/GIF migration)
- `public/portfolio/cat-card-macbook-screen-recording.mp4` (video)
- `public/icons/safearea-arrow.svg` (not referenced by migrated CDN paths in TS/TSX)
- `public/fonts/`, root SVGs (`file.svg`, etc.), `public/vercel.svg`, `public/window.svg` (`NEETRINO.svg` → CDN `assetUrl("NEETRINO.svg")`, local copy removed)

## Verification commands

| Command          | Result                                                         |
| ---------------- | -------------------------------------------------------------- |
| `pnpm typecheck` | Pass                                                           |
| `pnpm lint`      | Pass (exit code 0; existing warnings in other files, 0 errors) |
| `pnpm build`     | Pass (run before and after asset deletion)                     |

## Post-deletion reference check

- Grep for string literals `"/figma-assets/"`, `"/about-us-figma/"`, `"/images/"` in `*.ts` / `*.tsx` / `*.css`: **no matches** in application code.
- `lib/device-showcase-screen-video.ts` still uses **local** `/device-showcase/*.mp4` and `*.mov` by design (video).

## Unresolved / out of scope

- **Video files** under `public/device-showcase/` and `public/portfolio/` remain local; if they are later uploaded to R2, add `assetUrl` (or a dedicated helper) and optional `remotePatterns` rules as needed.
- **Documentation** outside the touched reference export (`docs/reference/figma-exports/...`) may still mention old `public/` paths in prose; code paths are migrated.

## No upload / no secrets

- No R2 upload was performed.
- No `.env` files were read or modified.
- No new upload scripts were added (a temporary local transform script was used once and removed).
