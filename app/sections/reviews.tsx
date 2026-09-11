import { Heading, Photo } from './shared';
export default function ReviewsSection() {
  return (
    <section className="section panel reveal" id="reviews">
      <Heading
        label="Истории и отзывы"
        title={
          <>
            За каждым движением —<br />
            <em>своя история.</em>
          </>
        }
      />
      <div className="review-grid">
        <Photo label="Фото / видео · история пациента" />
        <div className="review-placeholder">
          <span className="quote-mark">“</span>
          <h3>
            Здесь будет история
            <br />
            восстановления пациента
          </h3>
          <p>
            Что беспокоило → как проходила работа → какой результат достигнут.
          </p>
          <span className="muted">
            Добавим после получения подтверждённого отзыва.
          </span>
        </div>
      </div>
      <div className="review-short">
        {[1, 2].map((i) => (
          <div key={i}>
            Место для отзыва пациента <span>0{i}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
