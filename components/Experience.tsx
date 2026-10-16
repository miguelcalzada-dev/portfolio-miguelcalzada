import { JOB, EXPERIENCE_LEAD, RESPONSIBILITIES, EDUCATION } from "./site-data";

export default function Experience() {
  return (
    <section id="experiencia" className="section">
      <div className="section__head" data-reveal>
        <h2>Experiencia</h2>
        <p>Un puesto, en producción, con foco en backend, cloud e IA.</p>
      </div>

      <div className="exp">
        <div className="exp__job" data-reveal>
          <h3>
            {JOB.role} · {JOB.company}
          </h3>
          <p className="exp__period">
            {JOB.location} · {JOB.period}
          </p>
          <p className="exp__lead">{EXPERIENCE_LEAD}</p>
        </div>

        <div className="exp__block" data-reveal>
          <h3 className="exp__label">Responsabilidades</h3>
          <ul className="exp__list">
            {RESPONSIBILITIES.map((r) => (
              <li key={r.label}>
                <span>{r.label}</span>
                <span>{r.value}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="exp__block" data-reveal>
          <h3 className="exp__label">Formación</h3>
          <ul className="exp__list">
            {EDUCATION.map((e) => (
              <li key={e.label}>
                <span>{e.label}</span>
                <span>{e.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
