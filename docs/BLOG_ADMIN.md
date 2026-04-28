# Blog Admin

## Overview

Blog content is now managed from a protected Next.js admin area. Public blog pages keep the existing design and read published posts from PostgreSQL through Prisma.

The legacy static files in `messages/*/blog-posts.json` and `lib/blog-posts-data.ts` are intentionally kept as seed sources. Runtime public blog reads come from the database.

## Routes

- Public list: `/en/blog`, `/ru/blog`, `/hy/blog`
- Public detail: `/en/blog/[slug]`, `/ru/blog/[slug]`, `/hy/blog/[slug]`
- Admin login: `/admin/login`
- Admin list: `/admin/blog`
- Admin create: `/admin/blog/new`
- Admin edit: `/admin/blog/[id]/edit`

## Required Environment Variables

Database:

- `DATABASE_URL` — PostgreSQL connection string, preferably Neon.
- The same `DATABASE_URL` must be available to both the Next.js runtime and Prisma CLI. Local development should keep it in `.env.local`; Prisma also reads `.env` when `.env.local` is absent. Do not run Prisma migrations against a different local fallback database.

Auth:

- `ADMIN_EMAIL` — email allowed to sign in.
- `ADMIN_PASSWORD_HASH` — bcrypt hash for the admin password.
- `AUTH_SECRET` — secret used to sign the httpOnly admin session cookie.
- `ADMIN_SESSION_COOKIE_NAME` — optional cookie name override.
- `ADMIN_SESSION_TTL_SECONDS` — optional session TTL override.

No upload/storage environment variables are required in this phase.

## Local Setup

1. Set `DATABASE_URL` in `.env.local`.
2. Run `pnpm install`.
3. Generate the Prisma client:

```bash
pnpm db:generate
```

4. Apply local migrations:

```bash
pnpm db:migrate
```

5. Seed the legacy static posts into the database:

```bash
pnpm db:seed
```

## Generate Admin Password Hash

Run:

```bash
pnpm tsx scripts/generate-admin-password-hash.ts "your-password"
```

Copy the printed hash into `ADMIN_PASSWORD_HASH`.

## Creating And Editing Posts

Admin manages common post fields:

- `status`: `DRAFT` or `PUBLISHED`
- `coverImageUrl`
- `publishedAt`

Admin manages translation fields per `en`, `ru`, and `hy`:

- `slug`
- `title`
- `excerpt`
- `content` as Markdown
- `imageAlt`
- `seoTitle`
- `seoDescription`

Public pages show only `PUBLISHED` posts. If a translation is missing for the requested locale, the public detail page returns `notFound()`.

## Images

Image upload is intentionally not implemented in this phase.

For now, `coverImageUrl` is a manual text input. It must be either:

- an HTTPS image URL;
- or a local public path starting with `/`.

There is no file input, upload route, storage provider, compression, resize, crop, or delete flow. Upload/storage should be implemented later as a separate module.

`imageAlt` is stored per translation.

## Markdown Safety

Public blog detail renders Markdown with `react-markdown`, `remark-gfm`, and `rehype-sanitize`. Raw unsanitized HTML is not rendered.

## Deployment Notes

- Set `DATABASE_URL`, `ADMIN_EMAIL`, `ADMIN_PASSWORD_HASH`, and `AUTH_SECRET` in the hosting environment.
- Run `pnpm db:deploy` during deployment or as a release step.
- Run `pnpm db:seed` once when migrating the legacy posts.
- The public blog routes are dynamic because admin content is database-backed.

## Troubleshooting

- `DATABASE_URL is required to seed blog posts.`: add `DATABASE_URL` to `.env.local` or production env.
- Admin login always fails: verify `ADMIN_EMAIL`, `ADMIN_PASSWORD_HASH`, and `AUTH_SECRET`.
- `Invalid ADMIN_PASSWORD_HASH format.`: ensure the bcrypt hash starts with `$2a$`, `$2b$`, or `$2y$`. In `.env.local`, wrap bcrypt hashes in quotes and escape dollar signs, for example `ADMIN_PASSWORD_HASH="\$2b\$12\$..."`.
- `AUTH_SECRET must be at least 32 characters for admin sessions.`: replace `AUTH_SECRET` with a longer random value and restart the dev server.
- External cover image does not render: confirm the URL starts with `https://`.
- Published post does not appear publicly: verify status, `publishedAt`, `coverImageUrl`, and at least one complete translation.
