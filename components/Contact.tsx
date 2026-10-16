import { SITE } from "./site-data";

export default function Contact() {
  return (
    <section id="contacto" className="contactv3">
      <h2 className="contactv3__kicker" data-reveal>
        Contacto
      </h2>

      <a
        className="contactv3__mail"
        href={`mailto:${SITE.email}`}
        data-reveal
      >
        {SITE.email.split("@")[0]}@<wbr />
        {SITE.email.split("@")[1]}
      </a>

      <ul
        className="contactv3__links"
        data-reveal
        style={{ transitionDelay: "120ms" }}
      >
        <li>
          <a href={`tel:${SITE.phoneHref}`}>{SITE.phone}</a>
        </li>
        <li>
          <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </li>
        <li>
          <a href={SITE.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </li>
        <li>Madrid · remoto o híbrido</li>
      </ul>
    </section>
  );
}
