export const SKILLS = [
  "Java 17/21", "Spring Boot", "Spring Data JPA", "Hibernate", "React", "Redux",
  "TypeScript", "JavaScript", "SQL", "PostgreSQL", "Oracle", "Docker",
  "AWS (S3)", "GitLab", "JUnit", "Mockito",
];

export const JOBS = [
  {
    title: "Développeur full stack (Alternance)",
    meta: "Bouygues Telecom · Meudon-la-Forêt · 04/2024 – 09/2026",
    bullets: [
      "Développement d'une application de paramétrage Spring Boot + React remplaçant l'édition manuelle de fichiers XML : saisie assistée du référentiel produits et de la matrice de compatibilité, génération automatique du XML consommé par le legacy.",
      "Conception d'un outil batch Java de comparaison legacy, lancé à la demande des équipes de paramétrage, pour valider 50 à 100 offres par exécution contre l'intégralité du référentiel legacy (~1000 offres), premier outil de contrôle d'écarts de l'équipe.",
      "Fiabilisation des services back-end Spring Boot : ajout de contrôles métier et montée de la couverture de tests unitaires (JUnit, Mockito) jusqu'à 80 % sur des services qui en étaient dépourvus.",
      "Conception d'une architecture BFF : API dédiée au front React, sécurisée par authentification, découplant l'IHM des services REST du core.",
    ],
  },
  {
    title: "Scrum Master (Alternance)",
    meta: "Bouygues Telecom · Meudon-la-Forêt · 09/2023 – 04/2024",
    bullets: [
      "Animation des rituels Agile (daily, sprint planning, rétrospectives) pour une équipe de 10 personnes, suivi de vélocité via des tableaux de bord KPI pour identifier les points de friction.",
      "Suivi des anomalies et coordination avec les équipes métier (QA), immersion sur le référentiel produits legacy, avant de rejoindre l'équipe côté développement.",
    ],
  },
];

export const EDU = [
  { t: "Master MIAGE", s: "Université Paris Cité · Paris", d: "09/2024 – 09/2026" },
  { t: "Licence 3 MIAGE", s: "IUT de Paris Rives de Seine · Paris", d: "09/2023 – 09/2024" },
  { t: "DUT Informatique", s: "IUT de Paris Rives de Seine · Paris", d: "09/2021 – 06/2023" },
];

export const CONTACT_LINKS = [
  { k: "Email", v: "yanis.seghdau@outlook.fr", href: "mailto:yanis.seghdau@outlook.fr" },
  { k: "Téléphone", v: "06 52 27 24 09", href: "tel:0652272409" },
  { k: "LinkedIn", v: "yanis-seghdau", href: "https://www.linkedin.com/in/yanis-seghdau-/" },
  { k: "GitHub", v: "YanisGlg95", href: "https://github.com/YanisGlg95" },
  { k: "GitLab", v: "YanisGlg95", href: "https://gitlab.com/YanisGlg95" },
  { k: "CV", v: "CV Yanis", href: "assets/docs/SEGHDAU_Yanis_DevFullStack.pdf" }
];
