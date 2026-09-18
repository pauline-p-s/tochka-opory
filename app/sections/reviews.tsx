import { Heading } from './shared';
export default function ReviewsSection() {
  return (
    <section className="section panel reveal" id="reviews">
      <Heading
        label="Истории и отзывы"
        title={
          <>
            За каждым движением —<br />
            <em>своя история</em>
          </>
        }
      />
    </section>
  );
}
