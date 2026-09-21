import { Heading } from './shared';
import { reviews } from '../review-content';
import ReviewPhoto from '../review-photo';

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
            className="review-card"
            key={review.id}
            aria-labelledby={'review-' + review.id}
          >
            <div className="review-body">
              <div className="review-author">
                <h3 id={'review-' + review.id}>{review.name}</h3>
                {review.age && <span>{review.age}</span>}
              </div>
              <details className="review-text">
                <summary>
                  <span className="review-excerpt">
                    {review.paragraphs.join(' ')}
                  </span>
                  <span className="review-read-more">
                    <span className="review-read-label">Читать полностью</span>
                    <span className="review-close-label">Свернуть</span>
                    <span className="review-toggle-icon" aria-hidden="true">
                      +
                    </span>
                  </span>
                </summary>
                <blockquote>
                  {review.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </blockquote>
              </details>
            </div>
            {review.photos.length > 0 && (
              <div className="review-photos">
                {review.photos.map((photo) => (
                  <ReviewPhoto
                    key={photo.src}
                    src={basePath + '/reviews/' + photo.src}
                    alt={photo.alt}
                  />
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
