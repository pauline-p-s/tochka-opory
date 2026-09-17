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
            Чем мы можем
            <br />
            <em>вам помочь?</em>
          </>
        }
      />
      <div className="needs-grid">
        {needs.map(([title, desc], i) => (
          <ContactButton
            className={
              'need-card' +
              ([
                'Сидячий образ жизни',
                'После травмы',
                'После операции',
              ].includes(title)
                ? ' need-accent'
                : '')
            }
            key={title}
          >
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
