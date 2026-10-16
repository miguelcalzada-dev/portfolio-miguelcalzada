"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { PROJECTS, FEATURED } from "./site-data";

export default function Work() {
  const [hover, setHover] = useState<number | null>(null);
  const [preview, setPreview] = useState(1);
  const featRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: featRef,
    offset: ["start end", "end start"],
  });
  const fScale = useTransform(scrollYProgress, [0, 1], [1.14, 1]);

  return (
    <section id="trabajo" className="section work">
      <div className="section__head" data-reveal>
        <h2>Trabajo</h2>
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
              onMouseEnter={() => {
                setHover(i);
                setPreview(i);
              }}
              onMouseLeave={() => setHover(null)}
              onFocus={() => {
                setHover(i);
                setPreview(i);
              }}
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
              <span className="work__name">{p.name}</span>
              <span className="work__meta">
                {p.kind} · {p.year}
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
                className={preview === i ? "is-on" : ""}
                loading="lazy"
              />
            ) : null,
          )}
        </div>
      </div>

      <div className="work__featured" ref={featRef}>
        <motion.img
          src={FEATURED.media}
          alt={`Interfaz real de ${FEATURED.name}`}
          width={1600}
          height={1000}
          style={{ scale: reduce ? 1 : fScale }}
          loading="lazy"
        />
      </div>
      <div className="work__caption">
        <span>
          <strong>{FEATURED.name}</strong> · {FEATURED.caption}
        </span>
        <a className="link" href={FEATURED.url}>
          Ver en vivo
        </a>
      </div>
    </section>
  );
}
