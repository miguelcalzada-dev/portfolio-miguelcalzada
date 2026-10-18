import { STACK } from "./site-data";

export default function Stack() {
  return (
    <section id="stack" className="stack">
      {STACK.map((g, i) => (
        <article
          className={`chapter${i === 0 ? " chapter--feature" : ""}`}
          key={g.group}
          data-reveal
          style={{ transitionDelay: `${i * 60}ms` }}
        >
          <h3 className="chapter__name">{g.group}</h3>
          <ul className="chapter__tools">
            {g.items.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}
