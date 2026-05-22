# Технологическая карта — Neetrino

**Проект:** neetrino.com (marketing site)  
**Размер:** A  
**Статус:** утверждено для текущей фазы  
**Дата:** 2026-03-30

## 1. Базовые решения

| #   | Параметр         | Решение                                 | Примечание                      |
| --- | ---------------- | --------------------------------------- | ------------------------------- |
| 1.1 | Размер проекта   | A                                       | Landing, простая структура      |
| 1.2 | Архитектура      | Простая (`app/`, `components/`, `lib/`) | без monorepo                    |
| 1.3 | Менеджер пакетов | **pnpm**                                | `packageManager` в package.json |
| 1.4 | Node.js          | 20.x LTS                                | CI и локально                   |
| 1.5 | TypeScript       | 5.x, `strict: true`                     |                                 |
| 1.6 | Monorepo         | не используется                         |                                 |
| 1.7 | Git              | feature branches + main                 |                                 |
| 1.8 | Коммиты          | Conventional Commits + commitlint       |                                 |

## 2. Frontend

| #   | Параметр  | Решение                                  |
| --- | --------- | ---------------------------------------- |
| 2.1 | Framework | Next.js 16 (App Router)                  |
| 2.2 | Стили     | Tailwind CSS 4                           |
| 2.3 | UI        | shadcn/ui, Base UI, custom               |
| 2.4 | State     | локально useState; без глобального стора |
| 2.5 | Формы     | Server Actions + Zod для admin MVP       |
| 2.6 | Данные    | RSC, Prisma для Blog, legacy seed JSON   |
| 2.7 | i18n      | next-intl: `en`, `ru`, `hy`              |
| 2.8 | SEO       | Metadata API по мере наполнения          |

## 3. Backend / БД

Blog admin MVP использует backend внутри Next.js:

- **DB:** PostgreSQL через Prisma.
- **Schema:** `prisma/schema.prisma`.
- **Admin auth:** single-admin env credentials (`ADMIN_EMAIL`, `ADMIN_PASSWORD`), JWT через `jose`, httpOnly cookie.
- **Admin routes:** `/admin/blog`, `/admin/blog/new`, `/admin/blog/[id]/edit`.
- **Public blog:** DB-backed published posts only.
- **Images:** upload/storage не реализованы; `coverImageUrl` вводится вручную.

## 4. Качество и DevOps

| Параметр | Решение                                             |
| -------- | --------------------------------------------------- |
| Линт     | ESLint (eslint-config-next)                         |
| Формат   | Prettier                                            |
| Тесты    | Vitest (базовое покрытие утилит и критичной логики) |
| CI       | GitHub Actions: lint, typecheck, test, build        |
| Хуки     | Husky + lint-staged                                 |

## 5. Исключения от шаблона -Rules-Template

- **Нет `src/`** — корневые `app/` и `components/` приняты как структура размера A.
- **Документация** на русском в `docs/`, правила Cursor — из шаблона с доп. файлом `00-neetrino-project.mdc`.
