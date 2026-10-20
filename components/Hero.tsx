"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { PROJECTS, SITE } from "./site-data";
import { ArrowDown, ArrowUpRight } from "./icons";

const lineVariants = {
  hidden: { y: "110%" },
  visible: { y: "0%" },
};

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="shell hero__grid">
        <div className="hero__lead">
          <h1 id="hero-title" className="hero__title">
            <span className="hero__line">
              <motion.span
                variants={lineVariants}
                initial={reduce ? false : "hidden"}
                animate="visible"
                transition={{ duration: reduce ? 0 : 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
              >
                Software
              </motion.span>
            </span>
            <span className="hero__line">
              <motion.span
                variants={lineVariants}
                initial={reduce ? false : "hidden"}
                animate="visible"
                transition={{ duration: reduce ? 0 : 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.16 }}
              >
                que sale a
              </motion.span>
            </span>
            <span className="hero__line">
              <motion.span
                variants={lineVariants}
                initial={reduce ? false : "hidden"}
                animate="visible"
                transition={{ duration: reduce ? 0 : 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.24 }}
              >
                producción<span className="hero__period">.</span>
              </motion.span>
            </span>
          </h1>

          <motion.div
            className="hero__under"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduce ? 0 : 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          >
            <p className="hero__fact">
              Cuatro sistemas públicos. Código, decisiones y demos.
            </p>
            <div className="hero__actions">
              <Link href="/work" className="button button--solid">
                Ver sistemas <ArrowUpRight size={16} />
              </Link>
              <a href={`mailto:${SITE.email}`} className="text-link">
                Escríbeme <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.aside
          className="hero__aside"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduce ? 0 : 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.36 }}
        >
          <p className="hero__intro">{SITE.intro}</p>

          <p className="availability">
            <span className="status-dot" aria-hidden="true" />
            {SITE.availability}
          </p>

          <div className="hero__register">
            <div className="hero__register-head">
              <span>Sistemas públicos</span>
              <span className="mono">04</span>
            </div>
            <ul>
              {PROJECTS.map((project) => (
                <li key={project.slug}>
                  <Link href={`/work/${project.slug}`}>
                    <span className="mono hero__register-index">{project.index}</span>
                    <span className="hero__register-name">{project.name}</span>
                    <span className="hero__register-status">{project.status}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="hero__locale">
            <span>Madrid, España</span>
            <span className="mono">40.4168° N</span>
          </div>
        </motion.aside>
      </div>

      <div className="shell hero__scroll">
        <Link href="#sistemas" className="hero__scroll-link">
          <ArrowDown size={16} />
          <span>Bajar a los sistemas</span>
        </Link>
      </div>
    </section>
  );
}
