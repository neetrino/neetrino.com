# Portfolio R2 asset classification (reference)

## Card media (public `PortfolioItem` / fallback)

Eight canonical case images — CDN keys under `figma-assets/` — listed in `lib/portfolio/fallback-public-portfolio-items.ts` (same order as `MOBILE_PORTFOLIO_IMAGES` in `components/portfolio/portfolio-data.ts`).

## Decorative assets (not `PortfolioItem`)

Legacy desktop scene assets: light rays, noise, vectors, star ray, planet ellipses, decorative button SVGs, MacBook overlay video (`portfolio/cat-card-macbook-screen-recording.mp4`), pagination arrow SVGs. These are not seeded into the database.

## Admin uploads

New portfolio cards use R2 prefix `portfolio/upload/` (singular). Sync-from-R2 scans that prefix. Deletes remove R2 objects only for keys under `portfolio/upload/`. Legacy keys under `portfolio/uploads/` are not deleted by portfolio delete until migrated on R2/DB.
