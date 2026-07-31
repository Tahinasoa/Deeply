export interface Exercise { 
  id: string; 
  title: string; 
  description: string;
  content: string; 
}

export const exo = new Map<string, Exercise>();

exo.set("1", {
  id: "1",
  title: "Physique : Vecteurs Vitesse et Accélération",
  description: "Comprendre la direction et le sens des vecteurs vitesse et accélération lors des phases d'accélération et de freinage d'un véhicule.",
  content: `
## 1. Cours : Vitesse et Accélération en Mouvement Rectiligne

En physique, le mouvement d'un véhicule le long d'une ligne droite dépend de deux vecteurs fondamentaux :
* **Le vecteur vitesse $\\vec{v}$** : Il pointe systématiquement dans le **sens du déplacement**.
* **Le vecteur accélération $\\vec{a}$** : Il représente la variation de la vitesse au cours du temps ($ \\vec{a} = \\frac{d\\vec{v}}{dt} $).

### Accélération vs Décélération

1. **Phase d'accélération (Prise de vitesse)** :
   * La vitesse du véhicule augmente ($ v $ augmente).
   * Les vecteurs $\\vec{v}$ et $\\vec{a}$ ont le **même sens**. L'accélération "pousse" le véhicule dans la direction où il avance.

![Schéma des vecteurs vitesse et accélération](/lyuumxlyuumxlyuu.png)

2. **Phase de décélération (Freinage)** :
   * La vitesse du véhicule diminue ($ v $ diminue).
   * Le vecteur accélération $\\vec{a}$ s'oppose au mouvement : $\\vec{v}$ et $\\vec{a}$ ont des **sens opposés**.

---

## 2. Exercices d'application

### Question 1 : Phase de dépassement
Une voiture roule vers la droite sur une voie rectiligne et accélère pour dépasser un véhicule.
* **Consigne** : Indique le sens du vecteur vitesse $\\vec{v}$ et celui du vecteur accélération $\\vec{a}$.

### Question 2 : Freinage d'urgence
La voiture se déplace toujours vers la droite mais freine à l'approche d'un obstacle.
* **Consigne** : Dans quel sens est orienté le vecteur accélération $\\vec{a}$ ? Justifie.
`
});

exo.set("2", {
  id: "2",
  title: "Le Théorème de Pythagore",
  description: "Apprendre à calculer les longueurs des côtés dans un triangle rectangle à l'aide du théorème de Pythagore.",
  content: `
## 1. Cours explicatif

Le théorème de Pythagore est une règle mathématique fondamentale. Il s'applique **uniquement** dans les triangles rectangles. Un triangle rectangle est un triangle qui possède un angle droit (90°).

### Le vocabulaire essentiel
* **L'hypoténuse** : C'est le côté le plus long du triangle. Il est situé directement en face de l'angle droit.
* **Les côtés de l'angle droit** : Ce sont les deux autres côtés qui forment l'angle droit.

### L'énoncé du théorème
Dans un triangle rectangle, le carré de la longueur de l'hypoténuse est égal à la somme des carrés des longueurs des deux autres côtés.

Si un triangle $ABC$ est rectangle en $A$, alors le côté $[BC]$ est l'hypoténuse. On écrit l'égalité suivante :
$$BC^2 = AB^2 + AC^2$$

### À quoi sert-il ?
Il sert à calculer la longueur d'un troisième côté lorsque l'on connaît déjà les longueurs des deux autres.

---

## 2. Questions et Exercices

### Question 1 (Calcul d'hypoténuse)
Soit $DEF$ un triangle rectangle en $D$.
On donne : $DE = 3\\text{ cm}$ et $DF = 4\\text{ cm}$.
* **Consigne** : Calcule la longueur de l'hypoténuse $[EF]$.

### Question 2 (Calcul d'un côté de l'angle droit)
Soit $GHI$ un triangle rectangle en $H$.
On donne l'hypoténuse $GI = 13\\text{ cm}$ et le côté $GH = 5\\text{ cm}$.
* **Consigne** : Calcule la longueur du côté $[HI]$.

### Question 3 (Problème concret)
Une échelle de $5\\text{ mètres}$ est appuyée contre un mur vertical. Le bas de l'échelle est placé à $3\\text{ mètres}$ du pied du mur.
* **Consigne** : À quelle hauteur le haut de l'échelle touche-t-il le mur ?

---`
});

exo.set("3", {
  id: "3",
  title: "Terminale L Literature Overview",
  description: "An overview of core literary movements, curriculum authors, and analytical skills for Terminale L.",
  content: `

## Core Curriculum Components

| Domain | Focus Areas | Key Objectives |
| :--- | :--- | :--- |
| **National Curriculum Authors** | Classic and modern works | Analyzing style, historical context, and intent |
| **Literary Movements** | Romanticism, Realism, Surrealism | Understanding how historical eras shape writing |
| **Philosophical Connections** | Ethics, aesthetics, metaphysics | Linking literary themes to human consciousness |

## Essential Skills for Terminale L

* **Explication de Texte**: Detailed line-by-line textual analysis.
* **Dissertation**: Structuring complex argumentative essays.
* **Synthesis**: Comparing multiple texts across different eras.
* **Contextualization**: Grounding literature in its political climate.
`
});