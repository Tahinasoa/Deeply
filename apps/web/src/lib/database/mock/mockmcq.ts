

import { MCQActivity } from "@/types/learning-item";


export const mockActivitiesMCQ: MCQActivity[] = [
  {
    id: "mcq-1-1",
    learningItemId: "1",
    type: "mcq",
    anchorQuestion: "Quelle est l'expression du vecteur vitesse $\\vec{v}(t)$ ?",
    instruction: "Choisissez l'expression correcte du vecteur vitesse en dérivant $\\vec{OM}(t)$.",
    explanation: "$\\vec{v}(t) = \\frac{d\\vec{OM}}{dt} = 4t\\vec{i} + 3\\vec{j}$, car la dérivée de $2t^2+1$ est $4t$ et la dérivée de $3t-2$ est $3$.",
    options: [
      { text: "$\\vec{v}(t) = 4t\\vec{i} + 3\\vec{j}$", isCorrect: true },
      { text: "$\\vec{v}(t) = 2t\\vec{i} + 3\\vec{j}$", isCorrect: false },
      { text: "$\\vec{v}(t) = 4t\\vec{i} - 2\\vec{j}$", isCorrect: false },
      { text: "$\\vec{v}(t) = 4t^2\\vec{i} + 3t\\vec{j}$", isCorrect: false }
    ]
  },
  {
    id: "mcq-1-2",
    learningItemId: "1",
    type: "mcq",
    anchorQuestion: "1. Montrer que l'accélération est constante.",
    instruction: "Quelle affirmation justifie correctement que l'accélération est constante ?",
    explanation: "$\\vec{a}(t) = 4\\vec{i}$ ne dépend pas de $t$, donc l'accélération est constante et vaut $4\\ \\text{m/s}^2$.",
    options: [
      { text: "$\\vec{a}(t) = 4\\vec{i}$ ne dépend pas du temps $t$", isCorrect: true },
      { text: "$\\vec{a}(t)$ dépend de $t$ mais reste faible", isCorrect: false },
      { text: "La vitesse $\\vec{v}(t)$ ne dépend pas du temps", isCorrect: false },
      { text: "$\\vec{a}(t) = 4t\\vec{i}$ car c'est la dérivée seconde", isCorrect: false }
    ]
  },
  {
    id: "mcq-1-3",
    learningItemId: "1",
    type: "mcq",
    anchorQuestion: "2. Déterminer le vecteur vitesse à $t = 0\\text{s}$.",
    instruction: "Quel est le vecteur vitesse initiale $\\vec{v}(0)$ ?",
    explanation: "En remplaçant $t=0$ dans $\\vec{v}(t) = 4t\\vec{i} + 3\\vec{j}$, on obtient $\\vec{v}(0) = 3\\vec{j}$.",
    options: [
      { text: "$\\vec{v}(0) = 3\\vec{j}$", isCorrect: true },
      { text: "$\\vec{v}(0) = 4\\vec{i}$", isCorrect: false },
      { text: "$\\vec{v}(0) = \\vec{0}$", isCorrect: false },
      { text: "$\\vec{v}(0) = 4\\vec{i} + 3\\vec{j}$", isCorrect: false }
    ]
  },
  {
    id: "mcq-1-4",
    learningItemId: "1",
    type: "mcq",
    anchorQuestion: "Quelle est la norme de la vitesse à $t = 2\\text{s}$ ?",
    instruction: "Calculez $v(2)$ à partir de $\\vec{v}(t) = 4t\\vec{i} + 3\\vec{j}$.",
    explanation: "$\\vec{v}(2) = 8\\vec{i} + 3\\vec{j}$, donc $v(2) = \\sqrt{8^2+3^2} = \\sqrt{73}\\ \\text{m/s}$.",
    options: [
      { text: "$v(2) = \\sqrt{73}\\ \\text{m/s}$", isCorrect: true },
      { text: "$v(2) = 11\\ \\text{m/s}$", isCorrect: false },
      { text: "$v(2) = \\sqrt{64}\\ \\text{m/s}$", isCorrect: false },
      { text: "$v(2) = 8\\ \\text{m/s}$", isCorrect: false }
    ]
  },
  {
    id: "mcq-1-5",
    learningItemId: "1",
    type: "mcq",
    anchorQuestion: "Quelle est la valeur de l'accélération à $t = 2\\text{s}$ ?",
    instruction: "Déterminez $a(2)$ sachant que $\\vec{a}(t) = 4\\vec{i}$.",
    explanation: "L'accélération étant constante et égale à $4\\vec{i}$, sa norme vaut $4\\ \\text{m/s}^2$ quel que soit $t$, donc aussi à $t=2\\text{s}$.",
    options: [
      { text: "$a(2) = 4\\ \\text{m/s}^2$", isCorrect: true },
      { text: "$a(2) = 8\\ \\text{m/s}^2$", isCorrect: false },
      { text: "$a(2) = 0\\ \\text{m/s}^2$", isCorrect: false },
      { text: "$a(2) = 2\\ \\text{m/s}^2$", isCorrect: false }
    ]
  },
  {
    id: "mcq-1-6",
    learningItemId: "1",
    type: "mcq",
    anchorQuestion: "Quelle est l'expression du vecteur position $\\vec{OM}(t)$ ?",
    instruction: "Identifiez le vecteur position donné dans l'énoncé.",
    explanation: "L'énoncé donne directement $\\vec{OM}(t) = (2t^2+1)\\vec{i} + (3t-2)\\vec{j}$.",
    options: [
      { text: "$\\vec{OM}(t) = (2t^2+1)\\vec{i} + (3t-2)\\vec{j}$", isCorrect: true },
      { text: "$\\vec{OM}(t) = (4t)\\vec{i} + (3)\\vec{j}$", isCorrect: false },
      { text: "$\\vec{OM}(t) = (2t^2)\\vec{i} + (3t)\\vec{j}$", isCorrect: false },
      { text: "$\\vec{OM}(t) = (t^2+1)\\vec{i} + (3t-2)\\vec{j}$", isCorrect: false }
    ]
  }
,
  // ===================== DOC 2 - Théorème de Pythagore =====================
  {
    id: "mcq-2-1",
    learningItemId: "2",
    type: "mcq",
    anchorQuestion: "1. Calculer la longueur de l'hypoténuse $[BC]$.",
    instruction: "Appliquez le théorème de Pythagore pour déterminer $BC$.",
    explanation: "$BC^2 = AB^2 + AC^2 = 6^2 + 8^2 = 100$, donc $BC = \\sqrt{100} = 10\\text{ cm}$.",
    options: [
      { text: "$BC = 10\\text{ cm}$", isCorrect: true },
      { text: "$BC = 14\\text{ cm}$", isCorrect: false },
      { text: "$BC = 100\\text{ cm}$", isCorrect: false },
      { text: "$BC = 7\\text{ cm}$", isCorrect: false }
    ]
  },
  {
    id: "mcq-2-2",
    learningItemId: "2",
    type: "mcq",
    anchorQuestion: "2. Le triangle $BCD$ est-il rectangle en $C$ ?",
    instruction: "Utilisez la réciproque du théorème de Pythagore pour conclure.",
    explanation: "$BD^2 = 100$ alors que $BC^2 + CD^2 = 100 + 36 = 136$. Les deux valeurs étant différentes, $BCD$ n'est pas rectangle en $C$.",
    options: [
      { text: "Non, car $BD^2 \\neq BC^2 + CD^2$", isCorrect: true },
      { text: "Oui, car $BD^2 = BC^2 + CD^2$", isCorrect: false },
      { text: "Oui, car $BC = CD$", isCorrect: false },
      { text: "On ne peut pas le déterminer sans plus d'informations", isCorrect: false }
    ]
  },
  {
    id: "mcq-2-3",
    learningItemId: "2",
    type: "mcq",
    anchorQuestion: "Quelle est la formule du théorème de Pythagore dans un triangle rectangle en $A$ ?",
    instruction: "Identifiez la relation correcte entre les côtés du triangle $ABC$ rectangle en $A$.",
    explanation: "Dans un triangle rectangle en $A$, le carré de l'hypoténuse $BC$ est égal à la somme des carrés des deux autres côtés : $BC^2 = AB^2 + AC^2$.",
    options: [
      { text: "$BC^2 = AB^2 + AC^2$", isCorrect: true },
      { text: "$AB^2 = BC^2 + AC^2$", isCorrect: false },
      { text: "$BC = AB + AC$", isCorrect: false },
      { text: "$AC^2 = AB^2 - BC^2$", isCorrect: false }
    ]
  },

  // ===================== DOC 3 - Courants littéraires =====================
  {
    id: "mcq-3-1",
    learningItemId: "3",
    type: "mcq",
    anchorQuestion: "Quel mouvement littéraire est associé à Molière et Racine ?",
    instruction: "Associez les auteurs au mouvement littéraire correspondant.",
    explanation: "Molière et Racine sont des auteurs clés du Classicisme, mouvement du XVIIe siècle prônant l'ordre et la clarté.",
    options: [
      { text: "Le Classicisme", isCorrect: true },
      { text: "Le Romantisme", isCorrect: false },
      { text: "Le Réalisme", isCorrect: false },
      { text: "Les Lumières", isCorrect: false }
    ]
  },
  {
    id: "mcq-3-2",
    learningItemId: "3",
    type: "mcq",
    anchorQuestion: "À quel siècle appartient le mouvement des Lumières ?",
    instruction: "Identifiez le siècle correspondant au mouvement des Lumières.",
    explanation: "Le tableau indique que le mouvement des Lumières, porté par Voltaire et Rousseau, appartient au XVIIIe siècle.",
    options: [
      { text: "Le XVIIIe siècle", isCorrect: true },
      { text: "Le XVIIe siècle", isCorrect: false },
      { text: "Le XIXe siècle", isCorrect: false },
      { text: "Le XXe siècle", isCorrect: false }
    ]
  },
  {
    id: "mcq-3-3",
    learningItemId: "3",
    type: "mcq",
    anchorQuestion: "Quel principe caractérise le mouvement des Lumières ?",
    instruction: "Choisissez le principe correspondant au mouvement des Lumières.",
    explanation: "Le tableau précise que les Lumières reposent sur la raison, la critique sociale et la liberté.",
    options: [
      { text: "Raison, critique sociale, liberté", isCorrect: true },
      { text: "Ordre, clarté, règle des trois unités", isCorrect: false },
      { text: "Expression des sentiments, mal du siècle", isCorrect: false },
      { text: "Peinture fidèle de la société", isCorrect: false }
    ]
  },
  {
    id: "mcq-3-4",
    learningItemId: "3",
    type: "mcq",
    anchorQuestion: "Qui a écrit \"Le beau est toujours bizarre\" ?",
    instruction: "Identifiez l'auteur de la citation présentée dans le document.",
    explanation: "La citation est attribuée à Charles Baudelaire, cité en fin de document.",
    options: [
      { text: "Charles Baudelaire", isCorrect: true },
      { text: "Victor Hugo", isCorrect: false },
      { text: "Émile Zola", isCorrect: false },
      { text: "Balzac", isCorrect: false }
    ]
  },
  {
    id: "mcq-3-5",
    learningItemId: "3",
    type: "mcq",
    anchorQuestion: "Quels sont deux mouvements littéraires du XIXe siècle mentionnés dans le tableau ?",
    instruction: "Choisissez la paire correcte de mouvements du XIXe siècle.",
    explanation: "Le tableau associe le XIXe siècle au Romantisme (Hugo, Lamartine) et au Réalisme (Balzac, Zola).",
    options: [
      { text: "Romantisme et Réalisme", isCorrect: true },
      { text: "Classicisme et Lumières", isCorrect: false },
      { text: "Réalisme et Lumières", isCorrect: false },
      { text: "Classicisme et Romantisme", isCorrect: false }
    ]
  },

  // ===================== DOC 4 - Fonction exponentielle =====================
  {
    id: "mcq-4-1",
    learningItemId: "4",
    type: "mcq",
    anchorQuestion: "1a. Calculer $\\lim_{x \\to -\\infty} f(x)$.",
    instruction: "Déterminez la limite de $f(x) = (2-x)e^x - 1$ en $-\\infty$.",
    explanation: "Par croissance comparée, $\\lim_{x\\to -\\infty} e^x = 0$ et $\\lim_{x\\to -\\infty} xe^x = 0$, donc $\\lim_{x\\to -\\infty} f(x) = -1$, ce qui donne une asymptote horizontale $y=-1$.",
    options: [
      { text: "$-1$", isCorrect: true },
      { text: "$0$", isCorrect: false },
      { text: "$+\\infty$", isCorrect: false },
      { text: "$2$", isCorrect: false }
    ]
  },
  {
    id: "mcq-4-2",
    learningItemId: "4",
    type: "mcq",
    anchorQuestion: "1b. Calculer $\\lim_{x \\to +\\infty} f(x)$ et préciser la nature de la branche infinie.",
    instruction: "Déterminez le comportement de $f$ en $+\\infty$ et la nature de la branche infinie.",
    explanation: "$\\lim_{x\\to+\\infty} f(x) = -\\infty$ et $\\lim_{x\\to+\\infty} \\frac{f(x)}{x} = -\\infty$, donc $(\\mathcal{C}_f)$ admet une branche parabolique de direction $(Oy)$.",
    options: [
      { text: "$f(x)\\to -\\infty$, branche parabolique de direction $(Oy)$", isCorrect: true },
      { text: "$f(x)\\to +\\infty$, asymptote horizontale $y=0$", isCorrect: false },
      { text: "$f(x)\\to -1$, asymptote horizontale $y=-1$", isCorrect: false },
      { text: "$f(x)\\to -\\infty$, asymptote oblique", isCorrect: false }
    ]
  },
  {
    id: "mcq-4-3",
    learningItemId: "4",
    type: "mcq",
    anchorQuestion: "2a. Démontrer que pour tout $x \\in \\mathbb{R}$, $f'(x) = (1 - x)e^x$.",
    instruction: "Quelle est l'expression correcte de la dérivée de $f(x) = (2-x)e^x - 1$ ?",
    explanation: "En posant $u=2-x$ et $v=e^x$, on a $f'=u'v+uv' = -e^x + (2-x)e^x = (1-x)e^x$.",
    options: [
      { text: "$f'(x) = (1 - x)e^x$", isCorrect: true },
      { text: "$f'(x) = (2 - x)e^x$", isCorrect: false },
      { text: "$f'(x) = -e^x$", isCorrect: false },
      { text: "$f'(x) = (x - 1)e^x$", isCorrect: false }
    ]
  },
  {
    id: "mcq-4-4",
    learningItemId: "4",
    type: "mcq",
    anchorQuestion: "2b. Étudier le signe de $f'(x)$ et dresser le tableau de variations.",
    instruction: "Quel est le signe de $f'(x)$ pour $x < 1$ ?",
    explanation: "Comme $e^x>0$ pour tout $x$, le signe de $f'(x)=(1-x)e^x$ dépend de $(1-x)$, qui est positif pour $x<1$ : $f$ est donc croissante sur $]-\\infty,1]$.",
    options: [
      { text: "$f'(x) > 0$, $f$ est croissante", isCorrect: true },
      { text: "$f'(x) < 0$, $f$ est décroissante", isCorrect: false },
      { text: "$f'(x) = 0$, $f$ est constante", isCorrect: false },
      { text: "Le signe ne peut pas être déterminé", isCorrect: false }
    ]
  },
  {
    id: "mcq-4-5",
    learningItemId: "4",
    type: "mcq",
    anchorQuestion: "3a. Démontrer que l'équation $f(x) = 0$ admet une unique solution $\\alpha$ sur $[1{,}5\\,;\\,2]$.",
    instruction: "Quel théorème permet de justifier l'existence et l'unicité de la solution $\\alpha$ ?",
    explanation: "$f$ est continue et strictement décroissante sur $[1{,}5\\,;\\,2]$, avec $f(1{,}5)>0$ et $f(2)<0$ : le théorème des valeurs intermédiaires (corollaire de la bijection) garantit une unique solution.",
    options: [
      { text: "Le théorème des valeurs intermédiaires (TVI)", isCorrect: true },
      { text: "Le théorème de Pythagore", isCorrect: false },
      { text: "Le théorème de Thalès", isCorrect: false },
      { text: "La règle de L'Hôpital", isCorrect: false }
    ]
  },
  {
    id: "mcq-4-6",
    learningItemId: "4",
    type: "mcq",
    anchorQuestion: "3b. Déterminer l'équation cartésienne de la tangente $(T)$ au point d'abscisse $x = 0$.",
    instruction: "Quelle est l'équation de la tangente $(T)$ à $(\\mathcal{C}_f)$ en $x=0$ ?",
    explanation: "$f'(0) = 1$ et $f(0) = 1$, donc l'équation de la tangente est $y = f'(0)(x-0) + f(0) = x + 1$.",
    options: [
      { text: "$y = x + 1$", isCorrect: true },
      { text: "$y = x - 1$", isCorrect: false },
      { text: "$y = 2x + 1$", isCorrect: false },
      { text: "$y = -x + 1$", isCorrect: false }
    ]
  },

  // ===================== DOC 5 - Structure interne de la Terre =====================
  {
    id: "mcq-5-1",
    learningItemId: "5",
    type: "mcq",
    anchorQuestion: "Quelle est l'épaisseur moyenne de la croûte océanique ?",
    instruction: "Choisissez l'épaisseur correspondant à la croûte océanique.",
    explanation: "Le tableau indique une épaisseur de $5$ à $10\\text{ km}$ pour la croûte océanique.",
    options: [
      { text: "$5 - 10\\text{ km}$", isCorrect: true },
      { text: "$30 - 70\\text{ km}$", isCorrect: false },
      { text: "$670\\text{ km}$", isCorrect: false },
      { text: "$100 - 200\\text{ km}$", isCorrect: false }
    ]
  },
  {
    id: "mcq-5-2",
    learningItemId: "5",
    type: "mcq",
    anchorQuestion: "Quel est l'état physique du manteau supérieur ?",
    instruction: "Identifiez l'état physique correspondant au manteau supérieur.",
    explanation: "Le tableau précise que le manteau supérieur est ductile ou rigide selon la profondeur, jusqu'à $670\\text{ km}$.",
    options: [
      { text: "Ductile / Rigide", isCorrect: true },
      { text: "Liquide", isCorrect: false },
      { text: "Gazeux", isCorrect: false },
      { text: "Solide uniquement (Granite)", isCorrect: false }
    ]
  },
  {
    id: "mcq-5-3",
    learningItemId: "5",
    type: "mcq",
    anchorQuestion: "Quel type de limite de plaques correspond aux dorsales ?",
    instruction: "Associez le type de limite de plaques aux dorsales océaniques.",
    explanation: "Les dorsales sont des limites divergentes, où de la lithosphère océanique est créée.",
    options: [
      { text: "Divergent", isCorrect: true },
      { text: "Convergent", isCorrect: false },
      { text: "Transformant", isCorrect: false },
      { text: "Aucun de ces types", isCorrect: false }
    ]
  },
  {
    id: "mcq-5-4",
    learningItemId: "5",
    type: "mcq",
    anchorQuestion: "Quel type de limite de plaques correspond aux fosses de subduction ?",
    instruction: "Associez le type de limite de plaques aux fosses de subduction.",
    explanation: "Les fosses de subduction correspondent à des limites convergentes, où la lithosphère est détruite.",
    options: [
      { text: "Convergent", isCorrect: true },
      { text: "Divergent", isCorrect: false },
      { text: "Transformant", isCorrect: false },
      { text: "Statique", isCorrect: false }
    ]
  },
  {
    id: "mcq-5-5",
    learningItemId: "5",
    type: "mcq",
    anchorQuestion: "Quelle est la composition typique de la croûte continentale ?",
    instruction: "Identifiez le matériau associé à la croûte continentale dans le tableau.",
    explanation: "Le tableau indique que la croûte continentale est composée de granite, contrairement à la croûte océanique (basalte/gabbro).",
    options: [
      { text: "Granite", isCorrect: true },
      { text: "Basalte / Gabbro", isCorrect: false },
      { text: "Calcaire", isCorrect: false },
      { text: "Fer et Nickel", isCorrect: false }
    ]
  },

  // ===================== DOC 6 - Dissertation : la vérité =====================
  {
    id: "mcq-6-1",
    learningItemId: "6",
    type: "mcq",
    anchorQuestion: "Quelle thèse est défendue dans l'Axe 1 du plan ?",
    instruction: "Identifiez la thèse correspondant au premier axe du plan.",
    explanation: "L'Axe 1 défend l'idée que la vérité est objective et universelle, en s'appuyant sur Descartes et la raison.",
    options: [
      { text: "La vérité est objective et universelle", isCorrect: true },
      { text: "La vérité dépend de nos perceptions et notre culture", isCorrect: false },
      { text: "La vérité comme recherche intersubjective", isCorrect: false },
      { text: "La vérité n'existe pas", isCorrect: false }
    ]
  },
  {
    id: "mcq-6-2",
    learningItemId: "6",
    type: "mcq",
    anchorQuestion: "Quels philosophes sont associés à la thèse de l'Axe 2 (subjectivité de la vérité) ?",
    instruction: "Identifiez les référents philosophiques de l'Axe 2.",
    explanation: "L'Axe 2, qui défend que la vérité dépend de nos perceptions et de notre culture, s'appuie sur Protagoras et Nietzsche.",
    options: [
      { text: "Protagoras et Nietzsche", isCorrect: true },
      { text: "Descartes et Kant", isCorrect: false },
      { text: "Karl Popper", isCorrect: false },
      { text: "Platon et Aristote", isCorrect: false }
    ]
  },
  {
    id: "mcq-6-3",
    learningItemId: "6",
    type: "mcq",
    anchorQuestion: "Quel philosophe est associé à la synthèse du plan (Axe III) ?",
    instruction: "Identifiez le philosophe correspondant à la synthèse proposée.",
    explanation: "La synthèse s'appuie sur Karl Popper et l'idée de la vérité comme recherche intersubjective, notamment via la falsifiabilité.",
    options: [
      { text: "Karl Popper", isCorrect: true },
      { text: "René Descartes", isCorrect: false },
      { text: "Friedrich Nietzsche", isCorrect: false },
      { text: "Protagoras", isCorrect: false }
    ]
  },
  {
    id: "mcq-6-4",
    learningItemId: "6",
    type: "mcq",
    anchorQuestion: "Quelle notion de Popper est mobilisée dans la synthèse ?",
    instruction: "Identifiez le concept clé associé à Karl Popper dans le corrigé.",
    explanation: "Le corrigé évoque la falsifiabilité de Popper : la vérité scientifique est révisable.",
    options: [
      { text: "La falsifiabilité", isCorrect: true },
      { text: "Le doute méthodique", isCorrect: false },
      { text: "La volonté de puissance", isCorrect: false },
      { text: "Le relativisme absolu", isCorrect: false }
    ]
  },

  // ===================== DOC 7 - Chronologie des inventions =====================
  {
    id: "mcq-7-1",
    learningItemId: "7",
    type: "mcq",
    anchorQuestion: "1. Quelle source d'énergie a dominé la Première Révolution Industrielle ?",
    instruction: "Choisissez la source d'énergie principale de la Première Révolution Industrielle.",
    explanation: "La machine à vapeur de James Watt (1769) a permis l'essor de l'énergie mécanique issue du charbon, moteur de la Première Révolution Industrielle.",
    options: [
      { text: "La vapeur (charbon)", isCorrect: true },
      { text: "L'électricité", isCorrect: false },
      { text: "Le pétrole", isCorrect: false },
      { text: "L'énergie nucléaire", isCorrect: false }
    ]
  },
  {
    id: "mcq-7-2",
    learningItemId: "7",
    type: "mcq",
    anchorQuestion: "2. Expliquer l'exode rural consécutif à la mécanisation agricole.",
    instruction: "Quelle est la conséquence principale de la mécanisation agricole évoquée par l'exercice ?",
    explanation: "La mécanisation réduisant les besoins en main-d'œuvre agricole, une partie de la population rurale migre vers les villes industrielles : c'est l'exode rural.",
    options: [
      { text: "Migration de la population rurale vers les villes industrielles", isCorrect: true },
      { text: "Augmentation de la population dans les campagnes", isCorrect: false },
      { text: "Disparition totale de l'agriculture", isCorrect: false },
      { text: "Baisse de la production industrielle", isCorrect: false }
    ]
  },
  {
    id: "mcq-7-3",
    learningItemId: "7",
    type: "mcq",
    anchorQuestion: "Qui est l'inventeur de la machine à vapeur en 1769 ?",
    instruction: "Associez l'invention de la machine à vapeur à son inventeur.",
    explanation: "Le tableau indique que James Watt est l'inventeur de la machine à vapeur en 1769.",
    options: [
      { text: "James Watt", isCorrect: true },
      { text: "Thomas Edison", isCorrect: false },
      { text: "Richard Trevithick", isCorrect: false },
      { text: "Nikola Tesla", isCorrect: false }
    ]
  },
  {
    id: "mcq-7-4",
    learningItemId: "7",
    type: "mcq",
    anchorQuestion: "Quelle invention est associée à Thomas Edison en 1879 ?",
    instruction: "Identifiez l'invention attribuée à Thomas Edison dans le tableau.",
    explanation: "Le tableau associe Thomas Edison à l'ampoule électrique, inventée en 1879, à l'origine de l'éclairage moderne.",
    options: [
      { text: "L'ampoule électrique", isCorrect: true },
      { text: "La locomotive à vapeur", isCorrect: false },
      { text: "La machine à vapeur", isCorrect: false },
      { text: "Le téléphone", isCorrect: false }
    ]
  },

  // ===================== DOC 8 - Complexité algorithmique =====================
  {
    id: "mcq-8-1",
    learningItemId: "8",
    type: "mcq",
    anchorQuestion: "Quelle est la complexité du tri à bulles dans le pire des cas ?",
    instruction: "Choisissez la complexité correspondant au tri à bulles (pire des cas).",
    explanation: "Le tableau indique une complexité de $O(n^2)$ pour le tri à bulles, aussi bien dans le pire des cas que dans le cas moyen.",
    options: [
      { text: "$O(n^2)$", isCorrect: true },
      { text: "$O(n \\log n)$", isCorrect: false },
      { text: "$O(n)$", isCorrect: false },
      { text: "$O(\\log n)$", isCorrect: false }
    ]
  },
  {
    id: "mcq-8-2",
    learningItemId: "8",
    type: "mcq",
    anchorQuestion: "Quelle est la complexité du tri fusion (MergeSort) ?",
    instruction: "Choisissez la complexité correspondant au tri fusion.",
    explanation: "Le tableau indique une complexité de $O(n \\log n)$ pour le tri fusion, dans le pire des cas comme en moyenne.",
    options: [
      { text: "$O(n \\log n)$", isCorrect: true },
      { text: "$O(n^2)$", isCorrect: false },
      { text: "$O(n)$", isCorrect: false },
      { text: "$O(2^n)$", isCorrect: false }
    ]
  },
  {
    id: "mcq-8-3",
    learningItemId: "8",
    type: "mcq",
    anchorQuestion: "Quelle est la complexité de l'algorithme de Dijkstra ?",
    instruction: "Choisissez la complexité correspondant à l'algorithme de Dijkstra.",
    explanation: "Le tableau indique une complexité de $O((V+E)\\log V)$ pour l'algorithme de Dijkstra.",
    options: [
      { text: "$O((V + E) \\log V)$", isCorrect: true },
      { text: "$O(n^2)$", isCorrect: false },
      { text: "$O(V \\cdot E)$", isCorrect: false },
      { text: "$O(\\log V)$", isCorrect: false }
    ]
  },
  {
    id: "mcq-8-4",
    learningItemId: "8",
    type: "mcq",
    anchorQuestion: "Déterminer la matrice d'adjacence du graphe si chaque sommet est connecté à au plus 2 autres sommets.",
    instruction: "Quelle propriété doit vérifier la matrice d'adjacence d'un graphe non orienté où chaque sommet a un degré $\\le 2$ ?",
    explanation: "La matrice doit être symétrique ($M_{ij}=M_{ji}$) et comporter au maximum deux $1$ par ligne, comme illustré dans le corrigé.",
    options: [
      { text: "Symétrique, avec au maximum deux $1$ par ligne", isCorrect: true },
      { text: "Diagonale, avec des $1$ uniquement sur la diagonale", isCorrect: false },
      { text: "Triangulaire supérieure uniquement", isCorrect: false },
      { text: "Composée uniquement de $0$", isCorrect: false }
    ]
  },

  // ===================== DOC 9 - English Grammar (Conditionals & Passive) =====================
  {
    id: "mcq-9-1",
    learningItemId: "9",
    type: "mcq",
    anchorQuestion: "What is the structure of a Type 1 conditional?",
    instruction: "Choose the correct structure for a Type 1 (real/probable future) conditional.",
    explanation: "According to the table, Type 1 conditionals use Present Simple in the if-clause and 'will + verb' in the main clause, e.g. 'If they study, they will pass.'",
    options: [
      { text: "Present Simple + Will + Verb", isCorrect: true },
      { text: "Past Simple + Would + Verb", isCorrect: false },
      { text: "Past Perfect + Would have + V3", isCorrect: false },
      { text: "Present Perfect + Will have + V3", isCorrect: false }
    ]
  },
  {
    id: "mcq-9-2",
    learningItemId: "9",
    type: "mcq",
    anchorQuestion: "What is the structure of a Type 3 conditional?",
    instruction: "Choose the correct structure for a Type 3 (impossible past regret) conditional.",
    explanation: "The table shows Type 3 conditionals use Past Perfect in the if-clause and 'would have + V3' in the main clause, e.g. 'If she had known, she would have called.'",
    options: [
      { text: "Past Perfect + Would have + V3", isCorrect: true },
      { text: "Present Simple + Will + Verb", isCorrect: false },
      { text: "Past Simple + Would + Verb", isCorrect: false },
      { text: "Present Continuous + Will be + Verb-ing", isCorrect: false }
    ]
  },
  {
    id: "mcq-9-3",
    learningItemId: "9",
    type: "mcq",
    anchorQuestion: "According to the Teacher's Tip, which form of 'be' should be used in formal Type 2 conditionals for all persons?",
    instruction: "Choose the correct form recommended for formal Type 2 conditionals.",
    explanation: "The Teacher's Tip specifies that in formal English, 'were' should be used instead of 'was' for all persons in Type 2 conditionals, e.g. 'If I were you...'",
    options: [
      { text: "\"Were\" for all persons", isCorrect: true },
      { text: "\"Was\" for all persons", isCorrect: false },
      { text: "\"Be\" for all persons", isCorrect: false },
      { text: "\"Been\" for all persons", isCorrect: false }
    ]
  },
  {
    id: "mcq-9-4",
    learningItemId: "9",
    type: "mcq",
    anchorQuestion: "What is the correct passive voice structure?",
    instruction: "Choose the correct structure for forming the passive voice.",
    explanation: "The document defines the passive structure as: Object + BE (conjugated) + Past Participle (V3) + (by Subject).",
    options: [
      { text: "Object + BE (conjugated) + Past Participle (V3) + (by Subject)", isCorrect: true },
      { text: "Subject + Verb + Object", isCorrect: false },
      { text: "Object + Verb + Subject", isCorrect: false },
      { text: "Subject + BE + Verb-ing", isCorrect: false }
    ]
  },
  {
    id: "mcq-9-5",
    learningItemId: "9",
    type: "mcq",
    anchorQuestion: "What is the passive form of \"Shakespeare wrote Hamlet\"?",
    instruction: "Transform the active sentence into its correct passive form.",
    explanation: "In the Past Simple passive, the structure is Object + was/were + V3 + by Subject: \"Hamlet was written by Shakespeare.\"",
    options: [
      { text: "\"Hamlet was written by Shakespeare.\"", isCorrect: true },
      { text: "\"Hamlet is written by Shakespeare.\"", isCorrect: false },
      { text: "\"Shakespeare was written by Hamlet.\"", isCorrect: false },
      { text: "\"Hamlet has written Shakespeare.\"", isCorrect: false }
    ]
  },
  {
    id: "mcq-9-6",
    learningItemId: "9",
    type: "mcq",
    anchorQuestion: "In the warm-up excerpt, why is the passive voice used (e.g. \"thousands of green jobs are created every year\")?",
    instruction: "Choose the reason for using the passive voice according to the document.",
    explanation: "The document states that the passive voice is used when the action or object is more important than the person performing it (the agent).",
    options: [
      { text: "Because the action or object is more important than the agent", isCorrect: true },
      { text: "Because the agent is unknown in all cases", isCorrect: false },
      { text: "Because it is grammatically required in all English sentences", isCorrect: false },
      { text: "Because it makes the sentence shorter", isCorrect: false }
    ]
  }
];