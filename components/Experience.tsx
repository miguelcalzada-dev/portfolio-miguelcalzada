import { JOB, EXPERIENCE_LEAD, EDUCATION } from "./site-data";

const FORMATION_DETAIL: Record<string, string> = {
  "Especialización en IA y Big Data":
    "Machine Learning, Deep Learning, NLP y Big Data Analytics.",
  "Técnico Superior en DAM":
    "Java, Android, diseño de bases de datos y programación orientada a objetos.",
};

export default function Experience() {
  return (
    <section id="experiencia" className="section">
      <div className="section__head" data-reveal>
        <h2>Experiencia</h2>
        <p>Un puesto, en producción, con foco en backend, cloud e IA.</p>
      </div>

      <ol className="tl">
        <li className="tl__item" data-reveal>
          <span className="tl__node" aria-hidden="true" />
          <p className="tl__year">2024 – presente</p>
          <div className="tl__body">
            <h3>
              {JOB.role} · {JOB.company}
            </h3>
            <p className="tl__meta">{JOB.location}</p>
            <p className="tl__lead">{EXPERIENCE_LEAD}</p>
          </div>
        </li>

        {EDUCATION.map((e, i) => (
          <li
            className="tl__item"
            key={e.label}
            data-reveal
            style={{ transitionDelay: `${(i + 1) * 70}ms` }}
          >
            <span className="tl__node tl__node--edu" aria-hidden="true" />
            <p className="tl__year">{e.value}</p>
            <div className="tl__body">
              <h3>{e.label}</h3>
              <p className="tl__lead">
                {FORMATION_DETAIL[e.label] ?? "Formación técnica."}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
