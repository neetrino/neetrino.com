# Отчёт: устранение лага при переходах между маршрутами

## Причина ощущения «медленного» перехода

- После срабатывания `next/dynamic` на `/portfolio` и `/services` **сразу** монтировалась полная desktop-сцена внутри `CanvasScaler`. Это большой объём DOM и стилей в одном React commit + дорогая первая отрисовка (особенно mix-blend, blur, много изображений).
- На **portfolio** дополнительно в том же такте шёл крупный декоративный блок (vector overlay и связанный «contents»-стек), хотя базовый hero (лучи, звезда, шум, заголовок PORTFOLIO) уже задаёт узнаваемый кадр.

## Что было слишком тяжёлым

- **Целиком** `PortfolioDesktopScene` и `ServicesDesktopScene` на первом mount после загрузки desktop-чанка.
- Выделенный подмножество **portfolio**: узлы Figma ~166:1214–166:1225 (vector + линии + градиенты с blur + несколько крупных img).

## Что отложено / разбито

1. **`DesktopSceneMountGate`** (client): до первого paint + idle (`requestIdleCallback` с таймаутом `DESKTOP_SCENE_MOUNT_IDLE_TIMEOUT_MS`, fallback через `setTimeout` в Safari) внутри `CanvasScaler` показывается **плейсхолдер** `bg-[#151515]` тех же `canvasWidth` × `canvasHeight`, затем монтируются дети (server-композиция: сцена передаётся как `children`).
2. **`PortfolioDesktopVectorDecorDeferred`**: тот же тяжёлый декор обёрнут в **`DeferAfterPaint`** (2× rAF + idle, таймаут `DESKTOP_DECOR_DEFER_IDLE_TIMEOUT_MS`), чтобы **второй волной** снизить стоимость первого commit сцены после открытия gate.
3. Существующие **`DeferredMount`** в portfolio (планета, img10, more cases) **не трогались**.

## Изменённые и добавленные файлы

| Файл                                                           | Назначение                                                    |
| -------------------------------------------------------------- | ------------------------------------------------------------- |
| `lib/desktop-scene-mount.constants.ts`                         | Константы таймаутов idle                                      |
| `lib/schedule-after-frame-idle.ts`                             | Общая отложенная очередь: 2 rAF + idle                        |
| `components/layout/DesktopSceneMountGate.tsx`                  | Отложенный mount полной сцены под canvas                      |
| `components/layout/DeferAfterPaint.tsx`                        | Отложенный mount произвольного декора                         |
| `components/portfolio/PortfolioDesktopVectorDecorDeferred.tsx` | Вынесенный тяжёлый vector/line/blur блок                      |
| `components/portfolio/PortfolioDesktop.tsx`                    | Обёртка сцены в `DesktopSceneMountGate`                       |
| `components/portfolio/PortfolioDesktopScene.tsx`               | Замена inline-декора на `PortfolioDesktopVectorDecorDeferred` |
| `components/services/ServicesDesktopCanvas.tsx`                | Та же `DesktopSceneMountGate` для services                    |
| `docs/ROUTE_LAG_FIX_AUDIT.md`                                  | Аудит до/после анализа                                        |
| `docs/ROUTE_LAG_FIX_REPORT.md`                                 | Этот отчёт                                                    |

## Проверки

- `pnpm build`, `pnpm typecheck`, `pnpm lint` — выполнить локально после слияния (ожидается успех при зелёном CI).
- Маршруты: `/`, `/services`, `/portfolio`, `/about-us`, `/contact` — нет ошибок гидратации; на desktop кратковременный однотонный плейсхолдер под canvas допустим до появления сцены.

## Оставшиеся узкие места (на будущее)

- **Главная**: `NeetrinoHome` / `LiquidEther` и тяжёлые сегменты после `DeferredMount` — при профилировании можно углубить split или сдвинуть Three.js ещё позже.
- **Portfolio**: горизонтальные полосы `imgRectangle17414`, карточки портфолио, `Group`, `Awwwards` всё ещё в первом commit сцены после gate — при необходимости их можно обернуть во второй `DeferAfterPaint` с осторожностью к stacking/z-index.
- **Services**: внутренние поддеревья (`ServicesDesktopLightRays`, карты) можно дробить динамическими импортами глубже по дереву, если профиль покажет узкое место после gate.
