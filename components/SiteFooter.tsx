import Link from "next/link";
import { NAV, SITE } from "./site-data";
import { ArrowUpRight } from "./icons";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <p className="site-footer__name">{SITE.name}</p>
          <p>{SITE.role}</p>
          <p>{SITE.city}</p>
        </div>

        <nav className="site-footer__nav" aria-label="Navegación del pie">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="site-footer__contact">
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          <a href={`tel:${SITE.phoneHref}`}>{SITE.phone}</a>
          <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn <ArrowUpRight size={13} />
          </a>
          <a href={SITE.github} target="_blank" rel="noopener noreferrer">
            GitHub <ArrowUpRight size={13} />
          </a>
        </div>

        <div className="site-footer__meta">
          <span>© 2026 Miguel Ángel Calzada Martín</span>
          <span>Hecho en Madrid</span>
          <a href="#main">Volver arriba</a>
        </div>
      </div>
    </footer>
  );
}
