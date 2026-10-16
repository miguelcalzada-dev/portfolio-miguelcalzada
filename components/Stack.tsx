import { STACK } from "./site-data";
import LineageGraph from "./LineageGraph";

export default function Stack() {
  return (
    <section id="stack" className="section stack">
      <div className="section__head" data-reveal>
        <h2>Stack técnico</h2>
        <p>
          Del modelo de datos al despliegue: el ciclo completo, con foco en IA.
        </p>
      </div>

      <div className="stack__grid">
        <figure className="stack__visual" data-reveal>
          <LineageGraph />
          <figcaption>
            El linaje de datos: qué depende de qué y qué se rompe si cambias una
            tabla. Es lo que analiza ImpactDB.
          </figcaption>
        </figure>

        <div className="stack__groups">
          {STACK.map((g, i) => (
            <div
              className="stack__group"
              key={g.group}
              data-reveal
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <h3>{g.group}</h3>
              <p>{g.items.join(" · ")}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
