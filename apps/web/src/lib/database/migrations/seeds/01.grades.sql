-- Grades seed data (6ème -> Terminale), Malagasy / Français / English
INSERT INTO grades (id, system_id, name) VALUES
    -- Madagascar (mêmes libellés que le système français)
    ('mg-6eme',      'mg', '6ème'),
    ('mg-5eme',      'mg', '5ème'),
    ('mg-4eme',      'mg', '4ème'),
    ('mg-3eme',      'mg', '3ème'),
    ('mg-2nde',      'mg', 'Seconde'),
    ('mg-1ere',      'mg', 'Première'),
    ('mg-terminale', 'mg', 'Terminale'),

    -- France
    ('fr-6eme',      'fr', '6ème'),
    ('fr-5eme',      'fr', '5ème'),
    ('fr-4eme',      'fr', '4ème'),
    ('fr-3eme',      'fr', '3ème'),
    ('fr-2nde',      'fr', 'Seconde'),
    ('fr-1ere',      'fr', 'Première'),
    ('fr-terminale', 'fr', 'Terminale'),

    -- United States
    ('en-grade-6',  'en', 'Grade 6'),
    ('en-grade-7',  'en', 'Grade 7'),
    ('en-grade-8',  'en', 'Grade 8'),
    ('en-grade-9',  'en', 'Grade 9'),
    ('en-grade-10', 'en', 'Grade 10'),
    ('en-grade-11', 'en', 'Grade 11'),
    ('en-grade-12', 'en', 'Grade 12');