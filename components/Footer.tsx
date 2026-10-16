import { SITE } from "./site-data";

export default function Footer() {
  return (
    <footer className="footer">
      <span className="footer__wordmark" aria-hidden="true">
        {SITE.shortName}
      </span>
      <div className="footer__legal">
        <span>© 2026 Miguel Ángel Calzada Martín · Madrid</span>
        <span className="footer__links">
          <a href={SITE.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${SITE.email}`}>Email</a>
        </span>
      </div>
    </footer>
  );
}
