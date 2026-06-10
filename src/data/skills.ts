import type { ExpertiseDomain, SkillCategory } from "../types/skill";

export const expertiseDomains: ExpertiseDomain[] = [
  {
    title: "Agentic AI & IA Générative",
    description:
      "Conception d’agents intelligents avec LLMs, RAG, LangChain et Mistral AI.",
    icon: "BrainCircuit",
  },
  {
    title: "Backend & APIs",
    description:
      "Développement d’API robustes avec Python, FastAPI, Spring Boot, REST APIs et JWT.",
    icon: "Code2",
  },
  {
    title: "Cloud & DevOps",
    description: "Déploiement et automatisation avec AWS, Docker, CI/CD et GitHub Actions.",
    icon: "Cloud",
  },
  {
    title: "Data Science & Computer Vision",
    description:
      "Analyse et modélisation avec Machine Learning, NLP, Pandas, Scikit-learn et OpenCV.",
    icon: "BarChart3",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "IA / Agentic AI",
    icon: "BrainCircuit",
    technologies: [
      { name: "LangChain4j", logo: "/images/logos/LangChain4j.png" },
      { name: "Mistral AI", logo: "/images/logos/mistralai.png" },
      { name: "Qdrant", logo: "/images/logos/qdrant.png" },
      { name: "TensorFlow", logo: "/images/logos/tensor.png" },
      { name: "OpenCV", logo: "/images/logos/opencv.png" },
    ],
  },
  {
    title: "Frontend",
    icon: "Code2",
    technologies: [
      { name: "React", logo: "/images/logos/React.png" },
      { name: "Tailwind CSS", logo: "/images/logos/Tailwind CSS.png" },
      { name: "HTML/CSS/JS", logo: "/images/logos/HTML5, CSS3, JavaScript.png" },
      { name: "Bootstrap", logo: "/images/logos/bootstrap.svg" },
    ],
  },
  {
    title: "Backend",
    icon: "Server",
    technologies: [
      { name: "Python", logo: "/images/logos/Python.png" },
      { name: "FastAPI", logo: "/images/logos/fastapi.png" },
      { name: "Java", logo: "/images/logos/java.png" },
      { name: "Spring Boot", logo: "/images/logos/Spring Boot.png" },
      { name: "Flask", logo: "/images/logos/flask.png" },
      { name: "Postman", logo: "/images/logos/Postman.png" },
      { name: "Swagger", logo: "/images/logos/Swagger.png" },
    ],
  },
  {
    title: "Cloud / DevOps",
    icon: "Cloud",
    technologies: [
      { name: "AWS", logo: "/images/logos/aws.svg" },
      { name: "DigitalOcean", logo: "/images/logos/DigitalOcean_logo.png" },
      { name: "Docker", logo: "/images/logos/docker.png" },
      { name: "GitHub Actions", logo: "/images/logos/githubaction.png" },
    ],
  },
  {
    title: "Data / BI",
    icon: "BarChart3",
    technologies: [
      { name: "Pandas", logo: "/images/logos/pandas.png" },
      { name: "NumPy", logo: "/images/logos/numpy.png" },
      { name: "Scikit-learn", logo: "/images/logos/scikit.png" },
      { name: "Power BI", logo: "/images/logos/powerbi.png" },
      { name: "KNIME", logo: "/images/logos/knime.png" },
      { name: "Talend", logo: "/images/logos/talend.png" },
    ],
  },
  {
    title: "Bases de données",
    icon: "Database",
    technologies: [
      { name: "PostgreSQL", logo: "/images/logos/postgres.png" },
      { name: "Qdrant", logo: "/images/logos/qdrant.png" },
    ],
  },
];
