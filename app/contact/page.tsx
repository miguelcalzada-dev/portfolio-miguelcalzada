import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/components/site-data";
import { ArrowUpRight } from "@/components/icons";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacta con Miguel Ángel Calzada Martín por email, teléfono, LinkedIn o GitHub.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main id="main" className="contact-page" tabIndex={-1}>
      <div className="shell">
        <header className="page-head">
          <h1>Contacto.</h1>
          <p>
            Para hablar de un puesto, un proyecto o una colaboración técnica.
            Escríbeme directamente.
          </p>
        </header>

        <Reveal>
          <a className="contact-page__mail" href={`mailto:${SITE.email}`}>
            {SITE.email}
          </a>
        </Reveal>

        <div className="contact-page__grid">
          <Reveal>
            <section aria-labelledby="channels-title">
              <h2 id="channels-title">Canales</h2>
              <dl className="contact-page__list">
                <div>
                  <dt className="mono">Email</dt>
                  <dd>
                    <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                  </dd>
                </div>
                <div>
                  <dt className="mono">Teléfono</dt>
                  <dd>
                    <a href={`tel:${SITE.phoneHref}`}>{SITE.phone}</a>
                  </dd>
                </div>
                <div>
                  <dt className="mono">LinkedIn</dt>
                  <dd>
                    <a
                      href={SITE.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn <ArrowUpRight size={14} />
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="mono">GitHub</dt>
                  <dd>
                    <a
                      href={SITE.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      miguelcalzada-dev <ArrowUpRight size={14} />
                    </a>
                  </dd>
                </div>
              </dl>
            </section>
          </Reveal>

          <Reveal delay={0.06}>
            <section aria-labelledby="where-title">
              <h2 id="where-title">Dónde</h2>
              <dl className="contact-page__list">
                <div>
                  <dt className="mono">Base</dt>
                  <dd>{SITE.city}</dd>
                </div>
                <div>
                  <dt className="mono">Disponibilidad</dt>
                  <dd>{SITE.availability}</dd>
                </div>
                <div>
                  <dt className="mono">Idiomas</dt>
                  <dd>{SITE.languages}</dd>
                </div>
                <div>
                  <dt className="mono">Perfil</dt>
                  <dd>{SITE.role}</dd>
                </div>
              </dl>
            </section>
          </Reveal>
        </div>

        <div className="contact-page__foot">
          <Link href="/work" className="text-link">
            Ver los sistemas <ArrowUpRight size={14} />
          </Link>
          <Link href="/about" className="text-link">
            Sobre mí <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </main>
  );
}
