"use client";

import { useEffect, useState } from "react";

const SECTIONS = ["trabajo", "stack", "experiencia", "contacto"];

/* La calzada: una barra gruesa de acento en el margen izquierdo que crece con
   el scroll. Cada nodo es un hito (una sección) y se enciende al pasar. Solo
   en escritorio y sin movimiento reducido (ver globals.css). */
export default function Rail() {
  const [progress, setProgress] = useState(0);
  const [nodes, setNodes] = useState<{ id: string; top: number }[]>([]);

  useEffect(() => {
    const measure = () => {
      const max = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight,
      );
      setNodes(
        SECTIONS.map((id) => {
          const el = document.getElementById(id);
          const top = el ? Math.min(1, Math.max(0, el.offsetTop / max)) : 0;
          return { id, top };
        }),
      );
    };
    const onScroll = () => {
      const max = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight,
      );
      setProgress(Math.min(1, Math.max(0, window.scrollY / max)));
    };
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
    <div className="rail" aria-hidden="true">
      <div className="rail__fill" style={{ transform: `scaleY(${progress})` }} />
      {nodes.map((n) => (
        <span
          key={n.id}
          className={`rail__node${progress >= n.top ? " is-past" : ""}`}
          style={{ top: `${n.top * 100}%` }}
        />
      ))}
    </div>
  );
}
