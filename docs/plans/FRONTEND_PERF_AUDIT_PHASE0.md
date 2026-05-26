# Фаза 0 — Performance audit (subtract before wow)

**Статус:** `IN_PROGRESS`  
**Дата:** 2026-05-26  
**План:** [`FRONTEND_WOW_ANIMATION_PLAN.md`](./FRONTEND_WOW_ANIMATION_PLAN.md)

## Политика gradient (решение заказчика)

- **Не добавляем** CSS `linear-gradient` / `radial-gradient` в новых блоках и motion.
- **Упрощаем** существующие decorative gradient → solid `rgba`, `border`, `box-shadow` где визуал почти не меняется.
- **Оставляем** gradient только где это **бренд Figma** (service cards, ключевые atmosphere) — до отдельного редизайна.

---

## Матрица: cost vs value

| ID    | Элемент                              | Файл(ы)                                                  | Cost             | Visual value             | Action                                   | Status  |
| ----- | ------------------------------------ | -------------------------------------------------------- | ---------------- | ------------------------ | ---------------------------------------- | ------- |
| P0-01 | Blog card `backdrop-blur-sm`         | `BlogIndexCard.tsx`                                      | High compositing | Low (уже есть rgba fill) | **Remove blur**                          | done    |
| P0-02 | Mobile nav drawer `backdrop-blur-xl` | `mobile-nav-drawer.constants.ts`                         | High             | Medium glass look        | Replace blur → opaque rgba               | done    |
| P0-03 | Quote modal backdrop blur            | `get-quote-modal.tsx`                                    | Medium           | Low                      | Remove blur, darker rgba                 | done    |
| P0-04 | 4× showcase videos always mounted    | `EllipseDeviceShowcaseDevices.tsx`                       | Medium GPU       | High                     | Keep; pause off-center ✓                 | keep    |
| P0-05 | Marquees (Partners, projects, tech)  | `Partners.tsx`, etc.                                     | Medium CPU       | Medium                   | Keep; `usePauseAnimationWhenOffScreen` ✓ | keep    |
| P0-06 | `mix-blend-*` hero/footer/about      | many figma blocks                                        | **High**         | Medium glow              | Tier B: reduce layers                    | pending |
| P0-07 | About `Block1a` blur+gradient stacks | `AboutUsFigmaBlock1a.tsx`                                | **Very high**    | Low (decor)              | Tier B: remove duplicate layers          | pending |
| P0-08 | Services light rays blur stacks      | `ServicesDesktopLightRaysDecor.tsx`                      | High             | Medium                   | Defer to phase 3 or simplify             | pending |
| P0-09 | Footer mobile `radial+linear` CSS    | `globals.css` `.site-footer-mobile-backdrop-atmosphere`  | Medium           | High brand               | Keep (Tier C) until redesign             | keep    |
| P0-10 | Footer desktop blue wash gradient    | `globals.css` `.site-footer-desktop-atmosphere-bluewash` | Medium           | High                     | Keep (Tier C)                            | keep    |
| P0-11 | Tablet hero top gradient             | `globals.css` `.neetrino-canvas-wrap--tablet-hero`       | Low              | Medium                   | Solid color band (::before)              | done    |
| P0-17 | Desktop nav More dropdown blur       | `PrimaryNavMoreDropdown.tsx`                             | High             | Low                      | Opaque panel                             | done    |
| P0-18 | About stats strip blur               | `AboutUsFigmaBlock1bLower.tsx`                           | High             | Low                      | Opaque panel                             | done    |
| P0-12 | Service card brand gradients         | `ServicesCatalog*.tsx`, constants                        | Low              | **High Figma**           | **Keep**                                 | keep    |
| P0-13 | Stats card gradients (home mobile)   | `about-us-mobile-bottom-stats`                           | Low              | High                     | Keep                                     | keep    |
| P0-14 | `will-change-transform` marquees     | `Partners.tsx`, marquees                                 | Low–Med          | Helps anim               | Keep while paused off-screen             | keep    |
| P0-15 | Device orbit `requestAnimationFrame` | `use-device-orbit-angles.ts`                             | Low when idle    | High UX                  | Keep                                     | keep    |
| P0-16 | Lenis / LiquidEther                  | not installed                                            | —                | —                        | **Do not add** in phase 0–2              | blocked |

**Cost legend:** Low = cheap compositing · Medium = noticeable on mid devices · High = blur/blend/video stacks

---

## Tier summary

| Tier                 | Meaning                                    | Count (approx)            |
| -------------------- | ------------------------------------------ | ------------------------- |
| **A — subtract now** | blur без нужды, дубли decor                | ~5 items                  |
| **B — simplify**     | gradient/blend → solid; нужен visual check | ~8 items                  |
| **C — keep**         | Figma brand, осмысленный atmosphere        | service cards, footer art |

---

## Scroll smoke (manual — заполнить после прогона)

| Route       | 375px | 1024px | 1440px | Notes |
| ----------- | ----- | ------ | ------ | ----- |
| `/`         | —     | —      | —      |       |
| `/services` | —     | —      | —      |       |
| `/about-us` | —     | —      | —      |       |

Chrome DevTools → Performance → record 5s scroll. Target: no long tasks >50ms sustained.

---

## Changelog фазы 0

| Date       | Change                                                                |
| ---------- | --------------------------------------------------------------------- |
| 2026-05-26 | Plan 2 rewritten: phase 0 first, no-new-gradient policy               |
| 2026-05-26 | P0-01: removed `backdrop-blur-sm` from `BlogIndexCard`                |
| 2026-05-26 | P0-02: mobile nav drawer — blur removed, opaque fill                  |
| 2026-05-26 | P0-03, P0-17, P0-18: quote, More dropdown, About stats — blur removed |
| 2026-05-26 | P0-11: tablet hybrid hero — gradient → solid top band                 |
