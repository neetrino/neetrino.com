# Аудит: лаг при переходах между маршрутами

## Что уже снижает стоимость перехода

- **Динамический импорт тяжёлых desktop-блоков** на уровне страниц (`next/dynamic` с `loading` и классами высоты из `lib/canvas-route-placeholders.ts`): `/portfolio`, `/services` — чанк desktop грузится отдельно, есть серый плейсхолдер под масштаб canvas.
- **Тонкие server `page.tsx`**: разметка и мобильные ветки не тянут весь desktop в основной бандл страницы.
- **`CanvasScaler`**: масштабирование через `requestAnimationFrame` + `ResizeObserver`, без лишних пересчётов на каждый кадр при стабильной ширине.
- **`DeferredMount` в `PortfolioDesktopScene`**: планета (`top-[2400px]`), нижний блок с `img10`, `PortfolioMoreCases` — не монтируются, пока зона не приближается к viewport.
- **Главная**: уже разбита на сегменты с `DeferredMount` и динамическим `NeetrinoHome` (см. `docs/PERFORMANCE_REPORT.md`, `PERF_CONTINUATION_*`).
- **Шрифты / навбар**: централизованные шрифты и разнесённая навигация не входят в объём этой правки (при проверке — без регрессий).

## Что всё ещё блокировало плавный вход на маршрут

1. **Сразу после навигации** динамический чанк desktop монтировал **всю** `PortfolioDesktopScene` / `ServicesDesktopScene` внутри `CanvasScaler` в **одном** коммите: сотни узлов, mix-blend, крупные изображения, декор — долгий парсинг, стиль и первая отрисовка.
2. **Portfolio**: блок **vector overlay + «contents»** (линии, градиенты с blur, несколько крупных `<img>`) шёл сразу после hero light rays — тяжёлая отрисовка в первом кадре сцены, хотя визуально это вторичный декор поверх уже видимого заголовка и лучей.

## Какие компоненты оставались слишком тяжёлыми при открытии маршрута

| Зона                 | Компонент / участок                                             | Почему тяжело                                      |
| -------------------- | --------------------------------------------------------------- | -------------------------------------------------- |
| `/portfolio` desktop | Вся сцена сразу после `dynamic()`                               | Один большой дерево React + paint                  |
| `/portfolio` desktop | Vector + line + blur + img stack (бывш. узлы 166:1214–166:1225) | Много слоёв, `mix-blend-*`, размытия               |
| `/services` desktop  | `ServicesDesktopScene` целиком при первом mount                 | Backdrop + LightRays + карты + orbit в одном кадре |

## Какие файлы планировалось изменить

- `lib/desktop-scene-mount.constants.ts` — таймауты idle для отложенного mount.
- `lib/schedule-after-frame-idle.ts` — общий планировщик: 2× rAF + `requestIdleCallback` / fallback.
- `components/layout/DesktopSceneMountGate.tsx` — оболочка: плейсхолдер размера canvas, затем `children`.
- `components/layout/DeferAfterPaint.tsx` — отложенный mount декора внутри уже показанной сцены.
- `components/portfolio/PortfolioDesktopVectorDecorDeferred.tsx` — вынесенный тяжёлый декор portfolio.
- `components/portfolio/PortfolioDesktop.tsx`, `components/portfolio/PortfolioDesktopScene.tsx`
- `components/services/ServicesDesktopCanvas.tsx`
- `docs/ROUTE_LAG_FIX_REPORT.md` — итог после внедрения.

## Ограничения (соблюдены)

- Без редизайна и заметного изменения финального вида после полной отрисовки.
- `loading.tsx` на маршрутах не удалялись.
- Server/client границы и существующие `DeferredMount` сохранены; тяжёлые server-сцены по-прежнему передаются в client gate как `children`.
