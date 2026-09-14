INSERT INTO chapters_curricula (chapter_id, curriculum_id) VALUES

    -- ===== nombres-entiers : 6ème, mg + fr (contenu identique) =====
    ('nombres-entiers', 'mg-6eme-mathematiques'),
    ('nombres-entiers', 'fr-6eme-mathematiques'),

    -- ===== fractions : 6ème et 5ème, mg + fr =====
    ('fractions', 'mg-6eme-mathematiques'),
    ('fractions', 'mg-5eme-mathematiques'),
    ('fractions', 'fr-6eme-mathematiques'),
    ('fractions', 'fr-5eme-mathematiques'),

    -- ===== nombres-decimaux : 6ème, mg + fr =====
    ('nombres-decimaux', 'mg-6eme-mathematiques'),
    ('nombres-decimaux', 'fr-6eme-mathematiques'),

    -- ===== proportionnalite : 5ème et 4ème, mg + fr =====
    ('proportionnalite', 'mg-5eme-mathematiques'),
    ('proportionnalite', 'mg-4eme-mathematiques'),
    ('proportionnalite', 'fr-5eme-mathematiques'),
    ('proportionnalite', 'fr-4eme-mathematiques'),

    -- ===== geometrie-plane : 6ème et 5ème, mg + fr =====
    ('geometrie-plane', 'mg-6eme-mathematiques'),
    ('geometrie-plane', 'mg-5eme-mathematiques'),
    ('geometrie-plane', 'fr-6eme-mathematiques'),
    ('geometrie-plane', 'fr-5eme-mathematiques'),

    -- ===== perimetre-aire : 6ème et 5ème, mg + fr =====
    ('perimetre-aire', 'mg-6eme-mathematiques'),
    ('perimetre-aire', 'mg-5eme-mathematiques'),
    ('perimetre-aire', 'fr-6eme-mathematiques'),
    ('perimetre-aire', 'fr-5eme-mathematiques'),

    -- ===== symetrie : 6ème et 5ème, mg + fr =====
    ('symetrie', 'mg-6eme-mathematiques'),
    ('symetrie', 'mg-5eme-mathematiques'),
    ('symetrie', 'fr-6eme-mathematiques'),
    ('symetrie', 'fr-5eme-mathematiques'),

    -- ===== theoreme-pythagore : 4ème et 3ème, mg + fr =====
    ('theoreme-pythagore', 'mg-4eme-mathematiques'),
    ('theoreme-pythagore', 'mg-3eme-mathematiques'),
    ('theoreme-pythagore', 'fr-4eme-mathematiques'),
    ('theoreme-pythagore', 'fr-3eme-mathematiques'),

    -- ===== theoreme-thales : 4ème et 3ème, mg + fr =====
    ('theoreme-thales', 'mg-4eme-mathematiques'),
    ('theoreme-thales', 'mg-3eme-mathematiques'),
    ('theoreme-thales', 'fr-4eme-mathematiques'),
    ('theoreme-thales', 'fr-3eme-mathematiques'),

    -- ===== statistiques-base : 4ème et 3ème, mg + fr =====
    ('statistiques-base', 'mg-4eme-mathematiques'),
    ('statistiques-base', 'mg-3eme-mathematiques'),
    ('statistiques-base', 'fr-4eme-mathematiques'),
    ('statistiques-base', 'fr-3eme-mathematiques'),

    -- ===== equations-4eme : uniquement 4ème, mg + fr =====
    ('equations-4eme', 'mg-4eme-mathematiques'),
    ('equations-4eme', 'fr-4eme-mathematiques'),

    -- ===== equations-3eme : uniquement 3ème, mg + fr =====
    ('equations-3eme', 'mg-3eme-mathematiques'),
    ('equations-3eme', 'fr-3eme-mathematiques'),

    -- ===== calcul-litteral-3eme : uniquement 3ème, mg + fr =====
    ('calcul-litteral-3eme', 'mg-3eme-mathematiques'),
    ('calcul-litteral-3eme', 'fr-3eme-mathematiques'),

    -- ===== calcul-dans-r : partagé 3ème ET Seconde, mg + fr =====
    ('calcul-dans-r', 'mg-3eme-mathematiques'),
    ('calcul-dans-r', 'mg-2nde-mathematiques'),
    ('calcul-dans-r', 'fr-3eme-mathematiques'),
    ('calcul-dans-r', 'fr-2nde-mathematiques'),

    -- ===== fonctions-2nde : uniquement Seconde, mg + fr =====
    ('fonctions-2nde', 'mg-2nde-mathematiques'),
    ('fonctions-2nde', 'fr-2nde-mathematiques'),

    -- ===== trigonometrie-2nde : uniquement Seconde, mg + fr =====
    ('trigonometrie-2nde', 'mg-2nde-mathematiques'),
    ('trigonometrie-2nde', 'fr-2nde-mathematiques'),

    -- ===== probabilites-3eme : uniquement 3ème, mg + fr =====
    ('probabilites-3eme', 'mg-3eme-mathematiques'),
    ('probabilites-3eme', 'fr-3eme-mathematiques'),

    -- ===== fonctions-1ere : uniquement Première, mg + fr =====
    ('fonctions-1ere', 'mg-1ere-mathematiques'),
    ('fonctions-1ere', 'fr-1ere-mathematiques'),

    -- ===== suites-terminale : uniquement Terminale, mg + fr =====
    ('suites-terminale', 'mg-terminale-mathematiques'),
    ('suites-terminale', 'fr-terminale-mathematiques'),

    -- ===== derivation-terminale : Première ET Terminale (approfondissement progressif), mg + fr =====
    ('derivation-terminale', 'mg-1ere-mathematiques'),
    ('derivation-terminale', 'mg-terminale-mathematiques'),
    ('derivation-terminale', 'fr-1ere-mathematiques'),
    ('derivation-terminale', 'fr-terminale-mathematiques'),

    -- ===== probabilites-terminale : uniquement Terminale, mg + fr =====
    ('probabilites-terminale', 'mg-terminale-mathematiques'),
    ('probabilites-terminale', 'fr-terminale-mathematiques'),

    -- ===== FRANÇAIS : grammaire-base, 6ème et 5ème, mg + fr =====
    ('grammaire-base', 'mg-6eme-francais'),
    ('grammaire-base', 'mg-5eme-francais'),
    ('grammaire-base', 'fr-6eme-francais'),
    ('grammaire-base', 'fr-5eme-francais'),

    -- ===== FRANÇAIS : conjugaison-indicatif, 6ème et 5ème, mg + fr =====
    ('conjugaison-indicatif', 'mg-6eme-francais'),
    ('conjugaison-indicatif', 'mg-5eme-francais'),
    ('conjugaison-indicatif', 'fr-6eme-francais'),
    ('conjugaison-indicatif', 'fr-5eme-francais'),

    -- ===== FRANÇAIS : orthographe-accords, uniquement 4ème, mg + fr =====
    ('orthographe-accords', 'mg-4eme-francais'),
    ('orthographe-accords', 'fr-4eme-francais'),

    -- ===== SCIENCES : cellule-vivant, 5ème, mg + fr =====
    ('cellule-vivant', 'mg-5eme-sciences'),
    ('cellule-vivant', 'fr-5eme-sciences'),

    -- ===== SCIENCES : systeme-solaire, 6ème, mg + fr =====
    ('systeme-solaire', 'mg-6eme-sciences'),
    ('systeme-solaire', 'fr-6eme-sciences'),

    -- ===== HISTOIRE-GÉO : revolution-francaise, uniquement 4ème, mg + fr (volontairement peu couvert) =====
    ('revolution-francaise', 'mg-4eme-histoire-geo'),
    ('revolution-francaise', 'fr-4eme-histoire-geo');

    -- Aucune ligne pour : malagasy, anglais, espagnol, chinois, informatique
    -- (mg, fr) ni pour les subjects -en (mathematics-en, ela-en, science-en,
    -- social-studies-en, geography-en, chinese-en, computer-science-en)
    -- --> volontairement vide, pour tester le cas "curriculum sans chapitre"