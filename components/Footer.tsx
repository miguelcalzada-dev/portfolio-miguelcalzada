import { SITE } from "./site-data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__cols">
        <div className="footer__col">
          <h3>Contacto</h3>
          <ul>
            <li>
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </li>
            <li>
              <a href={`tel:${SITE.phoneHref}`}>{SITE.phone}</a>
            </li>
          </ul>
        </div>
        <div className="footer__col">
          <h3>Redes</h3>
          <ul>
            <li>
              <a href={SITE.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__col">
          <h3>Secciones</h3>
          <ul>
            <li>
              <a href="#trabajo">Trabajo</a>
            </li>
            <li>
              <a href="#stack">Stack</a>
            </li>
            <li>
              <a href="#experiencia">Experiencia</a>
            </li>
          </ul>
        </div>
        <div className="footer__col">
          <h3>Disponibilidad</h3>
          <ul>
            <li>Madrid, España</li>
            <li>Remoto · híbrido</li>
            <li>Incorporación inmediata</li>
          </ul>
        </div>
      </div>

      <div className="footer__sign">
        <span className="footer__wordmark">{SITE.shortName}</span>
        <div className="footer__legal">
          <span>© 2026 Miguel Ángel Calzada Martín</span>
          <span>Madrid · Construido con Next.js y Tailwind</span>
        </div>
      </div>
    </footer>
  );
}
