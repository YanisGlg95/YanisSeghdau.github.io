import Reveal from "./Reveal.jsx";
import { CONTACT_LINKS } from "../data.js";

export default function Contact() {
  return (
    <section id="contact">
      <div className="wrap">
        <Reveal as="h2">Contact</Reveal>
        <Reveal>
          <p style={{ color: "var(--muted)", maxWidth: "56ch", marginTop: -14 }}>
            Disponible immédiatement pour un CDI, basé à Paris (permis B).
          </p>
          <div className="contactgrid">
            {CONTACT_LINKS.map((l) => (
              <a className="contactlink" key={l.k} href={l.href} target={l.k === "CV" ? "_blank" : undefined} rel={l.k === "CV" ? "noopener noreferrer" : undefined}>
                <p className="contactk">{l.k}</p>
                <p className="contactv">{l.v}</p>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
