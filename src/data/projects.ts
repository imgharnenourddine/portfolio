import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    title: "Ask_N7",
    image: "/images/projects/ask-n7.png",
    description:
      "Chatbot universitaire intelligent basé sur RAG, Mistral AI et Qdrant pour répondre aux questions à partir de documents officiels.",
    technologies: [
      "React",
      "Spring Boot",
      "LangChain4j",
      "Mistral AI",
      "Qdrant",
      "PostgreSQL",
      "MinIO",
    ],
  },
  {
    title: "Mizan",
    image: "/images/projects/MIZAN_ICON.png",
    description:
      "Plateforme web et mobile de bien-être, suivi académique et accompagnement intelligent des étudiants.",
    technologies: ["FastAPI", "PostgreSQL", "Mistral AI", "Docker", "AWS", "GitHub Actions"],
  },
  {
    title: "RafiqAI",
    image: "/images/projects/rafiqai.png",
    description:
      "Application mobile inclusive de lecture intelligente et vocale avec OCR, IA générative et assistance contextuelle.",
    technologies: ["FastAPI", "Tesseract OCR", "Mistral AI", "React Native", "Docker", "PostgreSQL"],
  },
  {
    title: "Détection des fraudes bancaires",
    image: "/images/projects/fraud.png",
    description:
      "Système de Machine Learning pour détecter automatiquement les transactions bancaires frauduleuses en temps quasi-réel.",
    technologies: ["Python", "Scikit-learn", "XGBoost", "Pandas", "Flask", "Bootstrap"],
  },
];
