"use client";

import { useEffect, useRef } from "react";

const HOVER_SELECTOR = "a, button, [role='button'], label, select, .cursor-hover";
const TEXT_SELECTOR = "input, textarea, [contenteditable='true']";
const LERP = 0.14;

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!finePointer.matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // El cursor nativo solo se oculta si este componente se monta correctamente.
    document.documentElement.classList.add("has-custom-cursor");

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const lerp = reduceMotion.matches ? 1 : LERP;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let active = false;
    let frame = 0;

    const setMode = (mode: "hover" | "text" | null) => {
      ring.classList.toggle("is-hovering", mode === "hover");
      ring.classList.toggle("is-text", mode === "text");
      dot.classList.toggle("is-hovering", mode === "hover");
      dot.classList.toggle("is-text", mode === "text");
    };

    const show = () => {
      if (active) return;
      active = true;
      ring.classList.add("is-active");
      dot.classList.add("is-active");
    };

    const hide = () => {
      active = false;
      ring.classList.remove("is-active");
      dot.classList.remove("is-active");
    };

    const onMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      // Al aparecer, el anillo arranca en el puntero para no venir desde el centro.
      if (!active) {
        ringX = mouseX;
        ringY = mouseY;
      }
      show();
    };

    const onOver = (event: MouseEvent) => {
      const target = event.target as Element | null;
      if (!target) return;
      if (target.closest(TEXT_SELECTOR)) setMode("text");
      else if (target.closest(HOVER_SELECTOR)) setMode("hover");
    };

    const onOut = (event: MouseEvent) => {
      const target = event.target as Element | null;
      if (!target) return;
      if (target.closest(TEXT_SELECTOR) || target.closest(HOVER_SELECTOR)) setMode(null);
    };

    const onDown = () => ring.classList.add("is-down");
    const onUp = () => ring.classList.remove("is-down");

    const render = () => {
      ringX += (mouseX - ringX) * lerp;
      ringY += (mouseY - ringY) * lerp;
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      frame = requestAnimationFrame(render);
    };

    frame = requestAnimationFrame(render);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mouseout", onOut);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", hide);
    window.addEventListener("blur", hide);

    return () => {
      cancelAnimationFrame(frame);
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mouseout", onOut);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", hide);
      window.removeEventListener("blur", hide);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden="true">
        <span className="cursor-ring__circle" />
      </div>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  );
}
