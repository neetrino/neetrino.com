# Отчёт: продолжение оптимизации производительности

**Дата:** 2026-04-01

## Что уже было оптимизировано до этого прохода (сохранено)

- Server pages + `dynamic()` для тяжёлых desktop-сцен (`/portfolio`, `/services`).
- Разделённая навигация (server + маленькие client islands).
- `loading.tsx` на `portfolio`, `services`, `about-us`, `contact`.
- Централизованные шрифты (`lib/fonts.ts`, layout).
- Оптимизация `next/image` (без лишнего `unoptimized` у растра; GIF с `unoptimized`).
- WebP для портфолио в `public`, пути в `lib/public-image-paths.ts`.
- `NeetrinoHome`: `dynamic` на уровне `app/page.tsx` + `DeferredMount` для сегментов 2–4 и нижней части.
- `PortfolioDesktopScene`: `DeferredMount` для планеты и блока «MORE CASES».
- `CanvasScaler`: `ResizeObserver` + `requestAnimationFrame`.
- Футер: `FooterMessageForm` как единственный client-кусок для формы.

## Что намеренно не трогали

- Разбиение одного `DeferredMount` на несколько для **NeetrinoHomeSegment2–4**: у сегментов разные координаты `top` на canvas; Segment4 визуально выше Segment2 — раздельные границы отложенного mount без перестройки DOM дают «дыры» в сцене.
- `CanvasScaler` не удаляли; не меняли формулу масштаба.
- Дизайн, тексты, структура маршрутов.
- GIF не заменяли на видео (только мягкие атрибуты загрузки у Erica в segment1).

## Что сделано в этом проходе

| Изменение                                        | Файлы                                                                 | Эффект                                                                                                                                             |
| ------------------------------------------------ | --------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| Server Action для формы контактов                | `app/contact/actions.ts`, `components/contact/ContactInquiryForm.tsx` | Убрана гидратация client-компонента ради `preventDefault`; форма остаётся RSC с `action={submitContactInquiry}` (пока no-op для интеграции позже). |
| Отложенный крупный векторный слой в hero desktop | `components/neetrino-home/NeetrinoHomeSegment1.tsx`                   | Меньше DOM/растра в первом кадре; слой `imgVector2` монтируется при приближении sentinel к viewport.                                               |
| `loading` для корня приложения                   | `app/loading.tsx`                                                     | Единый лёгкий индикатор для сегмента `/` (как на других маршрутах).                                                                                |
| Меньше лишних записей в DOM от scaler            | `components/layout/CanvasScaler.tsx`                                  | Если `scale` не изменился (с допуском), `transform` и `height` не перезаписываются.                                                                |
| Чуть позже mount нижней части home canvas        | `components/neetrino-home/NeetrinoHome.tsx`                           | `rootMargin` у существующего `DeferredMount` уменьшен с дефолтных 240px до 120px — монтирование ближе к реальному входу в viewport.                |
| Отложенный нижний декоративный блок portfolio    | `components/portfolio/PortfolioDesktopScene.tsx`                      | Два тяжёлых `img10` у футера canvas монтируются только при приближении к нижней зоне.                                                              |
| GIF Erica                                        | `NeetrinoHomeSegment1.tsx`                                            | Добавлены `loading="lazy"` и `decoding="async"` (анимация сохраняется за счёт `unoptimized`).                                                      |

## Изменённые файлы

- `docs/PERF_CONTINUATION_AUDIT.md` (новый)
- `docs/PERF_CONTINUATION_REPORT.md` (этот файл)
- `app/contact/actions.ts` (новый)
- `app/loading.tsx` (новый)
- `components/contact/ContactInquiryForm.tsx`
- `components/layout/CanvasScaler.tsx`
- `components/neetrino-home/NeetrinoHome.tsx`
- `components/neetrino-home/NeetrinoHomeSegment1.tsx`
- `components/portfolio/PortfolioDesktopScene.tsx`

## Оставшиеся узкие места

- **LiquidEther / Three** в `NeetrinoHomeSegment2` — по-прежнему тяжёлый client chunk после срабатывания `DeferredMount`.
- **Большой блок Light Rays** в `PortfolioDesktopScene\*\* — остаётся в initial mount (критичен для первого кадра портфолио); дальнейшая нарезка — с осторожностью к визуалу.
- **GIF** (`img1`, Erica) — без замены на WebM/статик заметного выигрыша по весу не будет.
- **Много client-сегментов neetrino-home** — следующий логичный шаг: точечные `dynamic()` внутри уже отложенных сегментов (не трогая порядок слоёв).

## Рекомендации на следующий проход

1. Профилировать LCP/INP на реальном устройстве после деплоя.
2. Рассмотреть WebM + poster для GIF при сохранении композиции.
3. Точечно заменить оставшиеся `<img>` в тяжёлых Figma-сценах на `next/image` где безопасно для вёрстки.

## Проверки

- `pnpm build` — успешно
- `pnpm typecheck` — успешно

Ручная проверка: `/`, `/services`, `/portfolio`, `/about-us`, `/contact` (desktop + mobile), особенно первый экран home и низ portfolio.
