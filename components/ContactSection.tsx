import { SITE } from "./site-data";
import { ArrowUpRight } from "./icons";

export default function ContactSection() {
  return (
    <section id="contacto" className="contact" aria-labelledby="contact-title">
      <div className="shell contact__inner">
        <div className="contact__head">
          <h2 id="contact-title">Hablemos.</h2>
          <p>
            ¿Tienes un sistema que construir, un equipo que reforzar o una idea
            que necesita datos? Escríbeme.
          </p>
        </div>

        <a className="contact__mail" href={`mailto:${SITE.email}`}>
          {SITE.email}
        </a>

        <div className="contact__bottom">
          <ul className="contact__links" aria-label="Otros canales de contacto">
            <li>
              <a href={`tel:${SITE.phoneHref}`}>{SITE.phone}</a>
            </li>
            <li>
              <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn <ArrowUpRight size={14} />
              </a>
            </li>
            <li>
              <a href={SITE.github} target="_blank" rel="noopener noreferrer">
                GitHub <ArrowUpRight size={14} />
              </a>
            </li>
          </ul>

          <div className="contact__meta">
            <span>{SITE.city}</span>
            <span className="contact__availability">
              <span className="status-dot" aria-hidden="true" />
              {SITE.availability}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
