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
lib/                 # Утилиты, `figma-assets.ts`, `public-image-paths.ts`, `__tests__/`
public/              # Статика (`figma-assets/`, `images/`, шрифты)
scripts/             # `assets/`, `neetrino/`, `legacy/` — вспомогательные Node-скрипты
docs/                # BRIEF, TECH_CARD, архитектура; планы — `docs/plans/`
```

## Поток данных

- Контент: в основном статический в компонентах и небольших модулях `app/*/content.ts`.
- Изображения: `next/image`, URL Figma-экспорта в `lib/figma-assets.ts`, файлы в `public/figma-assets` и `public/images`.

## Решения

- **Маршрутизация:** файловая в `app/`.
- **Стили:** Tailwind + при необходимости глобальные классы в `app/globals.css` (например типографика DM Sans).
- **Клиентские компоненты:** `"use client"` только где нужны хуки браузера или интерактив.

## Эволюция

При появлении API, БД или auth — обновить TECH_CARD и вынести интеграции по правилам шаблона (Neon, Auth.js и т.д.).
