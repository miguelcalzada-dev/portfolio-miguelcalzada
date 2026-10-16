"use client";

import { useState } from "react";
import { PROJECTS } from "./site-data";

export default function Work() {
  const [hover, setHover] = useState<number | null>(null);

  return (
    <section id="proyectos" className="section work">
      <div className="section__head" data-reveal>
        <h2>Proyectos</h2>
        <p>
          Siete proyectos, cuatro desplegados y en producción. Pasa el cursor
          por el índice para ver cada interfaz real.
        </p>
      </div>

      <div className={`work__ledger${hover !== null ? " is-dimmed" : ""}`}>
        {PROJECTS.map((p, i) => {
          const external = !p.url;
          const href = p.url ?? p.repo;
          return (
            <a
              key={p.name}
              className={`work__row${hover === i ? " is-active" : ""}`}
              href={href}
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
              onFocus={() => setHover(i)}
              onBlur={() => setHover(null)}
            >
              {p.media && (
                <img
                  className="work__thumb"
                  src={p.media}
                  alt={`Interfaz de ${p.name}`}
                  width={1600}
                  height={1000}
                  loading="lazy"
                />
              )}
              <span
                className="work__row-in"
                data-reveal
                style={{ transitionDelay: `${i * 45}ms` }}
              >
                <span className="work__name">{p.name}</span>
                <span className="work__meta">
                  {p.kind} · {p.year}
                </span>
              </span>
            </a>
          );
        })}

        <div className="work__preview" aria-hidden="true">
          {PROJECTS.map((p, i) =>
            p.media ? (
              <img
                key={p.name}
                src={p.media}
                alt=""
                width={1600}
                height={1000}
                className={hover === i ? "is-on" : ""}
                loading="lazy"
              />
            ) : null,
          )}
        </div>
      </div>
    </section>
  );
}
