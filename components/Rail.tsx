"use client";

import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "proyectos", label: "Proyectos" },
  { id: "stack", label: "Stack" },
  { id: "experiencia", label: "Experiencia" },
  { id: "contacto", label: "Contacto" },
];

export default function Rail() {
  const [progress, setProgress] = useState(0);
  const [nodes, setNodes] = useState<
    { id: string; label: string; top: number }[]
  >([]);

  useEffect(() => {
    const max = () =>
      Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const measure = () =>
      setNodes(
        SECTIONS.map((s) => {
          const el = document.getElementById(s.id);
          const top = el ? Math.min(1, Math.max(0, el.offsetTop / max())) : 0;
          return { ...s, top };
        }),
      );
    const onScroll = () =>
      setProgress(Math.min(1, Math.max(0, window.scrollY / max())));

    measure();
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <nav className="rail" aria-label="Secciones">
      <span className="rail__track" aria-hidden="true">
        <span
          className="rail__fill"
          style={{ transform: `scaleY(${progress})` }}
        />
      </span>
      {nodes.map((n) => (
        <a
          key={n.id}
          className={`rail__item${progress >= n.top ? " is-past" : ""}`}
          href={`#${n.id}`}
          aria-label={n.label}
          style={{ top: `${n.top * 100}%` }}
        >
          <span className="rail__dot" aria-hidden="true" />
          <span className="rail__label">{n.label}</span>
        </a>
      ))}
    </nav>
  );
}
