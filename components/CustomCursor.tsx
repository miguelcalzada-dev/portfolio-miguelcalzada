"use client";

import { useEffect, useRef } from "react";

const HOVER_SELECTOR = "a, button, [role='button'], label, select, .cursor-hover";
const TEXT_SELECTOR = "input, textarea, [contenteditable='true']";
const LERP = 0.14;
const SCALE_LERP = 0.18;
const POS_EPSILON = 0.1;
const SCALE_EPSILON = 0.001;

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
    const positionLerp = reduceMotion.matches ? 1 : LERP;
    const scaleLerp = reduceMotion.matches ? 1 : SCALE_LERP;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let ringScale = 1;
    let ringScaleTarget = 1;
    let active = false;
    let rafId: number | null = null;

    const startLoop = () => {
      // Solo animamos mientras el puntero esta activo y la pestana visible.
      if (rafId === null && active && !document.hidden) {
        rafId = requestAnimationFrame(render);
      }
    };

    const stopLoop = () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    };

    const render = () => {
      rafId = null;
      ringX += (mouseX - ringX) * positionLerp;
      ringY += (mouseY - ringY) * positionLerp;
      ringScale += (ringScaleTarget - ringScale) * scaleLerp;
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(${ringScale})`;

      const settled =
        Math.abs(mouseX - ringX) < POS_EPSILON &&
        Math.abs(mouseY - ringY) < POS_EPSILON &&
        Math.abs(ringScaleTarget - ringScale) < SCALE_EPSILON;

      // Si ya no hay nada que interpolar, paramos el bucle (0% CPU en reposo).
      if (!settled) startLoop();
    };

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
      stopLoop();
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
      startLoop();
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

    const onDown = () => {
      ringScaleTarget = 0.82;
      ring.classList.add("is-down");
      startLoop();
    };

    const onUp = () => {
      ringScaleTarget = 1;
      ring.classList.remove("is-down");
      startLoop();
    };

    const onVisibility = () => {
      if (document.hidden) stopLoop();
      else if (active) startLoop();
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mouseout", onOut);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", hide);
    window.addEventListener("blur", hide);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      stopLoop();
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mouseout", onOut);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", hide);
      window.removeEventListener("blur", hide);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  );
}
