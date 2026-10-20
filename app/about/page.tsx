import type { Metadata } from "next";
import Link from "next/link";
import {
  EDUCATION,
  EXPERIENCE_LEAD,
  JOB,
  JOB_TAGS,
  SITE,
} from "@/components/site-data";
import { ArrowUpRight, BrandMark } from "@/components/icons";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Sobre mí",
  description:
    "Miguel Ángel Calzada Martín: Software Developer en Madrid, especializado en IA, Big Data, APIs y sistemas en producción.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main id="main" className="about-page" tabIndex={-1}>
      <div className="shell">
        <header className="page-head page-head--split">
          <div>
            <h1>Sobre mí.</h1>
            <p>
              Soy Miguel Ángel Calzada Martín. Construyo software en Madrid:
              interfaces, servicios, datos e IA que terminan en producción.
            </p>
          </div>
          <div className="about__plate" aria-hidden="true">
            <BrandMark size={128} />
            <span className="mono">Madrid / 2026</span>
          </div>
        </header>

        <div className="about__grid">
          <Reveal className="about__story">
            <h2>Cómo trabajo</h2>
            <p>
              Empiezo por el problema y por las restricciones. Después elijo la
              forma: una API, un pipeline, una interfaz o las tres. Lo que me
              interesa es que el sistema se pueda explicar, desplegar y mantener.
            </p>
            <p>
              He trabajado en APIs REST y microservicios con Java, Node.js y
              Python, en infraestructura AWS con Docker y Kubernetes, y en
              productos de IA con LLMs, RAG y agentes. También he construido las
              interfaces que usan esos sistemas.
            </p>
            <p>
              Mantengo cuatro proyectos públicos con demo y código abierto. No
              los presento como casos de éxito: los presento con lo que hacen,
              cómo están construidos y qué decisiones hay detrás.
            </p>
          </Reveal>

          <Reveal className="about__card" delay={0.06}>
            <dl>
              <div>
                <dt className="mono">Rol</dt>
                <dd>{SITE.role}</dd>
              </div>
              <div>
                <dt className="mono">Ubicación</dt>
                <dd>{SITE.city}</dd>
              </div>
              <div>
                <dt className="mono">Idiomas</dt>
                <dd>{SITE.languages}</dd>
              </div>
              <div>
                <dt className="mono">Disponibilidad</dt>
                <dd>{SITE.availability}</dd>
              </div>
            </dl>
            <div className="about__contact">
              <a href={`mailto:${SITE.email}`} className="text-link">
                Escríbeme <ArrowUpRight size={14} />
              </a>
              <Link href="/contact" className="text-link">
                Contacto <ArrowUpRight size={14} />
              </Link>
            </div>
          </Reveal>
        </div>

        <section className="about__section" aria-labelledby="about-experience">
          <Reveal>
            <h2 id="about-experience">Experiencia</h2>
          </Reveal>
          <Reveal>
            <article className="about__entry">
              <p className="mono about__period">{JOB.period}</p>
              <div>
                <h3>
                  {JOB.role} <span>· {JOB.company}</span>
                </h3>
                <p className="mono about__place">{JOB.location}</p>
                <p>{EXPERIENCE_LEAD}</p>
                <ul className="about__tags">
                  {JOB_TAGS.map((tag) => (
                    <li key={tag} className="mono">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        </section>

        <section className="about__section" aria-labelledby="about-education">
          <Reveal>
            <h2 id="about-education">Formación</h2>
          </Reveal>
          <div className="about__education">
            {EDUCATION.map((item, index) => (
              <Reveal key={item.label} delay={index * 0.04}>
                <article className="about__entry">
                  <p className="mono about__period">{item.value}</p>
                  <div>
                    <h3>{item.label}</h3>
                    <p>{item.detail}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="about__section" aria-labelledby="about-principles">
          <Reveal>
            <h2 id="about-principles">Principios</h2>
          </Reveal>
          <div className="about__principles">
            <Reveal>
              <article>
                <h3>Primero el problema</h3>
                <p>
                  La tecnología es una consecuencia de las restricciones, no el
                  punto de partida.
                </p>
              </article>
            </Reveal>
            <Reveal delay={0.04}>
              <article>
                <h3>El sistema completo</h3>
                <p>
                  Interfaz, servicio, dato e infraestructura se diseñan juntos o
                  se rompen juntos.
                </p>
              </article>
            </Reveal>
            <Reveal delay={0.08}>
              <article>
                <h3>Lo que se despliega, se opera</h3>
                <p>
                  Un proyecto no termina en el build. Termina cuando se puede
                  monitorizar, mantener y explicar.
                </p>
              </article>
            </Reveal>
          </div>
        </section>

        <div className="about__back">
          <Link href="/work" className="text-link">
            Ver los sistemas <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </main>
  );
}
