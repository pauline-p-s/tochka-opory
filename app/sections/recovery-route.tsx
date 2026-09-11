import { Heading } from './shared';
import { ContactButton } from '../contact-dialog';
import { ArrowUpRight } from 'lucide-react';
import { steps } from '../site-content';
export default function RouteSection() {
  return (
    <section className="section route-section panel reveal" id="route">
      <Heading
        label="Ваш маршрут восстановления"
        title={
          <>
            6 шагов к вашей
            <br />
            жизни без боли.
          </>
        }
      >
        <p>
          Ваш маршрут начинается с того, что мешает вам жить привычной жизнью.
          Состав и последовательность методов подбираем индивидуально. По мере
          восстановления оцениваем изменения и адаптируем программу.
        </p>
      </Heading>
      <div className="route-grid">
        {steps.map(([title, desc], i) => (
          <article key={title}>
            <span className="step-number">0{i + 1}</span>
            <h3>{title}</h3>
            <p>{desc}</p>
          </article>
        ))}
      </div>
      <ContactButton className="button light">
        Начать с консультации <ArrowUpRight size={18} />
      </ContactButton>
    </section>
  );
}
