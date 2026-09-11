import { Heading } from './shared';
import { ContactButton } from '../contact-dialog';
export default function PricesSection() {
  return (
    <section className="section panel reveal" id="prices">
      <Heading
        label="Стоимость"
        title={
          <>
            Начните
            <br />
            <em>с консультации.</em>
          </>
        }
      >
        <p>
          Персональная программа рассчитывается после знакомства с вашей
          задачей.
        </p>
      </Heading>
      <div className="prices-grid">
        <article className="price-card green-surface">
          <span className="eyebrow">Первый шаг</span>
          <h3>Первичный приём</h3>
          <p>Консультация специалиста и определение дальнейшего маршрута.</p>
          <strong>Стоимость уточняется</strong>
          <ContactButton className="button light">
            Узнать стоимость ↗
          </ContactButton>
        </article>
        <article className="price-card">
          <span className="eyebrow">Ваш маршрут</span>
          <h3>Индивидуальная программа</h3>
          <p>
            Состав, длительность и стоимость зависят от состояния и целей
            восстановления.
          </p>
          <strong>После консультации</strong>
        </article>
        <article className="price-card">
          <span className="eyebrow">Регулярная работа</span>
          <h3>Абонементы</h3>
          <p>Для регулярных программ восстановления и поддержки результата.</p>
          <strong>Подберём вместе</strong>
        </article>
      </div>
      <div className="certificate-row">
        <div>
          <h3>Сертификаты</h3>
          <p>Номиналы и условия использования уточняются.</p>
        </div>
        <ContactButton className="text-link">Узнать подробнее ↗</ContactButton>
      </div>
    </section>
  );
}
