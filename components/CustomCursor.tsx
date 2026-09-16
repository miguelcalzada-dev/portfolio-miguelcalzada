"use client";

import { useEffect, useRef } from "react";

const HOVER_SELECTOR =
  "a, button, [role='button'], input, textarea, select, label, .cursor-hover";

const LERP = 0.15;

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

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let visible = false;
    let frame = 0;

    const show = () => {
      if (visible) return;
      visible = true;
      dot.style.opacity = "1";
      ring.style.opacity = "1";
    };

    const hide = () => {
      visible = false;
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };

    const onMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      show();
    };

    const onOver = (event: MouseEvent) => {
      const target = event.target as Element | null;
      if (target?.closest(HOVER_SELECTOR)) ring.classList.add("is-hovering");
    };

    const onOut = (event: MouseEvent) => {
      const target = event.target as Element | null;
      if (target?.closest(HOVER_SELECTOR)) ring.classList.remove("is-hovering");
    };

    const onDown = () => ring.classList.add("is-down");
    const onUp = () => ring.classList.remove("is-down");

    const render = () => {
      ringX += (mouseX - ringX) * LERP;
      ringY += (mouseY - ringY) * LERP;
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
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
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  );
}
