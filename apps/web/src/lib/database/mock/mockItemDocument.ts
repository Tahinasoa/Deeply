import type { LearningItemDocument } from "@/types/learning-item";

export const mockLearningItemDocuments: LearningItemDocument[] = [
  {
    id: "1",
    document: `## Équations Horaires du Mouvement

Un point matériel $M$ a pour vecteur position dans un repère orthonormé $(O, \\vec{i}, \\vec{j})$ :
$$\\vec{OM}(t) = (2t^2 + 1)\\vec{i} + (3t - 2)\\vec{j}$$

| Grandeur | Expression Vectorielle | Norme à $t = 2\\text{s}$ |
| :--- | :--- | :--- |
| **Vitesse** $\\vec{v}(t)$ | $\\frac{d\\vec{OM}}{dt} = 4t\\vec{i} + 3\\vec{j}$ | $v(2) = \\sqrt{(8)^2 + 3^2} = \\sqrt{73} \\text{ m/s}$ |
| **Accélération** $\\vec{a}(t)$ | $\\frac{d\\vec{v}}{dt} = 4\\vec{i}$ | $a(2) = 4 \\text{ m/s}^2$ |

### Exercice
1. Montrer que l'accélération est constante.
2. Déterminer le vecteur vitesse à $t = 0\\text{s}$.`,
    correction: `## Corrigé

1. **Accélération :** 
$$\\vec{a}(t) = \\frac{d\\vec{v}}{dt} = 4\\vec{i} + 0\\vec{j}$$
La valeur de $\\vec{a}$ ne dépend pas du temps $t$, elle est donc **constante** ($a = 4 \\text{ m/s}^2$).

2. **Vitesse initiale ($t = 0\\text{s}$) :**
$$\\vec{v}(0) = 4(0)\\vec{i} + 3\\vec{j} = 3\\vec{j}$$
La norme est $v(0) = 3 \\text{ m/s}$.`
  },
  {
    id: "2",
    document: `## Énoncé et Propriétés

Soit $ABC$ un triangle rectangle en $A$. D'après le théorème de Pythagore :
$$BC^2 = AB^2 + AC^2$$

| Côté | Longueur donnée |
| :--- | :--- |
| $[AB]$ | $6\\text{ cm}$ |
| $[AC]$ | $8\\text{ cm}$ |

### Exercice
1. Calculer la longueur de l'hypoténuse $[BC]$.
2. Soit $D$ un point tel que $BD = 10\\text{ cm}$ et $CD = 6\\text{ cm}$. Le triangle $BCD$ est-il rectangle en $C$ ?`,
    correction: `## Corrigé

1. **Calcul de $BC$ :**
$$BC^2 = AB^2 + AC^2 = 6^2 + 8^2 = 36 + 64 = 100$$
$$BC = \\sqrt{100} = 10\\text{ cm}$$

2. **Réciproque dans $BCD$ :**
- $BD^2 = 10^2 = 100$
- $BC^2 + CD^2 = 10^2 + 6^2 = 100 + 36 = 136$

Comme $BD^2 \\neq BC^2 + CD^2$, le triangle $BCD$ **n'est pas rectangle**.`
  },
  {
    id: "3",
    document: `## Principaux Courants par Siècle

| Siècle | Mouvement | Auteurs Clés | Principes |
| :--- | :--- | :--- | :--- |
| **XVIIe** | Classicisme | Molière, Racine | Ordre, clarté, règle des trois unités |
| **XVIIIe** | Lumières | Voltaire, Rousseau | Raison, critique sociale, liberté |
| **XIXe** | Romantisme | Victor Hugo, Lamartine | Expression des sentiments, mal du siècle |
| **XIXe** | Réalisme | Balzac, Zola | Peinture fidèle de la société |

> *"Le beau est toujours bizarre."* — Charles Baudelaire`
  },
{
  id: "4",
  document: `## Partie B : Étude d'une fonction exponentielle

On considère la fonction numérique $f$ définie sur $\\mathbb{R}$ par :
$$f(x) = (2 - x)e^x - 1$$

On note $(\\mathcal{C}_f)$ sa courbe représentative dans le plan muni d'un repère orthonormé $(O, \\vec{i}, \\vec{j})$ (unité graphique : $2\\text{ cm}$).

![Repère orthonormé présentant les courbes de la fonction exponentielle et du logarithme népérien avec leurs axes respectifs](/docs/684684964684684684.png)

---

### Questions

#### 1. Limites aux bornes
a. Calculer $\\lim_{x \\to -\\infty} f(x)$. En déduire l'existence d'une asymptote horizontale à $(\\mathcal{C}_f)$.  
b. Calculer $\\lim_{x \\to +\\infty} f(x)$ puis $\\lim_{x \\to +\\infty} \\frac{f(x)}{x}$. Préciser la nature de la branche infinie en $+\\infty$.

#### 2. Variations
a. Démontrer que pour tout $x \\in \\mathbb{R}$, $f'(x) = (1 - x)e^x$.  
b. Étudier le signe de $f'(x)$ et dresser le tableau de variations complet de $f$.

#### 3. Étude locale & Tangente
a. Démontrer que l'équation $f(x) = 0$ admet une unique solution $\\alpha$ sur l'intervalle $[1{,}5 \\,;\\, 2]$.  
b. Déterminer l'équation cartésienne de la tangente $(T)$ à la courbe $(\\mathcal{C}_f)$ au point d'abscisse $x = 0$.`,

  correction: `## Correction détaillée — Bacc Série C 2023 (Partie B)

### 1. Limites et asymptotes
* **En $-\\infty$ :**  
  $$f(x) = 2e^x - x e^x - 1$$  
  Par croissance comparée, $\\lim_{x \\to -\\infty} e^x = 0$ et $\\lim_{x \\to -\\infty} x e^x = 0$.  
  Donc $\\lim_{x \\to -\\infty} f(x) = -1$.  
  **Interprétation :** La droite d'équation $y = -1$ est **asymptote horizontale** à $(\\mathcal{C}_f)$ en $-\\infty$.

* **En $+\\infty$ :**  
  $\\lim_{x \\to +\\infty} (2-x) = -\\infty$ et $\\lim_{x \\to +\\infty} e^x = +\\infty$, donc par produit :  
  $$\\lim_{x \\to +\\infty} f(x) = -\\infty$$  
  Pour la branche infinie :  
  $$\\lim_{x \\to +\\infty} \\frac{f(x)}{x} = \\lim_{x \\to +\\infty} \\left(\\frac{2-x}{x}\\right)e^x - \\frac{1}{x} = (-1)(+\\infty) - 0 = -\\infty$$  
  **Interprétation :** $(\\mathcal{C}_f)$ admet une **branche parabolique de direction $(Oy)$** en $+\\infty$.

---

### 2. Dérivée et tableau de variations
* **Calcul de $f'(x)$ :**  
  En utilisant la règle du produit $(uv)' = u'v + uv'$ avec $u(x) = 2-x$ et $v(x) = e^x$ :  
  $$f'(x) = (-1) \\cdot e^x + (2 - x)e^x = (-1 + 2 - x)e^x = (1 - x)e^x$$

* **Signe de $f'(x)$ et variations :**  
  Comme $e^x > 0$ pour tout $x \\in \\mathbb{R}$, $f'(x)$ a le même signe que $(1 - x)$ :  
  * $f'(x) > 0$ pour $x < 1$ ($f$ est strictement croissante sur $]-\\infty, 1]$).  
  * $f'(1) = (2 - 1)e^1 - 1 = e - 1 \\approx 1{,}72$ (maximum absolu).  
  * $f'(x) < 0$ pour $x > 1$ ($f$ est strictly décroissante sur $[1, +\\infty[$).

---

### 3. Solution unique et Tangente
* **Théorème des valeurs intermédiaires (TVI) :**  
  Sur $[1{,}5 \\,;\\, 2]$, $f$ est continue et strictement décroissante.  
  * $f(1{,}5) = (0{,}5)e^{1{,}5} - 1 \\approx 1{,}24 > 0$  
  * $f(2) = (0)e^2 - 1 = -1 < 0$  
  Comme $0 \\in [f(2), f(1{,}5)]$, l'équation $f(x) = 0$ possède une **unique solution $\\alpha \\in [1{,}5 \\,;\\, 2]$**.

* **Tangente en $x = 0$ :**  
  L'équation est $y = f'(0)(x - 0) + f(0)$.  
  * $f'(0) = (1 - 0)e^0 = 1$  
  * $f(0) = (2 - 0)e^0 - 1 = 1$  
  L'équation de la tangente $(T)$ est **$y = x + 1$**.`
},
  {
    id: "5",
    document: `## Structure Interne de la Terre

| Couche | Épaisseur moyenne | État physique |
| :--- | :--- | :--- |
| **Croûte océanique** | $5 - 10\\text{ km}$ | Solide (Basalte/Gabbro) |
| **Croûte continentale** | $30 - 70\\text{ km}$ | Solide (Granite) |
| **Manteau supérieur** | jusqu'à $670\\text{ km}$ | Ductile / Rigide |

## Limites de Plaques
1. **Divergent** (Dorsales) : Création de lithosphère océanique.
2. **Convergent** (Fosses de subduction) : Destruction de lithosphère.
3. **Transformant** : Coulissement latéral.`
  },
  {
    id: "6",
    document: `> **Sujet :** *"La vérité dépend-elle de nous ?"*

## Directives Méthodologiques
- **Introduction** : Poser le paradoxe (Vérité objective vs Subjectivité).
- **Problématique** : La vérité est-elle une construction de l'esprit ou une réalité indépendante ?

| Partie | Thèse | Référence philosophique |
| :--- | :--- | :--- |
| **I. Axe 1** | La vérité est objective et universelle | Descartes (Raison) |
| **II. Axe 2** | La vérité dépend de nos perceptions et notre culture | Protagoras, Nietzsche |
| **III. Synthèse**| La vérité comme recherche intersubjective | Karl Popper |`,
    correction: `## Piste de Réflexion / Plan Détaillé

### I. La vérité s'impose à l'homme (Objectivité)
- En mathématiques et sciences exactes : $2 + 2 = 4$ est vrai indépendamment de l'opinion.
- **Descartes** : L'idée claire et distincte résiste au doute.

### II. La vérité est construite par le sujet (Subjectivité)
- Nos sens peuvent nous tromper.
- **Nietzsche** : *"Il n'y a pas de faits, seulement des interprétations."*

### III. La recherche de la vérité comme démarche collective
- La vérité scientifique est révisable (falsifiabilité de **Popper**).`
  },
  {
    id: "7",
    document: `## Chronologie des Inventions

| Année | Invention | Inventeur | Impact |
| :--- | :--- | :--- | :--- |
| $1769$ | Machine à vapeur | James Watt | Énergie mécanique |
| $1804$ | Locomotive à vapeur | Richard Trevithick | Transports ferroviaires |
| $1879$ | Ampoule électrique | Thomas Edison | Éclairage moderne |

### Exercice
1. Quelle source d'énergie a dominé la Première Révolution Industrielle ?
2. Expliquer l'exode rural consécutif à la mécanisation agricole.`
  },
  {
    id: "8",
    document: `## Complexité Algorithmique

| Algorithme | Pire des cas | Cas moyen |
| :--- | :--- | :--- |
| **Tri à bulles** | $O(n^2)$ | $O(n^2)$ |
| **Tri Fusion (MergeSort)** | $O(n \\log n)$ | $O(n \\log n)$ |
| **Dijkstra** | $O((V + E) \\log V)$ | $O((V + E) \\log V)$ |

### Question
Soit un graphe $G=(V, E)$ non orienté avec $|V| = 6$ sommets. 
Déterminer la matrice d'adjacence du graphe si chaque sommet est connecté à au plus 2 autres sommets.`,
    correction: `## Corrigé - Matrice d'Adjacence

Pour un graphe où chaque sommet a un degré $d(v) \\le 2$, la matrice $M$ de taille $6 \\times 6$ est symétrique ($M_{ij} = M_{ji}$) avec au maximum deux $1$ par ligne :

$$M = \\begin{pmatrix} 
0 & 1 & 0 & 0 & 0 & 0 \\\\
1 & 0 & 1 & 0 & 0 & 0 \\\\
0 & 1 & 0 & 0 & 0 & 0 \\\\
0 & 0 & 0 & 0 & 1 & 1 \\\\
0 & 0 & 0 & 1 & 0 & 0 \\\\
0 & 0 & 0 & 1 & 0 & 0 
\\end{pmatrix}$$`
  },
{
  id: "9",
  document: `## 1. Warm-up & Reading Comprehension

Read the following excerpt from an article on climate tech before looking at the grammar structures.

> "If scientists **had developed** clean energy solutions thirty years ago, our planet **would not be** in such a critical state today. Currently, renewable infrastructure **is being built** across Europe, and thousands of green jobs **are created** every year. However, if governments **don't invest** more heavily in modern transport, targets **will be missed**."

![Photo illustration showing a modern wind farm next to a solar panel field with clear blue sky](/docs/36984368543653468438436843684.jpg)
---

## 2. Conditionals (Expressing Hypotheses)

Conditionals are used to talk about real or hypothetical situations and their results.

| Type | Use / Meaning | If-clause (Condition) | Main clause (Result) | Example |
| :--- | :--- | :--- | :--- | :--- |
| **Type 1** | Real / Probable future | **Present Simple** | **Will + Verb** | If they *study*, they *will pass*. |
| **Type 2** | Unreal present / Imaginary | **Past Simple** | **Would + Verb** | If I *were* rich, I *would travel*. |
| **Type 3** | Impossible past regret | **Past Perfect** | **Would have + V3** | If she *had known*, she *would have called*. |

> **Teacher's Tip (Grade 1re focus):** In formal English for Type 2, always use **were** instead of *was* for all persons (*If I were you...*, *If he were here...*).

---

## 3. The Passive Voice

We use the passive voice when the **action or the object** is more important than the person performing the action (the agent).

### Structure
* **Active:** Subject + Verb + Object
* **Passive:** Object + **BE** (conjugated) + **Past Participle (V3)** + (*by* Subject)

### Tense Conversion Examples

* **Present Simple:**
  * *Active:* The team writes the report.
  * *Passive:* The report **is written** by the team.
* **Past Simple:**
  * *Active:* Shakespeare wrote *Hamlet*.
  * *Passive:* *Hamlet* **was written** by Shakespeare.
* **Present Continuous:**
  * *Active:* They are repairing the road.
  * *Passive:* The road **is being repaired**.

`
}
];