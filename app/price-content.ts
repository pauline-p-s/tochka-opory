export const priceCategories = [
  {
    slug: 'test-course',
    title: 'Тестовый курс',
    description: 'Специальная цена',
    items: [{ title: '3 тренировки', price: '12 600 ₽' }],
  },
  {
    slug: 'individual',
    title: 'Индивидуальные занятия в зале со специалистом',
    description:
      'Для регулярных оздоровительных программ и поддержки результата.',
    items: [],
  },
  {
    slug: 'gym',
    title: 'Абонемент в спортивный зал',
    description:
      'Два тарифа. Подробные условия и цены будут добавлены после утверждения прайса.',
    items: [
      { title: 'Тариф 1', price: 'Стоимость уточняется' },
      { title: 'Тариф 2', price: 'Стоимость уточняется' },
    ],
  },
  {
    slug: 'classic-massage',
    title: 'Классический массаж',
    description:
      'Продолжительность сеансов и стоимость будут добавлены после утверждения прайса.',
    items: [],
  },
  {
    slug: 'sports-massage',
    title: 'Спортивный массаж',
    description:
      'Продолжительность сеансов и стоимость будут добавлены после утверждения прайса.',
    items: [],
  },
  {
    slug: 'meta-massage',
    title: 'Метамассаж',
    description:
      'Продолжительность сеансов и стоимость будут добавлены после утверждения прайса.',
    items: [],
  },
  {
    slug: 'zonal-massage',
    title: 'Зональный массаж',
    description:
      'Зоны массажа, дополнительные услуги и стоимость будут добавлены после утверждения прайса.',
    items: [],
  },
];
export function priceUrl(slug: string) {
  return (process.env.NEXT_PUBLIC_BASE_PATH || '') + '/prices/' + slug + '/';
}
