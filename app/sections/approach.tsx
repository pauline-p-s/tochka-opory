import { Heading } from './shared';
import { advantages } from '../site-content';
export default function ApproachSection() {
  return (
    <section className="section panel usp-section reveal" id="approach">
      <Heading
        label="Почему Точка опоры"
        title={
          <>
            Полный путь восстановления
            <br />
            <em>
              От определения причины до закрепления результата — в одном
              специализированном центре
            </em>
          </>
        }
      />
      <div className="usp-grid">
        {advantages.map(([number, title, description]) => (
          <article className="usp-card" key={number}>
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
