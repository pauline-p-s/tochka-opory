import { Heading } from './shared';
import { directions } from '../site-content';
export default function DirectionsSection() {
  return (
    <section className="section panel reveal" id="directions">
      <Heading
        label="Направления"
        title={
          <>
            Помогаем вернуть
            <br />
            <em>свободу движения.</em>
          </>
        }
      />
      <div className="directions">
        {directions.map(([title, desc], i) => (
          <article className="direction-row" key={title}>
            <span className="direction-number">0{i + 1}</span>
            <h3>{title}</h3>
            <p>{desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
