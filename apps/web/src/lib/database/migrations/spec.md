# Deeply — Spécifications fonctionnelles pour conception de base de données

## Contexte du projet
Application de gestion de contenu pédagogique et de classes.

## Rôles utilisateurs

- **Admin** : accès complet à toutes les fonctionnalités et données.
- **Enseignant (teacher)** : peut créer et gérer autant de classes qu'il le souhaite.
- **Élève (student)** : peut réaliser des activités interactives, avec sauvegarde de sa progression. Un élève peut appartenir à plusieurs classes (ex. une classe par matière) → relation many-to-many entre élèves et classes.

## Types de contenu (liste actuelle, amenée à évoluer)

- Document statique (texte brut)
- QCM (question à choix multiples)
- Texte à trous (fill in the blank)
- Remise en ordre de mots (word unshuffle)
- ... (d'autres types seront ajoutés)

## Assignation des activités

Une activité peut être assignée :
- à une classe entière, ou
- à un élève individuellement.

## Suivi de progression

- **Phase 1 (actuelle)** : suivi au niveau de chaque activité (par élève, par activité assignée — statut, score, tentatives, date, etc.).
- **Phase 2 (à venir)** : mise en place d'un suivi global agrégeant la progression de l'élève sur l'ensemble des activités/classes. À anticiper dans la conception pour ne pas bloquer une évolution future du modèle.

## Problématique à trancher : modélisation des types de contenu

Les différents types d'activités ont des structures de données très hétérogènes. Deux options possibles pour les stocker en base :

**Option 1 — Une table par type d'exercice**
Chaque type de contenu a sa propre table avec un schéma dédié.
- Avantages : typage fort, requêtes/validations simples, cohérence garantie par le schéma SQL.
- Inconvénients : ajouter un nouveau type de contenu nécessite une migration (nouvelle table) ; jointures multiples si on veut lister tous les contenus toutes catégories confondues.

**Option 2 — Une table commune avec un champ JSON**
Une seule table de contenu avec les champs communs (id, type, titre, auteur, date, etc.) + un champ JSON contenant les données spécifiques à chaque type d'exercice, à parser côté application.
- Avantages : flexible, ajout de nouveaux types de contenu sans migration de schéma.
- Inconvénients : pas de validation native au niveau SQL, requêtes/filtres sur le contenu du JSON plus complexes, risque d'incohérence si mal contrôlé côté applicatif.

**Décision à prendre avec le responsable BDD** : choisir entre ces deux approches (ou une hybride, ex. table commune + tables spécifiques pour les types les plus stables) en fonction des priorités (flexibilité vs intégrité/performance des requêtes).

## Éléments à modéliser (relations)

- Élève ↔ Classe : many-to-many
- Enseignant ↔ Classe : one-to-many (un enseignant gère plusieurs classes)
- Activité ↔ Classe : assignation possible
- Activité ↔ Élève : assignation possible (indépendamment d'une classe)
- Progression ↔ (Élève, Activité) : suivi individuel par activité, conçu pour permettre une agrégation future (suivi global)