# План 1 — Фундамент фронтенда (исправления без смены дизайна)

**Статус:** `DONE` (P0) — 2026-05-26 · проверки: typecheck, lint, test, build ✓  
**Дата:** 2026-05-26  
**Следующий документ:** [`FRONTEND_WOW_ANIMATION_PLAN.md`](./FRONTEND_WOW_ANIMATION_PLAN.md) (только после завершения и проверки плана 1)

---

## Цель

Подготовить кодовую базу к wow-анимациям: убрать дубли и мёртвый код, снизить риск регрессий, **не меняя визуал и поведение** для пользователя.

## Главный принцип

> **Чиним и улучшаем — не ломаем.**  
> Каждый шаг — маленький PR-логический блок с полной проверкой до перехода к следующему.

---

## Что НЕ делаем в этом плане

- Не меняем цвета, отступы, Figma-позиции, типографику, копирайт.
- Не переписываем `CanvasScaler` / hybrid mobile+desktop layout.
- Не добавляем npm-зависимости (в т.ч. Motion, Lenis, GSAP).
- Не трогаем анимации (это план 2).
- Не рефакторим admin, кроме удаления debug-логов в prod-путях (если согласовано).
- Не делаем «большой рефакторинг» `NeetrinoHome` целиком — только точечные границы client/server, если безопасно.

---

## Область работ (P0 — обязательно)

### 1. Единый каталог ассетов Figma

| Проблема | Два файла `FIGMA_ASSETS`: `lib/figma-assets.ts` и `components/neetrino-home/figma-assets.ts` — риск рассинхрона URL. |
| Решение | Один источник: `lib/figma-assets.ts`. Все импорты из `neetrino-home/figma-assets.ts` перевести на `@/lib/figma-assets`. Удалить дубликат или оставить re-export с `@deprecated` на один релиз (предпочтение: удалить после миграции). |
| Риск | Низкий — только пути импорта. |

**Затронутые зоны:** `components/neetrino-home/*`, при необходимости `services-assets` и др.

---

### 2. Мёртвый и legacy-код portfolio

| Элемент                                                                | Действие                                                                                                                             |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `getMobilePortfolioItems()` в `components/portfolio/portfolio-data.ts` | Удалить (нигде не вызывается)                                                                                                        |
| `MOBILE_PORTFOLIO_IMAGES`, `MOBILE_PORTFOLIO_TITLES_BY_LOCALE`         | Удалить, если только для dead function                                                                                               |
| `PortfolioMobileBiotechCard.tsx`                                       | Удалить (нигде не импортируется)                                                                                                     |
| `portfolio-data.ts`                                                    | Переименовать в `portfolio-image-sizes.ts` (или перенести константу в `lib/portfolio/`) — только `MOBILE_PORTFOLIO_CARD_IMAGE_SIZES` |
| Обновить импорты                                                       | `PortfolioMobile`, `HomeProjectsGrid`, `home-projects.constants.ts`                                                                  |

**Риск:** Низкий. Проверить, что fallback в `lib/portfolio/fallback-public-portfolio-items.ts` не зависит от удалённых экспортов.

---

### 3. `HeroSection.tsx` — граница Server/Client

| Проблема | Файл использует `useTranslations()` во внутренних компонентах без `"use client"`. |
| Решение (выбрать один, после согласования): |
| **A (предпочтительно)** | Добавить `"use client"` в начало `HeroSection.tsx` — минимальный diff, поведение 1:1. |
| **B** | Разбить: server-обёртка + client-подкомпоненты с `getTranslations` / `useTranslations` — больше работы, меньше client bundle в перспективе. |

Для плана 1 достаточно **варианта A**, если build/гидратация стабильны.

---

### 4. Разбить `SiteFooter.tsx` (~730 строк)

| Проблема | Файл >300 строк, сложно сопровождать и вешать motion в плане 2. |
| Решение | Вынести без изменения DOM/классов: |
| | `SiteFooterDesktop.tsx` — desktop canvas block |
| | `SiteFooterDesktopCta.tsx` — форма / CTA (если есть) |
| | `SiteFooter.tsx` — тонкий orchestrator (mobile + desktop + backdrop) |
| Правило | **Pixel-identical** — те же `className`, `data-node-id`, порядок слоёв. |

**Риск:** Средний — только структурный split; обязательна визуальная проверка footer на mobile + desktop.

---

### 5. `next.config.ts` — сузить `images.remotePatterns`

| Проблема | `hostname: "**"` — слишком широкий whitelist. |
| Решение | Оставить явно: `cdn.neetrino.com`, при необходимости R2 host из env, `www.figma.com` (если ещё нужен MCP). Убрать `**`. |
| Риск | Средний — проверить blog `coverImageUrl` и admin preview на внешних URL. |

---

### 6. Admin debug logs (prod hygiene)

| Проблема | `[ADMIN DEBUG]` в `proxy.ts`, login route, `admin-auth-diagnostics.ts`. |
| Решение | Обернуть в `NODE_ENV === "development"` или удалить. **Не трогать** `AdminDebugClient.tsx` dev UI, если используется локально. |
| Риск | Низкий для публичного сайта. |

---

### 7. Скрипт `scripts/neetrino/NeetrinoHome.full.tsx`

| Проблема | ~1600 строк, не prod route — путаница для команды. |
| Решение | Переместить в `docs/reference/` или `scripts/archive/` + README-строка «не используется в build»; **не удалять** без подтверждения, если нужен как reference. |

---

## Область работ (P1 — по согласованию, после P0)

| #    | Задача                                                                                                       | Зачем                                        |
| ---- | ------------------------------------------------------------------------------------------------------------ | -------------------------------------------- |
| P1.1 | `prefers-reduced-motion` для всех CSS marquee (`Partners`, `ServicesTechMarquee`)                            | Доступность + меньше motion sickness         |
| P1.2 | Документировать в `docs/01-ARCHITECTURE.md` правило: анимировать **обёртки**, не Figma `absolute` координаты | Для плана 2                                  |
| P1.3 | Точечно снять лишний `"use client"` там, где нет hooks/events (например статичные сегменты)                  | Меньше JS; **только если build + visual OK** |

P1 **не блокирует** старт плана 2, но желательно до Motion.

---

## Порядок выполнения (рекомендуемый)

```
Шаг 1 → portfolio dead code + rename sizes
Шаг 2 → unify FIGMA_ASSETS
Шаг 3 → HeroSection client boundary
Шаг 4 → SiteFooter split
Шаг 5 → next.config remotePatterns
Шаг 6 → admin debug logs
Шаг 7 → archive NeetrinoHome.full.tsx (опционально)
```

После **каждого** шага — блок проверки ниже.

---

## Чеклист проверки (обязательно после каждого шага и в конце)

### Автоматика

```bash
pnpm typecheck
pnpm lint
pnpm test
pnpm build
```

Все четыре — **exit 0**. При ошибке — откат шага или фикс до зелёного CI.

### Маршруты (ручная проверка в браузере)

| Маршрут        | Что смотреть                                                           |
| -------------- | ---------------------------------------------------------------------- |
| `/` (en)       | Hero mobile, tablet hybrid, desktop canvas, projects, partners, footer |
| `/ru`, `/hy`   | Заголовки, CTA, переносы (ru/hy)                                       |
| `/services`    | Mobile cards + desktop canvas                                          |
| `/portfolio`   | Grid, pagination, desktop scene                                        |
| `/about-us`    | Mobile + desktop canvas, sticky cone, liquid capsule                   |
| `/contact`     | Форма submit (smoke)                                                   |
| `/blog`        | Список + одна статья                                                   |
| Quote modal    | Открытие/закрытие с home CTA                                           |
| Mobile nav     | Открытие/закрытие, ссылки                                              |
| `/admin/login` | Только если трогали proxy/auth                                         |

### Регрессии (критично)

- [ ] Нет горизонтального скролла на 375px / 768px / 1440px
- [ ] Canvas desktop масштабируется (не обрезан, не пустой блок)
- [ ] Hero video hand играет / паузится при скролле
- [ ] Device orbit на home desktop работает
- [ ] Footer форма и ссылки кликабельны
- [ ] i18n переключатель работает
- [ ] Нет ошибок в консоли браузера на главных страницах
- [ ] Lighthouse / Network: нет 404 на ассеты после merge FIGMA_ASSETS

### Визуал

Сравнение **до/после** скриншотами (или глазами) на тех же breakpoints — **должно быть идентично**.

---

## Критерии готовности плана 1 (Definition of Done)

1. Все пункты P0 выполнены или явно отложены с причиной в `docs/PROGRESS.md`.
2. Чеклист проверки пройден полностью.
3. Нет новых eslint/type errors.
4. Документ [`FRONTEND_WOW_ANIMATION_PLAN.md`](./FRONTEND_WOW_ANIMATION_PLAN.md) можно начинать **только после** подписания этого плана.

---

## Оценка

| P0 целиком | ~1–2 рабочих дня |
| С риском footer split | +0.5 дня на visual QA |

---

## Подтверждение

Перед стартом напишите, например:

- **«Стартуем план 1»** — выполняем P0 целиком
- **«План 1 без пункта X»** — исключаем согласованные пункты
- **«План 1 + P1.1»** — добавляем reduced-motion

**До подтверждения код не меняем.**
