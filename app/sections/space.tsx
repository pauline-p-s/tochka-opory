import { Heading, Photo } from './shared';
export default function SpaceSection() {
  return (
    <section className="section panel reveal" id="space">
      <Heading
        label="Пространство центра"
        title={
          <>
            Всё для движения
            <br />
            <em>В одном пространстве</em>
          </>
        }
      />
      <div className="space-grid">
        <Photo label="Фото · пространство центра" className="space-large" />
        <div className="space-stat">
          <b>3</b>
          <h3>спортивных зала</h3>
        </div>
        <div className="space-stat green-surface">
          <b>3</b>
          <h3>массажных кабинета</h3>
          <p>
            Классический, спортивный, миофасциальный, расслабляющий,
            лимфодренажный массаж и метамассаж.
          </p>
        </div>
        <Photo label="Фото · оборудование" />
        <div className="space-small">
          <h3>Сауна</h3>
        </div>
      </div>
    </section>
  );
}
