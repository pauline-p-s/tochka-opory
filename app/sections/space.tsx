import { Heading, Photo } from './shared';
export default function SpaceSection() {
  return (
    <section className="section panel reveal" id="space">
      <Heading
        label="Пространство центра"
        title={
          <>
            Всё для восстановления.
            <br />
            <em>В одном пространстве.</em>
          </>
        }
      />
      <div className="space-grid">
        <Photo label="Фото · пространство центра" className="space-large" />
        <div className="space-stat">
          <b>03</b>
          <h3>спортивных зала</h3>
          <p>Для разных тренировок и групп пациентов.</p>
        </div>
        <div className="space-stat green-surface">
          <b>03</b>
          <h3>массажных кабинета</h3>
          <p>
            Классический, спортивный, лечебный, миофасциальный, расслабляющий и
            антицеллюлитный массаж. Также здесь проводят мануальную терапию,
            кинезиотерапию и остеопатию.
          </p>
        </div>
        <Photo label="Фото · оборудование" />
        <div className="space-small">
          <h3>Кабинет физиотерапии</h3>
          <p>
            Оборудование для ударно-волновой терапии, магнитотерапии, электро- и
            фонофореза.
          </p>
        </div>
        <div className="space-small">
          <h3>Процедурный кабинет</h3>
          <p>Поддерживающие процедуры и тейпирование.</p>
        </div>
      </div>
    </section>
  );
}
