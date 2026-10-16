import { SITE } from "./site-data";

export default function Contact() {
  return (
    <section id="contacto" className="contact">
      <div className="contact__top" data-reveal>
        <p>{SITE.contactLine}</p>
      </div>

      <a className="contact__mail" href={`mailto:${SITE.email}`}>
        {SITE.email.split("@")[0]}@<wbr />
        {SITE.email.split("@")[1]}
      </a>

      <div className="contact__foot">
        <span>
          <a href={`tel:${SITE.phoneHref}`}>{SITE.phone}</a> · {SITE.city}
        </span>
        <span>
          <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>{" "}
          ·{" "}
          <a href={SITE.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </span>
      </div>
    </section>
  );
}
