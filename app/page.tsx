import DesktopMotion from './desktop-motion';
import ContactDialog, { ContactButton } from './contact-dialog';
import Content from './content';
import SiteHeader from './site-header';
export default function Home() {
  return (
    <ContactDialog>
      <SiteHeader />
      <main id="top">
        <section className="hero panel">
          <div className="hero-copy">
            <p className="eyebrow">
              Центр реабилитации позвоночника и суставов · Москва
            </p>
            <h1>
              Возвращаем
              <br />
              свободу
              <br />
              <em>движения.</em>
            </h1>
            <p className="lead">
              После травм, операций, при боли и ограничении подвижности.
              <span className="hero-lead-line">Найдём вашу точку опоры.</span>
              <span className="hero-lead-line">
                Поможем сохранить вашу спортивную форму.
              </span>
            </p>
            <ContactButton className="button green">
              Записаться на консультацию <span>↗</span>
            </ContactButton>
          </div>
          <div className="hero-media placeholder">
            <span className="photo-label">Фото · человек в движении</span>
            <div className="orbit" aria-hidden="true" />
            <div className="media-note">
              Новая точка
              <br />
              вашей опоры.<span>01 / Движение начинается здесь</span>
            </div>
          </div>
        </section>
        <Content />
        <DesktopMotion />
      </main>
    </ContactDialog>
  );
}
