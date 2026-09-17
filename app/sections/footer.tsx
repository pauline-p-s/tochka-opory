import Brand from '../brand';
import { documents } from '../site-content';
export default function FooterSection() {
  return (
    <footer className="panel">
      <div className="footer-top">
        <Brand full />
        <p>
          Свобода движения
          <br />с опорой на будущее.
        </p>
        <a className="top-link" href="#" aria-label="Наверх">
          ↑
        </a>
      </div>
      <div className="footer-links">
        <div>
          <b>О центре</b>
          <a href="#about">О центре</a>
          <a href="#for-whom">Чем мы можем помочь</a>
          <a href="#team">Специалисты</a>
          <a href="#space">Пространство</a>
        </div>
        <div>
          <b>Информация</b>
          <a href="#prices">Стоимость</a>
          <a href="#reviews">Отзывы</a>
          <a href="#faq">Вопросы и ответы</a>
          <a href="#contacts">Контакты</a>
        </div>
        <div className="documents">
          <b>Документы</b>
          <ul>
            {documents.map((doc) => (
              <li key={doc}>
                <a href="#faq">{doc}</a>
              </li>
            ))}
          </ul>
          <small>Документы будут добавлены.</small>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Точка опоры</span>
        <span>Центр реабилитации позвоночника и суставов</span>
      </div>
    </footer>
  );
}
