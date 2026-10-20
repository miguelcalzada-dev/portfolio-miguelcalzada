export type ProjectArchitecture = {
  label: string;
  detail: string;
};

export type ProjectDecision = {
  title: string;
  detail: string;
};

export type Project = {
  slug: string;
  index: string;
  name: string;
  kind: string;
  status: string;
  url: string;
  repo: string;
  media: string;
  imageAlt: string;
  summary: string;
  description: string;
  features: string[];
  architecture: ProjectArchitecture[];
  decisions: ProjectDecision[];
  stack: string[];
};

export const SITE = {
  name: "Miguel Ángel Calzada Martín",
  shortName: "Miguel Calzada",
  brand: "CALZADA",
  descriptor: "Software & Data Systems",
  role: "Software Developer · IA & Big Data",
  city: "Madrid, España",
  email: "miguelcalzada2004@gmail.com",
  phone: "+34 665 17 88 25",
  phoneHref: "+34665178825",
  github: "https://github.com/miguelcalzada-dev",
  linkedin: "https://www.linkedin.com/in/miguel-calzada-04a19b24b",
  intro:
    "Desarrollador Full-Stack e IA en Madrid. Construyo y despliego APIs, microservicios y productos de datos reales.",
  availability: "Disponible para trabajo remoto, híbrido o presencial.",
  languages: "Español nativo · Inglés B2",
};

export const PROJECTS: Project[] = [
  {
    slug: "impactdb",
    index: "01",
    name: "ImpactDB MCP",
    kind: "Linaje de datos · MCP",
    status: "Live",
    url: "/impactdb",
    repo: "https://github.com/miguelcalzada-dev/data-lineage-mcp",
    media: "/work/impactdb.jpg",
    imageAlt: "Interfaz de ImpactDB MCP con el explorador de impacto de cambios",
    summary:
      "Analizador de linaje e impacto de cambios para PostgreSQL. Pregunta qué se rompe antes de un ALTER, DROP o RENAME y explóralo en un grafo interactivo.",
    description:
      "ImpactDB MCP conecta una base PostgreSQL y convierte el esquema en un mapa de dependencias. El chat con IA traduce preguntas de negocio a consultas sobre ese mapa; el resultado se ve en un grafo interactivo. También puede analizar un esquema exportado en JSON, sin conexión.",
    features: [
      "Chat con IA para preguntar por el impacto de un cambio.",
      "Predicción de vistas, funciones y claves foráneas afectadas por ALTER, DROP o RENAME.",
      "Grafo de dependencias interactivo con zoom y exploración.",
      "Visualizador de esquema con búsqueda de tablas, columnas, vistas y funciones.",
      "Análisis de cualquier esquema mediante JSON, sin conexión.",
      "Cuatro herramientas del estándar Model Context Protocol para agentes externos.",
    ],
    architecture: [
      {
        label: "Cliente",
        detail:
          "Next.js 14, React Flow y un chat con function calling sobre el esquema.",
      },
      {
        label: "Motor de análisis",
        detail:
          "Lee information_schema / pg_catalog o un JSON en memoria. El mismo contrato alimenta el grafo y las predicciones.",
      },
      {
        label: "API",
        detail:
          "Rutas de análisis, chat, grafo y health. Un proxy HTTP/SSE conecta con el servidor MCP.",
      },
      {
        label: "MCP",
        detail:
          "Cuatro herramientas para agentes externos. La web no depende del servidor MCP para funcionar.",
      },
    ],
    decisions: [
      {
        title: "Una sola lógica, dos fuentes",
        detail:
          "El analizador se desacopla de PostgreSQL: puede leer information_schema o un JSON en memoria. El mismo contrato alimenta el grafo y las predicciones.",
      },
      {
        title: "El MCP es opcional",
        detail:
          "La app ejecuta las herramientas internamente; el servidor MCP existe para conectar agentes externos como Claude Desktop u opencode.",
      },
      {
        title: "Simulación con rollback",
        detail:
          "El DDL se simula contra la base y se revierte. Si no se quiere tocar la base, la simulación se puede desactivar.",
      },
    ],
    stack: [
      "Next.js 14",
      "React 18",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "React Flow",
      "Node.js",
      "Express",
      "MCP SDK",
      "Supabase / PostgreSQL",
      "Groq",
      "Railway",
    ],
  },
  {
    slug: "ai-lab",
    index: "02",
    name: "Applied AI Solutions",
    kind: "Suite de IA aplicada",
    status: "Live",
    url: "/ai-lab",
    repo: "https://github.com/miguelcalzada-dev/applied-ai-engineering-showcase",
    media: "/work/ai-lab.jpg",
    imageAlt: "Interfaz de Applied AI Solutions con el módulo de chat",
    summary:
      "Suite de IA aplicada: chat multi-turno, visión, RAG, laboratorio de prompts, NLP y voz en una sola interfaz.",
    description:
      "Applied AI Solutions reúne los casos de uso de IA más habituales en una suite con backend FastAPI y una interfaz propia. Cada módulo tiene su propio flujo, sus límites y su estado.",
    features: [
      "Chat multi-turno con memoria, system prompt y temperatura ajustables.",
      "Análisis de imágenes por arrastre o webcam con Gemini Vision.",
      "RAG con carga de TXT y PDF, embeddings, ChromaDB y auditoría de fragmentos.",
      "Laboratorio de prompts con latencia, tokens estimados y recuento de palabras.",
      "NLP para sentimiento, resumen y clasificación de intención, idioma y tono.",
      "Asistente de voz con Speech-to-Text y Text-to-Speech.",
    ],
    architecture: [
      {
        label: "SPA",
        detail:
          "Interfaz en JavaScript y CSS, sin framework de UI, con módulos independientes.",
      },
      {
        label: "FastAPI",
        detail:
          "Endpoints por dominio: chat, visión, RAG, NLP y laboratorio de prompts.",
      },
      {
        label: "Gemini",
        detail:
          "Texto, visión, voz y embeddings a través del SDK google-genai.",
      },
      {
        label: "RAG",
        detail:
          "LangChain, ChromaDB y sesiones en memoria con TTL.",
      },
    ],
    decisions: [
      {
        title: "Sesiones con TTL",
        detail:
          "Los historiales y los índices RAG se purgan tras un periodo de inactividad para no acumular memoria.",
      },
      {
        title: "Rate limit por IP",
        detail:
          "Protege la cuota de Gemini en una demo pública.",
      },
      {
        title: "Un worker, por diseño",
        detail:
          "El estado vive en memoria; escalar horizontalmente exige un store compartido. Está documentado como límite, no como promesa.",
      },
    ],
    stack: [
      "FastAPI",
      "Pydantic",
      "Uvicorn / Gunicorn",
      "Google Gemini",
      "LangChain",
      "ChromaDB",
      "Vanilla JS / CSS",
      "Railway",
    ],
  },
  {
    slug: "sqlsense",
    index: "03",
    name: "SQLSense AI",
    kind: "SQL con IA · WebAssembly",
    status: "Live",
    url: "/sqlsense",
    repo: "https://github.com/miguelcalzada-dev/sqlsense-ai",
    media: "/work/sqlsense.jpg",
    imageAlt: "Landing de SQLSense AI con el laboratorio de SQL",
    summary:
      "Aprende SQL conversando con IA y ejecuta las consultas en una base SQLite que vive en el navegador.",
    description:
      "SQLSense AI traduce lenguaje natural a SQL y explica el SQL de vuelta en lenguaje natural. Las consultas se ejecutan contra SQLite compilado a WebAssembly, sin servidor y sin enviar datos fuera del navegador.",
    features: [
      "Lenguaje natural a SQL con ejecución inmediata.",
      "SQL a lenguaje natural con explicación paso a paso.",
      "Laboratorio SQLite en WebAssembly, sin servidor.",
      "Editor SQL libre con atajos de teclado.",
      "Esquema y tablas explorables de un concesionario.",
      "24 retos guiados con validación automática.",
      "Modo dual: OpenAI o un motor local determinista sin clave.",
      "Rate limiting en las rutas de IA.",
    ],
    architecture: [
      {
        label: "Editor y resultados",
        detail:
          "Next.js y Zustand; el SQL se ejecuta en el cliente.",
      },
      {
        label: "Base efímera",
        detail:
          "SQLite WASM con un seed determinista. Recargar restablece el estado.",
      },
      {
        label: "IA",
        detail:
          "OpenAI o un motor local de patrones. Al modelo solo se le envía el esquema.",
      },
      {
        label: "API routes",
        detail:
          "Traducción, explicación y enseñanza con rate limit.",
      },
    ],
    decisions: [
      {
        title: "Los datos no salen del navegador",
        detail:
          "La base nunca toca el backend; el LLM solo recibe el esquema.",
      },
      {
        title: "Fallback local",
        detail:
          "Sin API key, la demo sigue funcionando con un motor determinista.",
      },
      {
        title: "Salida estricta",
        detail:
          "El SQL se pide como JSON y se repara si no compila.",
      },
    ],
    stack: [
      "Next.js 14",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Zustand",
      "sql.js / SQLite WASM",
      "OpenAI",
      "Railway",
    ],
  },
  {
    slug: "madrid-transit",
    index: "04",
    name: "Madrid Transit Pulse",
    kind: "Big Data · movilidad",
    status: "Live",
    url: "/madrid-transit",
    repo: "https://github.com/miguelcalzada-dev/madrid-transit-pulse",
    media: "/work/madrid-transit.jpg",
    imageAlt: "Dashboard de Madrid Transit Pulse con métricas de Cercanías",
    summary:
      "Analítica y visualización en tiempo real de Cercanías Madrid: flota, estaciones, incidencias y tiempos de llegada.",
    description:
      "Madrid Transit Pulse monitoriza la red de Cercanías Madrid con datos de Renfe Open Data y CRTM. La demo pública funciona en modo mock determinista; la arquitectura está preparada para GTFS-RT y MongoDB.",
    features: [
      "Dashboard con KPIs en tiempo real, evolución de flota, incidencias y velocidad media.",
      "Buscador de más de 90 estaciones con llegadas estimadas y favoritos.",
      "Mapa interactivo con posición de trenes, filtros por línea y detección de retrasos.",
      "Monitorización de alertas oficiales de Renfe por severidad y línea.",
      "Diseño mobile-first.",
      "Datos de Renfe Open Data y CRTM. Aplicación no oficial.",
    ],
    architecture: [
      {
        label: "Frontend",
        detail:
          "Next.js 14, Recharts y Leaflet; dashboard, estaciones y alertas.",
      },
      {
        label: "Backend",
        detail:
          "Node.js, Express y Socket.io; REST y WebSocket.",
      },
      {
        label: "Datos",
        detail:
          "GTFS-RT de Renfe; modo mock en memoria; MongoDB opcional.",
      },
      {
        label: "Roadmap Big Data",
        detail:
          "Kafka y Spark documentados como evolución, no como producción.",
      },
    ],
    decisions: [
      {
        title: "Modo mock por defecto",
        detail:
          "La demo pública no depende de MongoDB ni de una conexión externa.",
      },
      {
        title: "Frontend y backend separados",
        detail:
          "El monorepo mantiene baja latencia entre datos y visualización.",
      },
      {
        title: "La fuente es pública",
        detail:
          "Renfe Open Data y CRTM; la app se declara no oficial.",
      },
    ],
    stack: [
      "Next.js 14",
      "React 18",
      "TypeScript",
      "Recharts",
      "Leaflet",
      "Node.js 20",
      "Express",
      "Socket.io",
      "GTFS-RT",
      "MongoDB",
      "Docker",
      "Kafka / Spark roadmap",
    ],
  },
];

export const PRACTICE = [
  {
    label: "Interfaces",
    title: "Producto, sistemas de diseño y accesibilidad.",
    detail:
      "Interfaces que explican lo que hacen: jerarquía clara, estados reales y una implementación que aguanta el uso.",
    tools: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    label: "Servicios",
    title: "APIs REST y microservicios.",
    detail:
      "Contratos claros, validación y despliegue reproducible con Java, Node.js y Python.",
    tools: ["Java / Spring Boot", "Node.js", "Python / FastAPI", "REST"],
  },
  {
    label: "Datos",
    title: "Modelado, pipelines y análisis.",
    detail:
      "Del esquema al pipeline: PostgreSQL, MongoDB, Redis y ETL para que el dato sea utilizable.",
    tools: ["PostgreSQL", "MongoDB", "Redis", "ETL"],
  },
  {
    label: "Inteligencia y operación",
    title: "IA dentro de un sistema operable.",
    detail:
      "LLMs, RAG, agentes y automatización sobre AWS, Docker y CI/CD. La IA no vive fuera de la infraestructura.",
    tools: ["LLMs", "RAG", "AWS", "Docker", "Kubernetes", "CI/CD"],
  },
];

export const JOB = {
  role: "Software Developer",
  company: "Analisis Survey Unit",
  location: "Madrid, España",
  period: "Marzo 2024 — Presente",
};

export const EXPERIENCE_LEAD =
  "Diseño, desarrollo y despliego APIs REST y microservicios con Java (Spring Boot), Node.js y Python (FastAPI) sobre AWS con Docker y Kubernetes. Construyo agentes de IA, arquitecturas RAG y pipelines de CI/CD que corren en producción.";

export const JOB_TAGS = [
  "Java",
  "Spring Boot",
  "Node.js",
  "Python",
  "FastAPI",
  "AWS",
  "Docker",
  "Kubernetes",
  "LLMs",
  "RAG",
  "CI/CD",
];

export const EDUCATION = [
  {
    label: "Especialización en IA y Big Data",
    value: "2025 — 2026",
    detail: "Machine Learning, Deep Learning, NLP y Big Data Analytics.",
  },
  {
    label: "Técnico Superior en DAM",
    value: "2022 — 2024",
    detail:
      "Java, Android, diseño de bases de datos y programación orientada a objetos.",
  },
];

export const NAV = [
  { href: "/work", label: "Sistemas" },
  { href: "/#practica", label: "Práctica" },
  { href: "/#registro", label: "Registro" },
  { href: "/about", label: "Sobre mí" },
  { href: "/contact", label: "Contacto" },
];
