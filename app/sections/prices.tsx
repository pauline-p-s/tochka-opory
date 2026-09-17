import { Heading } from './shared';
import { ContactButton } from '../contact-dialog';
import { priceCategories, priceUrl } from '../price-content';
export default function PricesSection() {
  return (
    <section className="section panel reveal" id="prices">
      <Heading label="Программы и занятия" title={<>Стоимость</>} />
      <div className="price-intro-grid">
        <article className="price-card green-surface">
          <span className="eyebrow">Первый шаг</span>
          <h3>Тестовый курс</h3>
          <strong>Специальная цена</strong>
          <a className="button light" href={priceUrl('test-course')}>
            Узнать стоимость ↗
          </a>
        </article>
        <div className="subscription-intro">
          <p className="eyebrow">Регулярная работа</p>
          <h3>Абонементы</h3>
          <p>Для регулярных оздоровительных программ и поддержки результата.</p>
        </div>
      </div>
      <div className="subscription-grid">
        {priceCategories.slice(1, 3).map((category) => (
          <a
            className="service-card"
            href={priceUrl(category.slug)}
            key={category.slug}
          >
            <h3>{category.title}</h3>
            <span>
              {category.slug === 'gym'
                ? 'Два тарифа'
                : 'Занятия со специалистом'}
            </span>
            <span className="text-link">Подробнее ↗</span>
          </a>
        ))}
        <div className="massage-group">
          <h3>Массажи</h3>
          <div className="massage-links">
            {priceCategories.slice(3).map((category) => (
              <a href={priceUrl(category.slug)} key={category.slug}>
                {category.title}
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
      <p className="price-discount">* Скидка для пенсионеров — 10%.</p>
      <div className="certificate-row">
        <div>
          <h3>Сертификаты</h3>
          <p>Номиналы и условия использования уточняются у менеджера.</p>
        </div>
        <ContactButton className="text-link">
          Связаться с менеджером ↗
        </ContactButton>
      </div>
    </section>
  );
}
