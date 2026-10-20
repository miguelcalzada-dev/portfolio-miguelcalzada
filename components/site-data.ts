export type Project = {
  name: string;
  kind: string;
  url: string | null;
  repo: string;
  media: string | null;
};

export const SITE = {
  name: "Miguel Ángel Calzada Martín",
  shortName: "Miguel Ángel Calzada",
  brand: "Miguel Ángel",
  role: "Desarrollador Full-Stack · IA & Big Data",
  word: "CALZADA",
  city: "Madrid, España",
  email: "miguelcalzada2004@gmail.com",
  phone: "+34 665 17 88 25",
  phoneHref: "+34665178825",
  github: "https://github.com/miguelcalzada-dev",
  linkedin: "https://www.linkedin.com/in/miguel-calzada-04a19b24b",
  intro:
    "Desarrollador Full-Stack e IA en Madrid. Construyo y despliego APIs, microservicios y productos de datos reales.",
};

export const PROJECTS: Project[] = [
  {
    name: "ImpactDB MCP",
    kind: "Linaje de datos · MCP",
    url: "/impactdb",
    repo: "https://github.com/miguelcalzada-dev/data-lineage-mcp",
    media: "/work/impactdb.jpg",
  },
  {
    name: "Applied AI Solutions",
    kind: "Suite de IA aplicada",
    url: "/ai-lab",
    repo: "https://github.com/miguelcalzada-dev/applied-ai-engineering-showcase",
    media: "/work/ai-lab.jpg",
  },
  {
    name: "SQLSense AI",
    kind: "SQL con IA · WebAssembly",
    url: "/sqlsense",
    repo: "https://github.com/miguelcalzada-dev/sqlsense-ai",
    media: "/work/sqlsense.jpg",
  },
  {
    name: "Madrid Transit Pulse",
    kind: "Big Data · movilidad",
    url: "/madrid-transit",
    repo: "https://github.com/miguelcalzada-dev/madrid-transit-pulse",
    media: "/work/madrid-transit.jpg",
  },
];

export const STACK: { group: string; items: string[] }[] = [
  {
    group: "IA & Machine Learning",
    items: [
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
    ],
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

export const JOB = {
  role: "Software Developer",
  company: "Analisis Survey Unit",
  location: "Madrid, España",
  period: "Marzo 2024 – presente",
};

export const EXPERIENCE_LEAD =
  "Trabajo como Software Developer en Analisis Survey Unit (Madrid) desde marzo de 2024. Diseño, desarrollo y despliego APIs REST y microservicios con Java (Spring Boot), Node.js y Python (FastAPI) sobre AWS con Docker y Kubernetes, y construyo agentes de IA, arquitecturas RAG y pipelines de CI/CD que corren en producción.";

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

export const EDUCATION: { label: string; value: string; detail: string }[] = [
  {
    label: "Especialización en IA y Big Data",
    value: "2025 – 2026",
    detail: "Machine Learning, Deep Learning, NLP y Big Data Analytics.",
  },
  {
    label: "Técnico Superior en DAM",
    value: "2022 – 2024",
    detail: "Java, Android, diseño de bases de datos y programación orientada a objetos.",
  },
];
