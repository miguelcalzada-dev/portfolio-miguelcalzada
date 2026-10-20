import { PRACTICE } from "./site-data";
import Reveal from "./Reveal";

export default function Practice() {
  return (
    <section id="practica" className="section practice" aria-labelledby="practice-title">
      <div className="shell">
        <Reveal>
          <header className="section-head">
            <h2 id="practice-title">Práctica</h2>
            <p>
              Interfaces, servicios, datos e inteligencia. El trabajo empieza en
              el problema y termina en algo que se puede desplegar y mantener.
            </p>
          </header>
        </Reveal>

        <div className="practice__layout">
          <Reveal className="practice__intro">
            <h3>Construyo el sistema completo.</h3>
            <p>
              No separo la interfaz del servicio ni la IA de la infraestructura.
              Cada capa existe para que el conjunto funcione.
            </p>
          </Reveal>

          <div className="practice__list">
            {PRACTICE.map((item, index) => (
              <Reveal key={item.label} delay={index * 0.04}>
                <article className="practice__item">
                  <span className="mono practice__label">{item.label}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.detail}</p>
                    <ul className="practice__tools" aria-label={`Tecnologías de ${item.label}`}>
                      {item.tools.map((tool) => (
                        <li key={tool} className="mono">
                          {tool}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
