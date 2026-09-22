import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import { questions } from '../site-content';
import DocumentLinks from '../document-links';
export default function FaqSection() {
  return (
    <section className="section panel faq-section reveal brand-background" id="faq">
      <img className="background-brand-mark" src={(process.env.NEXT_PUBLIC_BASE_PATH || '') + '/dot-logo-mark.svg'} alt="" aria-hidden="true" loading="lazy" />
      <div>
        <p className="eyebrow">Вопросы и ответы</p>
        <h2>
          Давайте
          <br />
          <em>разберёмся</em>
        </h2>
        <p>Самое важное перед первым обращением</p>
      </div>
      <Accordion defaultValue={['0']}>
        {questions.map(([q, a, documentIds], i) => (
          <AccordionItem value={String(i)} key={q}>
            <AccordionTrigger>{q}</AccordionTrigger>
            <AccordionContent>
              <p>{a}</p>
              {documentIds && <DocumentLinks ids={documentIds} />}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
