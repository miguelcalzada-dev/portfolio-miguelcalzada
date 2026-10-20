import type { Metadata } from "next";
import Link from "next/link";
import { PROJECTS } from "@/components/site-data";
import Reveal from "@/components/Reveal";
import { ArrowLeft, ArrowUpRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Sistemas",
  description:
    "Cuatro sistemas públicos de IA, datos y web: ImpactDB MCP, Applied AI Solutions, SQLSense AI y Madrid Transit Pulse.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <main id="main" className="work-page" tabIndex={-1}>
      <div className="shell">
        <header className="page-head">
          <h1>Sistemas.</h1>
          <p>
            Cuatro productos públicos. Todos con demo, repositorio y una decisión
            técnica que se puede explicar.
          </p>
        </header>

        <section className="work-index" aria-label="Lista de sistemas">
          {PROJECTS.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.035}>
              <article className="work-index__row">
                <span className="mono work-index__number">{project.index}</span>

                <div className="work-index__main">
                  <h2>
                    <Link href={`/work/${project.slug}`}>{project.name}</Link>
                  </h2>
                  <p>{project.summary}</p>
                  <p className="mono work-index__kind">{project.kind}</p>
                </div>

                <p className="mono work-index__stack">
                  {project.stack.slice(0, 3).join(" / ")}
                </p>

                <div className="work-index__actions">
                  <span className="mono work-index__status">
                    <span className="status-dot" aria-hidden="true" />
                    {project.status}
                  </span>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link"
                  >
                    Abrir demo <ArrowUpRight size={14} />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </section>

        <div className="work-page__back">
          <Link href="/" className="text-link">
            <ArrowLeft size={14} /> Volver al inicio
          </Link>
        </div>
      </div>
    </main>
  );
}
