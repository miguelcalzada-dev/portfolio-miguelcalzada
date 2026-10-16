import { STACK } from "./site-data";

export default function Stack() {
  return (
    <section id="stack" className="section">
      <div className="stack__list">
        <h2 className="stack__kicker" data-reveal>
          Stack técnico
        </h2>
        {STACK.map((g, i) => (
          <div
            className="stack__group"
            key={g.group}
            data-reveal
            style={{ transitionDelay: `${(i + 1) * 70}ms` }}
          >
            <h3>{g.group}</h3>
            <p>{g.items.join(" · ")}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
