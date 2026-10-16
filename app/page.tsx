"use client";

import { useState, useEffect, useRef } from "react";
import {
  motion,
  useInView,
  AnimatePresence,
  useScroll,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import {
  Code2,
  Brain,
  Database,
  Globe,
  Mail,
  MapPin,
  ChevronDown,
  ExternalLink,
  Send,
  X,
  Sparkles,
  GitBranch,
  Calendar,
  Building2,
  GraduationCap,
  Zap,
  Server,
  Cloud,
  Bot,
  Menu,
  Briefcase,
  TrendingUp,
  Layers,
  ArrowUp,
  Rocket,
  Network,
  Terminal,
  Cpu,
  BrainCircuit,
  Workflow,
  Gauge,
  Phone,
} from "lucide-react";

/* ──────────────────────────────────────────────
   BRAND ICONS (logos reales de marca)
────────────────────────────────────────────── */
function BrandIcon({
  name,
  size = 18,
}: {
  name: "github" | "linkedin";
  size?: number;
}) {
  if (name === "github") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.06-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.62-2.8 5.64-5.48 5.94.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.21.7.82.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5Z" />
      </svg>
    );
  }
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

/* ──────────────────────────────────────────────
   DATA
────────────────────────────────────────────── */
const CV_DATA = {
  name: "Miguel Angel Calzada Martín",
  role: "Software Developer · IA & Big Data",
  location: "Madrid, España",
  availability: "Disponible · Remoto / Híbrido",
  email: "miguelcalzada2004@gmail.com",
  phone: "+34 665 17 88 25",
  github: "https://github.com/miguelcalzada-dev",
  linkedin: "https://www.linkedin.com/in/miguel-calzada-04a19b24b",
  summary:
    "Desarrollador de Software apasionado por la IA y el Big Data. Especializado en arquitecturas de microservicios, desarrollo Full-Stack y pipelines de datos.",
  experience: [
    {
      role: "Software Developer",
      company: "Analisis Survey Unit",
      location: "Madrid, España",
      period: "Marzo 2024 – Presente",
      type: "Jornada completa",
      description:
        "Diseño, desarrollo y despliegue de APIs REST y arquitecturas de microservicios con Java (Spring Boot), Node.js y Python (FastAPI). Soluciones cloud en AWS con entornos contenerizados, agentes de IA basados en LLMs, arquitecturas RAG y pipelines de CI/CD en producción.",
      highlights: [
        "APIs REST y microservicios con Java (Spring Boot), Node.js y Python (FastAPI)",
        "Despliegue y operación en AWS con Docker y Kubernetes",
        "Agentes de IA y LLMs (Gemini, Claude): orquestación, memoria conversacional y RAG",
        "CI/CD con GitHub Actions y despliegue automatizado (AWS, Railway, Render)",
        "Seguridad de datos, autenticación y control de accesos en entornos exigentes",
      ],
      stack: ["Java", "Spring Boot", "Node.js", "Python", "FastAPI", "AWS", "Docker", "Kubernetes", "LLMs", "RAG", "CI/CD"],
    },
  ],
  education: [
    {
      title: "Especialización en Inteligencia Artificial y Big Data",
      institution: "Formación Superior",
      period: "2025 – 2026",
      highlights: ["Machine Learning", "Deep Learning", "NLP", "Big Data Analytics"],
    },
    {
      title: "Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)",
      institution: "Instituto Técnico",
      period: "2022 – 2024",
      highlights: ["Java", "Android", "Diseño de BD", "Programación Orientada a Objetos"],
    },
  ],
  skills: {
    ai: {
      label: "IA & Machine Learning",
      icon: "brain",
      color: "#8b5cf6",
      items: ["Machine Learning", "Deep Learning", "NLP", "TensorFlow", "PyTorch", "Scikit-learn"],
    },
    web: {
      label: "Frontend & Web",
      icon: "globe",
      color: "#22d3ee",
      items: ["React", "Next.js", "TypeScript", "HTML/CSS", "Tailwind CSS", "GraphQL"],
    },
    backend: {
      label: "Backend & APIs",
      icon: "server",
      color: "#6366f1",
      items: ["Node.js", "Java / Spring Boot", ".NET Core", "Flask", "REST APIs", "RabbitMQ"],
    },
    data: {
      label: "Bases de Datos",
      icon: "database",
      color: "#10b981",
      items: ["PostgreSQL", "MongoDB", "Redis", "SQL", "ETL Pipelines", "Data Engineering"],
    },
    devops: {
      label: "DevOps & Cloud",
      icon: "cloud",
      color: "#f59e0b",
      items: ["Docker", "Kubernetes", "CI/CD", "Git", "Linux", "Microservicios"],
    },
  },
  projects: [
    {
      name: "Applied AI Solutions",
      description:
        "Portfolio interactivo de proyectos de IA aplicada: chat con Gemini, visión artificial, RAG, NLP y prompt engineering, todo integrado en una sola plataforma desplegada en producción.",
      stack: ["FastAPI", "Python", "Gemini API", "HTML", "CSS", "JavaScript"],
      type: "Desplegado",
      color: "#6366f1",
      github: "https://github.com/miguelcalzada-dev/applied-ai-engineering-showcase",
      url: "/ai-lab",
    },
    {
      name: "Madrid Transit Pulse",
      description:
        "Plataforma de visualización y análisis de Big Data sobre el tránsito y movilidad en Madrid.",
      stack: ["Next.js", "React", "Big Data", "Data Visualization"],
      type: "Desplegado",
      color: "#3b82f6",
      github: "https://github.com/miguelcalzada-dev/madrid-transit-pulse",
      url: "/madrid-transit",
    },
    {
      name: "SQLSense AI",
      description:
        "Aprende SQL hablando con IA. Traduce lenguaje natural a SQL y viceversa, con un laboratorio efímero de base de datos SQLite que vive en el navegador gracias a WebAssembly. Incluye editor SQL libre, retos guiados y modo dual IA con fallback local.",
      stack: ["Next.js", "TypeScript", "SQLite WASM", "OpenAI", "Framer Motion", "Tailwind CSS"],
      type: "Desplegado",
      color: "#ec4899",
      github: "https://github.com/miguelcalzada-dev/sqlsense-ai",
      url: "/sqlsense",
    },
    {
      name: "ImpactDB MCP",
      description:
        "Analizador de linaje de datos e impacto de cambios para PostgreSQL. Conecta tu base, pregunta en lenguaje natural qué se rompería antes de un ALTER / DROP / RENAME y lo visualiza en un grafo interactivo. Expone 4 herramientas del estándar Model Context Protocol (MCP) listas para agentes externos.",
      stack: ["Next.js", "TypeScript", "PostgreSQL", "MCP", "Groq", "React Flow"],
      type: "Desplegado",
      color: "#14b8a6",
      github: "https://github.com/miguelcalzada-dev/data-lineage-mcp",
      url: "/impactdb",
    },
    {
      name: "FitCity",
      description:
        "Plataforma Full Stack orientada al fitness: gestión de usuarios, check-in en gimnasios, validación de PRs de Powerlifting mediante IA y rankings de la comunidad. Frontend Angular 19 + TailwindCSS, backend FastAPI con Supabase (PostgreSQL).",
      stack: ["Angular 19", "TailwindCSS", "FastAPI", "Python", "Supabase", "PostgreSQL"],
      type: "En Desarrollo",
      color: "#10b981",
      github: "https://github.com/FitCity-Team/FitCity",
      url: null,
    },
    {
      name: "Barber Books Template",
      description:
        "Plantilla web moderna y elegante para barberías y peluquerías premium. Permite mostrar servicios, portafolio y equipo de barberos, incluyendo un sistema integrado para agenciar y gestionar citas de clientes de forma rápida.",
      stack: ["HTML", "CSS", "JavaScript"],
      type: "Sin Desplegar",
      color: "#f59e0b",
      github: "https://github.com/miguelcalzada-dev/barber-books-template",
      url: null,
    },
    {
      name: "Spotify Voice Assistant",
      description:
        "Asistente de voz offline para Windows que controla Spotify mediante comandos de voz sin interrumpir el flujo de trabajo. Activa con la palabra \"asistente\" y ofrece más de 20 interacciones para gestionar la reproducción sin conexión a internet.",
      stack: ["Python", "SpeechRecognition", "Spotipy", "Windows"],
      type: "Escritorio",
      color: "#22d3ee",
      github: "https://github.com/miguelcalzada-dev/spotify_voice_assistant",
      url: null,
    },
  ],
};

/* ──────────────────────────────────────────────
   AI CHATBOT LOGIC
────────────────────────────────────────────── */
const BOT_KB: { test: RegExp; reply: string }[] = [
  {
    test: /\b(hola|buenas|hey|hello|hi|saludos)\b|qué tal|que tal|cómo est|como est/,
    reply:
      "¡Hola! 👋 Soy el asistente de **Miguel Angel**. Puedo contarte sobre su perfil, experiencia, formación, stack técnico, proyectos, disponibilidad, idiomas o cómo contactarle. ¿Qué quieres saber?",
  },
  {
    test: /quién es|quien es|quién eres|quien eres|cuéntame|cuentame|sobre miguel|sobre ti|preséntate|presentate|perfil|resumen|quién es él/,
    reply:
      "👨‍💻 **Miguel Angel Calzada Martín** es un desarrollador **Backend & Cloud** con sede en Madrid. Diseña e implementa APIs REST y microservicios, despliega soluciones en **AWS** y trabaja con **agentes de IA basados en LLMs**, arquitecturas **RAG** y pipelines de **CI/CD**. Está especializado en Inteligencia Artificial y Big Data, con varios proyectos desplegados en producción.",
  },
  {
    test: /experiencia|trabaj|empleo|empresa|analisis survey|trayectoria|actualidad|puesto|cargo|curro/,
    reply:
      "💼 Trabaja en **Analisis Survey Unit** (Madrid) desde marzo de 2024, como **Software Developer** especializado en **Backend & Cloud**:\n• **APIs REST y microservicios** con Java (Spring Boot), Node.js y Python (FastAPI)\n• **AWS y cloud**: Docker, Kubernetes, despliegue y operación de servicios\n• **Agentes de IA y LLMs** (Gemini, Claude): orquestación, memoria conversacional y RAG\n• **CI/CD**: GitHub Actions y despliegue automatizado (AWS, Railway, Render)\n• **Seguridad**: autenticación, control de accesos y buenas prácticas en entornos exigentes",
  },
  {
    test: /formaci|estudi|educaci|título|titulo|universidad|instituto|\bdam\b|curso|especializaci|teide|académic|academic|titulaci/,
    reply:
      "🎓 Formación:\n• **Curso de Especialización en Inteligencia Artificial y Big Data** (Sep 2025 – May 2026): Machine Learning, Deep Learning, NLP, agentes de IA y gestión de datos masivos.\n• **Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)** (2022 – 2024, Teide IV): desarrollo de software, arquitecturas backend, bases de datos y programación orientada a objetos.",
  },
  {
    test: /madrid transit|transit|movilidad|cercanías|cercanias|gtfs|flota/,
    reply:
      "🚆 **Madrid Transit Pulse**: plataforma de visualización y análisis de Big Data sobre el tránsito y la movilidad en Madrid, con mapas en vivo, alertas y analítica. Está desplegada y puedes abrirla desde la sección de proyectos.",
  },
  {
    test: /sqlsense|\bsql\b|sqlite/,
    reply:
      "🧮 **SQLSense AI**: aprende SQL conversando con IA. Traduce lenguaje natural a SQL y viceversa, con un laboratorio efímero de SQLite que vive en el navegador gracias a WebAssembly. Incluye editor SQL, retos guiados y modo dual IA.",
  },
  {
    test: /ai lab|ai-lab|applied ai|showcase|visión por computador|prompt engineering/,
    reply:
      "🤖 **Applied AI Solutions (AI Project Showcase)**: portfolio interactivo de IA con chat con Gemini, visión por computador, RAG, NLP y prompt engineering, todo desplegado en producción.",
  },
  {
    test: /impactdb|impact db|linaje|lineage|\bmcp\b|model context protocol/,
    reply:
      "🧬 **ImpactDB MCP**: analizador de linaje de datos e impacto de cambios para PostgreSQL. Pregunta en lenguaje natural qué se rompería antes de un `ALTER` / `DROP` / `RENAME` y lo ves en un grafo interactivo de dependencias. Expone 4 herramientas del estándar **Model Context Protocol (MCP)** para agentes externos. Está desplegado y puedes abrirlo desde la sección de proyectos.",
  },
  {
    test: /fitcity|fitness|\bgym\b|barber|spotify|asistente de voz/,
    reply:
      "📦 Otros proyectos: **FitCity** (plataforma fitness Full Stack con Angular 19, FastAPI y Supabase), **Barber Books Template** (plantilla web para barberías con sistema de reservas) y **Spotify Voice Assistant** (asistente de voz offline para Windows). Están listados en la sección de proyectos.",
  },
  {
    test: /proyecto|project|portafolio|portfolio|repositori|\brepo\b|qué ha construido|qué has hecho/,
    reply:
      "🚀 Proyectos destacados:\n• **Applied AI Solutions** — IA con Gemini, visión, RAG y NLP (desplegado)\n• **Madrid Transit Pulse** — Big Data y visualización de la movilidad en Madrid\n• **SQLSense AI** — aprende SQL con IA y SQLite WASM en el navegador\n• **ImpactDB MCP** — linaje de datos e impacto de cambios en PostgreSQL con herramientas MCP (desplegado)\n• **FitCity** — plataforma fitness Full Stack (Angular + FastAPI + Supabase)\n• **Barber Books Template** — plantilla web para barberías con reservas\n• **Spotify Voice Assistant** — asistente de voz offline para Windows\nEn la sección de proyectos tienes el detalle y los enlaces a cada uno.",
  },
  {
    test: /cloud|\baws\b|\bec2\b|\bs3\b|\blambda\b|infraestructura|\brailway\b|\brender\b|serverless/,
    reply:
      "☁️ **Cloud & AWS**: despliegue y operación de servicios en **AWS** (EC2, S3, Lambda), entornos contenerizados con **Docker** y **Kubernetes**, y despliegue automatizado en **Railway** y **Render**, con foco en disponibilidad y seguridad en producción.",
  },
  {
    test: /devops|ci\/cd|pipeline|github actions|contenedor|kubernetes|\bk8s\b|docker|automatizaci|despliegue/,
    reply:
      "🔧 **DevOps & CI/CD**: pipelines con **GitHub Actions**, control de versiones con **Git/GitHub**, **Docker** y **Kubernetes**, y despliegue automatizado en cloud (AWS, Railway, Render), reduciendo tiempos de entrega y asegurando calidad en cada release.",
  },
  {
    test: /inteligencia artificial|\bia\b|\bml\b|machine learning|deep learning|\bnlp\b|llm|gemini|claude|\brag\b|agente|embedding|vectorial|tensorflow|pytorch|visión|vision|big data/,
    reply:
      "🧠 **IA & Agentes**: agentes de IA y **LLMs (Gemini, Claude)**, arquitecturas **RAG**, orquestación de flujos, memoria conversacional, **NLP**, **embeddings** y bases de datos vectoriales, además de Machine Learning y Deep Learning (especialización en IA y Big Data). Puedes probar varios de estos proyectos en el **AI Project Showcase**.",
  },
  {
    test: /base de datos|postgres|mongo|mysql|sql server|firebase|redis|bbdd/,
    reply:
      "🗄️ **Bases de datos**: PostgreSQL, MongoDB, MySQL, SQL Server, Firebase y bases de datos vectoriales (para RAG).",
  },
  {
    test: /backend|\bapi\b|\brest\b|microservicio|spring|\bnode\b|fastapi|flask|\bjava\b|\bpython\b|autenticaci|seguridad/,
    reply:
      "⚙️ **Backend & APIs**: Java (**Spring Boot**), **Node.js** y **Python** (FastAPI, Flask), APIs REST, arquitecturas de microservicios, autenticación y seguridad.",
  },
  {
    test: /frontend|react|next\.?js|angular|typescript|javascript|html|css|tailwind|interfaz/,
    reply:
      "🎨 **Frontend**: React, Next.js, Angular, TypeScript, JavaScript, HTML5 y CSS3 (y TailwindCSS). Este mismo portfolio está hecho con Next.js + Tailwind.",
  },
  {
    test: /stack|tecnolog|herramienta|lenguaje|framework|competencia|habilidad|skill|experto|qué sabe|qué conoce/,
    reply:
      "🧰 **Stack técnico**:\n• **Cloud & AWS**: AWS (EC2, S3, Lambda), Docker, Kubernetes, Railway, Render\n• **Backend & APIs**: Java (Spring Boot), Node.js, Python (FastAPI, Flask), REST, microservicios\n• **IA & Agentes**: LLMs (Gemini, Claude), RAG, NLP, embeddings, bases de datos vectoriales\n• **DevOps & CI/CD**: GitHub Actions, Git/GitHub, Docker, Kubernetes\n• **Datos**: PostgreSQL, MongoDB, MySQL, SQL Server, Firebase\n• **Frontend**: React, Next.js, Angular, TypeScript, HTML5, CSS3",
  },
  {
    test: /idioma|inglés|ingles|english|\bb2\b|español|espanol/,
    reply:
      "🌍 Idiomas: **español** nativo e **inglés B2** (competencia profesional para entornos técnicos: documentación, reuniones y equipos internacionales).",
  },
  {
    test: /ubicaci|ubicado|dónde|donde|madrid|remoto|híbrido|hibrido|disponib|contrat|ofert|incorporaci|inmediat|presencial/,
    reply:
      "📍 Está en **Madrid, España**, con **disponibilidad inmediata** para trabajo **remoto, híbrido o presencial**. Escríbele a miguelcalzada2004@gmail.com si quieres hablar de una oportunidad.",
  },
  {
    test: /salario|sueldo|remuneraci|pretensi|cuánto cobra|cuanto cobra/,
    reply:
      "💰 La banda salarial no está publicada; lo mejor es comentarlo directamente. Escríbele a **miguelcalzada2004@gmail.com**.",
  },
  {
    test: /contact|email|correo|mensaje|hablar|llam|teléfono|telefono|whatsapp|linkedin|github|escrib/,
    reply:
      "📬 Contacto:\n• **Email**: miguelcalzada2004@gmail.com\n• **LinkedIn**: linkedin.com/in/miguel-calzada-04a19b24b\n• **GitHub**: github.com/miguelcalzada-dev\n• **Teléfono**: +34 665 17 88 25\n\nAbierto a nuevas oportunidades y colaboraciones.",
  },
  {
    test: /\bcv\b|currículum|curriculum|descargar|\bpdf\b/,
    reply:
      "📄 El CV está disponible bajo petición: escríbele a **miguelcalzada2004@gmail.com** y te lo envía en PDF.",
  },
  {
    test: /equipo|soft skill|comunicaci|metodolog|scrum|agile|ágil|colabora|liderazgo/,
    reply:
      "🤝 Trabaja en equipo con coordinación técnica, control de versiones (Git/GitHub) y seguimiento de tareas, en entornos de alta exigencia con foco en calidad y buenas prácticas.",
  },
];

function getBotResponse(message: string): string {
  const msg = message.toLowerCase().trim();
  for (const item of BOT_KB) {
    if (item.test.test(msg)) return item.reply;
  }
  return "🤔 No estoy seguro de eso. Puedo contarte sobre **experiencia**, **formación**, **stack técnico**, **proyectos**, **disponibilidad**, **idiomas** o **contacto**. ¿Sobre qué quieres saber?";
}

/* ──────────────────────────────────────────────
   ANIMATION VARIANTS & HELPERS
────────────────────────────────────────────── */
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

const stagger: Variants = {
  visible: { transition: { staggerChildren: 0.12 } },
};

function AnimSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();
  return (
    <motion.div
      ref={ref}
      variants={stagger}
      initial={reduce ? "visible" : "hidden"}
      animate={inView || reduce ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ──────────────────────────────────────────────
   MARQUEE
────────────────────────────────────────────── */
function Marquee({
  children,
  duration = 34,
  reverse = false,
  gap = "2.5rem",
  className = "",
}: {
  children: React.ReactNode;
  duration?: number;
  reverse?: boolean;
  gap?: string;
  className?: string;
}) {
  const trackStyle = { "--marquee-duration": `${duration}s` } as React.CSSProperties;
  return (
    <div
      className={`marquee ${reverse ? "marquee--reverse" : ""} ${className}`}
      style={{ "--marquee-gap": gap } as React.CSSProperties}
      aria-hidden="true"
    >
      <div className="marquee__track" style={trackStyle}>
        {children}
      </div>
      <div className="marquee__track" style={trackStyle}>
        {children}
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────
   SCROLL PROGRESS
────────────────────────────────────────────── */
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return <motion.div className="scroll-progress" style={{ scaleX: scrollYProgress }} aria-hidden="true" />;
}

/* ──────────────────────────────────────────────
   COUNTER
────────────────────────────────────────────── */
function Counter({
  to,
  suffix = "",
  duration = 1.4,
}: {
  to: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const total = reduce ? 0 : duration;
    const tick = (now: number) => {
      const progress = total <= 0 ? 1 : Math.min((now - start) / (total * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * to));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration, reduce]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

/* ──────────────────────────────────────────────
   NAV
────────────────────────────────────────────── */
const NAV_ITEMS = [
  { id: "experiencia", label: "Experiencia" },
  { id: "skills", label: "Skills" },
  { id: "proyectos", label: "Proyectos" },
  { id: "contacto", label: "Contacto" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [active, setActive] = useState("experiencia");

  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(
      (el): el is HTMLElement => Boolean(el),
    );
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          backgroundColor: scrolled ? "var(--bg-card)" : "transparent",
          borderBottom: scrolled ? "4px solid var(--border-main)" : "4px solid transparent",
          transition: "all 0.1s ease",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 24px",
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          <a href="#hero" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", flexShrink: 0 }}>
            <div style={{ width: 32, height: 32, background: "var(--accent-primary)", border: "2px solid var(--border-main)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Code2 size={16} color="var(--bg-card)" />
            </div>
          </a>

          <div
            className="desktop-only"
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              alignItems: "center",
              gap: 12,
            }}
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="nav-link"
                style={{
                  fontSize: "0.78rem",
                  ...(active === item.id
                    ? { borderColor: "var(--border-main)", background: "var(--bg-card)" }
                    : {}),
                }}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="desktop-only" style={{ alignItems: "center", gap: 12 }}>
            <a
              href={CV_DATA.github}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
              aria-label="GitHub"
              title="GitHub"
              style={{ display: "inline-flex", alignItems: "center" }}
            >
              <BrandIcon name="github" size={17} />
            </a>
            <a
              href={CV_DATA.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
              aria-label="LinkedIn"
              title="LinkedIn"
              style={{ display: "inline-flex", alignItems: "center" }}
            >
              <BrandIcon name="linkedin" size={17} />
            </a>
            <a href={`mailto:${CV_DATA.email}`} className="btn-primary" style={{ padding: "8px 16px", fontSize: "0.8rem" }}>
              <Mail size={14} />
              Contacto
            </a>
          </div>

          <button
            className="mobile-only"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Abrir menú"
            style={{
              width: 40, height: 40,
              background: "var(--bg-card)",
              border: "2px solid var(--border-main)",
              alignItems: "center", justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <Menu size={20} color="var(--text-primary)" />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 100,
              background: "var(--bg-primary)",
              display: "flex",
              flexDirection: "column",
              padding: 24,
            }}
          >
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Cerrar menú"
                style={{
                  width: 48, height: 48,
                  background: "var(--bg-card)",
                  border: "2px solid var(--border-main)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <X size={24} color="var(--text-primary)" />
              </button>
            </div>
            <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 28 }}>
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "2.5rem",
                    color: "var(--text-primary)",
                    textDecoration: "none",
                    textTransform: "uppercase",
                  }}
                >
                  {item.label}
                </a>
              ))}
              <a
                href={`mailto:${CV_DATA.email}`}
                className="btn-primary"
                onClick={() => setMobileMenuOpen(false)}
                style={{ padding: "16px 32px", fontSize: "1.2rem", marginTop: 16 }}
              >
                <Mail size={18} />
                Contactar
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ──────────────────────────────────────────────
   HERO
────────────────────────────────────────────── */
function Hero() {
  const reduce = useReducedMotion();
  const line = (i: number): Variants => ({
    hidden: { y: "115%" },
    visible: { y: 0, transition: { duration: 0.9, ease: EASE, delay: 0.1 + i * 0.12 } },
  });

  return (
    <section
      id="hero"
      className="brutalist-section"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
        borderBottom: "4px solid var(--border-main)",
      }}
    >
      <div style={{ maxWidth: 900, position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: reduce ? 0 : 0.2 }}
          style={{ marginBottom: 32 }}
        >
          <span
            className="tag-chip"
            style={{ fontSize: "0.85rem", padding: "8px 16px", background: "var(--bg-card) !important" }}
          >
            <div className="dot-glow" style={{ background: "var(--success)" }} />
            DISPONIBLE PARA NUEVAS OPORTUNIDADES
          </span>
        </motion.div>

        <h1
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(3.5rem, 8vw, 7rem)",
            lineHeight: 1,
            color: "var(--text-primary)",
            margin: "0 0 24px 0",
            letterSpacing: "-0.02em",
            textTransform: "uppercase",
          }}
        >
          <span className="reveal-line">
            <motion.span
              style={{ display: "block" }}
              variants={line(0)}
              initial={reduce ? "visible" : "hidden"}
              animate="visible"
            >
              MIGUEL ANGEL
            </motion.span>
          </span>
          <span className="reveal-line">
            <motion.span
              style={{ display: "block", color: "var(--accent-primary)" }}
              variants={line(1)}
              initial={reduce ? "visible" : "hidden"}
              animate="visible"
            >
              CALZADA
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: reduce ? 0 : 0.45 }}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.8rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.14em",
            color: "var(--text-muted)",
            margin: "0 auto 24px",
            maxWidth: 640,
          }}
        >
          IA &amp; Big Data · Microservicios · Full-Stack · DevOps
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: reduce ? 0 : 0.55 }}
          style={{
            fontSize: "clamp(1.05rem, 2vw, 1.3rem)",
            color: "var(--text-secondary)",
            maxWidth: 680,
            margin: "0 auto 40px",
            lineHeight: 1.6,
          }}
        >
          Desarrollador de Software especializado en{" "}
          <strong style={{ color: "var(--text-primary)" }}>Inteligencia Artificial</strong> y{" "}
          <strong style={{ color: "var(--text-primary)" }}>Big Data</strong>. Arquitecturas de
          microservicios, Full-Stack &amp; DevOps.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: reduce ? 0 : 0.7 }}
          style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, flexWrap: "wrap" }}
        >
          <a href="#proyectos" className="btn-primary" style={{ padding: "16px 32px", fontSize: "1rem" }}>
            <Sparkles size={18} />
            Ver Proyectos
          </a>
          <a href={`mailto:${CV_DATA.email}`} className="btn-secondary" style={{ padding: "16px 32px", fontSize: "1rem" }}>
            <Mail size={18} />
            Contactar
          </a>
          <a href={CV_DATA.linkedin} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ padding: "16px 32px", fontSize: "1rem" }} aria-label="LinkedIn">
            <BrandIcon name="linkedin" size={18} />
            LinkedIn
          </a>
          <a href={CV_DATA.github} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ padding: "16px 32px", fontSize: "1rem" }} aria-label="GitHub">
            <BrandIcon name="github" size={18} />
            GitHub
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{
          position: "absolute",
          bottom: 40,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          color: "var(--text-muted)",
        }}
      >
        <span className="label-text" style={{ fontSize: "0.7rem" }}>SCROLL</span>
        <motion.div
          animate={reduce ? undefined : { y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   STATS
────────────────────────────────────────────── */
function Stats() {
  const deployed = CV_DATA.projects.filter((p) => p.type === "Desplegado").length;
  const areas = Object.keys(CV_DATA.skills).length;
  const items = [
    { icon: <Briefcase size={18} />, value: 2, suffix: "+", label: "Años de experiencia" },
    { icon: <Layers size={18} />, value: CV_DATA.projects.length, suffix: "", label: "Proyectos construidos" },
    { icon: <Rocket size={18} />, value: deployed, suffix: "", label: "En producción" },
    { icon: <TrendingUp size={18} />, value: areas, suffix: "", label: "Áreas de stack" },
  ];

  return (
    <section aria-label="Resumen profesional" style={{ borderBottom: "4px solid var(--border-main)", background: "var(--bg-tertiary)" }}>
      <div
        style={{
          maxWidth: 1148,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 4,
          background: "var(--border-main)",
        }}
      >
        {items.map((item) => (
          <div key={item.label} className="stat-cell">
            <div style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--accent-primary)" }}>
              {item.icon}
              <span className="label-text" style={{ fontSize: "0.65rem", color: "var(--text-muted)" }}>
                {item.label}
              </span>
            </div>
            <span className="stat-value">
              <Counter to={item.value} suffix={item.suffix} />
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   EXPERIENCE & EDUCATION (TRAYECTORIA)
────────────────────────────────────────────── */
function Trayectoria() {
  return (
    <section id="experiencia" className="brutalist-section">
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <AnimSection>
          <motion.div variants={fadeUp} style={{ marginBottom: 56, textAlign: "center" }}>
            <p className="label-text" style={{ color: "var(--accent-primary)", marginBottom: 12 }}>
              Trayectoria
            </p>
            <h2 className="brutalist-heading">Experiencia &amp; Formación</h2>
            <p style={{ color: "var(--text-secondary)", maxWidth: 520, margin: "0 auto" }}>
              Construyendo sistemas escalables y soluciones de datos inteligentes en entornos de producción reales.
            </p>
          </motion.div>

          <div>
            {CV_DATA.experience.map((exp) => (
              <motion.div
                key={exp.company}
                variants={fadeUp}
                className="timeline-item"
                style={{ paddingBottom: 44 }}
              >
                <span className="timeline-dot timeline-dot--active" />
                <div className="brutalist-grid-box" style={{ padding: 36, position: "relative", overflow: "hidden" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      gap: 16,
                      flexWrap: "wrap",
                      marginBottom: 24,
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                      <div
                        style={{
                          width: 52,
                          height: 52,
                          background: "var(--bg-secondary)",
                          border: "2px solid var(--border-main)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <Building2 size={22} color="var(--accent-primary)" />
                      </div>
                      <div>
                        <p className="label-text" style={{ fontSize: "0.6rem", color: "var(--text-muted)", marginBottom: 6 }}>
                          Experiencia profesional
                        </p>
                        <h3 style={{ fontSize: "1.2rem", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 4 }}>
                          {exp.role}
                        </h3>
                        <p style={{ color: "var(--accent-primary)", fontWeight: 600, marginBottom: 4 }}>{exp.company}</p>
                        <div style={{ display: "flex", alignItems: "center", gap: 12, color: "var(--text-muted)", fontSize: "0.82rem" }}>
                          <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                            <MapPin size={12} />
                            {exp.location}
                          </span>
                          <span>·</span>
                          <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                            <Calendar size={12} />
                            {exp.period}
                          </span>
                        </div>
                      </div>
                    </div>

                    <span
                      style={{
                        padding: "4px 12px",
                        borderRadius: 999,
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        background: "rgba(16,185,129,0.1)",
                        border: "1px solid rgba(16,185,129,0.2)",
                        color: "#34d399",
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                      }}
                    >
                      <div className="dot-glow" style={{ width: 6, height: 6 }} />
                      Activo
                    </span>
                  </div>

                  <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: 28, fontSize: "0.95rem" }}>
                    {exp.description}
                  </p>

                  <div style={{ marginBottom: 24 }}>
                    <p style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>
                      Responsabilidades
                    </p>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 8 }}>
                      {exp.highlights.map((h) => (
                        <div
                          key={h}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                            color: "var(--text-secondary)",
                            fontSize: "0.875rem",
                          }}
                        >
                          <div
                            style={{
                              width: 20,
                              height: 20,
                              background: "rgba(255,62,0,0.12)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexShrink: 0,
                            }}
                          >
                            <Zap size={10} color="var(--accent-primary)" />
                          </div>
                          {h}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {exp.stack.map((s) => (
                      <span key={s} className="tag-chip">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}

            {CV_DATA.education.map((edu, i) => (
              <motion.div
                key={edu.title}
                variants={fadeUp}
                className="timeline-item"
                style={{ paddingBottom: i === CV_DATA.education.length - 1 ? 0 : 44 }}
              >
                <span className="timeline-dot" />
                <div className="brutalist-grid-box" style={{ padding: 28 }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        background: "rgba(16,185,129,0.1)",
                        border: "2px solid var(--border-main)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <GraduationCap size={18} color="#10b981" />
                    </div>
                    <div>
                      <p className="label-text" style={{ fontSize: "0.6rem", color: "var(--text-muted)", marginBottom: 6 }}>
                        Formación académica · {edu.institution}
                      </p>
                      <h4 style={{ fontWeight: 700, fontSize: "0.95rem", marginBottom: 4, letterSpacing: "-0.01em" }}>{edu.title}</h4>
                      <p style={{ color: "var(--text-muted)", fontSize: "0.8rem", marginBottom: 12 }}>{edu.period}</p>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                        {edu.highlights.map((h) => (
                          <span
                            key={h}
                            style={{
                              padding: "3px 10px",
                              fontSize: "0.7rem",
                              fontWeight: 500,
                              background: "rgba(16,185,129,0.1)",
                              border: "1px solid rgba(16,185,129,0.2)",
                              color: "#0f9d58",
                            }}
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimSection>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   SKILLS BENTO
────────────────────────────────────────────── */
const SKILL_ICONS: Record<string, React.ReactNode> = {
  brain: <Brain size={20} />,
  globe: <Globe size={20} />,
  server: <Server size={20} />,
  database: <Database size={20} />,
  cloud: <Cloud size={20} />,
};

const SKILL_BLURB: Record<string, string> = {
  ai: "Modelos de Machine Learning, Deep Learning y agentes LLM con arquitecturas RAG en producción.",
  web: "Interfaces modernas y aplicaciones full-stack con foco en rendimiento y accesibilidad.",
  backend: "APIs REST y microservicios escalables, seguros y listos para producción.",
  data: "Modelado, ETL y bases de datos relacionales y no relacionales.",
  devops: "Cloud, contenedores y entrega continua end-to-end.",
};

const ALL_TECH = Array.from(new Set(Object.values(CV_DATA.skills).flatMap((s) => s.items)));

function Skills() {
  const entries = Object.entries(CV_DATA.skills);

  return (
    <section id="skills" className="brutalist-section">
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <AnimSection>
          <motion.div variants={fadeUp} style={{ marginBottom: 56, textAlign: "center" }}>
            <p className="label-text" style={{ color: "var(--accent-primary)", marginBottom: 12 }}>
              Competencias
            </p>
            <h2 className="brutalist-heading">Stack Técnico</h2>
            <p style={{ color: "var(--text-secondary)", maxWidth: 520, margin: "0 auto" }}>
              Desde la capa de datos hasta el frontend, full-cycle engineering con enfoque en IA.
            </p>
          </motion.div>

          <div className="skills-bento">
            {entries.map(([key, skill]) => (
              <motion.div
                key={key}
                variants={fadeUp}
                className={`brutalist-grid-box skill-${key}`}
                style={{ padding: key === "ai" ? 30 : 22, display: "flex", flexDirection: "column" }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    background: `${skill.color}15`,
                    border: `2px solid ${skill.color}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 18,
                    color: skill.color,
                    flexShrink: 0,
                  }}
                >
                  {SKILL_ICONS[skill.icon]}
                </div>

                <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12, marginBottom: 12 }}>
                  <h3 style={{ fontWeight: 700, fontSize: key === "ai" ? "1.15rem" : "1rem", letterSpacing: "-0.01em" }}>
                    {skill.label}
                  </h3>
                  <span className="label-text" style={{ fontSize: "0.62rem", color: "var(--text-muted)", flexShrink: 0 }}>
                    {skill.items.length} tech
                  </span>
                </div>

                <p style={{ color: "var(--text-secondary)", fontSize: "0.85rem", lineHeight: 1.6, marginBottom: 18 }}>
                  {SKILL_BLURB[key]}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: "auto" }}>
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="tag-chip"
                      style={{
                        background: `${skill.color}12 !important`,
                        color: `color-mix(in srgb, ${skill.color} 68%, #111111) !important`,
                        borderColor: `${skill.color}55 !important`,
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeUp} style={{ marginTop: 28 }}>
            <Marquee duration={40} gap="0.75rem">
              {ALL_TECH.map((tech, i) => (
                <span key={`${tech}-${i}`} className="tag-chip" style={{ fontSize: "0.7rem" }}>
                  {tech}
                </span>
              ))}
            </Marquee>
          </motion.div>
        </AnimSection>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   PROJECTS
────────────────────────────────────────────── */
const PROJECT_ICONS: Record<string, React.ReactNode> = {
  "Applied AI Solutions": <BrainCircuit size={20} />,
  "Madrid Transit Pulse": <Network size={20} />,
  "SQLSense AI": <Terminal size={20} />,
  "ImpactDB MCP": <Workflow size={20} />,
  FitCity: <Gauge size={20} />,
  "Barber Books Template": <Layers size={20} />,
  "Spotify Voice Assistant": <Cpu size={20} />,
};

function Projects() {
  const types = ["Todos", ...Array.from(new Set(CV_DATA.projects.map((p) => p.type)))];
  const [filter, setFilter] = useState("Todos");
  const filtered = filter === "Todos" ? CV_DATA.projects : CV_DATA.projects.filter((p) => p.type === filter);

  return (
    <section id="proyectos" className="brutalist-section">
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <AnimSection>
          <motion.div variants={fadeUp} style={{ marginBottom: 40, textAlign: "center" }}>
            <p className="label-text" style={{ color: "var(--accent-primary)", marginBottom: 12 }}>
              Portafolio
            </p>
            <h2 className="brutalist-heading">Proyectos Destacados</h2>
            <p style={{ color: "var(--text-secondary)", maxWidth: 480, margin: "0 auto" }}>
              Soluciones que combinan ingeniería robusta con inteligencia artificial aplicada.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: EASE }}
            style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center", marginBottom: 36 }}
          >
            {types.map((type) => (
              <button
                key={type}
                type="button"
                className="filter-btn"
                data-active={filter === type}
                onClick={() => setFilter(type)}
              >
                {type}
                {type !== "Todos" && (
                  <span style={{ opacity: 0.65 }}>
                    {CV_DATA.projects.filter((p) => p.type === type).length}
                  </span>
                )}
              </button>
            ))}
          </motion.div>

          <div className="projects-grid">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.name}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, ease: EASE }}
                >
                  <article
                    className="project-card"
                    style={{ "--card-accent": project.color } as React.CSSProperties}
                  >
                    <span className="project-accent" aria-hidden="true" />

                    <div className="project-top">
                      <div
                        className="project-icon"
                        style={{ background: `${project.color}15`, borderColor: project.color, color: project.color }}
                      >
                        {PROJECT_ICONS[project.name] ?? <GitBranch size={20} />}
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 8 }}>
                        <span
                          className="tag-chip"
                          style={{
                            background: `${project.color}15 !important`,
                            color: `${project.color} !important`,
                            borderColor: `${project.color}40 !important`,
                          }}
                        >
                          {project.type}
                        </span>
                        <span className="label-text" style={{ fontSize: "0.6rem", color: "var(--text-muted)" }}>
                          {String(CV_DATA.projects.indexOf(project) + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </div>

                    <h3 className="project-title">{project.name}</h3>
                    <p className="project-desc">{project.description}</p>

                    <div className="project-foot">
                      <div className="project-stack">
                        {project.stack.map((s) => (
                          <span key={s} className="tag-chip">{s}</span>
                        ))}
                      </div>
                      <div className="project-actions">
                        {project.url && (
                          <a className="project-enter" href={project.url} aria-label={`Abrir ${project.name}`}>
                            Entrar
                            <ExternalLink size={14} />
                          </a>
                        )}
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Ver en GitHub"
                          aria-label={`${project.name} en GitHub`}
                        >
                          <BrandIcon name="github" size={15} />
                        </a>
                      </div>
                    </div>
                  </article>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </AnimSection>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   CONTACT
────────────────────────────────────────────── */
function Contact() {
  return (
    <section id="contacto" className="brutalist-section" style={{ borderBottom: "none" }}>
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <AnimSection>
          <motion.div variants={fadeUp} style={{ textAlign: "center" }}>
            <p className="label-text" style={{ color: "var(--accent-primary)", marginBottom: 12 }}>
              Contacto
            </p>
            <h2 className="brutalist-heading">¿Construimos algo juntos?</h2>
            <p style={{ color: "var(--text-secondary)", maxWidth: 540, margin: "0 auto 36px", lineHeight: 1.7 }}>
              Disponible para nuevas oportunidades en remoto, híbrido o presencial desde Madrid.
              Cuéntame tu proyecto o tu oferta y te respondo lo antes posible.
            </p>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, flexWrap: "wrap", marginBottom: 40 }}>
              <a href={`mailto:${CV_DATA.email}`} className="btn-primary" style={{ padding: "16px 32px", fontSize: "1rem" }}>
                <Mail size={18} />
                Escríbeme
              </a>
              <a href={CV_DATA.linkedin} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ padding: "16px 32px", fontSize: "1rem" }}>
                <BrandIcon name="linkedin" size={18} />
                LinkedIn
              </a>
              <a href={CV_DATA.github} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ padding: "16px 32px", fontSize: "1rem" }}>
                <BrandIcon name="github" size={18} />
                GitHub
              </a>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: 20,
                padding: "18px 24px",
                border: "2px dashed var(--border-main)",
                background: "var(--bg-card)",
                fontFamily: "var(--font-mono)",
                fontSize: "0.82rem",
                color: "var(--text-secondary)",
              }}
            >
              <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <MapPin size={15} color="var(--accent-primary)" />
                {CV_DATA.location}
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <Phone size={15} color="var(--accent-primary)" />
                {CV_DATA.phone}
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <Mail size={15} color="var(--accent-primary)" />
                {CV_DATA.email}
              </span>
            </div>
          </motion.div>
        </AnimSection>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   FOOTER
────────────────────────────────────────────── */
function Footer() {
  return (
    <footer style={{ borderTop: "4px solid var(--border-main)", background: "var(--bg-primary)" }}>
      <div style={{ borderBottom: "2px solid var(--border-main)", padding: "26px 0" }}>
        <Marquee duration={24} gap="2.5rem">
          {Array.from({ length: 6 }).map((_, i) => (
            <span
              key={i}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "2.5rem",
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.4rem, 4vw, 2.75rem)",
                textTransform: "uppercase",
                color: "var(--text-primary)",
                whiteSpace: "nowrap",
              }}
            >
              Open to opportunities
              <span style={{ color: "var(--accent-primary)" }}>✦</span>
            </span>
          ))}
        </Marquee>
      </div>

      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "20px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <p className="label-text" style={{ fontSize: "0.65rem", color: "var(--text-muted)" }}>
          © 2026 MIGUEL ANGEL CALZADA MARTÍN
        </p>

        <nav style={{ display: "flex", alignItems: "center", gap: 18, flexWrap: "wrap" }}>
          {NAV_ITEMS.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="nav-link" style={{ fontSize: "0.72rem" }}>
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#hero"
          aria-label="Volver arriba"
          title="Volver arriba"
          style={{
            width: 42,
            height: 42,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "var(--bg-card)",
            border: "2px solid var(--border-main)",
            boxShadow: "2px 2px 0 var(--border-main)",
            color: "var(--text-primary)",
            textDecoration: "none",
          }}
        >
          <ArrowUp size={18} />
        </a>
      </div>
    </footer>
  );
}

/* ──────────────────────────────────────────────
   AI CHATBOT + SPEED DIAL
────────────────────────────────────────────── */
interface Message {
  role: "user" | "bot";
  text: string;
  id: number;
}

function AIChatbot() {
  const [open, setOpen] = useState(false);
  const [dialOpen, setDialOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      role: "bot",
      text: "¡Hola! 👋 Soy el asistente IA de **Miguel Angel**. Pregúntame sobre su experiencia, stack técnico, formación, proyectos o disponibilidad. ¿En qué puedo ayudarte?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 100);
  }, [open]);

  function sendMessage() {
    const text = input.trim();
    if (!text) return;

    const userMsg: Message = { id: Date.now(), role: "user", text };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const response = getBotResponse(text);
      setIsTyping(false);
      setMessages((m) => [...m, { id: Date.now() + 1, role: "bot", text: response }]);
    }, 900 + Math.random() * 500);
  }

  function renderText(text: string) {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={`b-${i}`}>{part.slice(2, -2)}</strong>;
      }
      if (part.includes("\n")) {
        return (
          <span key={`s-${i}`}>
            {part.split("\n").map((line, j) => (
              <span key={`l-${i}-${j}`}>
                {j > 0 && <br />}
                {line}
              </span>
            ))}
          </span>
        );
      }
      return <span key={`t-${i}`}>{part}</span>;
    });
  }

  const suggestions = ["¿Cuál es tu experiencia?", "¿Qué tecnologías usas?", "¿Estás disponible?"];

  const quickActions: {
    key: string;
    label: string;
    icon: React.ReactNode;
    href?: string;
    external?: boolean;
    onClick?: () => void;
  }[] = [
    { key: "github", label: "GitHub", href: CV_DATA.github, external: true, icon: <BrandIcon name="github" size={19} /> },
    { key: "linkedin", label: "LinkedIn", href: CV_DATA.linkedin, external: true, icon: <BrandIcon name="linkedin" size={19} /> },
    { key: "email", label: "Email", href: `mailto:${CV_DATA.email}`, icon: <Mail size={20} /> },
    {
      key: "chat",
      label: "Pregúntale a mi IA",
      icon: <Sparkles size={19} />,
      onClick: () => {
        setOpen(true);
        setDialOpen(false);
      },
    },
  ];

  const fabButtonStyle: React.CSSProperties = {
    width: 50,
    height: 50,
    background: "var(--bg-card)",
    border: "3px solid var(--border-main)",
    boxShadow: "3px 3px 0 var(--border-main)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    color: "var(--text-primary)",
    textDecoration: "none",
    flexShrink: 0,
  };

  return (
    <>
      {!open && (
        <div
          style={{
            position: "fixed",
            bottom: 28,
            right: 28,
            zIndex: 100,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: 12,
          }}
        >
          <AnimatePresence>
            {dialOpen &&
              quickActions.map((action, i) =>
                action.href ? (
                  <motion.a
                    key={action.key}
                    href={action.href}
                    {...(action.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    aria-label={action.label}
                    title={action.label}
                    initial={{ opacity: 0, y: 14, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 14, scale: 0.8 }}
                    transition={{ delay: (quickActions.length - 1 - i) * 0.05, type: "spring", stiffness: 420, damping: 26 }}
                    whileHover={{ x: -2, y: -2 }}
                    style={fabButtonStyle}
                  >
                    {action.icon}
                  </motion.a>
                ) : (
                  <motion.button
                    key={action.key}
                    type="button"
                    onClick={action.onClick}
                    aria-label={action.label}
                    title={action.label}
                    initial={{ opacity: 0, y: 14, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 14, scale: 0.8 }}
                    transition={{ delay: (quickActions.length - 1 - i) * 0.05, type: "spring", stiffness: 420, damping: 26 }}
                    whileHover={{ x: -2, y: -2 }}
                    style={fabButtonStyle}
                  >
                    {action.icon}
                  </motion.button>
                ),
              )}
          </AnimatePresence>

          <motion.button
            id="ai-chat-button"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 2, type: "spring", stiffness: 300 }}
            onClick={() => setDialOpen((v) => !v)}
            aria-label="Abrir acciones de contacto"
            aria-expanded={dialOpen}
            style={{
              width: 60,
              height: 60,
              background: "var(--accent-primary)",
              border: "4px solid var(--border-main)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "4px 4px 0px var(--border-main)",
              color: "var(--bg-card)",
            }}
            whileHover={{ scale: 1.08, boxShadow: "8px 8px 0px var(--border-main)" }}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait" initial={false}>
              {dialOpen ? (
                <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <X size={26} />
                </motion.span>
              ) : (
                <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <Bot size={26} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      )}

      <AnimatePresence>
        {open && (
          <motion.div
            key="chat-window"
            id="ai-chat-window"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            style={{
              position: "fixed",
              bottom: 28,
              right: 28,
              zIndex: 100,
              width: 380,
              maxWidth: "calc(100vw - 48px)",
              overflow: "hidden",
              background: "var(--bg-card)",
              border: "4px solid var(--border-main)",
              boxShadow: "8px 8px 0px var(--border-main)",
              display: "flex",
              flexDirection: "column",
              maxHeight: "75vh",
            }}
          >
            <div
              style={{
                padding: "16px 20px",
                borderBottom: "4px solid var(--border-main)",
                background: "var(--bg-card)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    background: "var(--accent-primary)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Sparkles size={16} color="white" />
                </div>
                <div>
                  <p style={{ fontWeight: 700, fontSize: "0.9rem", lineHeight: 1 }}>
                    Pregúntale a mi IA
                  </p>
                  <p style={{ color: "var(--accent-primary)", fontSize: "0.72rem", marginTop: 2, fontWeight: 600 }}>
                    Asistente de Miguel Angel · Online
                  </p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Cerrar chat"
                style={{
                  background: "var(--bg-secondary)",
                  border: "2px solid var(--border-main)",
                  width: 32,
                  height: 32,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "var(--text-primary)",
                }}
              >
                <X size={15} />
              </button>
            </div>

            <div
              style={{
                flex: 1,
                overflowY: "auto",
                padding: "16px",
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  style={{
                    display: "flex",
                    justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
                  }}
                >
                  {msg.role === "bot" && (
                    <div
                      style={{
                        width: 24,
                        height: 24,
                        background: "var(--accent-primary)",
                        border: "2px solid var(--border-main)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: 8,
                        flexShrink: 0,
                        marginTop: 4,
                      }}
                    >
                      <Bot size={12} color="var(--bg-card)" />
                    </div>
                  )}
                  <div className={msg.role === "user" ? "chat-bubble-user" : "chat-bubble-bot"}>
                    {renderText(msg.text)}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div
                    style={{
                      width: 24, height: 24,
                      background: "var(--accent-primary)",
                      border: "2px solid var(--border-main)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}
                  >
                    <Bot size={12} color="var(--bg-card)" />
                  </div>
                  <div
                    className="chat-bubble-bot"
                    style={{ display: "flex", alignItems: "center", gap: 4, padding: "10px 14px" }}
                  >
                    <div className="typing-dot" style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--text-secondary)" }} />
                    <div className="typing-dot" style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--text-secondary)" }} />
                    <div className="typing-dot" style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--text-secondary)" }} />
                  </div>
                </div>
              )}

              <div ref={endRef} />
            </div>

            {messages.length === 1 && (
              <div style={{ padding: "0 16px 12px", display: "flex", flexWrap: "wrap", gap: 6 }}>
                {suggestions.map((s) => (
                  <button
                    key={s}
                    onClick={() => {
                      const trimmed = s.trim();
                      const userMsg: Message = { id: Date.now(), role: "user", text: trimmed };
                      setMessages((m) => [...m, userMsg]);
                      setIsTyping(true);
                      setTimeout(() => {
                        const response = getBotResponse(trimmed);
                        setIsTyping(false);
                        setMessages((m) => [...m, { id: Date.now() + 1, role: "bot", text: response }]);
                      }, 900 + Math.random() * 500);
                    }}
                    style={{
                      padding: "6px 12px",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      background: "var(--bg-secondary)",
                      border: "2px solid var(--border-main)",
                      color: "var(--text-primary)",
                      cursor: "pointer",
                      transition: "all 0.1s",
                      fontFamily: "var(--font-mono)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.background = "var(--accent-primary)";
                      (e.currentTarget as HTMLButtonElement).style.color = "var(--bg-card)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.background = "var(--bg-secondary)";
                      (e.currentTarget as HTMLButtonElement).style.color = "var(--text-primary)";
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            <div
              style={{
                padding: "12px 16px",
                borderTop: "4px solid var(--border-main)",
                display: "flex",
                gap: 8,
              }}
            >
              <input
                ref={inputRef}
                id="ai-chat-input"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Escribe tu pregunta..."
                style={{
                  flex: 1,
                  background: "var(--bg-primary)",
                  border: "2px solid var(--border-main)",
                  padding: "10px 14px",
                  fontSize: "0.875rem",
                  color: "var(--text-primary)",
                  outline: "none",
                  transition: "border-color 0.2s",
                }}
                onFocus={(e) => {
                  (e.currentTarget as HTMLInputElement).style.borderColor = "var(--accent-primary)";
                }}
                onBlur={(e) => {
                  (e.currentTarget as HTMLInputElement).style.borderColor = "var(--border-main)";
                }}
              />
              <button
                id="ai-chat-send"
                onClick={sendMessage}
                disabled={!input.trim()}
                aria-label="Enviar mensaje"
                style={{
                  width: 40,
                  height: 40,
                  background: input.trim() ? "var(--accent-primary)" : "var(--bg-secondary)",
                  border: "2px solid var(--border-main)",
                  cursor: input.trim() ? "pointer" : "default",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: input.trim() ? "white" : "var(--text-muted)",
                  transition: "all 0.2s",
                  flexShrink: 0,
                }}
              >
                <Send size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ──────────────────────────────────────────────
   ROOT PAGE
────────────────────────────────────────────── */
export default function Portfolio() {
  return (
    <main style={{ overflowX: "hidden", maxWidth: "100vw", width: "100%" }}>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Stats />
      <Trayectoria />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <AIChatbot />
    </main>
  );
}
