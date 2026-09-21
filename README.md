# Точка опоры

Сайт центра реабилитации позвоночника и суставов.

Сайт: https://pauline-p-s.github.io/tochka-opory/

## Локальный запуск

Требуются Node.js 22.13 или новее и pnpm 10.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

## Публикация

Изменения в ветке `main` автоматически собираются и публикуются на GitHub Pages.
Настройки находятся в `.github/workflows/pages.yml`.

Для сборки с тем же адресом:

```sh
NEXT_PUBLIC_BASE_PATH=/tochka-opory pnpm build
NEXT_PUBLIC_BASE_PATH=/tochka-opory node scripts/prepare-pages.mjs
```

Готовые статические файлы находятся в `dist/client`.
Без `NEXT_PUBLIC_BASE_PATH` сайт собирается для корня домена.

## Материалы

- `app/page.tsx` — шапка и первый экран.
- `app/content.tsx` — основные разделы и форма.
- `app/brand.tsx` — логотипы.
- `app/globals.css`, `app/refinements.css` — оформление.
- `public/brand` — оригинальные SVG из Figma.

Форма отправляет имя, телефон и email через FormSubmit на receptiontochkaopori@yandex.ru. При первой отправке получатель должен подтвердить адрес по письму FormSubmit. Тестовая отправка не выполнялась.
Фотографии, сведения о специалистах, цены, точные контакты и документы ждут материалов заказчика.
