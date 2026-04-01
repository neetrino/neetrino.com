# Отчёт: оптимизация переходов между маршрутами

**Дата:** 2026-04-01  
**Задача:** ускорить ощущение навигации и открытия страниц без смены дизайна.

## Что замедляло переходы

1. **Целые `Navbar` и `NonHomeMobileHeader` как Client Components** — гидратировались логотип, десктопная навигация (на главной) и статичная разметка вместе с меню, хотя интерактивны только кнопка и оверлей.
2. **Синхронная загрузка тяжёлых desktop-сцен** — при первом заходе на `/portfolio` и `/services` сразу подключались большие модули с Figma-сценами и `CanvasScaler`, увеличивая время до интерактивности после клика по ссылке.
3. **Отсутствие лёгкой обратной связи при переходе** — не было сегментных `loading.tsx`, при задержке сети/чанка не было минимального UI.

## Изменённые и добавленные файлы

| Файл                                            | Изменение                                                                          |
| ----------------------------------------------- | ---------------------------------------------------------------------------------- |
| `docs/ROUTE_TRANSITION_AUDIT.md`                | Аудит причин и план                                                                |
| `lib/nav-links.ts`                              | Общие ссылки навигации и класс десктоп-ссылок                                      |
| `lib/hooks/useBodyScrollLock.ts`                | Общий хук блокировки скролла при открытом меню                                     |
| `lib/canvas-route-placeholders.ts`              | Именованные классы высоты placeholder под canvas                                   |
| `components/nav/NavbarMobileShell.tsx`          | Client: кнопка + оверлей главной (моб.)                                            |
| `components/nav/NonHomeMobileShell.tsx`         | Client: оболочка не-главных моб. хедеров + `children` (логотип с сервера)          |
| `components/sections/Navbar.tsx`                | Server: логотип, десктоп-навигация, `PhoneIcon`; client только `NavbarMobileShell` |
| `components/sections/NonHomeMobileHeader.tsx`   | Server: логотип как `children` в `NonHomeMobileShell`                              |
| `components/services/ServicesDesktopCanvas.tsx` | Обёртка `CanvasScaler` + `ServicesDesktopScene` для code-splitting                 |
| `app/portfolio/page.tsx`                        | `dynamic()` для `PortfolioDesktop` с лёгким placeholder                            |
| `app/services/page.tsx`                         | `dynamic()` для `ServicesDesktopCanvas` с placeholder                              |
| `app/portfolio/loading.tsx`                     | Тонкая полоска + фон                                                               |
| `app/services/loading.tsx`                      | То же                                                                              |
| `app/about-us/loading.tsx`                      | То же                                                                              |
| `app/contact/loading.tsx`                       | То же                                                                              |

## Что сделано

- **Разделение static / interactive для навигации:** десктопные ссылки и логотип рендерятся на сервере; в клиентский бандл уходит только узкий слой мобильного меню (`NavbarMobileShell`, `NonHomeMobileShell`).
- **Общий `useBodyScrollLock`** — один паттерн для блокировки скролла, без дублирования `useEffect` в двух больших компонентах.
- **Code splitting для тяжёлых desktop-сцен:** `PortfolioDesktop` и `ServicesDesktopCanvas` подключаются через `next/dynamic` с `ssr: true` и компактным placeholder по высоте canvas, чтобы не держать парсинг огромного дерева в критическом пути без необходимости.
- **Лёгкие `loading.tsx`** на ключевых маршрутах — тёмный фон и тонкая полоска `animate-pulse`, без тяжёлых скелетонов.

## Где эффект заметнее всего

- **`/portfolio` и `/services` (desktop)** — отложенная загрузка JS desktop-сцены и placeholder высоты уменьшают «подвисание» сразу после перехода.
- **Все страницы с мобильным хедером** — меньше клиентского JS на гидратацию статичной части навбара.
- **Переходы между `/about-us` и `/contact`** — быстрый индикатор загрузки сегмента.

## Что намеренно не меняли

- Внешний вид хедеров, оверлеев, порядок ссылок и тексты.
- `CanvasScaler`, `DeferredMount`, тяжёлые Figma-слои внутри сцен (только отложенная подгрузка **модуля** desktop-блока).
- `ContactInquiryForm`, LiquidEther, динамический `NeetrinoHome` на главной — без переработки логики.
- Явные новые npm-зависимости не добавлялись.

## Оставшиеся узкие места

- **Главная `/`** — крупный динамический `NeetrinoHome` по-прежнему основной вес после первого входа на сайт.
- **Декоративные `<img>` в services/portfolio** — при желании дальнейшая оптимизация через `next/image` точечно (см. предыдущий performance-отчёт).
- **Prefetch** — по умолчанию у `Link` в продакшене включён; дополнительная настройка не требовалась.

## Рекомендации на будущее

1. При необходимости — `loading.tsx` для `/` с тем же минимальным паттерном (осторожно, чтобы не мигало при shallow навигации, если появится).
2. Рассмотреть `prefetch={false}` только для второстепенных ссылок вне хедера, если когда-либо понадобится экономить трафик (сейчас не включали).
3. Профилировать на реальном устройстве после деплоя: Lighthouse / Web Vitals на переходах `/` → `/portfolio` → `/services`.

## Проверки

- `pnpm build` — успешно
- `pnpm typecheck` — успешно
- Ручная проверка маршрутов `/`, `/services`, `/portfolio`, `/about-us`, `/contact` рекомендуется после деплоя.
