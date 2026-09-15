type Project = {
  name: string;
  tag: string;
  description: string;
  stack: string[];
  href: string;
  accent: string;
};

const PROJECTS: Project[] = [
  {
    name: "Portfolio personal",
    tag: "Web",
    description:
      "Portfolio profesional con experiencia, stack tecnico y proyectos. Diseno brutalista con asistente IA integrado en el navegador.",
    stack: ["Next.js", "React", "TypeScript", "Framer Motion"],
    href: "/portfolio",
    accent: "#6ea8fe",
  },
  {
    name: "Madrid Transit Pulse",
    tag: "Tiempo real",
    description:
      "Monitor en tiempo real de Cercanias Madrid: mapas en vivo, alertas, analitica y estado de la flota sobre datos GTFS.",
    stack: ["Next.js", "Node.js", "Socket.io", "MongoDB", "Kafka"],
    href: "/madrid-transit",
    accent: "#ff5d5d",
  },
  {
    name: "SQLSense AI",
    tag: "IA + Datos",
    description:
      "Aprende SQL conversando con IA. Traduce lenguaje natural a SQL y practica en un laboratorio efimero de SQLite en el navegador.",
    stack: ["Next.js", "TypeScript", "SQLite WASM", "LLM"],
    href: "/sqlsense",
    accent: "#ff8a3d",
  },
  {
    name: "Applied AI Engineering Showcase",
    tag: "IA aplicada",
    description:
      "Demo interactiva de IA: chat multi-turno, vision por computador, RAG con tus documentos, laboratorio de prompts, NLP y voz.",
    stack: ["Python", "FastAPI", "Gemini", "RAG", "ChromaDB"],
    href: "/ai-lab",
    accent: "#b388ff",
  },
];

export default function Home() {
  return (
    <main className="wrap">
      <p className="eyebrow">Miguel Angel Calzada Martin</p>
      <h1 className="title">
        Proyectos de <span>ingenieria de software</span> e IA aplicada
      </h1>
      <p className="lead">
        Un unico lugar para explorar mis proyectos: inteligencia artificial, datos en
        tiempo real, big data y desarrollo full-stack. Elige cualquiera para entrar.
      </p>

      <div className="meta">
        <a href="https://github.com/miguelcalzada-dev" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="mailto:miguelcalzada2004@gmail.com">Contacto</a>
        <a href="https://www.linkedin.com/in/miguelcalzada-dev" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>

      <p className="section-label">Listado de proyectos</p>
      <div className="grid">
        {PROJECTS.map((project) => (
          <a
            key={project.href}
            href={project.href}
            className="card"
            style={{ ["--card-accent" as string]: project.accent }}
          >
            <div className="card-head">
              <span className="card-tag">{project.tag}</span>
              <span className="card-arrow" aria-hidden="true">
                -&gt;
              </span>
            </div>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="stack">
              {project.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="card-path">miguelcalzada.com{project.href}</div>
          </a>
        ))}
      </div>

      <footer className="footer">
        <span>&copy; {new Date().getFullYear()} Miguel Angel Calzada Martin</span>
        <span>
          Disponible en{" "}
          <a href="https://miguelcalzada.com">miguelcalzada.com</a> y{" "}
          <a href="https://miguelcalzada.es">miguelcalzada.es</a>
        </span>
      </footer>
    </main>
  );
}
