# Phoenix Group Automotive — сайт СТО

Редизайн сайта киевского автосервиса. Оригинал: https://phoenixgroup.kiev.ua/ru/

## Фаза (июнь 2026)

**ДЕМО** для показа клиенту. Не спешим. Если клиент одобрит — **полная
переработка с сохранением текстов, картинок и содержания** оригинала
(осовременивание под современный веб, возможно с расширениями).

## Решения по демо

- **Объём:** главная (контент как у оригинала, осовремененный) + страница «Наши
  услуги».
- **Языки:** RU + UA (`next-intl`, локали `ru`/`uk`, дефолт `ru`, `/` → `/ru`).
- **Темы:** светлая + тёмная, дефолт тёмная. Акцент — чистый оранжевый
  (`--accent`).
- **Бренд:** «Феникс Групп» / «Фенікс Груп», подпись «Автосервис, созданный для
  Вас» (локализовано, ключи `brand.name` / `brand.tagline`).
- **Форма записи:** визуал + `zod`-валидация, БЕЗ отправки (имитация). Реальная
  отправка — на этапе полной переработки.
- **Фото:** плейсхолдеры с `images.unsplash.com` (whitelisted в
  `next.config.ts`).

## Стек

Next.js 16 (App Router, Turbopack) · React 19 · TS strict · Tailwind v4 (токены
через `@theme` в `globals.css`, без `tailwind.config`) · framer-motion ·
lucide-react · react-hook-form + zod · next-intl.

Правила кода — `RULES.md`: файлы ≤150 строк, один компонент/файл, именованные
экспорты (кроме страниц Next), алиасы `@/`, без `any`, анимации только
`transform`/`opacity` (НЕ `height`/`width`/`top`), отступы кратны 4px, цвета
только через токены, тексты — в i18n.

## Тема (без next-themes — важно)

Cookie `theme` (`config/theme.ts`) читается на сервере в `[locale]/layout.tsx` →
сразу ставит класс `.dark` + `color-scheme` на `<html>`. `ThemeToggle` меняет
класс и пишет cookie. Так получаем: нет мерцания, нет инлайн-скрипта (React 19
ругается на `<script>` в дереве), нет hydration-мисматча, тема не сбрасывается
при смене языка. Цена — страницы рендерятся динамически (`ƒ`), не SSG. На
`<html>` и `<body>` стоит `suppressHydrationWarning`.

## Решённые нюансы / гочи (не сломать повторно)

- **Hydration-warning с `bis_skin_checked` / `bis_register`** — это расширение
  **Bitdefender** дописывает атрибуты в DOM, НЕ наш баг. Проверяется в
  инкогнито. Не глушим `suppressHydrationWarning` по всему коду (спрячет
  реальные баги).
- **Мобильное меню** (`MobileMenu`) вынесено ИЗ `<header>` и рендерится соседом,
  `position: fixed; top-16`. Причина: вложенный `backdrop-blur` внутри родителя
  с `backdrop-blur` в Chromium не работает — стекло не размывалось. Сейчас фон
  как у хедера (`bg-background/80 backdrop-blur-md`). Это оверлей (не толкает
  раскладку → плавная анимация без рефлоу).
- **Счётчики hero** (`components/ui/CountUp`) — набегают от 0 через нативный
  `IntersectionObserver` (НЕ `useInView`: тот при reload/restore-scroll на
  мобиле не стартовал, счётчик застывал на 0). Анимация числа — framer-motion
  `animate`, текст пишется в `node.textContent` (без ре-рендеров на кадр).
- **`body { overflow-x: clip }`** в `globals.css` — гасит горизонтальный скролл;
  `clip`, а не `hidden`, чтобы не ломать sticky-хедер.
- **Логотипы партнёров** (`features/partners/PartnerLogos.tsx`) — строка
  логотипов вместо текста. Переключатель `SHOW_PARTNER_LOGOS` в
  `config/content.ts`: `false` → мгновенно возвращается старый текстовый список
  (он сохранён в `Partners.tsx`). Файлы лежат в `features/partners/logos/`
  (импорт через `@/`, оптимизируются `next/image` со static-import). Дизайн:
  одна строка (`flex w-max`, на узких экранах скролл по X у обёртки — поэтому ей
  нужен `py-3`, иначе `overflow-x` режет и по Y, обрезая поднятую на hover
  карточку). Светлая тема — белые карточки, grayscale→цвет на hover. Тёмная —
  БЕЗ подложки (серые лого прямо на фоне секции), на hover белая карточка +
  цвет. Важно: эффект работает только с **прозрачным фоном** у PNG; у лого с
  залитым фоном `brightness-0 invert` даёт сплошные белые блоки — поэтому НЕ
  инвертируем, только grayscale.
- **Форма записи** (`features/booking/BookingForm.tsx`) — поля «Автомобиль» и
  «Услуга» на всю ширину (`sm:col-span-2`), а не половинки. Причина: длинные
  названия услуг («Профессиональная диагностика») не влезали в нативный
  `<select>` половинной ширины. У селекта `pr-10 truncate` — запас под стрелку.

## Структура (`src/`)

```
app/[locale]/   layout · page (главная) · services/page · not-found
app/            globals.css · icon.png (фавикон) · robots.ts · sitemap.ts
proxy.ts        next-intl middleware (Next 16: файл proxy, не middleware)
i18n/           routing · navigation · request · messages/{ru,uk}.json  ← все UI-тексты
config/         routes · site · services · content · theme              ← данные/константы
lib/            cn.ts · icons.ts
components/ui/      Button · Container · Section · Badge · SectionHeading · Reveal · Field · CountUp
components/layout/  Header · Footer · NavLinks · MobileMenu · Logo · ThemeToggle · LangSwitcher
features/          hero · services · advantages · process · partners · news ·
                   booking · contacts · services-page
features/partners/ Partners (секция+переключатель) · PartnerLogos · logos/*.png
public/         logo.png (тот же феникс, что и фавикон; используется в Logo)
```

## Запуск

- `npm run dev` → http://localhost:3000 (`/` → `/ru`).
- `npm run build` / `npm start` — прод (маршруты страниц динамические, `ƒ`).
- `npm run lint`. Build и lint зелёные. Git-коммитов ещё не делали.

## Реальные данные СТО (контент демо)

- **Телефоны:** (050) 166-99-90, (097) 888-69-51, (097) 888-62-73 (шиномонтаж).
- **Адрес:** г. Киев, ул. Гната Хоткевича, 18 (район м. Черниговская, Дарницкая
  пл.).
- **График:** Пн–Пт 09:00–18:00, Сб 09:00–15:00, Вс — выходной.
- **Слоган:** «Заботиться о Вашем автомобиле, не отбирая Вашего времени».
- **6 услуг:** диагностика · техобслуживание · текущий ремонт ·
  восстановительный ремонт (кузов/покраска) · шиномонтаж · развал-схождение.
- **Партнёры (логотипы):** 3M, Colad, Glasurit, Castrol, Liqui Moly, ELIT, FPS,
  Omega, ЗипАвто (PNG с прозрачным фоном). Email/соцсети на оригинале не
  указаны.

---

@AGENTS.md
