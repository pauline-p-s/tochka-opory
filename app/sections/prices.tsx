import { Heading } from './shared';
import { ContactButton } from '../contact-dialog';
import { priceCategories } from '../price-content';
import { PriceButton } from '../price-dialog';
export default function PricesSection() {
  return (
    <section className="section panel reveal" id="prices">
      <Heading label="Программы и занятия" title={<>Стоимость</>} />
      <div className="price-intro-grid">
        <article className="price-card green-surface">
          <span className="eyebrow">Первый шаг</span>
          <h3>Тестовый курс</h3>
          <strong>Специальная цена</strong>
          <PriceButton className="button light" category={priceCategories[0]}>
            Узнать стоимость ↗
          </PriceButton>
        </article>
        <div className="subscription-intro">
          <p className="eyebrow">Регулярная работа</p>
          <h3>Абонементы</h3>
          <p>Для регулярных оздоровительных программ и поддержки результата.</p>
        </div>
      </div>
      <div className="subscription-grid">
        {priceCategories.slice(1, 3).map((category) => (
          <PriceButton
            className="service-card"
            category={category}
            key={category.slug}
          >
            <span className="service-card-title">{category.title}</span>
            <span>
              {category.slug === 'gym'
                ? 'Два тарифа'
                : 'Занятия со специалистом'}
            </span>
            <span className="text-link">Подробнее ↗</span>
          </PriceButton>
        ))}
        <div className="massage-group">
          <h3>Массажи</h3>
          <div className="massage-links">
            {priceCategories.slice(3).map((category) => (
              <PriceButton category={category} key={category.slug}>
                {category.title}
                <span aria-hidden="true">↗</span>
              </PriceButton>
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
