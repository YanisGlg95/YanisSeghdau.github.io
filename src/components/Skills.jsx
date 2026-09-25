import Reveal from "./Reveal.jsx";
import { SKILLS } from "../data.js";

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <Reveal as="h2">Compétences</Reveal>
        <Reveal>
          <div className="chiprow">
            {SKILLS.map((s) => (
              <span className="chip" key={s}>{s}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
