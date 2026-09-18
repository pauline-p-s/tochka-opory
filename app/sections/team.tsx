import { Heading, Photo } from './shared';
import { Plus } from 'lucide-react';
import { specialists } from '../team-content';
export default function TeamSection() {
  return (
    <section className="section panel reveal" id="team">
      <Heading
        label="Специалисты"
        title={
          <>
            Наша команда
            <br />
            <em>Ваша опора</em>
          </>
        }
      >
        <p>
          Специалисты работают в рамках общей программы и помогают закрепить
          достигнутый результат
        </p>
      </Heading>
      <div className="team-grid">
        {specialists
          .filter((person) => person.published)
          .map((person) => (
            <article className="person" key={person.name}>
              <Photo label={'Фото · ' + person.name} />
              <div className="person-body">
                <p className="person-role">{person.role}</p>
                <h3>{person.name}</h3>
                <p className="person-experience">Стаж {person.experience}</p>
                <p>{person.specialty}</p>
                <details>
                  <summary>
                    О специалисте <Plus size={16} />
                  </summary>
                  <h4>Образование и повышение квалификации</h4>
                  <ul>
                    {person.education.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p className="muted">
                    Сканы дипломов и сертификатов будут добавлены.
                  </p>
                </details>
              </div>
            </article>
          ))}
      </div>
    </section>
  );
}
