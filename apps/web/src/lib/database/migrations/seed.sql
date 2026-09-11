-- Educational systems seed data
INSERT INTO educational_systems (id, name) VALUES
    ('mg', 'Madagascar'),
    ('fr', 'France'),
    ('en', 'United States');


-- Grades seed data and systems_grades associations
-- Grades catalog (shared across systems where appropriate)
INSERT INTO grades (id, name) VALUES
    ('grade-6', '6ème / 6th Grade'),
    ('grade-5', '5ème / 7th Grade'),
    ('grade-4', '4ème / 8th Grade'),
    ('grade-3', '3ème / 9th Grade'),
    ('grade-10', 'Seconde / 10th Grade'),
    ('grade-11', 'Première / 11th Grade'),
    ('grade-12', 'Terminale / 12th Grade');

-- Systems grades associations
INSERT INTO systems_grades (id, system_id, grade_id) VALUES
    -- Madagascar grades
    ('mg-grade-6', 'mg', 'grade-6'),
    ('mg-grade-5', 'mg', 'grade-5'),
    ('mg-grade-4', 'mg', 'grade-4'),
    ('mg-grade-3', 'mg', 'grade-3'),
    ('mg-grade-10', 'mg', 'grade-10'),
    ('mg-grade-11', 'mg', 'grade-11'),
    ('mg-grade-12', 'mg', 'grade-12'),
    
    -- France grades
    ('fr-grade-6', 'fr', 'grade-6'),
    ('fr-grade-5', 'fr', 'grade-5'),
    ('fr-grade-4', 'fr', 'grade-4'),
    ('fr-grade-3', 'fr', 'grade-3'),
    ('fr-grade-10', 'fr', 'grade-10'),
    ('fr-grade-11', 'fr', 'grade-11'),
    ('fr-grade-12', 'fr', 'grade-12'),

    -- US grades (mapped to equivalent structural catalog IDs)
    ('en-grade-6', 'en', 'grade-6'),
    ('en-grade-5', 'en', 'grade-5'),
    ('en-grade-4', 'en', 'grade-4'),
    ('en-grade-3', 'en', 'grade-3'),
    ('en-grade-10', 'en', 'grade-10'),
    ('en-grade-11', 'en', 'grade-11'),
    ('en-grade-12', 'en', 'grade-12');


-- Subjects (Malagasy) seed data and curricula
INSERT INTO subjects (id, name, url_name, icon_path) VALUES
    ('mathematics-mg', 'Matematika', 'matematika', '/icons/math.svg'),
    ('malagasy', 'Malagasy', 'malagasy', '/icons/malagasy.svg'),
    ('french-mg', 'Frantsay', 'frantsay', '/icons/french.svg'),
    ('science-mg', 'Siansa sy Teknolojia', 'siansa-sy-teknolojia', '/icons/science.svg'),
    ('history-mg', 'Tantara sy Jeografia', 'tantara-sy-jeografia', '/icons/history.svg'),
    ('english-mg', 'Anglisy', 'anglisy', '/icons/english.svg'),
    ('chinese-mg', 'Sinoa', 'sinoa', '/icons/chinese.svg'),
    ('computer-science-mg', 'Informatika', 'informatika', '/icons/computer.svg'),
    ('physical-education-mg', 'Fanabeazana ara-batana', 'fanabeazana-ara-batana', '/icons/sports.svg');

-- Curricula for Madagascar (Grade 6)
INSERT INTO curricula (id, systems_grades_id, subject_id) VALUES
    ('mg-grade-6-mathematics', 'mg-grade-6', 'mathematics-mg'),
    ('mg-grade-6-malagasy', 'mg-grade-6', 'malagasy'),
    ('mg-grade-6-french', 'mg-grade-6', 'french-mg'),
    ('mg-grade-6-science', 'mg-grade-6', 'science-mg'),
    ('mg-grade-6-history', 'mg-grade-6', 'history-mg'),
    ('mg-grade-6-english', 'mg-grade-6', 'english-mg'),
    ('mg-grade-6-chinese', 'mg-grade-6', 'chinese-mg'),
    ('mg-grade-6-computer-science', 'mg-grade-6', 'computer-science-mg'),
    ('mg-grade-6-physical-education', 'mg-grade-6', 'physical-education-mg');


-- Subjects (French) seed data and curricula
INSERT INTO subjects (id, name, url_name, icon_path) VALUES
    ('mathematics-fr', 'Mathématiques', 'mathematiques', '/icons/math.svg'),
    ('french-fr', 'Français', 'francais', '/icons/french.svg'),
    ('sciences-fr', 'Sciences et Technologie', 'sciences-et-technologie', '/icons/science.svg'),
    ('history-fr', 'Histoire-Géographie', 'histoire-geographie', '/icons/history.svg'),
    ('english-fr', 'Anglais', 'anglais', '/icons/english.svg'),
    ('spanish-fr', 'Espagnol', 'espagnol', '/icons/spanish.svg'),
    ('chinese-fr', 'Chinois', 'chinois', '/icons/chinese.svg'),
    ('computer-science-fr', 'Technologie / Informatique', 'technologie-informatique', '/icons/computer.svg'),
    ('physical-education-fr', 'Éducation physique et sportive', 'education-physique-et-sportive', '/icons/sports.svg');

-- Curricula for France (Grade 6)
INSERT INTO curricula (id, systems_grades_id, subject_id) VALUES
    ('fr-grade-6-mathematics', 'fr-grade-6', 'mathematics-fr'),
    ('fr-grade-6-french', 'fr-grade-6', 'french-fr'),
    ('fr-grade-6-sciences', 'fr-grade-6', 'sciences-fr'),
    ('fr-grade-6-history', 'fr-grade-6', 'history-fr'),
    ('fr-grade-6-english', 'fr-grade-6', 'english-fr'),
    ('fr-grade-6-spanish', 'fr-grade-6', 'spanish-fr'),
    ('fr-grade-6-chinese', 'fr-grade-6', 'chinese-fr'),
    ('fr-grade-6-computer-science', 'fr-grade-6', 'computer-science-fr'),
    ('fr-grade-6-physical-education', 'fr-grade-6', 'physical-education-fr');


-- Subjects (English / United States) seed data and curricula
INSERT INTO subjects (id, name, url_name, icon_path) VALUES
    ('mathematics-en', 'Mathematics', 'mathematics', '/icons/math.svg'),
    ('english-language-arts-en', 'English Language Arts', 'english-language-arts', '/icons/english.svg'),
    ('science-en', 'Science', 'science', '/icons/science.svg'),
    ('social-studies-en', 'Social Studies', 'social-studies', '/icons/history.svg'),
    ('us-history-en', 'US History', 'us-history', '/icons/history.svg'),
    ('world-history-en', 'World History', 'world-history', '/icons/history.svg'),
    ('geography-en', 'Geography', 'geography', '/icons/globe.svg'),
    ('chinese-en', 'Chinese', 'chinese', '/icons/chinese.svg'),
    ('computer-science-en', 'Computer Science', 'computer-science', '/icons/computer.svg'),
    ('physical-education-en', 'Physical Education', 'physical-education', '/icons/sports.svg');

-- Curricula for United States (Grade 6 / 6th Grade)
INSERT INTO curricula (id, systems_grades_id, subject_id) VALUES
    ('en-grade-6-mathematics', 'en-grade-6', 'mathematics-en'),
    ('en-grade-6-ela', 'en-grade-6', 'english-language-arts-en'),
    ('en-grade-6-science', 'en-grade-6', 'science-en'),
    ('en-grade-6-social-studies', 'en-grade-6', 'social-studies-en'),
    ('en-grade-6-geography', 'en-grade-6', 'geography-en'),
    ('en-grade-6-chinese', 'en-grade-6', 'chinese-en'),
    ('en-grade-6-computer-science', 'en-grade-6', 'computer-science-en'),
    ('en-grade-6-physical-education', 'en-grade-6', 'physical-education-en');


-- Chapters (Malagasy) seed data
INSERT INTO chapters (id, title, description) VALUES
    ('chapter-mg-fractions', 'Fractions sy isa tafahoatra', 'Fianarana ny fototry ny fractions, ny fampitahana ary ny fampandehanana azy ireo.'),
    ('chapter-mg-operations', 'Asa kajy fototra', 'Fanaovana ny kajy fampiana, fanalana, fampitomboana ary fizarana.'),
    ('chapter-mg-grammar', 'Fitsipi-pitenenana malagasy', 'Fandalinana ny rafitry ny fehezanteny malagasy sy ny sokajin-teny.'),
    ('chapter-mg-ecosystem', 'Tontolo iainana sy zavamananaina', 'Fandalinana ny fifandraisan’ny zavamananaina sy ny tontolo manodidina azy.'),
    ('chapter-mg-geography-madagascar', 'Jeografian’i Madagasikara', 'Fahatakarana ny vohon-tany, ny toetrandro ary ny faritra eto Madagasikara.');


-- Chapters (French) seed data
INSERT INTO chapters (id, title, description) VALUES
    ('chapter-fr-fractions', 'Fractions et nombres rationnels', 'Introduction aux fractions, simplification et opérations de base.'),
    ('chapter-fr-calcul-litteral', 'Calcul littéral et équations', 'Apprentissage de l’utilisation des lettres en mathématiques et résolution d’équations simples.'),
    ('chapter-fr-grammaire', 'Grammaire : La phrase complexe', 'Étude des propositions subordonnées et de la structure de la phrase en français.'),
    ('chapter-fr-cellule', 'La cellule et le vivant', 'Découverte de l’unité structurelle et fonctionnelle du vivant.'),
    ('chapter-fr-rome', 'L’Empire Romain', 'Histoire de la Rome antique, des origines à la fin de l’Empire.');


-- Chapters (English / US) seed data
INSERT INTO chapters (id, title, description) VALUES
    ('chapter-en-fractions', 'Fractions and Decimals', 'Understanding fraction concepts, equivalent fractions, and decimal conversions.'),
    ('chapter-en-algebra', 'Introduction to Algebra', 'Working with variables, expressions, and solving one-step equations.'),
    ('chapter-en-grammar', 'Sentence Structure and Syntax', 'Exploring clauses, phrases, and punctuation rules in English Language Arts.'),
    ('chapter-en-ecosystems', 'Ecosystems and Energy Flow', 'Studying biotic and abiotic factors, food webs, and energy pyramids in nature.'),
    ('chapter-en-us-constitution', 'The US Constitution and Government', 'Foundations of American democracy, the Bill of Rights, and branches of government.');


-- Learning items (Malagasy) seed data
INSERT INTO learning_items (id, title, "type", source) VALUES
    ('item-mg-fractions-course', 'Fizarana 1: Fahatakarana ny fractions', 'course', NULL),
    ('item-mg-fractions-practice', 'Fanazaran-tena: Fampitahana fractions', 'practice', NULL),
    ('item-mg-fractions-solved', 'Fanazaran-tena voavaha: Kajy fractions', 'solved_exercise', NULL),
    
    ('item-mg-operations-course', 'Fizarana 1: Fitsipiky ny kajy', 'course', NULL),
    ('item-mg-operations-practice', 'Fanazaran-tena: Kajy fototra', 'practice', NULL),

    ('item-mg-grammar-course', 'Fizarana 1: Ny sokajin-teny malagasy', 'course', NULL),
    ('item-mg-grammar-practice', 'Fanazaran-tena: Famantarana ny mpamaritra', 'practice', NULL),

    ('item-mg-ecosystem-course', 'Fizarana 1: Ny tontolo iainana', 'course', NULL),
    ('item-mg-ecosystem-practice', 'Fanazaran-tena: Sakafo sy zavamananaina', 'practice', NULL),

    ('item-mg-geography-course', 'Fizarana 1: Vohon-tany eto Madagasikara', 'course', NULL),
    ('item-mg-geography-solved', 'Fanazaran-tena voavaha: Sarintany', 'solved_exercise', NULL);


-- Learning items (French) seed data
INSERT INTO learning_items (id, title, "type", source) VALUES
    ('item-fr-fractions-course', 'Cours : Qu’est-ce qu’une fraction ?', 'course', NULL),
    ('item-fr-fractions-practice', 'Exercices : Simplification de fractions', 'practice', NULL),
    ('item-fr-fractions-solved', 'Exercice corrigé : Addition de fractions', 'solved_exercise', NULL),

    ('item-fr-calcul-course', 'Cours : Introduction au calcul littéral', 'course', NULL),
    ('item-fr-calcul-practice', 'Exercices : Résolution d’équations 1er degré', 'practice', NULL),

    ('item-fr-grammaire-course', 'Cours : Les propositions subordonnées', 'course', NULL),
    ('item-fr-grammaire-practice', 'Exercices : Identifier les propositions', 'practice', NULL),

    ('item-fr-cellule-course', 'Cours : Structure de la cellule vivante', 'course', NULL),
    ('item-fr-cellule-solved', 'Exercice corrigé : Schéma de la cellule', 'solved_exercise', NULL),

    ('item-fr-rome-course', 'Cours : La fondation de Rome et la République', 'course', NULL),
    ('item-fr-rome-practice', 'Exercices : Chronologie romaine', 'practice', NULL);


-- Learning items (English / US) seed data
INSERT INTO learning_items (id, title, "type", source) VALUES
    ('item-en-fractions-course', 'Lesson: Introduction to Fractions and Decimals', 'course', NULL),
    ('item-en-fractions-practice', 'Practice: Comparing and Ordering Fractions', 'practice', NULL),
    ('item-en-fractions-solved', 'Solved Exercise: Fraction Word Problems', 'solved_exercise', NULL),

    ('item-en-algebra-course', 'Lesson: Understanding Variables and Expressions', 'course', NULL),
    ('item-en-algebra-practice', 'Practice: Solving One-Step Equations', 'practice', NULL),

    ('item-en-grammar-course', 'Lesson: Independent and Dependent Clauses', 'course', NULL),
    ('item-en-grammar-practice', 'Practice: Punctuation and Complex Sentences', 'practice', NULL),

    ('item-en-ecosystems-course', 'Lesson: Biotic and Abiotic Factors in Ecosystems', 'course', NULL),
    ('item-en-ecosystems-solved', 'Solved Exercise: Analyzing Food Webs', 'solved_exercise', NULL),

    ('item-en-constitution-course', 'Lesson: The Constitution and Bill of Rights', 'course', NULL),
    ('item-en-constitution-practice', 'Practice: Branches of Government Quiz', 'practice', NULL);


-- Chapters items and curriculum chapters (Malagasy) seed data
-- Curriculum chapters mapping (curriculum_id, chapter_id)
INSERT INTO curriculum_chapters (id, curriculum_id, chapter_id) VALUES
    ('mg-cc-1', 'mg-grade-6-mathematics', 'chapter-mg-fractions'),
    ('mg-cc-2', 'mg-grade-6-mathematics', 'chapter-mg-operations'),
    ('mg-cc-3', 'mg-grade-6-malagasy', 'chapter-mg-grammar'),
    ('mg-cc-4', 'mg-grade-6-science', 'chapter-mg-ecosystem'),
    ('mg-cc-5', 'mg-grade-6-history', 'chapter-mg-geography-madagascar');

-- Chapters items mapping (chapter_id, learning_item_id)
INSERT INTO chapters_items (chapter_id, learning_item_id) VALUES
    ('chapter-mg-fractions', 'item-mg-fractions-course'),
    ('chapter-mg-fractions', 'item-mg-fractions-practice'),
    ('chapter-mg-fractions', 'item-mg-fractions-solved'),
    
    ('chapter-mg-operations', 'item-mg-operations-course'),
    ('chapter-mg-operations', 'item-mg-operations-practice'),

    ('chapter-mg-grammar', 'item-mg-grammar-course'),
    ('chapter-mg-grammar', 'item-mg-grammar-practice'),

    ('chapter-mg-ecosystem', 'item-mg-ecosystem-course'),
    ('chapter-mg-ecosystem', 'item-mg-ecosystem-practice'),

    ('chapter-mg-geography-madagascar', 'item-mg-geography-course'),
    ('chapter-mg-geography-madagascar', 'item-mg-geography-solved');


-- Chapters items and curriculum chapters (French) seed data
-- Curriculum chapters mapping (curriculum_id, chapter_id)
INSERT INTO curriculum_chapters (id, curriculum_id, chapter_id) VALUES
    ('fr-cc-1', 'fr-grade-6-mathematics', 'chapter-fr-fractions'),
    ('fr-cc-2', 'fr-grade-6-mathematics', 'chapter-fr-calcul-litteral'),
    ('fr-cc-3', 'fr-grade-6-french', 'chapter-fr-grammaire'),
    ('fr-cc-4', 'fr-grade-6-sciences', 'chapter-fr-cellule'),
    ('fr-cc-5', 'fr-grade-6-history', 'chapter-fr-rome');

-- Chapters items mapping (chapter_id, learning_item_id)
INSERT INTO chapters_items (chapter_id, learning_item_id) VALUES
    ('chapter-fr-fractions', 'item-fr-fractions-course'),
    ('chapter-fr-fractions', 'item-fr-fractions-practice'),
    ('chapter-fr-fractions', 'item-fr-fractions-solved'),

    ('chapter-fr-calcul-litteral', 'item-fr-calcul-course'),
    ('chapter-fr-calcul-litteral', 'item-fr-calcul-practice'),

    ('chapter-fr-grammaire', 'item-fr-grammaire-course'),
    ('chapter-fr-grammaire', 'item-fr-grammaire-practice'),

    ('chapter-fr-cellule', 'item-fr-cellule-course'),
    ('chapter-fr-cellule', 'item-fr-cellule-solved'),

    ('chapter-fr-rome', 'item-fr-rome-course'),
    ('chapter-fr-rome', 'item-fr-rome-practice');


-- Chapters items and curriculum chapters (English / US) seed data
-- Curriculum chapters mapping (curriculum_id, chapter_id)
INSERT INTO curriculum_chapters (id, curriculum_id, chapter_id) VALUES
    ('en-cc-1', 'en-grade-6-mathematics', 'chapter-en-fractions'),
    ('en-cc-2', 'en-grade-6-mathematics', 'chapter-en-algebra'),
    ('en-cc-3', 'en-grade-6-ela', 'chapter-en-grammar'),
    ('en-cc-4', 'en-grade-6-science', 'chapter-en-ecosystems'),
    ('en-cc-5', 'en-grade-6-social-studies', 'chapter-en-us-constitution');

-- Chapters items mapping (chapter_id, learning_item_id)
INSERT INTO chapters_items (chapter_id, learning_item_id) VALUES
    ('chapter-en-fractions', 'item-en-fractions-course'),
    ('chapter-en-fractions', 'item-en-fractions-practice'),
    ('chapter-en-fractions', 'item-en-fractions-solved'),

    ('chapter-en-algebra', 'item-en-algebra-course'),
    ('chapter-en-algebra', 'item-en-algebra-practice'),

    ('chapter-en-grammar', 'item-en-grammar-course'),
    ('chapter-en-grammar', 'item-en-grammar-practice'),

    ('chapter-en-ecosystems', 'item-en-ecosystems-course'),
    ('chapter-en-ecosystems', 'item-en-ecosystems-solved'),

    ('chapter-en-us-constitution', 'item-en-constitution-course'),
    ('chapter-en-us-constitution', 'item-en-constitution-practice');
