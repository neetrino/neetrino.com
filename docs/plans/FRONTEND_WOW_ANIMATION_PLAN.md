# План 2 — Performance + Wow (motion)

**Статус:** `IN_PROGRESS` — фаза 0  
**Дата:** 2026-05-26  
**Предусловие:** [`FRONTEND_FOUNDATION_FIX_PLAN.md`](./FRONTEND_FOUNDATION_FIX_PLAN.md) — DONE ✓  
**Audit:** [`FRONTEND_PERF_AUDIT_PHASE0.md`](./FRONTEND_PERF_AUDIT_PHASE0.md)

---

## Цель

Сделать сайт **быстрым при scroll** и **визуально premium** — без лагов и без «украшательства ради украшательства».

## Главные принципы

> **1. Сначала вычитаем, потом добавляем.**  
> Убрать то, что тормозит и почти не видно — до новых анимаций.

> **2. Scroll без лагов важнее wow.**  
> Любой эффект отклоняем, если бьёт по 60fps.

> **3. Wow = контролируемая глубина.**  
> Motion через `opacity` + `transform`, не через blur/parallax/WebGL в первых фазах.

> **4. Без лишних gradient.**  
> Не добавляем CSS-gradient в новых элементах. Существующие — упрощаем до solid `rgba` / shadow / border там, где gradient не несёт смысл (см. audit Tier B/C).

---

## Режим

**Subtle** (200–400ms, ease-out) — по умолчанию.

**Исключено до отдельного OK:** Lenis, LiquidEther, GSAP, scroll-parallax, новые gradient.

---

## Фазы

### Фаза 0 — Performance audit + subtract (текущая)

| #   | Задача                                                  | Статус                              |
| --- | ------------------------------------------------------- | ----------------------------------- |
| 0.1 | Audit-таблица: cost vs visual value                     | см. `FRONTEND_PERF_AUDIT_PHASE0.md` |
| 0.2 | Убрать `backdrop-blur` где уже есть opaque fill         | in progress                         |
| 0.3 | Упростить декоративные gradient/blur/mix-blend (Tier B) | pending                             |
| 0.4 | Проверить pause off-screen: marquees, showcase videos   | done (hooks на месте)               |
| 0.5 | Baseline scroll smoke (375 / 1024 / 1440)               | pending                             |
| 0.6 | Не добавлять gradient в новых UI                        | policy                              |

**Не трогаем в 0 без OK:** Figma-gradients на service cards, footer mesh art, hero brand atmosphere.

---

### Фаза 1 — Motion foundation + micro-interactions

**После** фазы 0 и зелёного чеклиста.

**Зависимости:** `pnpm add motion`, `lib/motion/*`, `components/motion/*`.

| #   | Элемент                 | Эффект                                                |
| --- | ----------------------- | ----------------------------------------------------- |
| 1.1 | Mobile nav drawer       | Backdrop fade + card slide-up 250–300ms               |
| 1.2 | Quote modal             | Backdrop + popup scale/fade enter/exit                |
| 1.3 | FloatingContactFab menu | Stagger pop-in иконок                                 |
| 1.4 | Home hero (mobile)      | Stagger `NEET/RIN/O`, fade body copy                  |
| 1.5 | Home stats              | Count-up in-view (450+, 97+)                          |
| 1.6 | Portfolio / blog cards  | Hover: scale + overlay (как `HomeProjectCard`)        |
| 1.7 | CTA buttons             | Subtle glow pulse (~8s) — **box-shadow, не gradient** |

---

### Фаза 2 — Scroll storytelling

| #   | Элемент              | Эффект                                                |
| --- | -------------------- | ----------------------------------------------------- |
| 2.1 | Home mobile sections | `WhoWeAre`, `WhatWeDo`, `Projects` — Reveal on scroll |
| 2.2 | Home desktop canvas  | Segment wrappers fade-up (2–4), не Segment1 hero      |
| 2.3 | Services mobile      | Hero title stagger + catalog cards stagger            |
| 2.4 | About Us team        | Cards stagger + hover lift                            |
| 2.5 | Page loading         | Branded sweep line (не pulse-only)                    |
| 2.6 | Partners             | Fade-in row; marquee pause сохраняем                  |

---

### Фаза 3 — Signature (только после метрик + OK)

| #   | Элемент                  | Риск        |
| --- | ------------------------ | ----------- |
| 3.1 | Services light rays      | GPU         |
| 3.2 | About sticky cone rotate | Низкий      |
| 3.3 | About liquid capsule     | Средний     |
| 3.4 | Lenis                    | **Высокий** |
| 3.5 | LiquidEther WebGL        | **Высокий** |

---

## Архитектура motion (фаза 1+)

```
lib/motion/
  tokens.ts           # DURATION_*, EASE_*, STAGGER_*
  reduced-motion.ts   # shouldReduceMotion()
  variants.ts         # fadeUp, scaleIn, staggerContainer

components/motion/
  Reveal.tsx
  Stagger.tsx
  CountUp.tsx
```

### Canvas rules

1. Анимировать **обёртку секции** — не Figma `left/top` px.
2. **Не** `transform` на `.neetrino-canvas-inner`.
3. Video/WebGL — pause off-screen.
4. `prefers-reduced-motion` — обязателен.
5. **Новые эффекты — без CSS gradient** (solid, shadow, opacity, transform).

---

## Чеклист (после каждой фазы)

```bash
pnpm typecheck && pnpm lint && pnpm test && pnpm build
```

- [ ] Scroll 60fps smoke (`/`, `/services`, `/about-us`)
- [ ] CanvasScaler / orbit videos / marquees
- [ ] `prefers-reduced-motion`
- [ ] i18n en / ru / hy
- [ ] Нет новых gradient без записи в audit

---

## Порядок выполнения

```
0. Фаза 0 audit + subtract          ← сейчас
1. pnpm add motion + lib/motion/*
2. Фаза 1 (блоками)
3. Фаза 2 → метрики → (опц.) фаза 3
```

---

## Оценка

| Фаза 0 | ~1 день |
| Фаза 1 | ~1–2 дня |
| Фаза 2 | ~2–3 дня |
| Фаза 3 | опционально |
