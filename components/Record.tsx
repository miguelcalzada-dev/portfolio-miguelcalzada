import { EDUCATION, EXPERIENCE_LEAD, JOB, JOB_TAGS, SITE } from "./site-data";
import Reveal from "./Reveal";

export default function Record() {
  return (
    <section id="registro" className="section record" aria-labelledby="record-title">
      <div className="shell">
        <Reveal>
          <header className="section-head">
            <h2 id="record-title">Registro</h2>
            <p>Experiencia, formación e idiomas. El recorrido detrás del trabajo.</p>
          </header>
        </Reveal>

        <div className="record__layout">
          <Reveal className="record__aside">
            <h3>De la formación al sistema en producción.</h3>
            <p>
              Trabajo en Madrid, en equipos que construyen software para datos
              reales. La formación sigue abierta: IA, Big Data y arquitectura.
            </p>
          </Reveal>

          <div className="record__list">
            <Reveal>
              <article className="record__entry">
                <p className="mono record__period">{JOB.period}</p>
                <h3>
                  {JOB.role} <span>· {JOB.company}</span>
                </h3>
                <p className="mono record__place">{JOB.location}</p>
                <p className="record__lead">{EXPERIENCE_LEAD}</p>
                <ul className="record__tags" aria-label="Tecnologías del puesto">
                  {JOB_TAGS.map((tag) => (
                    <li key={tag} className="mono">
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>

            {EDUCATION.map((item, index) => (
              <Reveal key={item.label} delay={(index + 1) * 0.04}>
                <article className="record__entry record__entry--small">
                  <p className="mono record__period">{item.value}</p>
                  <h3>{item.label}</h3>
                  <p>{item.detail}</p>
                </article>
              </Reveal>
            ))}

            <Reveal delay={0.12}>
              <div className="record__meta">
                <div>
                  <p className="mono">Idiomas</p>
                  <p>{SITE.languages}</p>
                </div>
                <div>
                  <p className="mono">Disponibilidad</p>
                  <p>{SITE.availability}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
