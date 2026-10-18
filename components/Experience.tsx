"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  useMotionValueEvent,
} from "framer-motion";
import { JOB, JOB_TAGS, EXPERIENCE_LEAD, EDUCATION } from "./site-data";

const ENTRIES = [
  {
    node: "exp__node--now",
    title: `${JOB.role} · ${JOB.company}`,
    meta: `${JOB.location} · ${JOB.period}`,
    lead: EXPERIENCE_LEAD,
    tags: JOB_TAGS as string[] | null,
  },
  ...EDUCATION.map((e) => ({
    node: "exp__node--edu",
    title: e.label,
    meta: e.value,
    lead: e.detail,
    tags: null,
  })),
];

export default function Experience() {
  const mainRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLSpanElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: mainRef,
    offset: ["start 78%", "end 35%"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const [marks, setMarks] = useState<number[]>([]);
  const [filled, setFilled] = useState(0);

  /* Posición vertical de cada cuadrado sobre el riel, en fracción 0–1. */
  useEffect(() => {
    const main = mainRef.current;
    const rail = railRef.current;
    if (!main || !rail) return;
    const measure = () => {
      const rr = rail.getBoundingClientRect();
      if (!rr.height) return;
      const nodes = Array.from(main.querySelectorAll<HTMLElement>(".exp__node"));
      const next = nodes.map((n) => {
        const r = n.getBoundingClientRect();
        const f = (r.top + r.height / 2 - rr.top) / rr.height;
        return Math.min(1, Math.max(0, f));
      });
      setMarks(next);
      setFilled(next.filter((m) => scaleY.get() >= m).length);
    };
    measure();
    const t = setTimeout(measure, 500);
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("resize", measure);
      clearTimeout(t);
    };
  }, [scaleY]);

  useMotionValueEvent(scaleY, "change", (v) => {
    if (reduce || marks.length === 0) return;
    const f = marks.filter((m) => v >= m).length;
    setFilled((p) => (p === f ? p : f));
  });

  const filledCount = reduce ? marks.length : filled;

  return (
    <section id="experiencia" className="section exp">
      <h2 className="exp__title" data-reveal>
        Experiencia
      </h2>

      <div className="exp__main" ref={mainRef}>
        <span className="exp__rail" ref={railRef} aria-hidden="true">
          <motion.span
            className="exp__rail-fill"
            style={{ scaleY: reduce ? 1 : scaleY }}
          />
        </span>

        <ol className="exp__list">
          {ENTRIES.map((e, i) => (
            <li className="exp__item" key={e.title} data-reveal>
              <span
                className={`exp__node ${e.node}${i < filledCount ? " is-filled" : ""}`}
                aria-hidden="true"
              />
              <div className="exp__body">
                <h3>{e.title}</h3>
                <p className="exp__meta">{e.meta}</p>
                <p className="exp__lead">{e.lead}</p>
                {e.tags && (
                  <div className="exp__tags">
                    {[
                      e.tags.slice(0, Math.ceil(e.tags.length / 2)),
                      e.tags.slice(Math.ceil(e.tags.length / 2)),
                    ].map((row, ri) => (
                      <div className="exp__tags-row" key={ri}>
                        {row.map((t) => (
                          <span key={t} className="chip">
                            {t}
                          </span>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
