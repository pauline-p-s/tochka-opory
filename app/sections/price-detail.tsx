import ContactDialog, { ContactButton } from '../contact-dialog';
import { priceCategories } from '../price-content';
export default function PriceDetail({ slug }: { slug: string }) {
  const category = priceCategories.find((item) => item.slug === slug)!;
  const base = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return (
    <ContactDialog>
      <main className="price-page">
        <header>
          <a href={base + '/#prices'} className="text-link">
            ← Назад к стоимости
          </a>
          <span>Точка опоры</span>
        </header>
        <section className="section panel">
          <p className="eyebrow">Стоимость</p>
          <h1>{category.title}</h1>
          <p className="price-page-lead">{category.description}</p>
          {category.items.length ? (
            <dl className="tariff-list">
              {category.items.map((item) => (
                <div key={item.title}>
                  <dt>{item.title}</dt>
                  <dd>{item.price}</dd>
                </div>
              ))}
            </dl>
          ) : (
            <div className="tariff-pending">
              <h2>Прайс готовится к публикации</h2>
              <p>
                Оставьте номер телефона — менеджер уточнит условия и стоимость.
              </p>
            </div>
          )}
          <ContactButton className="button green">
            {slug === 'test-course'
              ? 'Записаться на тестовый курс'
              : 'Связаться с менеджером'}{' '}
            ↗
          </ContactButton>
        </section>
        <nav className="price-page-nav" aria-label="Другие услуги">
          {priceCategories
            .filter((item) => item.slug !== slug)
            .map((item) => (
              <a href={base + '/prices/' + item.slug + '/'} key={item.slug}>
                {item.title} ↗
              </a>
            ))}
        </nav>
      </main>
    </ContactDialog>
  );
}
