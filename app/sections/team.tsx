import { Heading, Photo } from './shared';
import { Plus } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { groups } from '../site-content';
export default function TeamSection() {
  return (
    <section className="section panel reveal" id="team">
      <Heading
        label="Специалисты"
        title={
          <>
            Наша команда.
            <br />
            <em>Ваша опора.</em>
          </>
        }
      >
        <p>
          Состав команды зависит от вашей задачи. Специалисты разных направлений
          работают в рамках общей программы и помогают закрепить достигнутый
          результат.
        </p>
      </Heading>
      <Tabs defaultValue="Специалисты ЛФК">
        <TabsList className="team-tabs" aria-label="Специальности команды">
          {groups.map(([name]) => (
            <TabsTrigger key={name} value={name}>
              {name}
            </TabsTrigger>
          ))}
        </TabsList>
        {groups.map(([name, roles]) => (
          <TabsContent value={name} key={name}>
            <div className="team-grid">
              {roles.map((role) => (
                <article className="person" key={role}>
                  <Photo label="Фото специалиста" />
                  <p className="person-role">{role}</p>
                  <h3>Имя и фамилия</h3>
                  <p className="muted">Данные специалиста будут добавлены</p>
                  <details>
                    <summary>
                      О специалисте <Plus size={16} />
                    </summary>
                    <p>
                      Здесь появятся стаж, специализация, образование, повышение
                      квалификации, рассказ специалиста о своём подходе и
                      информация о том, с кем он не работает.
                    </p>
                  </details>
                </article>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
