"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { NAV, PROJECTS, SITE } from "./site-data";
import { ArrowUpRight, BrandMark, Close, Menu } from "./icons";

export default function SiteHeader() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previous = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    const focusTimer = window.setTimeout(() => closeRef.current?.focus(), 30);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) return;

      const focusables = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((el) => !el.hasAttribute("aria-hidden"));

      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
      window.clearTimeout(focusTimer);
      previous?.focus();
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/work"
      ? pathname === "/work" || pathname.startsWith("/work/")
      : pathname === href;

  return (
    <>
      <header className={`site-header${compact ? " is-compact" : ""}`}>
        <div className="site-header__inner">
          <Link href="/" className="brand" aria-label="Miguel Calzada, inicio">
            <BrandMark size={22} />
            <span className="brand__word">
              {SITE.brand}
              <span className="brand__dot">.</span>
            </span>
          </Link>

          <p className="site-header__descriptor">{SITE.descriptor}</p>

          <nav className="site-header__nav" aria-label="Navegación principal">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={isActive(item.href) ? "is-active" : undefined}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="site-header__actions">
            <span className="availability availability--header">
              <span className="status-dot" aria-hidden="true" />
              Disponible
            </span>
            <button
              ref={triggerRef}
              type="button"
              className="index-trigger"
              aria-expanded={open}
              aria-controls="site-index"
              onClick={() => setOpen(true)}
            >
              <Menu size={16} />
              <span>Índice</span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="site-index"
            ref={panelRef}
            className="index-overlay"
            role="dialog"
            aria-modal="true"
            aria-labelledby="index-title"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.24, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="index-overlay__bar">
              <Link href="/" className="brand brand--inverse" onClick={() => setOpen(false)}>
                <BrandMark size={22} />
                <span className="brand__word">
                  {SITE.brand}
                  <span className="brand__dot">.</span>
                </span>
              </Link>
              <button
                ref={closeRef}
                type="button"
                className="index-close"
                onClick={() => setOpen(false)}
                aria-label="Cerrar índice"
              >
                <span>Cerrar</span>
                <Close size={18} />
              </button>
            </div>

            <motion.nav
              className="index-overlay__nav"
              aria-labelledby="index-title"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: reduce ? 0 : 0.055 } },
              }}
            >
              <h2 id="index-title" className="sr-only">
                Índice del portfolio
              </h2>
              {NAV.map((item) => (
                <motion.div
                  key={item.href}
                  variants={{
                    hidden: reduce ? {} : { opacity: 0, y: 16 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: reduce ? 0 : 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link href={item.href} onClick={() => setOpen(false)}>
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>

            <div className="index-overlay__foot">
              <div>
                <p className="index-overlay__label">Sistemas</p>
                <ul className="index-overlay__projects">
                  {PROJECTS.map((project) => (
                    <li key={project.slug}>
                      <Link href={`/work/${project.slug}`} onClick={() => setOpen(false)}>
                        <span>{project.index}</span>
                        {project.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="index-overlay__contact">
                <p className="index-overlay__label">Contacto</p>
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn <ArrowUpRight size={14} />
                </a>
                <a href={SITE.github} target="_blank" rel="noopener noreferrer">
                  GitHub <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
