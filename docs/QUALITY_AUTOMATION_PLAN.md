# План автоматизации качества

Соответствует шагу 3.1.1 из `rules-template` и `21-project-onboarding.mdc`.

## Уже в репозитории

- **Prettier** — единый формат; скрипты `format`, `format:check`.
- **ESLint** — `next/core-web-vitals` через `eslint-config-next`.
- **Vitest** — unit-тесты; скрипт `test`.
- **Husky** — `pre-commit` (lint-staged), `commit-msg` (commitlint).
- **CI** — `.github/workflows/ci.yml`: install, format check, lint, typecheck, test, build.

## Команды

```bash
npm run format        # записать формат
npm run format:check  # проверка без записи
npm run lint
npm run typecheck
npm run test
npm run build
```

## Расширение

- Поднять порог покрытия тестами для `lib/` и чистых утилит.
- При добавлении Prisma: `typecheck` через `prisma generate && tsc --noEmit` (см. шаблон).
