import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECTS } from "@/components/site-data";
import Reveal from "@/components/Reveal";
import { ArrowLeft, ArrowUpRight } from "@/components/icons";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((item) => item.slug === slug);

  if (!project) return { title: "Sistema no encontrado" };

  return {
    title: project.name,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = PROJECTS.find((item) => item.slug === slug);

  if (!project) notFound();

  const position = PROJECTS.findIndex((item) => item.slug === project.slug);
  const nextProject = PROJECTS[(position + 1) % PROJECTS.length];
  const isPortrait = project.slug === "impactdb" || project.slug === "sqlsense";

  return (
    <main id="main" className="dossier" tabIndex={-1}>
      <div className="shell">
        <nav className="dossier__breadcrumb" aria-label="Migas de pan">
          <Link href="/work" className="text-link">
            <ArrowLeft size={14} /> Sistemas
          </Link>
          <span className="mono">/ {project.index}</span>
        </nav>

        <header className="dossier__header">
          <div className="dossier__title">
            <h1>{project.name}</h1>
            <p className="dossier__summary">{project.summary}</p>
          </div>

          <aside className="dossier__aside" aria-label="Ficha del proyecto">
            <dl className="dossier__facts">
              <div>
                <dt className="mono">Estado</dt>
                <dd className="mono">
                  <span className="status-dot" aria-hidden="true" />
                  {project.status}
                </dd>
              </div>
              <div>
                <dt className="mono">Tipo</dt>
                <dd className="mono">{project.kind}</dd>
              </div>
              <div>
                <dt className="mono">Stack</dt>
                <dd className="mono">{project.stack.slice(0, 4).join(" / ")}</dd>
              </div>
            </dl>

            <div className="dossier__links">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="button button--solid"
              >
                Abrir demo <ArrowUpRight size={16} />
              </a>
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                Código <ArrowUpRight size={14} />
              </a>
            </div>
          </aside>
        </header>

        <Reveal>
          <figure className="dossier__media">
            <Image
              src={project.media}
              alt={project.imageAlt}
              width={1600}
              height={1000}
              className={isPortrait ? "dossier__image is-portrait" : "dossier__image"}
              sizes="(max-width: 900px) 100vw, 90vw"
            />
            <figcaption className="mono">
              {project.name} · captura de la aplicación pública
            </figcaption>
          </figure>
        </Reveal>

        <div className="dossier__body">
          <div className="dossier__col">
            <Reveal>
              <section aria-labelledby="context-title">
                <h2 id="context-title">Contexto</h2>
                <p>{project.description}</p>
              </section>
            </Reveal>

            <Reveal>
              <section aria-labelledby="features-title">
                <h2 id="features-title">Qué hace</h2>
                <ul className="dossier__features">
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </section>
            </Reveal>
          </div>

          <div className="dossier__col">
            <Reveal>
              <section aria-labelledby="architecture-title">
                <h2 id="architecture-title">Arquitectura</h2>
                <ol className="dossier__architecture">
                  {project.architecture.map((layer) => (
                    <li key={layer.label}>
                      <span className="mono">{layer.label}</span>
                      <p>{layer.detail}</p>
                    </li>
                  ))}
                </ol>
              </section>
            </Reveal>

            <Reveal>
              <section aria-labelledby="decisions-title">
                <h2 id="decisions-title">Decisiones</h2>
                <ol className="dossier__decisions">
                  {project.decisions.map((decision) => (
                    <li key={decision.title}>
                      <h3>{decision.title}</h3>
                      <p>{decision.detail}</p>
                    </li>
                  ))}
                </ol>
              </section>
            </Reveal>

            <Reveal>
              <section aria-labelledby="stack-title">
                <h2 id="stack-title">Stack</h2>
                <ul className="dossier__stack">
                  {project.stack.map((item) => (
                    <li key={item} className="mono">
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>
          </div>
        </div>

        <Reveal>
          <Link href={`/work/${nextProject.slug}`} className="dossier__next">
            <span className="mono">Siguiente sistema</span>
            <span>
              <span className="mono">{nextProject.index}</span>
              {nextProject.name}
            </span>
            <ArrowUpRight size={28} />
          </Link>
        </Reveal>
      </div>
    </main>
  );
}
