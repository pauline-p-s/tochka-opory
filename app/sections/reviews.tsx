import { Heading } from './shared';
import { reviews } from '../review-content';

export default function ReviewsSection() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

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
      <div className="review-grid">
        {reviews.map((review) => (
          <article
            className={
              'review-card' +
              (review.photos.length ? ' review-with-photos' : '')
            }
            key={review.id}
            aria-labelledby={'review-' + review.id}
          >
            {review.photos.length > 0 && (
              <div
                className={
                  'review-photos' +
                  (review.photos.length > 1 ? ' review-photo-series' : '')
                }
              >
                {review.photos.map((photo) => (
                  <img
                    key={photo.src}
                    src={basePath + '/reviews/' + photo.src}
                    alt={photo.alt}
                    width={960}
                    height={1280}
                    loading="lazy"
                    decoding="async"
                  />
                ))}
              </div>
            )}
            <div className="review-body">
              <div className="review-author">
                <h3 id={'review-' + review.id}>{review.name}</h3>
                {review.age && <span>{review.age}</span>}
              </div>
              <blockquote>
                {review.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </blockquote>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
