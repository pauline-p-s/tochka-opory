import { Heading } from './shared';
import { ContactButton } from '../contact-dialog';
export default function ContactsSection() {
  return (
    <section className="section panel reveal" id="contacts">
      <Heading
        label="Контакты"
        title={
          <>
            Мы <em>рядом.</em>
          </>
        }
      />
      <div className="contacts-grid">
        <div className="map-placeholder">
          <span className="map-pin">
            <span />
          </span>
          <p>Здесь будет карта проезда</p>
        </div>
        <div className="contact-details">
          <div className="contact-city">
            <h3>Москва</h3>
            <p>Адрес и удобный маршрут добавим позже.</p>
          </div>
          <div>
            <span>Адрес</span>
            <p>Москва · адрес уточняется</p>
          </div>
          <div>
            <span>Телефон и email</span>
            <p>Контакты будут добавлены</p>
          </div>
          <div>
            <span>Режим работы и парковка</span>
            <p>Информация уточняется</p>
          </div>
          <div className="contact-directions">
            <span>Схема проезда</span>
            <p>
              От метро «Полежаевская», ТЦ «Авиапарк» и метро «Сокол». Схемы
              добавим после подтверждения адреса.
            </p>
          </div>
          <ContactButton className="text-link">Задать вопрос ↗</ContactButton>
        </div>
      </div>
    </section>
  );
}
