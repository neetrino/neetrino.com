# План 2 — Wow-эффект и motion (после фундамента)

**Статус:** `DRAFT` — **ждём подтверждения и завершения плана 1**  
**Дата:** 2026-05-26  
**Предусловие:** [`FRONTEND_FOUNDATION_FIX_PLAN.md`](./FRONTEND_FOUNDATION_FIX_PLAN.md) — DoD выполнен, проверки зелёные.

---

## Цель

Добавить премиальные анимации и micro-interactions, сохранив **весь текущий визуальный язык** Neetrino: `#151515`, blue glow, Megatrox, Figma canvas 1440px, hybrid mobile/desktop.

## Главный принцип

> **Wow = контролируемая глубина, не хаос.**  
> Статика остаётся основой; motion подчёркивает иерархию и эмоцию.

---

## Зависимости (добавить в плане 2)

| Пакет                         | Назначение                               | Примечание                                                  |
| ----------------------------- | ---------------------------------------- | ----------------------------------------------------------- |
| `motion` (Framer Motion)      | Scroll reveal, stagger, modal enter/exit | Client-only wrappers                                        |
| `lenis` (опционально, фаза 3) | Smooth scroll                            | Только после согласования; respect `prefers-reduced-motion` |

**Не добавляем:** GSAP (пока Motion хватает), AOS, react-spring.

---

## Архитектура motion-слоя

```
lib/motion/
  tokens.ts           # DURATION_*, EASE_*, STAGGER_*
  reduced-motion.ts   # shouldReduceMotion()
  variants.ts         # fadeUp, scaleIn, staggerContainer

components/motion/
  Reveal.tsx          # in-view animation, once
  Stagger.tsx         # children stagger
  CountUp.tsx         # stats (450+, 97+)
```

### Правила для canvas-страниц (обязательно)

1. Анимировать **обёртку секции** (`opacity`, `transform`) — не менять Figma `left/top` в px.
2. Не вешать `transform` на `.neetrino-canvas-inner` (ломает `CanvasScaler`).
3. WebGL / video — pause off-screen (уже есть; не отключать).
4. Все новые анимации — fallback при `prefers-reduced-motion: reduce`.
5. Durations/easings — только из `lib/motion/tokens.ts`.

---

## Фазы

### Фаза 1 — Quick wins (после подтверждения плана 2)

**Зависимости:** Motion установлен, `lib/motion/*` создан.

| #   | Элемент                 | Эффект                                                       | Страницы              |
| --- | ----------------------- | ------------------------------------------------------------ | --------------------- |
| 1.1 | Mobile nav drawer       | Backdrop fade + card slide-up 250–300ms                      | Global                |
| 1.2 | Quote modal             | Backdrop + popup scale/fade enter/exit                       | Global                |
| 1.3 | FloatingContactFab menu | Stagger pop-in иконок                                        | Global                |
| 1.4 | Home hero (mobile)      | Stagger `NEET/RIN/O`, fade body copy                         | `/`                   |
| 1.5 | Home stats              | Count-up при in-view (450+, 97+)                             | `/` mobile            |
| 1.6 | Portfolio / blog cards  | Унифицировать hover: scale + overlay (как `HomeProjectCard`) | `/portfolio`, `/blog` |
| 1.7 | CTA buttons             | Subtle glow pulse (редкий, 8s interval)                      | Home, footer          |

**Не трогаем в фазе 1:** desktop canvas segments, LiquidEther, Lenis.

---

### Фаза 2 — Scroll storytelling

| #   | Элемент              | Эффект                                                   |
| --- | -------------------- | -------------------------------------------------------- |
| 2.1 | Home mobile sections | `WhoWeAre`, `WhatWeDo`, `Projects` — Reveal on scroll    |
| 2.2 | Home desktop canvas  | Segment wrappers fade-up (Segment 2–4), не Segment1 hero |
| 2.3 | Services mobile      | Hero title word stagger + catalog cards stagger          |
| 2.4 | About Us team        | Cards stagger + hover lift                               |
| 2.5 | Page loading         | Branded sweep line вместо только `animate-pulse`         |
| 2.6 | Partners             | Fade-in row при первом появлении (marquee не ломаем)     |

---

### Фаза 3 — Signature moments (по согласованию)

| #   | Элемент                     | Эффект                                   | Риск                                           |
| --- | --------------------------- | ---------------------------------------- | ---------------------------------------------- |
| 3.1 | Services desktop light rays | Медленный CSS shift / parallax           | Средний — GPU                                  |
| 3.2 | About Us sticky cone        | Лёгкий rotate follow scroll (±5°)        | Низкий                                         |
| 3.3 | About Us liquid capsule     | Scroll-linked elasticity (сейчас frozen) | Средний                                        |
| 3.4 | Lenis smooth scroll         | Premium feel                             | **Высокий** — конфликт с native scroll restore |
| 3.5 | LiquidEther hero background | WebGL fluid desktop only                 | **Высокий** — bundle + GPU                     |

Фаза 3 — **только после** фаз 1–2 и отдельного OK на perf.

---

### Фаза 4 — Polish (опционально)

- Route/page transitions (Next.js View Transitions или Motion layout)
- Magnetic primary CTA (desktop)
- Cursor glow trail (desktop, subtle)

---

## Интенсивность (выбрать при подтверждении)

| Режим                      | Описание                                                 |
| -------------------------- | -------------------------------------------------------- |
| **Subtle** (рекомендуется) | 200–400ms, ease-out, мало parallax — Apple-like          |
| **Bold**                   | 400–600ms, больше stagger, заметнее glow — Awwwards-like |

По умолчанию в реализации: **Subtle**.

---

## Что НЕ делаем

- Не меняем палитру, шрифты, layout breakpoints.
- Не переводим canvas на «обычный» responsive grid.
- Не анимируем каждый пиксель — ~30% элементов с motion достаточно.
- Не отключаем существующие marquees без reduced-motion fallback.
- Не трогаем admin UI в этом плане.

---

## Порядок выполнения

```
0. Подтверждение плана 2 + режим Subtle/Bold
1. pnpm add motion
2. lib/motion + components/motion
3. Фаза 1 (по таблице, по одному PR-логическому блоку)
4. Полный чеклист проверки
5. Фаза 2 → проверка → (опционально) фаза 3
```

---

## Чеклист проверки (после каждой фазы и в конце)

### Автоматика

```bash
pnpm typecheck
pnpm lint
pnpm test
pnpm build
```

### Функциональность

- [ ] Mobile nav, quote modal, FAB — открытие/закрытие, Escape, focus trap
- [ ] Формы contact / quote — submit не сломан
- [ ] CanvasScaler — desktop home/services/portfolio/about без пустых блоков
- [ ] Orbit devices + videos — play/pause как до анимаций
- [ ] Pagination portfolio — смена страницы
- [ ] i18n en / ru / hy — без сломанных layout из-за motion

### Motion / a11y

- [ ] `prefers-reduced-motion: reduce` — анимации отключены или instant
- [ ] Нет layout shift (CLS) от Reveal — использовать `transform`/`opacity`
- [ ] 60fps на scroll в Chrome DevTools Performance (smoke на `/` и `/services`)
- [ ] Нет runaway `requestAnimationFrame` / memory leak при long scroll

### Визуал

- [ ] Hero, footer, cards — **тот же** вид в покое; motion только в переходах
- [ ] Скриншоты до/после на 375px, 1024px, 1440px

### Bundle (фаза 1+)

- [ ] `pnpm build` + при необходимости `ANALYZE=true` — рост client JS в пределах ожидания (~30–50kb gzip для Motion)

---

## Критерии готовности (Definition of Done)

1. Согласованные фазы выполнены.
2. Чеклист пройден на `main` / feature branch перед merge.
3. `docs/PROGRESS.md` обновлён (кратко: что добавлено, какие файлы motion).
4. При необходимости — 1–2 строки в `docs/01-ARCHITECTURE.md` про `lib/motion/`.

---

## Оценка

| Фаза 1 | ~1–2 дня |
| Фаза 2 | ~2–3 дня |
| Фаза 3 | ~3–5 дней (опционально) |

---

## Подтверждение

Начинаем план 2 только когда:

1. План 1 завершён и проверен.
2. Вы пишете, например:
   - **«Стартуем план 2, фаза 1, subtle»**
   - **«План 2 без Lenis и LiquidEther»**
   - **«План 2 фаза 1+2»**

**До подтверждения код не меняем.**
