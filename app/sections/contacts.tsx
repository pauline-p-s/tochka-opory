import MessengerLinks from '../messenger-links';
import { Heading } from './shared';
import { ContactButton } from '../contact-dialog';
export default function ContactsSection() {
  return (
    <section className="section panel reveal" id="contacts">
      <Heading
        label="Контакты"
        title={
          <>
            Мы <em>рядом</em>
          </>
        }
      />
      <div className="contacts-grid">
        <div className="contact-map">
          <iframe
            title="Точка опоры — Новопесчаная улица, 20/10к2 на Яндекс Картах"
            src="https://yandex.ru/map-widget/v1/?ll=37.509828%2C55.793886&z=17&pt=37.509828%2C55.793886%2Cpm2gnm"
            loading="lazy"
            allowFullScreen
          />
          <a
            href="https://yandex.ru/maps/?pt=37.509828%2C55.793886&z=17&l=map"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            Открыть в Яндекс Картах ↗
          </a>
        </div>
        <div className="contact-details">
          <div className="contact-city">
            <h3>Москва</h3>
          </div>
          <div>
            <span>Адрес</span>
            <p>Новопесчаная улица, дом 20/10к2</p>
          </div>
          <div>
            <span>Телефон и email</span>
            <p>
              <a href="tel:+74997280383">+7 499 728-03-83</a>
              <br />
              <a href="mailto:receptiontochkaopori@yandex.ru">receptiontochkaopori@yandex.ru</a>
            </p>
          </div>
          <div>
            <span>Мессенджеры</span>
            <MessengerLinks />
          </div>
          <div>
            <span>Режим работы</span>
            <p>
              Понедельник — воскресенье
              <br />
              9:00–22:00
            </p>
          </div>
          <div>
            <span>Парковка</span>
            <p>
              Городская парковка — от 40 до 80 ₽ в час. При наличии мест во
              дворе дома возможна бесплатная парковка.
            </p>
          </div>
          <div className="contact-directions">
            <span>Схемы проезда</span>
            <div className="contact-routes">
              <p><strong>Метро Сокол</strong><br />Выход 6, автобусы 403, 306, с372, 5-я остановка «Песчаная площадь», в пути 10 минут.</p>
              <p><strong>Метро Полежаевская</strong><br />Выход 4, автобусы 403, 322, 5-я остановка «Песчаная площадь», в пути 5 минут.</p>
              <p><strong>МЦК Зорге</strong><br />Выход 2, пешком 10 минут.</p>
              <p><strong>Метро ЦСКА</strong><br />Выход 1, автобус 318, 4-я остановка «Песчаная площадь», в пути 15 минут.</p>
            </div>
          </div>
          <ContactButton className="text-link">Задать вопрос ↗</ContactButton>
        </div>
      </div>
    </section>
  );
}
