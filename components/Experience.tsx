import {
  FACTS,
  EXPERIENCE_LEAD,
  RESPONSIBILITIES,
  EDUCATION,
} from "./site-data";

export default function Experience() {
  return (
    <section id="experiencia" className="section">
      <div className="section__head" data-reveal>
        <h2>Experiencia</h2>
        <p>Un puesto, en producción, con foco en backend, cloud e IA.</p>
      </div>

      <div className="exp__row">
        <dl className="exp__facts" data-reveal>
          {FACTS.map((f) => (
            <div className="exp__fact" key={f.label}>
              <dt>{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>
        <p
          className="exp__lead"
          data-reveal
          style={{ transitionDelay: "80ms" }}
        >
          {EXPERIENCE_LEAD}
        </p>
      </div>

      <div className="exp__record">
        <p className="exp__record-title" data-reveal>
          Experiencia
        </p>
        <ul className="exp__list" data-reveal>
          {RESPONSIBILITIES.map((r) => (
            <li key={r.label}>
              <span>{r.label}</span>
              <span>{r.value}</span>
            </li>
          ))}
        </ul>
        <div data-reveal>
          <p className="exp__record-title" style={{ marginBottom: "0.9rem" }}>
            Formación
          </p>
          <ul className="exp__list">
            {EDUCATION.map((e) => (
              <li key={e.label}>
                <span>{e.label}</span>
                <span>{e.value}</span>
              </li>
            ))}
          </ul>
          <p className="exp__note">
            Software Developer en <strong>Analisis Survey Unit</strong>, Madrid,
            desde marzo de 2024.
          </p>
        </div>
      </div>
    </section>
  );
}
