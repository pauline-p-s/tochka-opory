import { Heading } from './shared';
import { ContactButton } from '../contact-dialog';
import { ArrowUpRight } from 'lucide-react';
import { needs } from '../site-content';
export default function NeedsSection() {
  return (
    <section className="section panel reveal" id="for-whom">
      <Heading
        label="Начните с себя"
        title={
          <>
            Что вас
            <br />
            <em>беспокоит?</em>
          </>
        }
      >
        <p>
          Вам не нужно знать, какой специалист нужен. Начните с того, что мешает
          двигаться свободно.
        </p>
      </Heading>
      <div className="needs-grid">
        {needs.map(([title, desc], i) => (
          <ContactButton className={'need-card need-' + i} key={title}>
            <span className="card-top">
              0{i + 1}
              <ArrowUpRight size={22} />
            </span>
            <div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          </ContactButton>
        ))}
      </div>
    </section>
  );
}
