-- ========================================
-- ENUMS
-- ========================================

CREATE TYPE grade AS ENUM (
  '6e', '5e', '4e', '3e', '2nde', '1ere', 'terminale'
);

CREATE TYPE learning_item_type AS ENUM (
  'course', 'exercise', 'exam'
);

CREATE TYPE activity_type AS ENUM (
  'mcq', 'mcq_multiple', 'fill_blank_free', 'fill_blank_bank', 'ordering'
);

CREATE TYPE assessment_status AS ENUM (
  'not_assessed', 'partial', 'completed'
);

-- ========================================
-- LEARNING ITEMS
-- ========================================

CREATE TABLE learning_items (
  id            TEXT PRIMARY KEY,
  title         TEXT NOT NULL,
  subject       TEXT NOT NULL,
  topic         TEXT NOT NULL,
  type          learning_item_type NOT NULL,
  description   TEXT,
  source        TEXT, 
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ========================================
-- LEARNING ITEMS DOCUMENTS (markdown content)
-- ========================================

CREATE TABLE learning_item_documents (
  id            TEXT PRIMARY KEY,
  learning_item_id TEXT NOT NULL REFERENCES learning_items(id) ON DELETE CASCADE,
  content       TEXT NOT NULL, -- markdown
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (learning_item_id)
);

-- ========================================
-- GRADES (many-to-many)
-- ========================================

CREATE TABLE learning_item_grades (
  learning_item_id  TEXT NOT NULL REFERENCES learning_items(id) ON DELETE CASCADE,
  grade             grade NOT NULL,
  PRIMARY KEY (learning_item_id, grade)
);

-- ========================================
-- ACTIVITIES (base table + per-type extension tables)
-- ========================================

CREATE TABLE activities (
  id                TEXT PRIMARY KEY,
  learning_item_id  TEXT NOT NULL REFERENCES learning_items(id) ON DELETE CASCADE,
  type              activity_type NOT NULL,
  anchor_question   TEXT NOT NULL,
  instruction       TEXT NOT NULL,
  explanation       TEXT,
  position          INT NOT NULL DEFAULT 0,  -- ordering within the item
  created_at        TIMESTAMPTZ NOT NULL DEFAULT now()
);


-- --- MCQ (single correct answer) ---
CREATE TABLE mcq_activities (
  activity_id  TEXT PRIMARY KEY REFERENCES activities(id) ON DELETE CASCADE
  -- no extra fields for now beyond options below
);

CREATE TABLE mcq_options (
  id           TEXT PRIMARY KEY ,
  activity_id  TEXT NOT NULL REFERENCES mcq_activities(activity_id) ON DELETE CASCADE,
  text         TEXT NOT NULL,
  is_correct   BOOLEAN NOT NULL DEFAULT false
);

-- ========================================
-- PROGRESS
-- ========================================

CREATE TABLE learning_item_progress (
  learning_item_id  TEXT NOT NULL REFERENCES learning_items(id) ON DELETE CASCADE,
  user_id           TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  status            assessment_status NOT NULL DEFAULT 'not_assessed',
  mastery_level     SMALLINT NOT NULL DEFAULT 0 CHECK (mastery_level BETWEEN 0 AND 100),
  updated_at        TIMESTAMPTZ NOT NULL DEFAULT now(),
  PRIMARY KEY (learning_item_id, user_id)
);
