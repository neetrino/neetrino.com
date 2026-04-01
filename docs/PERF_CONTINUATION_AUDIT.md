# Аудит продолжения оптимизации производительности

**Дата:** 2026-04-01  
**Режим:** продолжение от текущего состояния, без отката уже сделанного.

## Уже оптимизировано (не трогать / не откатывать)

- **Маршруты:** `app/portfolio/page.tsx` — Server Component + `dynamic()` для `PortfolioDesktop` с placeholder; `app/services` — аналогично для desktop canvas.
- **Навигация:** `Navbar` (server) + `NavbarMobileShell`; `NonHomeMobileHeader` + `NonHomeMobileShell` с `children` для логотипа.
- **`loading.tsx`:** `portfolio`, `services`, `about-us`, `contact`.
- **Шрифты:** `lib/fonts.ts`, `interSans` / `dmSans` в `layout`, страницы без дублирующего `Inter()`.
- **Изображения:** убран лишний `unoptimized` у растра; GIF с `unoptimized`; портфолио в `public` — WebP; скрипт `convert-images.mjs`.
- **Главная desktop:** `app/page.tsx` — `dynamic(NeetrinoHome)`; внутри `NeetrinoHome` — `DeferredMount` для сегментов 2–4 + below fold + end cap.
- **Portfolio desktop:** `DeferredMount` для `PortfolioPlanet` и `PortfolioMoreCases`.
- **`CanvasScaler`:** батч через `requestAnimationFrame` + `ResizeObserver`.
- **`Footer`:** форма в `FooterMessageForm` (client), остальное RSC.

## Нельзя ломать

- Визуал и разметку canvas 1440×…
- Порядок и единый `DeferredMount` для **NeetrinoHomeSegment2–4** в одном блоке: у сегментов разные `top` в координатах canvas (например Segment4 выше Segment2), разделение на два отложенных блока без перестановки DOM даёт «дыры» в сцене.
- Существующие `dynamic()` на страницах и `loading.tsx`.

## Оставшиеся узкие места

1. **NeetrinoHomeSegment1:** сразу монтируется огромный декоративный SVG-слой (`imgVector2`, `top-[633px]`, mix-blend) — тяжёлый DOM/пейнт; герой и шапка должны остаться сразу.
2. **PortfolioDesktopScene:** нижний декоративный блок с `img10` (дубликаты) у футера canvas — можно отложить без влияния на верх сцены.
3. **ContactInquiryForm:** целиком client ради `preventDefault` — лишняя гидратация.
4. **CanvasScaler:** при неизменном масштабе можно не перезаписывать `style` каждый кадр.
5. **Главная `/`:** нет `app/loading.tsx` — при первом заходе меньше мгновенной обратной связи, чем на других маршрутах.

## План изменений (этот проход)

| Область                  | Файлы                                              | Действие                                                                                                            |
| ------------------------ | -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| Home segment 1           | `NeetrinoHomeSegment1.tsx`                         | Обернуть только крупный векторный оверлей в `DeferredMount` (sentinel выше зоны контента).                          |
| Portfolio                | `PortfolioDesktopScene.tsx`                        | `DeferredMount` для нижнего блока с двойным `img10` у `top-[2099px]`.                                               |
| Contact                  | `app/contact/actions.ts`, `ContactInquiryForm.tsx` | Server Action + форма без `"use client"`.                                                                           |
| CanvasScaler             | `CanvasScaler.tsx`                                 | Пропуск записи в DOM, если `scale` не изменился (с допуском).                                                       |
| Home route UX            | `app/loading.tsx`                                  | Лёгкий индикатор, согласованный с другими `loading.tsx`.                                                            |
| Отложенная загрузка home | `NeetrinoHome.tsx`                                 | Чуть уменьшить `rootMargin` у существующего `DeferredMount`, чтобы монтировать ближе к viewport (позже по скроллу). |

## Почему это дешевле

- Меньше узлов и картинок в первом кадре desktop home / portfolio.
- Меньше работы `ResizeObserver` → DOM при стабильной ширине.
- Меньше клиентского JS на `/contact` для формы-заглушки.
