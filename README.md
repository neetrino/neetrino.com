This is a [Next.js](https://nextjs.org) project for [Neetrino](https://neetrino.com).

## Requirements

- [Node.js](https://nodejs.org/) 20 LTS
- [pnpm](https://pnpm.io/) 9 (рекомендуется через [Corepack](https://nodejs.org/api/corepack.html): `corepack enable`)

## Setup

```bash
pnpm install
```

## Scripts

```bash
pnpm dev          # dev server — http://localhost:3000
pnpm build
pnpm start        # production server (after build)
pnpm lint
pnpm typecheck
pnpm test
pnpm format       # Prettier write
pnpm format:check
```

## Docs

Процесс и стек: `docs/BRIEF.md`, `docs/TECH_CARD.md`, `docs/01-ARCHITECTURE.md`.

## Deploy

См. [Next.js deployment](https://nextjs.org/docs/app/building-your-application/deploying). CI: `.github/workflows/ci.yml`.
