export type PriceItem = {
  title: string;
  price: string;
  description?: string;
};

type PriceGroup = {
  title: string;
  description?: string;
  items: PriceItem[];
};

export type PriceCategory = {
  slug: string;
  title: string;
  description: string;
  items: PriceItem[];
  groups?: PriceGroup[];
  note?: string;
};

const courseNote =
  '* Количество курсов высчитывается по количеству базовых 12 пройденных сеансов.';

function massageCourses(prices: string[][]): PriceGroup[] {
  return ['1–3 курс*', '3–10 курс*', '10+ курс*'].map((title, index) => ({
    title,
    items: [
      'Мини-курс (3 сеанса)',
      'Базовый курс (6 сеансов)',
      'Продвинутый курс (12 сеансов)',
    ].map((title, itemIndex) => ({
      title,
      price: prices[index][itemIndex] + ' ₽',
    })),
  }));
}

export const priceCategories: PriceCategory[] = [
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
    description: 'Два тарифа и абонементы на 1, 3, 6 или 12 месяцев.',
    items: [],
    groups: [
      {
        title: 'Тариф №1',
        description:
          'Посещение с 11:00 до 18:00 каждый день, кроме воскресенья.',
        items: [
          {
            title: '1 месяц',
            description: '1 занятие со специалистом',
            price: '15 000 ₽',
          },
          {
            title: '3 месяца',
            description: '3 занятия со специалистом',
            price: '40 500 ₽',
          },
          {
            title: '6 месяцев',
            description: '6 занятий со специалистом + 1 сеанс массажа',
            price: '81 000 ₽',
          },
          {
            title: '12 месяцев',
            description: '12 занятий со специалистом + 2 сеанса массажа',
            price: '153 000 ₽',
          },
        ],
      },
      {
        title: 'Тариф №2',
        description: 'Без ограничения времени посещения в часы работы центра.',
        items: [
          {
            title: '1 месяц',
            description: '1 занятие со специалистом',
            price: '20 000 ₽',
          },
          {
            title: '3 месяца',
            description: '3 занятия со специалистом',
            price: '54 000 ₽',
          },
          {
            title: '6 месяцев',
            description: '6 занятий со специалистом + 2 сеанса массажа',
            price: '108 000 ₽',
          },
          {
            title: '12 месяцев',
            description: '12 занятий со специалистом + 3 сеанса массажа',
            price: '204 000 ₽',
          },
        ],
      },
    ],
  },
  {
    slug: 'classic-massage',
    title: 'Классический массаж',
    description: 'Разовые сеансы и курсы на 3, 6 или 12 сеансов.',
    items: [{ title: 'Разовый сеанс (60 минут)', price: '6 000 ₽' }],
    groups: massageCourses([
      ['17 100', '30 600', '57 600'],
      ['16 600', '29 100', '54 700'],
      ['16 100', '27 100', '51 100'],
    ]),
    note: courseNote,
  },
  {
    slug: 'sports-massage',
    title: 'Спортивный массаж',
    description: 'Разовые сеансы и курсы на 3, 6 или 12 сеансов.',
    items: [{ title: 'Разовый сеанс (60 минут)', price: '6 500 ₽' }],
    groups: massageCourses([
      ['18 500', '33 100', '62 400'],
      ['18 000', '31 500', '59 200'],
      ['17 400', '29 400', '55 400'],
    ]),
    note: courseNote,
  },
  {
    slug: 'meta-massage',
    title: 'Метамассаж',
    description: 'Разовые сеансы и курсы на 3, 6 или 12 сеансов.',
    items: [{ title: 'Разовый сеанс (60 минут)', price: '8 000 ₽' }],
    groups: massageCourses([
      ['22 800', '40 800', '76 800'],
      ['22 100', '38 700', '72 900'],
      ['20 600', '36 200', '68 200'],
    ]),
    note: courseNote,
  },
  {
    slug: 'zonal-massage',
    title: 'Зональный массаж и дополнительные услуги',
    description: 'Стоимость и продолжительность сеансов по зонам.',
    items: [],
    groups: [
      {
        title: 'Зональный массаж',
        items: [
          { title: 'Шея (15 минут)', price: '1 700 ₽' },
          { title: 'Шея + голова (15 минут)', price: '1 900 ₽' },
          { title: 'Верхние конечности (20 минут)', price: '2 400 ₽' },
          { title: 'Нижние конечности (30 минут)', price: '3 600 ₽' },
          { title: 'Голеностоп (20 минут)', price: '2 600 ₽' },
          { title: 'Спина (30 минут)', price: '3 700 ₽' },
        ],
      },
      {
        title: 'Дополнительные услуги',
        items: [
          { title: 'Терраган-терапия — 1 зона (20 минут)', price: '1 000 ₽' },
          { title: 'Миостимуляция (30 минут)', price: '500 ₽' },
        ],
      },
    ],
  },
];
