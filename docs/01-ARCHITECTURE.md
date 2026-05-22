# Архитектура — Neetrino

**Размер:** A  
**Обновлено:** 2026-03-30

## Назначение

Статический/SSR маркетинговый сайт на Next.js без отдельного backend-репозитория.

## Структура репозитория

```
app/                 # App Router: страницы, layout, маршруты
components/          # UI: sections/, layout/, neetrino-home/, liquid-ether/, services/, …
config/              # ESLint, Prettier, Vitest, commitlint (см. scripts в package.json)
lib/                 # Утилиты, server data/auth logic, `figma-assets.ts`, `public-image-paths.ts`
prisma/              # Prisma schema, migrations, seed для Blog admin
public/              # Статика (`figma-assets/`, `images/`, шрифты)
scripts/             # `assets/`, `neetrino/`, `legacy/` — вспомогательные Node-скрипты
docs/                # BRIEF, TECH_CARD, архитектура; планы — `docs/plans/`
```

## Поток данных

- Контент: в основном статический в компонентах и небольших модулях `app/*/content.ts`.
- Blog: публичные страницы читают только `PUBLISHED` записи из PostgreSQL через `lib/server/blog/public.ts`.
- Blog admin: CRUD живет внутри Next.js в `/admin/blog`, backend logic — в `lib/server/blog/*`.
- Изображения: `next/image`, URL Figma-экспорта в `lib/figma-assets.ts`, файлы в `public/figma-assets` и `public/images`.
- Blog images: upload/storage пока не реализованы; admin вводит `coverImageUrl` вручную.

## Решения

- **Маршрутизация:** файловая в `app/`.
- **Стили:** Tailwind + при необходимости глобальные классы в `app/globals.css` (например типографика DM Sans).
- **Клиентские компоненты:** `"use client"` только где нужны хуки браузера или интерактив.
- **БД:** Prisma + PostgreSQL для Blog admin.
- **Auth:** simple single-admin auth через env, `jose`, httpOnly cookie.

## Эволюция

Следующая отдельная фаза для Blog admin — image upload/storage provider. В текущей фазе upload routes и storage dependencies намеренно отсутствуют.
