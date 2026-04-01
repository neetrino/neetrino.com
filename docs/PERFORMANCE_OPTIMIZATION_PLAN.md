# План оптимизации производительности (аудит)

**Дата:** 2026-04-01  
**Цель:** плавность на реальных устройствах без смены визуала и копирайта.

## Текущие риски

1. **Глобальный `@import` Google Fonts** в `globals.css` — лишний сетевой запрос и дублирование с `next/font` (Geist) и локальными `@font-face` (Megatrox).
2. **Множественные экземпляры `Inter()` из `next/font`** в секциях и страницах — лишняя работа сборщика и раздувание границ клиентских бандлов.
3. **`"use client"` на статичных секциях** (Hero, WhoWeAre, Projects, WhatWeDo, DeviceShowcase, Partners, HomeDesktopHeader) — вся поддерево попадает в клиентский JS без необходимости. **Footer** остаётся в основном RSC; форма «Message us» вынесена в маленький клиентский `FooterMessageForm` (нужен `onSubmit`).
4. **`app/portfolio/page.tsx` с `"use client"`** — весь тяжёлый desktop-canvas и мобильная вёрстка гидратятся как клиент; мобильные пользователи тянут лишний JS.
5. **`<img>` в Partners** — без оптимизации Next Image и без `sizes`.
6. **CanvasScaler** — `ResizeObserver` вызывает синхронные записи в DOM на каждом тике; можно сгладить через `requestAnimationFrame`.
7. **GIF в ассетах** (`img1`, `imgEricaAnderson1`) — тяжелее WebP; без смены дизайна оставляем, но с явным `loading` / не `priority` там, где не above-the-fold.
8. **Тяжёлые декоративные слои** (portfolio desktop: mix-blend, blur, огромные off-screen блоки) — частично уже с `DeferredMount`; перенос всей desktop-сцены в RSC снижает клиентский парсинг.

## Вероятные источники лагов

| Область            | Файлы / узлы                                                                                                                                    |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Шрифты             | `globals.css` (строка 1), дубли `Inter` в секциях и `about-us` / `contact`                                                                      |
| Клиент без нужды   | `HeroSection`, `WhoWeAre`, `Projects`, `WhatWeDo`, `DeviceShowcase`, `Partners`, `HomeDesktopHeader`; форма футера — только `FooterMessageForm` |
| Страница Portfolio | `app/portfolio/page.tsx` (целиком client)                                                                                                       |
| Масштаб канваса    | `components/layout/CanvasScaler.tsx`                                                                                                            |
| Маркет логотипов   | `components/sections/Partners.tsx` (`<img>`)                                                                                                    |

## Что оптимизируем

- Централизовать **Inter** и **DM Sans** в `lib/fonts.ts`, подключить переменные в `app/layout.tsx`, **убрать** Google Fonts `@import` из `globals.css`.
- Перевести перечисленные секции и **HomeDesktopHeader** в **Server Components** (убрать `"use client"`). **SiteFooter** без `onSubmit` в RSC; интерактивная форма — `FooterMessageForm` (`"use client"`).
- **Partners:** заменить `<img>` на `next/image` с размерами и `sizes`.
- **Portfolio:** разбить на серверные `PortfolioMobile` + `PortfolioDesktop` + `PortfolioDesktopScene` без `"use client"` на странице; клиент остаётся только у `CanvasScaler` / `DeferredMount`.
- **Services:** вынести desktop-сцену в серверный `ServicesDesktopScene` внутри существующего `CanvasScaler` (страница остаётся server).
- **CanvasScaler:** батч обновления масштаба через `requestAnimationFrame`.
- **HeroSection:** убрать лишний `priority` с не-LCP слоёв где уместно (gif-оверлей).
- Обновить **about-us** / **contact** на общий `interSans` из `lib/fonts.ts`.

## Что НЕ меняем

- Внешний вид, отступы, цвета, типографика (кроме источника шрифтов).
- Тексты и маршруты.
- Поведение мобильного меню (Navbar / NonHomeMobileHeader остаются client).
- LiquidEther / Neetrino home canvas — без переписывания шейдеров.
- Архитектура `app/` / feature-папок в `components/`.
- Не добавляем новые npm-зависимости.
- Не удаляем декоративные эффекты без замены дешёвым аналогом; трогаем только монтирование/рендер-слой.

## Порядок валидации

`pnpm build` → `pnpm typecheck` → `pnpm lint` → ручная проверка `/`, `/services`, `/portfolio`, `/about-us`, `/contact`.
