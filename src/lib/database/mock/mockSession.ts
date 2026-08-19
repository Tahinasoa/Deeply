import { LearningSessionSummary } from "@/types/learning-session";

export const mockSessionSummary: LearningSessionSummary[] = [
  {
    id: "1",
    type: "exercice",
    title: "Vecteurs Vitesse et Accélération",
    grades: ["1ere", "terminale"],
    subject: "Physique-Chimie",
    topic: "Cinématique",
    description: "Concours ISPA 1ère année"
  },
  {
    id: "2",
    type: "exercice",
    title: "Théorème de Pythagore",
    grades: ["4e", "3e"],
    subject: "Mathématiques",
    topic: "Géométrie plane",
    description: "BEPC blanc Antsimondrano 2023"
  },
  {
    id: "3",
    type: "cours",
    title: "Literature Overview",
    grades: ["terminale"],
    subject: "Littérature",
    topic: "Mouvements littéraires"
  },
  {
    id: "4",
    type: "exercice",
    title: "Étude de fonctions exponentielles",
    grades: ["terminale"],
    subject: "Mathématiques",
    topic: "Analyse",
    description: "Bacc Série C 2023 Partie B"
  },
  {
    id: "5",
    type: "cours",
    title: "La Tectonique des Plaques",
    grades: ["4e", "1ere"],
    subject: "SVT",
    topic: "Géologie"
  },
  {
    id: "6",
    type: "examen",
    title: "Dissertation sur la Vérité",
    grades: ["terminale"],
    subject: "Philosophie",
    topic: "La Connaissance",
    description: "Bacc 2023 Partie A"
  },
  {
    id: "7",
    type: "exercice",
    title: "La Révolution Industrielle",
    grades: ["4e", "3e"],
    subject: "Histoire-Géo",
    topic: "Histoire XIXe siècle",
    description: "BEPC 2022"
  },
  {
    id: "8",
    type: "exercice",
    title: "Algorithmes de Tri et Graphes",
    grades: ["terminale"],
    subject: "Informatique",
    topic: "Structures de données",
    description: "Concours d'entrée ENI 2024"
  },
  {
    id: "9",
    type: "cours",
    title: "Grammar & Reading Comprehension",
    grades: ["2nde", "1ere"],
    subject: "Anglais",
    topic: "Passive Voice & Conditionals"
  }
];