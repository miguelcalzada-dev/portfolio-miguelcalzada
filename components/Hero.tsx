"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { SITE } from "./site-data";
import ArrowIndicator from "./ArrowIndicator";

const LINKS = [
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
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.93]);

  return (
    <section className="hero" id="top" ref={ref}>
      <div className="hero__top">
        <a
          href="#top"
          className="hero__brand"
          data-rise
          style={{ "--i": 0 } as React.CSSProperties}
        >
          {SITE.brand}
        </a>
        <div
          className="hero__nav"
          data-rise
          style={{ "--i": 1 } as React.CSSProperties}
        >
          <nav className="hero__links" aria-label="Secciones">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>
          <a href="#proyectos" className="button hero__cta">
            Ver proyectos
          </a>
        </div>
      </div>

      <div className="hero__body">
        <span className="hero__rule" aria-hidden="true" />
        <p
          className="hero__intro"
          data-rise
          style={{ "--i": 2 } as React.CSSProperties}
        >
          {SITE.intro}
        </p>
      </div>

      <div className="hero__word-wrap">
        <div className="hero__word-row">
          <motion.h1
            className="hero__word"
            style={{ scale }}
            initial={reduce ? false : { opacity: 0, y: 56 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 1.15 }}
          >
            {SITE.word}
          </motion.h1>
          <ArrowIndicator className="hero__arrow" />
        </div>
      </div>
    </section>
  );
}
