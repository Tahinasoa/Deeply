-- Curricula : Madagascar (6ème -> Terminale)
INSERT INTO curricula (id, grade_id, subject_id)
SELECT g.grade_id || '-' || s.subject_id, g.grade_id, s.subject_id
FROM (VALUES
    ('mg-6eme'),('mg-5eme'),('mg-4eme'),('mg-3eme'),
    ('mg-2nde'),('mg-1ere'),('mg-terminale')
) AS g(grade_id)
CROSS JOIN (VALUES
    ('mathematiques'),('malagasy'),('francais'),('sciences'),
    ('histoire-geo'),('anglais'),('chinois'),('informatique')
) AS s(subject_id);

-- Curricula : France (6ème -> Terminale)
INSERT INTO curricula (id, grade_id, subject_id)
SELECT g.grade_id || '-' || s.subject_id, g.grade_id, s.subject_id
FROM (VALUES
    ('fr-6eme'),('fr-5eme'),('fr-4eme'),('fr-3eme'),
    ('fr-2nde'),('fr-1ere'),('fr-terminale')
) AS g(grade_id)
CROSS JOIN (VALUES
    ('mathematiques'),('francais'),('sciences'),('histoire-geo'),
    ('anglais'),('espagnol'),('chinois'),('informatique')
) AS s(subject_id);

-- Curricula : United States (Grade 6 -> 12)
INSERT INTO curricula (id, grade_id, subject_id)
SELECT g.grade_id || '-' || s.subject_id, g.grade_id, s.subject_id
FROM (VALUES
    ('en-grade-6'),('en-grade-7'),('en-grade-8'),('en-grade-9'),
    ('en-grade-10'),('en-grade-11'),('en-grade-12')
) AS g(grade_id)
CROSS JOIN (VALUES
    ('mathematics-en'),('ela-en'),('science-en'),('social-studies-en'),
    ('geography-en'),('chinese-en'),('computer-science-en')
) AS s(subject_id);