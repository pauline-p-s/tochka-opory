import { Heading } from './shared';
export default function SpaceSection() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
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
        <img className="space-large space-photo" src={basePath + "/space/massage.jpg"} alt="Массажный кабинет центра" width={1440} height={1920} loading="lazy" />
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
        <figure className="space-small">
          <img className="space-photo" src={basePath + "/space/sauna.jpg"} alt="Сауна центра" width={1440} height={1920} loading="lazy" />
          <figcaption>Сауна</figcaption>
        </figure>
      </div>
      <div className="space-gym">
        <h3>Тренажерный зал</h3>
        <div className="space-gym-photos">
          <img className="space-photo" src={basePath + "/space/gym.jpg"} alt="Тренажерный зал с силовым оборудованием" width={1440} height={1920} loading="lazy" />
          <img className="space-photo" src={basePath + "/space/gym-equipment.jpg"} alt="Блочные тренажеры в зале центра" width={1440} height={1920} loading="lazy" />
        </div>
      </div>
      <div className="space-equipment">
        <h3>Используем сертифицированное оборудование</h3>
        <div className="space-equipment-logos" role="img" aria-label="Логотипы производителей оборудования центра">
          <img src={basePath + '/space/equipment-logos.svg'} alt="" width={3504} height={203} loading="lazy" />
        </div>
      </div>
    </section>
  );
}
