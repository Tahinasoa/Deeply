INSERT INTO chapters (id, title, description) VALUES

    -- ===== MATHÉMATIQUES : contenus partagés (mêmes partout, mg/fr/en, plusieurs niveaux) =====
    ('nombres-entiers',        'Les nombres entiers',           'Lecture, écriture et comparaison des nombres entiers naturels.'),
    ('fractions',               'Les fractions',                  'Notion de fraction, simplification et opérations de base.'),
    ('nombres-decimaux',        'Les nombres décimaux',           'Écriture, comparaison et opérations sur les nombres décimaux.'),
    ('proportionnalite',        'Proportionnalité',               'Reconnaître et résoudre des situations de proportionnalité.'),
    ('geometrie-plane',         'Géométrie plane',                'Figures géométriques de base : triangles, quadrilatères, cercle.'),
    ('perimetre-aire',          'Périmètres et aires',            'Calcul de périmètres et d’aires de figures usuelles.'),
    ('symetrie',                'Symétrie axiale et centrale',    'Construction et propriétés des symétries.'),
    ('theoreme-pythagore',      'Théorème de Pythagore',          'Énoncé, démonstration et applications du théorème de Pythagore.'),
    ('theoreme-thales',         'Théorème de Thalès',             'Énoncé, démonstration et applications du théorème de Thalès.'),
    ('statistiques-base',       'Statistiques : moyenne et effectifs', 'Lecture de données, moyenne, effectifs et fréquences.'),

    -- ===== MATHÉMATIQUES : contenus spécifiques à un niveau (même thème, contenu différent) =====
    ('equations-4eme',          'Équations du premier degré',     'Résolution d’équations simples à une inconnue (niveau 4ème).'),
    ('equations-3eme',          'Équations et inéquations',       'Résolution d’équations et d’inéquations du premier degré (niveau 3ème).'),
    ('calcul-litteral-3eme',    'Calcul littéral',                'Développement, factorisation et réduction d’expressions littérales (niveau 3ème).'),
    ('fonctions-2nde',          'Notion de fonction',             'Introduction à la notion de fonction, image et antécédent (niveau Seconde).'),
    ('calcul-dans-r',           'Calcul dans R',                  'Ensembles de nombres, intervalles et calcul dans R (niveau Seconde/3ème).'),
    ('trigonometrie-2nde',      'Trigonométrie',                  'Relations trigonométriques dans le triangle rectangle (niveau Seconde).'),
    ('probabilites-3eme',       'Probabilités',                   'Introduction au calcul de probabilités simples (niveau 3ème).'),
    ('fonctions-1ere',          'Étude de fonctions',             'Sens de variation, limites simples et dérivation (niveau Première).'),
    ('suites-terminale',        'Suites numériques',              'Suites arithmétiques et géométriques, limites (niveau Terminale).'),
    ('derivation-terminale',    'Dérivation et applications',     'Calcul de dérivées et étude de fonctions (niveau Terminale).'),
    ('probabilites-terminale',  'Probabilités conditionnelles',   'Probabilités conditionnelles et variables aléatoires (niveau Terminale).'),

    -- ===== FRANÇAIS (partagé mg/fr, contenu identique) =====
    ('grammaire-base',          'Grammaire de base',              'Nature et fonction des mots, structure de la phrase.'),
    ('conjugaison-indicatif',   'Conjugaison : l’indicatif',      'Les temps de l’indicatif et leurs usages.'),
    ('orthographe-accords',     'Orthographe : les accords',      'Accords sujet-verbe, accords du participe passé.'),

    -- ===== SCIENCES (partagé mg/fr) =====
    ('cellule-vivant',          'La cellule, unité du vivant',    'Structure de la cellule animale et végétale.'),
    ('systeme-solaire',         'Le système solaire',             'Composition et organisation du système solaire.'),

    -- ===== HISTOIRE-GÉOGRAPHIE (un seul, volontairement peu fourni) =====
    ('revolution-francaise',    'La Révolution française',        'Causes, déroulement et conséquences de la Révolution française.');

    -- ===== AUCUN chapitre pour : Malagasy, Anglais, Espagnol, Chinois, Informatique,
    -- English Language Arts, Science (en), Social Studies (en),
    -- Geography (en), Chinese (en), Computer Science (en)
    -- --> volontairement vide, pour tester le cas "matière sans contenu"