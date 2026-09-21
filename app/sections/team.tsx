import { Heading } from './shared';
import { ArrowUpRight, FileText, Plus } from 'lucide-react';
import { specialists, specialistDocumentUrl } from '../team-content';
export default function TeamSection() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
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
            <article
              className={
                'person' + (person.photo ? '' : ' person-without-photo')
              }
              key={person.name}
            >
              {person.photo && (
                <img
                  className="person-photo"
                  src={basePath + '/team/' + person.photo.src}
                  alt={person.name}
                  width={person.photo.width}
                  height={person.photo.height}
                  loading="lazy"
                  decoding="async"
                />
              )}
              <div className="person-body">
                <p className="person-role">{person.role}</p>
                <h3>{person.name}</h3>
                {person.experience && (
                  <p className="person-experience">Стаж {person.experience}</p>
                )}
                <p>{person.specialty}</p>
                <details>
                  <summary>
                    О специалисте <Plus size={16} aria-hidden="true" />
                  </summary>
                  <h4>Образование и повышение квалификации</h4>
                  <ul>
                    {person.education.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  {person.achievements && (
                    <div className="person-achievements">
                      <h4>Спортивные достижения</h4>
                      <ul>
                        {person.achievements.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </details>
                <details className="person-documents">
                  <summary>
                    <span>
                      Дипломы и сертификаты{' '}
                      <span className="person-document-count">
                        {person.documents.length}
                      </span>
                    </span>
                    <Plus size={16} aria-hidden="true" />
                  </summary>
                  <p className="person-document-note">
                    Сканы на Яндекс Диске · откроются в новой вкладке
                  </p>
                  <ul className="person-document-list">
                    {person.documents.map((document) => (
                      <li key={document.file}>
                        <a
                          href={specialistDocumentUrl(document.file)}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FileText size={18} aria-hidden="true" />
                          <span>{document.label}</span>
                          <ArrowUpRight size={16} aria-hidden="true" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </details>
              </div>
            </article>
          ))}
      </div>
    </section>
  );
}
