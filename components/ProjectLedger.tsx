"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { PROJECTS } from "./site-data";
import { ArrowUpRight } from "./icons";

export default function ProjectLedger() {
  const [active, setActive] = useState(PROJECTS[0].slug);
  const reduce = useReducedMotion();
  const current = PROJECTS.find((project) => project.slug === active) ?? PROJECTS[0];

  return (
    <div className="work__grid">
      <div className="work__table">
        <div className="work__table-head mono" aria-hidden="true">
          <span>No.</span>
          <span>Sistema</span>
          <span>Dominio</span>
          <span>Estado</span>
          <span />
        </div>

        {PROJECTS.map((project) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className={`work__row${active === project.slug ? " is-active" : ""}`}
            onMouseEnter={() => setActive(project.slug)}
            onFocus={() => setActive(project.slug)}
            aria-label={`${project.name}, ${project.kind}. Abrir dossier.`}
          >
            <span className="mono work__index">{project.index}</span>
            <span className="work__name">{project.name}</span>
            <span className="mono work__kind">{project.kind}</span>
            <span className="mono work__status">
              <span className="status-dot" aria-hidden="true" />
              {project.status}
            </span>
            <ArrowUpRight className="work__arrow" size={20} />

            <span className="work__thumb-wrap" aria-hidden="true">
              <Image
                src={project.media}
                alt=""
                width={1600}
                height={1000}
                className="work__thumb"
                sizes="(max-width: 900px) 100vw, 1px"
              />
            </span>
          </Link>
        ))}
      </div>

      <div className="work__preview-col">
        <AnimatePresence mode="wait">
          <motion.figure
            key={current.slug}
            className="work__preview"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.2, ease: "linear" }}
          >
            <Image
              src={current.media}
              alt={current.imageAlt}
              width={1600}
              height={1000}
              className="work__preview-img"
              sizes="(min-width: 1024px) 38vw, 100vw"
            />
            <figcaption className="work__preview-caption">
              <span className="mono">{current.index} / 04</span>
              <span>{current.name}</span>
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>
    </div>
  );
}
