# Отчёт по оптимизации производительности

**Дата:** 2026-04-01  
**Цель:** снизить лаги на реальных устройствах при сохранении визуала и поведения.

## Что давало лаги и лишнюю нагрузку

1. **Дублирование шрифтов** — `@import` Google Fonts в `globals.css` плюс несколько вызовов `Inter()` в страницах/секциях; лишние запросы и работа сборщика.
2. **Лишняя клиентская гидратация** — статичные секции и страницы с `"use client"` без реальной интерактивности увеличивали JS и время гидратации.
3. **Portfolio целиком как клиент** — тяжёлая desktop-сцена попадала в клиентский бандл страницы без необходимости.
4. **Partners** — сырые `<img>` без оптимизации Next и без предсказуемых размеров.
5. **CanvasScaler** — частые синхронные записи в DOM от `ResizeObserver` без выравнивания по кадру.
6. **Футер с формой** — после перевода `SiteFooter` в RSC обработчик `onSubmit` на `<form>` ломал сборку (недопустимы event handlers в серверных компонентах). Решение: вынести только форму в клиентский модуль.

## Изменённые файлы (ключевые)

| Область                   | Файлы                                                                                                                                                |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Шрифты                    | `lib/fonts.ts`, `app/layout.tsx`, `app/globals.css`                                                                                                  |
| Страницы                  | `app/about-us/page.tsx`, `app/contact/page.tsx`, `app/services/page.tsx`, `app/portfolio/page.tsx`                                                   |
| Секции (RSC где возможно) | `components/sections/HeroSection.tsx`, `WhoWeAre.tsx`, `Projects.tsx`, `WhatWeDo.tsx`, `DeviceShowcase.tsx`, `Partners.tsx`, `HomeDesktopHeader.tsx` |
| Футер                     | `components/sections/site-footer/SiteFooter.tsx`, **новый** `FooterMessageForm.tsx`                                                                  |
| Portfolio                 | `components/portfolio/PortfolioDesktop.tsx`, `PortfolioMobile.tsx`, `PortfolioDesktopScene.tsx`                                                      |
| Services                  | **новый** `components/services/ServicesDesktopScene.tsx`                                                                                             |
| Масштаб канваса           | `components/layout/CanvasScaler.tsx`                                                                                                                 |

## Что сделано по пунктам

- **Шрифты:** централизованы `interSans` и `dmSans` в `lib/fonts.ts`, переменные на `<html>` в `layout`; убран тяжёлый `@import` шрифтов из `globals.css`; `about-us` и `contact` используют общий `interSans`.
- **Меньше клиента:** статичные секции и хедер — без `"use client"`; интерактив только там, где нужен (например форма футера).
- **Partners:** `next/image`, расчёт размеров, `sizes` для маркета.
- **Portfolio:** тонкая server-страница; desktop-сцена вынесена; тяжёлые блоки с `DeferredMount` где уже было заложено.
- **Services:** desktop-сцена в серверном `ServicesDesktopScene` внутри существующего `CanvasScaler`.
- **CanvasScaler:** обновление масштаба через `requestAnimationFrame` + отмена при размонтировании, чтобы сгладить волны resize.
- **Footer:** `FooterMessageForm` — единственный небольшой клиентский кусок для `preventDefault` на submit; остальной футер — RSC.

## Что намеренно не меняли

- Внешний вид, структура страниц, копирайт, маршруты.
- LiquidEther / домашний canvas и тяжёлые шейдеры — без переписывания.
- Декоративные эффекты (blur, mix-blend) — не вырезались; где возможно — отложенный mount и серверный рендер тяжёлых статичных деревьев.
- Новые npm-зависимости не добавлялись.

## Оставшиеся узкие места

- **`components/liquid-ether/LiquidEther.jsx`** — WebGL/Three; основной потребитель GPU на главной.
- **Много `<img>` в Figma-сценах** (`ServicesDesktop*`, части portfolio) — ESLint предупреждает `@next/next/no-img-element`; перевод на `next/image` возможен точечно (нужно проверять `fill`/фиксированные абсолютные блоки).
- **GIF** в hero — по требованию «без смены визуала» оставлены; при появлении WebP-версий можно заменить без смены композиции.
- **Предупреждения линтера** в сгенерированных/legacy файлах (`LiquidEther`, `scripts/neetrino/...`) — не блокируют сборку; исправление вынесено за рамки этой задачи.

## Рекомендации на будущее

1. Точечно заменить декоративные `<img>` в services/portfolio на `next/image` с явными `width`/`height` или `fill` + `sizes`, где вёрстка позволяет без сдвига.
2. Профилировать главную на мобильном (Chrome Performance): при необходимости усилить `DeferredMount` для нижних блоков или снизить частоту обновления canvas.
3. Рассмотреть `content-visibility: auto` для очень длинных нижних секций после тестов на Safari/iOS (риск скачков скролла).

## Валидация

- `pnpm build` — успешно
- `pnpm typecheck` — успешно
- `pnpm lint` — без ошибок (есть существующие предупреждения в части файлов)

Ручная проверка визуала рекомендуется для `/`, `/services`, `/portfolio`, `/about-us`, `/contact` на desktop и mobile.
