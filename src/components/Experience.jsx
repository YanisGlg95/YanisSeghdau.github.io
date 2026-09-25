import Reveal, { useReveal } from "./Reveal.jsx";
import { JOBS, EDU } from "../data.js";

export default function Experience() {
  const [tlRef, tlIn] = useReveal();

  return (
    <section id="experience">
      <div className="wrap">
        <Reveal as="h2">Expérience professionnelle</Reveal>

        <div className="timeline" ref={tlRef}>
          <div className="tlfill" style={{ height: tlIn ? "100%" : "0%" }}></div>
          {JOBS.map((j) => (
            <Reveal as="div" className="job" key={j.title}>
              <span className="dot"></span>
              <div className="jobhead">
                <span className="jobtitle">{j.title}</span>
              </div>
              <div className="jobmeta">{j.meta}</div>
              <ul>
                {j.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal as="h2" style={{ marginTop: 52 }}>Formation</Reveal>
        <Reveal>
          {EDU.map((e) => (
            <div className="edurow" key={e.t}>
              <div>
                <div className="edutitle">{e.t}</div>
                <div className="eduschool">{e.s}</div>
              </div>
              <div className="edudate">{e.d}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
