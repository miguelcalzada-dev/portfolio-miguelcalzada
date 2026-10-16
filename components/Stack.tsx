import { STACK } from "./site-data";

export default function Stack() {
  return (
    <section id="stack" className="stackv2">
      <header className="stackv2__head" data-reveal>
        <h2>Stack técnico</h2>
        <p>
          Del modelo de datos al despliegue: el ciclo completo, con foco en
          inteligencia artificial.
        </p>
      </header>

      <div className="stackv2__fields">
        {STACK.map((g, i) => (
          <article
            className={`stackv2__field${i === 0 ? " is-feature" : ""}`}
            key={g.group}
            data-reveal
          >
            <h3 className="stackv2__name">{g.group}</h3>
            <ul className="stackv2__tools">
              {g.items.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
