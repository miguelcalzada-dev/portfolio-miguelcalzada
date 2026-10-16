export type Project = {
  name: string;
  kind: string;
  year: string;
  description: string;
  stack: string[];
  url: string | null;
  repo: string;
  media: string | null;
};

export const SITE = {
  name: "Miguel Ángel Calzada Martín",
  shortName: "Miguel Ángel Calzada",
  brand: "Miguel Ángel Calzada",
  role: "Desarrollador Full-Stack · IA & Big Data",
  word: "CALZADA",
  city: "Madrid, España",
  email: "miguelcalzada2004@gmail.com",
  phone: "+34 665 17 88 25",
  phoneHref: "+34665178825",
  github: "https://github.com/miguelcalzada-dev",
  linkedin: "https://www.linkedin.com/in/miguel-calzada-04a19b24b",
  intro:
    "Desarrollador Full-Stack e IA en Madrid. Diseño y despliego APIs, microservicios y productos de datos reales, de la base de datos al frontend.",
  contactLine:
    "¿Una oportunidad, una colaboración o una idea? Escríbeme directamente.",
};

export const PROJECTS: Project[] = [
  {
    name: "ImpactDB MCP",
    kind: "Linaje de datos · MCP",
    year: "2026",
    description:
      "Analizador de linaje e impacto de cambios para PostgreSQL. Preguntas en lenguaje natural qué se rompería antes de un ALTER, DROP o RENAME, y lo ves en un grafo interactivo de dependencias. Expone 4 herramientas del estándar Model Context Protocol para agentes externos.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "MCP", "Groq", "React Flow"],
    url: "/impactdb",
    repo: "https://github.com/miguelcalzada-dev/data-lineage-mcp",
    media: "/work/impactdb.jpg",
  },
  {
    name: "SQLSense AI",
    kind: "SQL con IA · WebAssembly",
    year: "2026",
    description:
      "Aprende SQL hablando con IA. Traduce lenguaje natural a SQL y viceversa contra una base real, con un laboratorio efímero de SQLite que vive en el navegador gracias a WebAssembly. Editor libre, retos guiados y modo dual IA con fallback local.",
    stack: ["Next.js", "TypeScript", "SQLite WASM", "OpenAI", "Tailwind CSS"],
    url: "/sqlsense",
    repo: "https://github.com/miguelcalzada-dev/sqlsense-ai",
    media: "/work/sqlsense.jpg",
  },
  {
    name: "Madrid Transit Pulse",
    kind: "Big Data · movilidad",
    year: "2026",
    description:
      "Plataforma de analítica y visualización en tiempo real de Cercanías Madrid: mapa en vivo, estado de la flota, incidencias y alertas sobre datos abiertos de movilidad.",
    stack: ["Next.js", "Express", "Socket.io", "Datos abiertos"],
    url: "/madrid-transit",
    repo: "https://github.com/miguelcalzada-dev/madrid-transit-pulse",
    media: "/work/madrid-transit.jpg",
  },
  {
    name: "Applied AI Solutions",
    kind: "Suite de IA aplicada",
    year: "2026",
    description:
      "Suite de IA aplicada con FastAPI y Gemini: chat multi-turno con memoria, visión artificial, RAG sobre documentos, NLP, prompt engineering y voz, todo en una sola plataforma desplegada.",
    stack: ["FastAPI", "Python", "Gemini API", "RAG", "NLP"],
    url: "/ai-lab",
    repo: "https://github.com/miguelcalzada-dev/applied-ai-engineering-showcase",
    media: "/work/ai-lab.jpg",
  },
  {
    name: "FitCity",
    kind: "Plataforma fitness",
    year: "En desarrollo",
    description:
      "Plataforma Full-Stack para gimnasios: gestión de usuarios, check-in, validación de PRs de powerlifting con IA y rankings de comunidad. Angular 19 y TailwindCSS en el frontend, FastAPI y Supabase en el backend.",
    stack: ["Angular 19", "TailwindCSS", "FastAPI", "Supabase", "PostgreSQL"],
    url: null,
    repo: "https://github.com/FitCity-Team/FitCity",
    media: null,
  },
  {
    name: "Barber Books Template",
    kind: "Plantilla web · reservas",
    year: "2026",
    description:
      "Plantilla web para barberías y peluquerías premium: servicios, portafolio, equipo y un sistema integrado para agendar y gestionar citas.",
    stack: ["HTML", "CSS", "JavaScript"],
    url: null,
    repo: "https://github.com/miguelcalzada-dev/barber-books-template",
    media: null,
  },
  {
    name: "Spotify Voice Assistant",
    kind: "Voz · escritorio",
    year: "2025",
    description:
      "Asistente de voz offline para Windows que controla Spotify por comandos de voz, sin cortar el flujo de trabajo y sin conexión a internet.",
    stack: ["Python", "SpeechRecognition", "Spotipy", "Windows"],
    url: null,
    repo: "https://github.com/miguelcalzada-dev/spotify_voice_assistant",
    media: null,
  },
];

export const STACK: { group: string; items: string[] }[] = [
  {
    group: "IA & Machine Learning",
    items: ["Machine Learning", "Deep Learning", "NLP", "TensorFlow", "PyTorch", "Scikit-learn"],
  },
  {
    group: "Frontend & Web",
    items: ["React", "Next.js", "Angular", "TypeScript", "Tailwind CSS", "HTML/CSS"],
  },
  {
    group: "Backend & APIs",
    items: ["Java / Spring Boot", "Node.js", "Python / FastAPI", ".NET Core", "REST", "RabbitMQ"],
  },
  {
    group: "Bases de datos & Datos",
    items: ["PostgreSQL", "MongoDB", "Redis", "SQL", "ETL Pipelines", "Data Engineering"],
  },
  {
    group: "DevOps & Cloud",
    items: ["AWS", "Docker", "Kubernetes", "CI/CD", "GitHub Actions", "Linux"],
  },
];

export const FACTS: { label: string; value: string }[] = [
  { label: "Base", value: "Madrid, España" },
  { label: "Disponibilidad", value: "Remoto · híbrido · inmediata" },
  { label: "Idiomas", value: "Español nativo · Inglés B2" },
  { label: "En activo desde", value: "2024" },
];

export const EXPERIENCE_LEAD =
  "Trabajo como Software Developer en Analisis Survey Unit (Madrid) desde marzo de 2024. Diseño, desarrollo y despliego APIs REST y microservicios con Java (Spring Boot), Node.js y Python (FastAPI) sobre AWS con Docker y Kubernetes, y construyo agentes de IA, arquitecturas RAG y pipelines de CI/CD que corren en producción.";

export const RESPONSIBILITIES: { label: string; value: string }[] = [
  { label: "APIs REST y microservicios", value: "Java · Node.js · Python" },
  { label: "Cloud y contenedores", value: "AWS · Docker · K8s" },
  { label: "Agentes de IA y LLMs", value: "Gemini · Claude · RAG" },
  { label: "CI/CD y despliegue", value: "GitHub Actions" },
  { label: "Seguridad y accesos", value: "Producción" },
];

export const EDUCATION: { label: string; value: string }[] = [
  { label: "Especialización en IA y Big Data", value: "2025 – 2026" },
  { label: "Técnico Superior en DAM", value: "2022 – 2024" },
];

export const FEATURED = {
  name: "Applied AI Solutions",
  caption: "Chat multi-turno, visión, RAG y NLP en una sola plataforma desplegada.",
  media: "/work/ai-lab.jpg",
  url: "/ai-lab",
};
