export default function AboutSection() {
  return (
    <section className="intro reveal brand-background" id="about">
      <img className="background-brand-mark" src={(process.env.NEXT_PUBLIC_BASE_PATH || '') + '/dot-logo-mark.svg'} alt="" aria-hidden="true" />
      <p className="eyebrow">О центре</p>
      <h2>
        Восстановление
        <br />
        начинается <em>с опоры</em>
      </h2>
      <p>
        Клинику «Точка опоры» основали специалисты по физической реабилитации.
        Мы знаем, как боль и ограничения движения меняют привычную жизнь.
        Поэтому начинаем с вашей истории и того, что важно именно вам: снова
        ходить, работать, тренироваться или справляться с повседневными делами.
      </p>
    </section>
  );
}
