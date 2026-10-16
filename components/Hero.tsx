"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { SITE } from "./site-data";

const LINKS = [
  { href: "#trabajo", label: "Trabajo" },
  { href: "#stack", label: "Stack" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#contacto", label: "Contacto" },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-4%"]);

  return (
    <section className="hero" id="top" ref={ref}>
      <div className="hero__top">
        <a href="#top" className="hero__brand">
          {SITE.brand}
        </a>
        <nav className="hero__links" aria-label="Secciones">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="hero__intro">
        <p data-rise style={{ "--i": 0 } as React.CSSProperties}>
          {SITE.intro}
        </p>
        <a
          href="#trabajo"
          className="button"
          data-rise
          style={{ "--i": 1 } as React.CSSProperties}
        >
          Ver proyectos
        </a>
      </div>

      <div className="hero__word-wrap">
        <motion.h1
          className="hero__word"
          style={{ scale, y: reduce ? 0 : y }}
        >
          {SITE.word}
        </motion.h1>
      </div>
    </section>
  );
}
