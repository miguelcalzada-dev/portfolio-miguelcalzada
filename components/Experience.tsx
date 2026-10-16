"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { JOB, EXPERIENCE_LEAD, EDUCATION } from "./site-data";

const FORMATION_DETAIL: Record<string, string> = {
  "Especialización en IA y Big Data":
    "Machine Learning, Deep Learning, NLP y Big Data Analytics.",
  "Técnico Superior en DAM":
    "Java, Android, diseño de bases de datos y programación orientada a objetos.",
};

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 65%"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="experiencia" className="section exp2">
      <div className="exp2__side">
        <h2>Experiencia</h2>
        <p>Un puesto, en producción, con foco en backend, cloud e IA.</p>
      </div>

      <div className="exp2__main" ref={ref}>
        <span className="exp2__rail" aria-hidden="true">
          <motion.span
            className="exp2__rail-fill"
            style={{ scaleY: reduce ? 1 : scaleY }}
          />
        </span>

        <ol className="exp2__list">
          <li className="exp2__item" data-reveal>
            <span className="exp2__node" aria-hidden="true" />
            <div className="exp2__body">
              <h3>
                {JOB.role} · {JOB.company}
              </h3>
              <p className="exp2__meta">
                {JOB.location} · {JOB.period}
              </p>
              <p className="exp2__lead">{EXPERIENCE_LEAD}</p>
            </div>
          </li>

          {EDUCATION.map((e, i) => (
            <li
              className="exp2__item"
              key={e.label}
              data-reveal
              style={{ transitionDelay: `${(i + 1) * 70}ms` }}
            >
              <span className="exp2__node exp2__node--edu" aria-hidden="true" />
              <div className="exp2__body">
                <h3>{e.label}</h3>
                <p className="exp2__meta">{e.value}</p>
                <p className="exp2__lead">
                  {FORMATION_DETAIL[e.label] ?? "Formación técnica."}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
