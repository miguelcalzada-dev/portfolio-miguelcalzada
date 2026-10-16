import { SITE } from "./site-data";

export default function Contact() {
  return (
    <section id="contacto" className="contact">
      <div className="contact__head" data-reveal>
        <p>¿Una oportunidad, una colaboración o una idea? Escríbeme.</p>
      </div>

      <div className="contact__rows">
        <a className="contact__row" href={`mailto:${SITE.email}`} data-reveal>
          <span className="contact__value">{SITE.email}</span>
        </a>

        <a className="contact__row" href={`tel:${SITE.phoneHref}`} data-reveal>
          <span className="contact__value">{SITE.phone}</span>
        </a>

        <a
          className="contact__row"
          href={SITE.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          data-reveal
        >
          <span className="contact__value">
            linkedin.com/in/miguel-calzada-04a19b24b
          </span>
        </a>

        <a
          className="contact__row"
          href={SITE.github}
          target="_blank"
          rel="noopener noreferrer"
          data-reveal
        >
          <span className="contact__value">github.com/miguelcalzada-dev</span>
        </a>
      </div>
    </section>
  );
}
