import { SITE } from "./site-data";

export default function Contact() {
  return (
    <section id="contacto" className="contact">
      <a className="contact__mail" href={`mailto:${SITE.email}`}>
        {SITE.email.split("@")[0]}@<wbr />
        {SITE.email.split("@")[1]}
      </a>

      <ul className="contact__links">
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
      </ul>
    </section>
  );
}
