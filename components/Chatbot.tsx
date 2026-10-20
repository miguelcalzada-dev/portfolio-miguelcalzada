"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { SITE } from "./site-data";
import { Chat, Close, Send } from "./icons";

type Message = { id: number; role: "user" | "bot"; text: string };

const KB: { test: RegExp; reply: string }[] = [
  {
    test: /\b(hola|buenas|hey|hello|hi|saludos)\b|qué tal|que tal|cómo est|como est/,
    reply:
      "Hola. Soy el asistente de Miguel. Puedo contarte sobre su perfil, experiencia, formación, stack, proyectos, disponibilidad o cómo contactarle. ¿Qué quieres saber?",
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
      "Cuatro proyectos desplegados: ImpactDB MCP (linaje de datos para PostgreSQL con herramientas MCP), Applied AI Solutions (suite de IA con Gemini), SQLSense AI (SQL con IA y SQLite WASM en el navegador) y Madrid Transit Pulse (Big Data de movilidad en tiempo real). Los tienes en la sección Sistemas.",
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

const SUGGESTIONS = [
  "¿Cuál es tu experiencia?",
  "¿Qué stack usas?",
  "¿Estás disponible?",
];

function getReply(message: string) {
  const msg = message.toLowerCase().trim();
  for (const item of KB) if (item.test.test(msg)) return item.reply;
  return "No estoy seguro de eso. Puedo contarte sobre experiencia, formación, stack, proyectos, disponibilidad o contacto. ¿Sobre qué quieres saber?";
}

export default function Chatbot() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      role: "bot",
      text: "Hola. Soy el asistente de Miguel. Pregúntame por su experiencia, stack, proyectos o disponibilidad.",
    },
  ]);
  const [input, setInput] = useState("");
  const [pending, setPending] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => setShow(true), 700);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (open) {
      endRef.current?.scrollIntoView({ block: "end" });
      window.setTimeout(() => inputRef.current?.focus(), 80);
    }
  }, [messages, open]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  function send(text: string) {
    const value = text.trim();
    if (!value) return;

    setMessages((current) => [
      ...current,
      { id: Date.now(), role: "user", text: value },
    ]);
    setInput("");
    setPending(true);

    window.setTimeout(() => {
      setMessages((current) => [
        ...current,
        { id: Date.now() + 1, role: "bot", text: getReply(value) },
      ]);
      setPending(false);
    }, 420);
  }

  return (
    <>
      <AnimatePresence>
        {show && !open && (
          <motion.button
            type="button"
            className="assistant-trigger"
            aria-label="Abrir asistente"
            aria-expanded={false}
            aria-controls="assistant-panel"
            onClick={() => setOpen(true)}
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: 8 }}
            transition={{ duration: reduce ? 0 : 0.24, ease: [0.16, 1, 0.3, 1] }}
          >
            <Chat size={17} />
            <span>Asistente</span>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            ref={panelRef}
            id="assistant-panel"
            className="assistant"
            role="dialog"
            aria-labelledby="assistant-title"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: 12 }}
            transition={{ duration: reduce ? 0 : 0.24, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="assistant__head">
              <div>
                <p className="assistant__label mono">Asistente</p>
                <h2 id="assistant-title">Miguel Calzada</h2>
              </div>
              <button
                type="button"
                className="assistant__close"
                aria-label="Cerrar asistente"
                onClick={() => setOpen(false)}
              >
                <Close size={18} />
              </button>
            </div>

            <div className="assistant__messages" role="log" aria-live="polite">
              {messages.map((message) => (
                <p
                  key={message.id}
                  className={`assistant__message assistant__message--${message.role}`}
                >
                  {message.text}
                </p>
              ))}
              {pending && (
                <p className="assistant__message assistant__message--bot assistant__message--typing">
                  Escribiendo…
                </p>
              )}
              <div ref={endRef} />
            </div>

            {messages.length === 1 && (
              <div className="assistant__suggestions" aria-label="Preguntas sugeridas">
                {SUGGESTIONS.map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    onClick={() => send(suggestion)}
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}

            <form
              className="assistant__form"
              onSubmit={(event) => {
                event.preventDefault();
                send(input);
              }}
            >
              <label className="sr-only" htmlFor="assistant-input">
                Tu pregunta
              </label>
              <input
                ref={inputRef}
                id="assistant-input"
                name="pregunta"
                type="text"
                inputMode="text"
                enterKeyHint="send"
                autoComplete="off"
                spellCheck={false}
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Escribe tu pregunta…"
              />
              <button type="submit" aria-label="Enviar" disabled={!input.trim()}>
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
