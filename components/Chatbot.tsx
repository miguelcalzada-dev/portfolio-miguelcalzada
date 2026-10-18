"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Send, MessageSquare, X } from "lucide-react";
import { SITE } from "./site-data";

type Message = { id: number; role: "user" | "bot"; text: string };

const KB: { test: RegExp; reply: string }[] = [
  {
    test: /\b(hola|buenas|hey|hello|hi|saludos)\b|qué tal|que tal|cómo est|como est/,
    reply:
      "Hola. Soy el asistente de Miguel Ángel. Puedo contarte sobre su perfil, experiencia, formación, stack, proyectos, disponibilidad o cómo contactarle. ¿Qué quieres saber?",
  },
  {
    test: /quién es|quien es|quién eres|perfil|resumen|sobre él|sobre el/,
    reply:
      "Miguel Ángel Calzada Martín es desarrollador Full-Stack e IA en Madrid. Diseña APIs REST y microservicios, despliega en AWS y construye agentes de IA, arquitecturas RAG y pipelines de CI/CD en producción.",
  },
  {
    test: /experiencia|trabaj|empleo|empresa|analisis survey|trayectoria|puesto/,
    reply:
      "Trabaja en Analisis Survey Unit (Madrid) desde marzo de 2024 como Software Developer: APIs REST y microservicios (Java, Node.js, Python), AWS con Docker y Kubernetes, agentes de IA y LLMs, y CI/CD con GitHub Actions.",
  },
  {
    test: /formaci|estudi|educaci|título|titulo|\bdam\b|curso|especializaci/,
    reply:
      "Formación: Curso de Especialización en Inteligencia Artificial y Big Data (2025–2026) y Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (2022–2024).",
  },
  {
    test: /stack|tecnolog|herramienta|lenguaje|framework|habilidad|skill/,
    reply:
      "Stack: IA y ML (TensorFlow, PyTorch, NLP) · Frontend (React, Next.js, Angular, TypeScript) · Backend (Java/Spring Boot, Node.js, Python/FastAPI) · Datos (PostgreSQL, MongoDB, Redis) · DevOps (AWS, Docker, Kubernetes, CI/CD).",
  },
  {
    test: /proyecto|portafolio|portfolio|repositori|qué ha construido|qué has hecho/,
    reply:
      "Cuatro proyectos desplegados: ImpactDB MCP (linaje de datos para PostgreSQL con herramientas MCP), Applied AI Solutions (suite de IA con Gemini), SQLSense AI (SQL con IA y SQLite WASM en el navegador) y Madrid Transit Pulse (Big Data de movilidad en tiempo real). Los tienes en la sección Proyectos.",
  },
  {
    test: /impactdb|linaje|lineage|\bmcp\b/,
    reply:
      "ImpactDB MCP es un analizador de linaje e impacto de cambios para PostgreSQL: preguntas qué se rompería antes de un ALTER, DROP o RENAME y lo ves en un grafo interactivo. Expone 4 herramientas del estándar Model Context Protocol.",
  },
  {
    test: /ubicaci|dónde|donde|madrid|remoto|híbrido|hibrido|disponib|contrat/,
    reply: `Está en ${SITE.city}, con disponibilidad inmediata para trabajo remoto, híbrido o presencial. Escríbele a ${SITE.email}.`,
  },
  {
    test: /idioma|inglés|ingles|english|\bb2\b|español/,
    reply:
      "Idiomas: español nativo e inglés B2 (documentación, reuniones y equipos internacionales).",
  },
  {
    test: /contact|email|correo|hablar|llam|teléfono|telefono|linkedin|github|escrib/,
    reply: `Contacto: ${SITE.email} · linkedin.com/in/miguel-calzada-04a19b24b · github.com/miguelcalzada-dev.`,
  },
];

function reply(message: string): string {
  const msg = message.toLowerCase().trim();
  for (const item of KB) if (item.test.test(msg)) return item.reply;
  return "No estoy seguro de eso. Puedo contarte sobre experiencia, formación, stack, proyectos, disponibilidad o contacto. ¿Sobre qué quieres saber?";
}

const SUGGESTIONS = [
  "¿Cuál es tu experiencia?",
  "¿Qué stack usas?",
  "¿Estás disponible?",
];

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      role: "bot",
      text: "Hola. Soy el asistente de Miguel Ángel. Pregúntame por su experiencia, stack, proyectos o disponibilidad.",
    },
  ]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) endRef.current?.scrollIntoView({ block: "end" });
  }, [messages, open]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 80);
  }, [open]);

  function send(text: string) {
    const value = text.trim();
    if (!value) return;
    setMessages((m) => [...m, { id: Date.now(), role: "user", text: value }]);
    setInput("");
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        { id: Date.now() + 1, role: "bot", text: reply(value) },
      ]);
    }, 500);
  }

  return (
    <>
      <button
        type="button"
        className={`bot-launch${show && !open ? " is-show" : ""}`}
        aria-label="Abrir asistente"
        aria-hidden={!show}
        tabIndex={show ? 0 : -1}
        onClick={() => setOpen(true)}
      >
        <MessageSquare size={22} aria-hidden="true" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="bot-panel"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            role="dialog"
            aria-label="Asistente"
          >
            <div className="bot-panel__head">
              <span className="bot-panel__title">Asistente · Miguel Ángel</span>
              <button
                type="button"
                className="bot-panel__close"
                aria-label="Cerrar asistente"
                onClick={() => setOpen(false)}
              >
                <X size={18} aria-hidden="true" />
              </button>
            </div>

            <div className="bot-panel__body">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`bot-bubble bot-bubble--${m.role === "user" ? "user" : "bot"}`}
                >
                  {m.text}
                </div>
              ))}
              <div ref={endRef} />
            </div>

            {messages.length === 1 && (
              <div className="bot-panel__suggest">
                {SUGGESTIONS.map((s) => (
                  <button key={s} type="button" onClick={() => send(s)}>
                    {s}
                  </button>
                ))}
              </div>
            )}

            <form
              className="bot-panel__form"
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
            >
              <input
                ref={inputRef}
                name="pregunta"
                type="text"
                inputMode="text"
                enterKeyHint="send"
                autoComplete="off"
                spellCheck={false}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Escribe tu pregunta…"
                aria-label="Tu pregunta"
              />
              <button type="submit" aria-label="Enviar" disabled={!input.trim()}>
                <Send size={16} aria-hidden="true" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
