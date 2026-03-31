# План автоматизации качества

Соответствует шагу 3.1.1 из `rules-template` и `21-project-onboarding.mdc`.

## Уже в репозитории

- **Prettier** — единый формат; скрипты `format`, `format:check`.
- **ESLint** — `next/core-web-vitals` через `eslint-config-next`.
- **Vitest** — unit-тесты; скрипт `test`.
- **Husky** — `pre-commit` (lint-staged), `commit-msg` (commitlint).
- **CI** — `.github/workflows/ci.yml`: pnpm install, format check, lint, typecheck, test, build.

## Команды

```bash
pnpm install          # зависимости
pnpm run format       # записать формат
pnpm run format:check # проверка без записи
pnpm run lint
pnpm run typecheck
pnpm run test
pnpm run build
pnpm dev
```

## Расширение

- Поднять порог покрытия тестами для `lib/` и чистых утилит.
- При добавлении Prisma: `typecheck` через `prisma generate && tsc --noEmit` (см. шаблон).
