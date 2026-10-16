"use client";

import { useState } from "react";
import { STACK } from "./site-data";

export default function Stack() {
  const [active, setActive] = useState(0);
  const current = STACK[active];

  function move(next: number) {
    const n = (next + STACK.length) % STACK.length;
    setActive(n);
    document.getElementById(`stack-tab-${n}`)?.focus();
  }

  return (
    <section id="stack" className="section stack">
      <div className="section__head" data-reveal>
        <h2>Stack técnico</h2>
        <p>
          Del modelo de datos al despliegue: el ciclo completo, con foco en IA.
          Elige una capa.
        </p>
      </div>

      <div className="stacktabs">
        <div
          className="stacktabs__tabs"
          role="tablist"
          aria-label="Capas del stack técnico"
        >
          {STACK.map((g, i) => (
            <button
              key={g.group}
              type="button"
              role="tab"
              id={`stack-tab-${i}`}
              aria-selected={active === i}
              aria-controls="stack-panel"
              tabIndex={active === i ? 0 : -1}
              className={`stacktabs__tab${active === i ? " is-active" : ""}`}
              onClick={() => setActive(i)}
              onKeyDown={(e) => {
                if (e.key === "ArrowRight") {
                  e.preventDefault();
                  move(active + 1);
                } else if (e.key === "ArrowLeft") {
                  e.preventDefault();
                  move(active - 1);
                } else if (e.key === "Home") {
                  e.preventDefault();
                  move(0);
                } else if (e.key === "End") {
                  e.preventDefault();
                  move(STACK.length - 1);
                }
              }}
            >
              {g.group}
            </button>
          ))}
        </div>

        <div
          className="stacktabs__panel"
          id="stack-panel"
          role="tabpanel"
          aria-labelledby={`stack-tab-${active}`}
          tabIndex={0}
          key={active}
        >
          <ul className="stacktabs__tools">
            {current.items.map((t, i) => (
              <li key={t} style={{ "--i": i } as React.CSSProperties}>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
