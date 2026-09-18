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
            <p>Контакты будут добавлены</p>
          </div>
          <div>
            <span>Режим работы</span>
            <p>
              Понедельник — воскресенье
              <br />
              9:00–21:00
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
            <p>
              От метро «Полежаевская», ТЦ «Авиапарк» и метро «Сокол». Подробные
              схемы и время в пути добавим после получения материалов.
            </p>
          </div>
          <ContactButton className="text-link">Задать вопрос ↗</ContactButton>
        </div>
      </div>
    </section>
  );
}
