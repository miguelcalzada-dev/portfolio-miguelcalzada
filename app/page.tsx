"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence, type Variants, useScroll, useMotionValueEvent } from "framer-motion";
import {
  Code2,
  Brain,
  Database,
  Globe,
  GitFork,
  Link2,
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
  Languages,
  Menu,
} from "lucide-react";

/* ──────────────────────────────────────────────
   DATA
────────────────────────────────────────────── */
const CV_DATA = {
  name: "Miguel Angel Calzada Martín",
  role: "Software Developer · IA & Big Data",
  location: "Madrid, España",
  availability: "Disponible · Remoto / Híbrido",
  email: "miguelcalzada2004@gmail.com",
  github: "https://github.com/miguelcalzada-dev",
  linkedin: "https://linkedin.com/in/miguelcalzada",
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
        "Diseño e implementación de arquitecturas de microservicios escalables para análisis de datos a gran escala. Desarrollo Full-Stack con Node.js y React. Ingeniería de datos con PostgreSQL y MongoDB. Orquestación de servicios con Docker y Kubernetes.",
      highlights: [
        "Arquitecturas de microservicios con Node.js",
        "Desarrollo Full-Stack React + TypeScript",
        "Pipelines de datos con PostgreSQL / MongoDB",
        "DevOps: Docker, Kubernetes, RabbitMQ",
        "APIs RESTful y GraphQL",
      ],
      stack: ["Node.js", "React", "TypeScript", "PostgreSQL", "Docker", "Kubernetes", "RabbitMQ"],
    },
  ],
  education: [
    {
      title: "Especialización en Inteligencia Artificial y Big Data",
      institution: "Formación Superior",
      period: "2022 – 2024",
      highlights: ["Machine Learning", "Deep Learning", "NLP", "Big Data Analytics"],
    },
    {
      title: "Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)",
      institution: "Instituto Técnico",
      period: "2020 – 2022",
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
      name: "AI Survey Analytics Engine",
      description:
        "Motor de análisis inteligente de encuestas con procesamiento NLP para extracción automática de insights y visualización de datos en tiempo real.",
      stack: ["Node.js", "Python", "NLP", "PostgreSQL", "React"],
      type: "Producción",
      color: "#6366f1",
    },
    {
      name: "Microservices Data Platform",
      description:
        "Plataforma de microservicios para procesamiento masivo de datos con colas de mensajería, orquestación en Kubernetes y monitoreo avanzado.",
      stack: ["Node.js", "Docker", "Kubernetes", "RabbitMQ", "MongoDB"],
      type: "Arquitectura",
      color: "#8b5cf6",
    },
    {
      name: "Full-Stack BI Dashboard",
      description:
        "Dashboard de Business Intelligence con visualizaciones interactivas, filtros dinámicos y exportación de reportes en múltiples formatos.",
      stack: ["React", "TypeScript", "D3.js", "Node.js", "PostgreSQL"],
      type: "Full-Stack",
      color: "#22d3ee",
    },
    {
      name: "ML Pipeline Orchestrator",
      description:
        "Orquestador de pipelines de Machine Learning con entrenamiento distribuido, versionado de modelos y despliegue automatizado mediante CI/CD.",
      stack: ["Python", "Docker", "TensorFlow", "Flask", "Redis"],
      type: "ML/DevOps",
      color: "#10b981",
    },
  ],
};

/* ──────────────────────────────────────────────
   AI CHATBOT LOGIC
────────────────────────────────────────────── */
function getBotResponse(message: string): string {
  const msg = message.toLowerCase().trim();

  // experience
  if (msg.match(/experiencia|trabaj|empresa|analisis survey|trabajo actual|empleo/)) {
    return "💼 Actualmente trabajo como **Software Developer en Analisis Survey Unit** (Madrid) desde marzo de 2024. Me especializo en arquitecturas de microservicios, desarrollo Full-Stack con Node.js + React, ingeniería de datos con PostgreSQL/MongoDB y DevOps con Docker y Kubernetes.";
  }
  // education / studies
  if (msg.match(/estudi|formaci|título|educaci|universidad|instituto|dam|big data/)) {
    return "🎓 Tengo dos titulaciones principales:\n• **Especialización en IA y Big Data** — con enfoque en Machine Learning, Deep Learning y NLP.\n• **Técnico Superior en DAM** — Desarrollo de Aplicaciones Multiplataforma.\nEstas bases me permiten combinar el mundo del software con la inteligencia artificial.";
  }
  // tech stack
  if (msg.match(/tecnolog|stack|herramienta|lenguaje|framework|programación|código|node|react|docker|python|java/)) {
    return "⚙️ Mi stack principal:\n• **Frontend**: React, Next.js, TypeScript\n• **Backend**: Node.js, Java/Spring Boot, .NET Core, Flask\n• **Datos**: PostgreSQL, MongoDB, Redis\n• **DevOps**: Docker, Kubernetes, RabbitMQ, CI/CD\n• **IA**: Machine Learning, Deep Learning, NLP, TensorFlow, PyTorch";
  }
  // AI / ML
  if (msg.match(/inteligencia artificial|ia|machine learning|deep learning|nlp|tensorflow|pytorch|ml/)) {
    return "🧠 La IA es mi gran pasión. Tengo especialización formal en:\n• **Machine Learning** y modelos predictivos\n• **Deep Learning** con redes neuronales\n• **NLP** para procesamiento de lenguaje natural\n• **Big Data Analytics** para datasets a gran escala\nLo aplico directamente en mi trabajo en Analisis Survey Unit.";
  }
  // location / availability
  if (msg.match(/ubicaci|madrid|remoto|híbrido|disponib|contrat|ofert/)) {
    return "📍 Estoy basado en **Madrid, España** y estoy disponible para trabajo **remoto o híbrido**. Me adapto perfectamente a equipos distribuidos internacionalmente gracias a mi nivel de inglés B2.";
  }
  // languages (idiomas)
  if (msg.match(/idioma|inglés|english|b2|español/)) {
    return "🗣️ Hablo **español** como idioma nativo y tengo nivel **inglés B2** (intermedio-alto). Me desenvuelvo con fluidez en entornos técnicos internacionales, revisando documentación, participando en reuniones y colaborando con equipos globales.";
  }
  // devops
  if (msg.match(/devops|docker|kubernetes|ci\/cd|pipeline|deploy|desplieg/)) {
    return "🐳 En DevOps tengo experiencia práctica con:\n• **Docker** — containerización de aplicaciones\n• **Kubernetes** — orquestación y escalado\n• **RabbitMQ** — mensajería entre microservicios\n• **CI/CD** — pipelines de integración y despliegue continuo\nTodo esto lo aplico en el entorno de producción de Analisis Survey Unit.";
  }
  // projects
  if (msg.match(/proyecto|project|portafolio|portfolio|github|repositori/)) {
    return "🚀 Algunos de mis proyectos destacados:\n• **AI Survey Analytics Engine** — NLP para análisis de encuestas\n• **Microservices Data Platform** — Plataforma de microservicios con Kubernetes\n• **Full-Stack BI Dashboard** — Visualizaciones interactivas con React y D3.js\n• **ML Pipeline Orchestrator** — Orquestador de pipelines de Machine Learning\nPuedes ver más detalles directamente en la sección de proyectos de este portfolio.";
  }
  // contact
  if (msg.match(/contact|email|correo|mensaje|hablar|llam|whatsapp|linkedin/)) {
    return "📬 Puedes contactarme a través de:\n• **Email**: miguelcalzada2004@gmail.com\n• **LinkedIn**: linkedin.com/in/miguelcalzada\n• **GitHub**: github.com/miguelcalzada-dev\n\nEstoy abierto a nuevas oportunidades y colaboraciones interesantes. ¡No dudes en escribirme!";
  }
  // greetings
  if (msg.match(/hola|hello|hi|buenas|hey|qué tal|cómo est/)) {
    return "¡Hola! 👋 Soy el asistente de **Miguel Angel**. Puedo contarte sobre su experiencia, formación, stack técnico, proyectos o disponibilidad. ¿Qué te gustaría saber?";
  }
  // name / who
  if (msg.match(/quién es|quien es|cuéntame sobre|sobre miguel|sobre ti|quién eres/)) {
    return "👨‍💻 **Miguel Angel Calzada Martín** es un Desarrollador de Software especializado en **IA y Big Data**, con sede en Madrid. Trabaja actualmente en Analisis Survey Unit donde diseña microservicios, desarrolla aplicaciones Full-Stack y construye pipelines de datos. Combina sólidas bases en ingeniería de software con una profunda pasión por la inteligencia artificial.";
  }
  // skills / abilities
  if (msg.match(/habilidad|skill|capaz|puede|sabe|experto|conocimiento/)) {
    return "🛠️ Miguel Angel es experto en:\n• Arquitecturas de **microservicios** escalables\n• Desarrollo **Full-Stack** (React + Node.js)\n• **Ingeniería de datos** (PostgreSQL, MongoDB)\n• **IA y ML** (Machine Learning, Deep Learning, NLP)\n• **DevOps** (Docker, Kubernetes, CI/CD)\n• Múltiples lenguajes: JavaScript/TypeScript, Python, Java, C#";
  }

  // default
  return "🤖 Puedo responder preguntas sobre la **experiencia**, **formación**, **stack técnico**, **proyectos** o **disponibilidad** de Miguel Angel. ¡Prueba preguntarme algo específico!";
}

/* ──────────────────────────────────────────────
   ANIMATION VARIANTS
────────────────────────────────────────────── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
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
  return (
    <motion.div
      ref={ref}
      variants={stagger}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ──────────────────────────────────────────────
   NAV
────────────────────────────────────────────── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
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
          }}
        >
          {/* Logo icon */}
          <a href="#hero" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", flexShrink: 0 }}>
            <div style={{ width: 32, height: 32, background: "var(--accent-primary)", border: "2px solid var(--border-main)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Code2 size={16} color="var(--bg-card)" />
            </div>
          </a>
          <div style={{ flex: 1 }} />
          
          {/* Desktop Links */}
          <div className="desktop-only" style={{ alignItems: "center", gap: 32 }}>
            {["experiencia", "skills", "proyectos"].map((s) => (
              <a key={s} href={`#${s}`} className="nav-link" style={{ textTransform: "capitalize" }}>
                {s}
              </a>
            ))}
            <a href="mailto:miguelcalzada2004@gmail.com" className="btn-primary" style={{ padding: "8px 16px", fontSize: "0.8rem" }}>
              <Mail size={14} />
              Contacto
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-only"
            onClick={() => setMobileMenuOpen(true)}
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

      {/* Mobile Fullscreen Menu */}
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
            <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 32 }}>
              {["experiencia", "skills", "proyectos"].map((s) => (
                <a
                  key={s}
                  href={`#${s}`}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "2.5rem",
                    color: "var(--text-primary)",
                    textDecoration: "none",
                    textTransform: "uppercase",
                  }}
                >
                  {s}
                </a>
              ))}
              <a
                href="mailto:miguelcalzada2004@gmail.com"
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
      }}
    >
      <div style={{ maxWidth: 900, position: "relative", zIndex: 1 }}>
        <AnimatePresence>
          <motion.div
            key="hero-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: 32 }}
          >
            <span
              className="tag-chip"
              style={{
                fontSize: "0.85rem",
                padding: "8px 16px",
                background: "var(--bg-card) !important",
              }}
            >
              <div className="dot-glow" style={{ background: "var(--success)" }} />
              DISPONIBLE PARA NUEVAS OPORTUNIDADES
            </span>
          </motion.div>

          <motion.h1
            key="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(3.5rem, 8vw, 7rem)",
              lineHeight: 0.9,
              color: "var(--text-primary)",
              margin: "0 0 24px 0",
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
            }}
          >
            MIGUEL ANGEL<br />
            <span style={{ color: "var(--accent-primary)" }}>CALZADA</span>
          </motion.h1>

          <motion.p
            key="hero-desc"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
              color: "var(--text-secondary)",
              maxWidth: 700,
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
            key="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, flexWrap: "wrap" }}
          >
            <a href="#proyectos" className="btn-primary" style={{ padding: "16px 32px", fontSize: "1rem" }}>
              <Sparkles size={18} />
              Ver Proyectos
            </a>
            <a href="mailto:miguelcalzada2004@gmail.com" className="btn-secondary" style={{ padding: "16px 32px", fontSize: "1rem" }}>
              <Mail size={18} />
              Contactar
            </a>
            <a href={CV_DATA.linkedin} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ padding: "16px 32px", fontSize: "1rem" }} aria-label="LinkedIn">
              <Link2 size={18} />
              LinkedIn
            </a>
            <a href={CV_DATA.github} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ padding: "16px 32px", fontSize: "1rem" }} aria-label="GitHub">
              <GitFork size={18} />
              GitHub
            </a>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Scroll indicator */}
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
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}


/* ──────────────────────────────────────────────
   EXPERIENCE
────────────────────────────────────────────── */
function Experience() {
  return (
    <section
      id="experiencia"
      className="brutalist-section"
      style={{ borderBottom: "none", paddingBottom: "40px" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
      <AnimSection>
        <motion.div variants={fadeUp} style={{ marginBottom: 64, textAlign: "center" }}>
          <p className="label-text" style={{ color: "var(--accent-primary)", marginBottom: 12 }}>
            Trayectoria
          </p>
          <h2 className="brutalist-heading">
            Experiencia Profesional
          </h2>
          <p style={{ color: "var(--text-secondary)", maxWidth: 480, margin: "0 auto" }}>
            Construyendo sistemas escalables y soluciones de datos inteligentes en entornos de producción reales.
          </p>
        </motion.div>

        {/* Experience card */}
        {CV_DATA.experience.map((exp, i) => (
          <motion.div key={i} variants={fadeUp}>
            <div
              className="brutalist-grid-box"
              style={{ padding: 40, position: "relative", overflow: "hidden" }}
            >
              {/* Top glow accent */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 2,
                  background: "var(--border-main)",
                }}
              />

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  gap: 16,
                  flexWrap: "wrap",
                  marginBottom: 28,
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: 12,
                      background: "var(--bg-secondary)",
                      border: "2px solid var(--border-main)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Building2 size={22} color="#6366f1" />
                  </div>
                  <div>
                    <h3
                      style={{ fontSize: "1.2rem", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 4 }}
                    >
                      {exp.role}
                    </h3>
                    <p style={{ color: "#a5b4fc", fontWeight: 600, marginBottom: 4 }}>{exp.company}</p>
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
                  {exp.highlights.map((h, j) => (
                    <div
                      key={j}
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
                          borderRadius: 6,
                          background: "rgba(99,102,241,0.15)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <Zap size={10} color="#6366f1" />
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

        {/* Education row */}
        <motion.div variants={fadeUp} style={{ marginTop: 32 }}>
          <p style={{ color: "var(--text-muted)", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 16 }}>
            Formación Académica
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))", gap: 16 }}>
            {CV_DATA.education.map((edu, i) => (
              <div
                key={i}
                className="brutalist-grid-box"
                style={{ padding: 24 }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 10,
                      background: "rgba(16,185,129,0.1)",
                      border: "1px solid rgba(16,185,129,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <GraduationCap size={18} color="#10b981" />
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 700, fontSize: "0.9rem", marginBottom: 4, letterSpacing: "-0.01em" }}>{edu.title}</h4>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.8rem", marginBottom: 10 }}>{edu.period}</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                      {edu.highlights.map((h) => (
                        <span
                          key={h}
                          style={{
                            padding: "2px 8px",
                            borderRadius: 6,
                            fontSize: "0.7rem",
                            fontWeight: 500,
                            background: "rgba(16,185,129,0.1)",
                            border: "1px solid rgba(16,185,129,0.15)",
                            color: "#34d399",
                          }}
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </AnimSection>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   SKILLS BENTO GRID
────────────────────────────────────────────── */
const SKILL_ICONS: Record<string, React.ReactNode> = {
  brain: <Brain size={20} />,
  globe: <Globe size={20} />,
  server: <Server size={20} />,
  database: <Database size={20} />,
  cloud: <Cloud size={20} />,
};

function Skills() {
  const skills = Object.values(CV_DATA.skills);

  return (
    <section
      id="skills"
      className="brutalist-section"
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <AnimSection>
          <motion.div variants={fadeUp} style={{ marginBottom: 64, textAlign: "center" }}>
            <p className="label-text" style={{ color: "var(--accent-primary)", marginBottom: 12 }}>
              Competencias
            </p>
            <h2 className="brutalist-heading">
              Stack Técnico
            </h2>
            <p style={{ color: "var(--text-secondary)", maxWidth: 480, margin: "0 auto" }}>
              Desde la capa de datos hasta el frontend, full-cycle engineering con enfoque en IA.
            </p>
          </motion.div>

          {/* Compact skills grid */}
          <div
            className="skills-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 16,
            }}
          >
            {/* AI */}
            <motion.div
              variants={fadeUp}
              className="brutalist-grid-box"
              style={{
                padding: 20,
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Blob removed */}
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 0,
                  background: `${CV_DATA.skills.ai.color}15`,
                  border: `2px solid ${CV_DATA.skills.ai.color}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 16,
                  color: CV_DATA.skills.ai.color,
                }}
              >
                {SKILL_ICONS[CV_DATA.skills.ai.icon]}
              </div>
              <h3 style={{ fontWeight: 700, marginBottom: 16, fontSize: "1.05rem" }}>
                {CV_DATA.skills.ai.label}
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {CV_DATA.skills.ai.items.map((item) => (
                  <span
                    key={item}
                    className="tag-chip"
                    style={{
                      background: `${CV_DATA.skills.ai.color}10 !important`,
                      color: `${CV_DATA.skills.ai.color} !important`,
                      borderColor: `${CV_DATA.skills.ai.color}40 !important`
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Web */}
            <motion.div
              variants={fadeUp}
              className="brutalist-grid-box"
              style={{ padding: 20, position: "relative", overflow: "hidden" }}
            >
              {/* Blob removed */}
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 0,
                  background: `${CV_DATA.skills.web.color}15`,
                  border: `2px solid ${CV_DATA.skills.web.color}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 14,
                  color: CV_DATA.skills.web.color,
                }}
              >
                {SKILL_ICONS[CV_DATA.skills.web.icon]}
              </div>
              <h3 style={{ fontWeight: 700, marginBottom: 14, fontSize: "0.95rem" }}>
                {CV_DATA.skills.web.label}
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {CV_DATA.skills.web.items.map((item) => (
                  <span
                    key={item}
                    className="tag-chip"
                    style={{
                      background: `${CV_DATA.skills.web.color}10 !important`,
                      color: `${CV_DATA.skills.web.color} !important`,
                      borderColor: `${CV_DATA.skills.web.color}40 !important`
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Backend */}
            <motion.div
              variants={fadeUp}
              className="brutalist-grid-box"
              style={{ padding: 20, position: "relative", overflow: "hidden" }}
            >
              <div
                style={{
                  width: 40, height: 40, borderRadius: 0,
                  background: `${CV_DATA.skills.backend.color}15`,
                  border: `2px solid ${CV_DATA.skills.backend.color}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 14, color: CV_DATA.skills.backend.color,
                }}
              >
                {SKILL_ICONS[CV_DATA.skills.backend.icon]}
              </div>
              <h3 style={{ fontWeight: 700, marginBottom: 14, fontSize: "0.95rem" }}>
                {CV_DATA.skills.backend.label}
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {CV_DATA.skills.backend.items.map((item) => (
                  <span key={item} className="tag-chip" style={{ background: `${CV_DATA.skills.backend.color}10 !important`, color: `${CV_DATA.skills.backend.color} !important`, borderColor: `${CV_DATA.skills.backend.color}40 !important` }}>
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Data */}
            <motion.div
              variants={fadeUp}
              className="brutalist-grid-box"
              style={{ padding: 20, position: "relative", overflow: "hidden" }}
            >
              <div
                style={{
                  width: 40, height: 40, borderRadius: 0,
                  background: `${CV_DATA.skills.data.color}15`,
                  border: `2px solid ${CV_DATA.skills.data.color}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 14, color: CV_DATA.skills.data.color,
                }}
              >
                {SKILL_ICONS[CV_DATA.skills.data.icon]}
              </div>
              <h3 style={{ fontWeight: 700, marginBottom: 14, fontSize: "0.95rem" }}>
                {CV_DATA.skills.data.label}
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {CV_DATA.skills.data.items.map((item) => (
                  <span key={item} className="tag-chip" style={{ background: `${CV_DATA.skills.data.color}10 !important`, color: `${CV_DATA.skills.data.color} !important`, borderColor: `${CV_DATA.skills.data.color}40 !important` }}>
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* DevOps */}
            <motion.div
              variants={fadeUp}
              className="brutalist-grid-box"
              style={{ padding: 20, position: "relative", overflow: "hidden" }}
            >
              <div
                style={{
                  width: 40, height: 40, borderRadius: 0,
                  background: `${CV_DATA.skills.devops.color}15`,
                  border: `2px solid ${CV_DATA.skills.devops.color}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 14, color: CV_DATA.skills.devops.color,
                }}
              >
                {SKILL_ICONS[CV_DATA.skills.devops.icon]}
              </div>
              <h3 style={{ fontWeight: 700, marginBottom: 14, fontSize: "0.95rem" }}>
                {CV_DATA.skills.devops.label}
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {CV_DATA.skills.devops.items.map((item) => (
                  <span key={item} className="tag-chip" style={{ background: `${CV_DATA.skills.devops.color}10 !important`, color: `${CV_DATA.skills.devops.color} !important`, borderColor: `${CV_DATA.skills.devops.color}40 !important` }}>
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Small merged Languages & Availability at the bottom */}
            <motion.div
              variants={fadeUp}
              style={{
                gridColumn: "1 / -1",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
                gap: 24,
                marginTop: 16,
                padding: "16px",
                border: "2px dashed var(--border-main)",
                background: "var(--bg-card)",
                fontFamily: "var(--font-mono)",
                fontSize: "0.85rem",
                color: "var(--text-secondary)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <Languages size={16} color="var(--text-primary)" />
                <strong>IDIOMAS:</strong> 🇪🇸 ES (Nativo) · 🇬🇧 EN (B2)
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <MapPin size={16} color="var(--text-primary)" />
                <strong>DISPONIBILIDAD:</strong> Madrid · Remoto / Híbrido · Inmediata
              </div>
            </motion.div>
          </div>
        </AnimSection>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   PROJECTS
────────────────────────────────────────────── */
function Projects() {
  return (
    <section id="proyectos" className="brutalist-section">
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <AnimSection>
          <motion.div variants={fadeUp} style={{ marginBottom: 64, textAlign: "center" }}>
            <p className="label-text" style={{ color: "var(--accent-primary)", marginBottom: 12 }}>
              Portafolio
            </p>
            <h2 className="brutalist-heading">
              Proyectos Destacados
            </h2>
            <p style={{ color: "var(--text-secondary)", maxWidth: 480, margin: "0 auto" }}>
              Soluciones que combinan ingeniería robusta con inteligencia artificial aplicada.
            </p>
          </motion.div>

          <div
            className="projects-grid"
            style={{
              display: "grid",
              gap: 20,
            }}
          >
            {CV_DATA.projects.map((project, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <div
                  className="brutalist-grid-box"
                  style={{
                    padding: 32,
                    height: "100%",
                    position: "relative",
                    overflow: "hidden",
                    transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "var(--accent-primary)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "8px 8px 0px var(--accent-primary)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border-main)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "4px 4px 0px var(--border-main)";
                  }}
                >
                  {/* Brutalist accent bar */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 4,
                      background: project.color,
                    }}
                  />

                  <div
                    style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 16 }}
                  >
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 0,
                        background: `${project.color}15`,
                        border: `2px solid ${project.color}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <GitBranch size={20} color={project.color} />
                    </div>
                    <span className="tag-chip"
                      style={{ background: `${project.color}15 !important`, color: `${project.color} !important`, borderColor: `${project.color}40 !important` }}
                    >
                      {project.type}
                    </span>
                  </div>

                  <h3
                    style={{ fontWeight: 700, fontSize: "1.05rem", marginBottom: 10, letterSpacing: "-0.02em" }}
                  >
                    {project.name}
                  </h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.65, marginBottom: 24 }}>
                    {project.description}
                  </p>

                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {project.stack.map((s) => (
                        <span
                          key={s}
                          className="tag-chip"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                    <a
                      href={CV_DATA.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 4,
                        color: "var(--text-muted)",
                        fontSize: "0.8rem",
                        textDecoration: "none",
                        transition: "color 0.2s",
                        flexShrink: 0,
                        marginLeft: 12,
                      }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = project.color)}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--text-muted)")}
                    >
                      <GitFork size={14} />
                      <ExternalLink size={12} />
                    </a>
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
   MINI FOOTER — copyright bar only
────────────────────────────────────────────── */
function Footer() {
  return (
    <footer
      style={{
        borderTop: "4px solid var(--border-main)",
        background: "var(--bg-primary)",
        padding: "20px 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 12,
      }}
    >
      <p className="label-text" style={{ fontSize: "0.65rem", color: "var(--text-muted)" }}>
        © 2026 MIGUEL ANGEL CALZADA MARTÍN — BUILT WITH NEXT.JS &amp; FRAMER MOTION
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <div className="dot-glow" style={{ width: 7, height: 7, background: "var(--success)" }} />
        <span className="label-text" style={{ fontSize: "0.65rem", color: "var(--text-muted)" }}>OPEN TO OPPORTUNITIES</span>
      </div>
    </footer>
  );
}

/* ──────────────────────────────────────────────
   AI CHATBOT
────────────────────────────────────────────── */
interface Message {
  role: "user" | "bot";
  text: string;
  id: number;
}

function AIChatbot() {
  const [open, setOpen] = useState(false);
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

  return (
    <>
      {/* Floating button */}
      <motion.button
        id="ai-chat-button"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 300 }}
        onClick={() => setOpen(true)}
        aria-label="Abrir chat IA"
        style={{
          position: "fixed",
          bottom: 28,
          right: 28,
          zIndex: 100,
          width: 60,
          height: 60,
          borderRadius: 0,
          background: "var(--accent-primary)",
          border: "4px solid var(--border-main)",
          cursor: "pointer",
          display: open ? "none" : "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "4px 4px 0px var(--border-main)",
          color: "var(--bg-card)",
        }}
        whileHover={{ scale: 1.1, boxShadow: "8px 8px 0px var(--border-main)" }}
        whileTap={{ scale: 0.95 }}
      >
        <Bot size={26} />
      </motion.button>

      {/* Chat window */}
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
              borderRadius: 0,
              overflow: "hidden",
              background: "var(--bg-card)",
              backdropFilter: "none",
              border: "4px solid var(--border-main)",
              boxShadow: "8px 8px 0px var(--border-main)",
              display: "flex",
              flexDirection: "column",
              maxHeight: "75vh",
            }}
          >
            {/* Header */}
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
                    borderRadius: 0,
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
                  <p style={{ color: "#a5b4fc", fontSize: "0.72rem", marginTop: 2 }}>
                    Asistente de Miguel Angel · Online
                  </p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Cerrar chat"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 8,
                  width: 32,
                  height: 32,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "var(--text-secondary)",
                }}
              >
                <X size={15} />
              </button>
            </div>

            {/* Messages */}
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
                        borderRadius: 0,
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
                      width: 24, height: 24, borderRadius: 0,
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

            {/* Suggestion pills */}
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
                      borderRadius: 0,
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

            {/* Input */}
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
                  borderRadius: 0,
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
                  borderRadius: 0,
                  background: input.trim()
                    ? "var(--accent-primary)"
                    : "var(--bg-secondary)",
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
      <Navbar />
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Footer />
      <AIChatbot />
    </main>
  );
}
