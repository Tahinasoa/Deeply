# Deeply

Deeply est une application qui aide les élèves de collège/lycée à comprendre des notions en profondeur, au-delà de la mémorisation simple. L'app se concentre sur le diagnostic et la remédiation, ancrés aux programmes scolaires nationaux (sujets de Bacc, examens blancs, ressources fournies par des professeurs).

## Composants du projet

Le projet est composé de deux applications distinctes :

- **Outil de création de données** — un CLI qui transforme un document source (PDF, texte, image) en exercice structuré au format JSON. Évoluera plus tard vers un dashboard d'administration.
- **Application web** — l'application destinée aux élèves.

## Application web

### Connexion
Authentification standard.

### Dashboard
- Liste des exercices disponibles et progression de l'élève.
- Filtres : niveau, matière, thème, type d'exercice.
- Suggestions d'exercices recommandés.

### Fiche d'exercice
- Matière, thème, niveau.
- Source (document dont l'exercice est issu — ex. *Bacc 2023, Mathématiques, Partie A*).
- Niveau de maîtrise actuel (MVP : pourcentage de réussite).
- Objectifs pédagogiques.
- Document support : énoncé, image(s).
- Lien vers des exercices suggérés.

### Page d'exercice
- Pas de minuteur.
- Une question à la fois. La bonne réponse et une explication s'affichent immédiatement après réponse.
- Types de questions supportés :
  - QCM simple
  - Réarrangement de mots
  - Texte à trous (réponse libre)
  - Texte à trous (banque de mots)
  - Réordonnancement d'éléments (ex. étapes de résolution, événements chronologiques)
- Le document support reste accessible à tout moment.

### Écran de fin (diagnostic)
- Dernier score obtenu sur l'exercice.
- Liste des objectifs pédagogiques, marqués validé / non validé.

## Outil de création de données (CLI)

- Plusieurs outils CLI convertissent des documents sources (PDF, texte brut, image, etc.) au format **JSON**.
- Un outil séparé valide la structure et l'intégrité de ces données avant intégration en base.

## Statut

MVP en cours de conception et de développement.