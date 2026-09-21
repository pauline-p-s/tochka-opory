import Brand from '../brand';
import DocumentLinks from '../document-links';
export default function FooterSection() {
  return (
    <footer className="panel">
      <div className="footer-top">
        <Brand full />
        <p>
          Свобода движения
          <br />с опорой на будущее
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
        <div className="documents" id="documents">
          <b>Документы</b>
          <DocumentLinks />
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Точка опоры</span>
        <span>Центр реабилитации позвоночника и суставов</span>
      </div>
    </footer>
  );
}
