export default function Hero() {
  const headline = "Développeur Full Stack Java / Spring Boot & React";
  const words = headline.split(" ");

  return (
    <section id="hero">
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>
      <div className="wrap">
        <p className="kicker">Paris, Île-de-France | Disponible immédiatement</p>
        <h1>
          {words.map((w, i) => (
            <span key={i} className="word" style={{ animationDelay: `${0.15 + i * 0.06}s` }}>
              {w}
              {i < words.length - 1 ? "\u00A0" : ""}
            </span>
          ))}
        </h1>
        <p className="lede">
          Formé 3 ans chez{" "}
          <span className="grad-text" style={{ fontWeight: 600 }}>
            Bouygues Telecom
          </span>{" "}
          sur des applications métier critiques : outils internes qui remplacent des processus
          manuels, industrialisation des tests, évolutions en production. Autonome de la
          conception au déploiement, à l'aise avec les experts métier comme avec le legacy.
        </p>
        <div className="btnrow">
          <a className="btn primary" href="#contact">Me contacter</a>
          <a className="btn ghost" href="#experience">Voir mon expérience</a>
        </div>
      </div>
    </section>
  );
}
