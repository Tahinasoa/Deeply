CREATE TABLE if not EXISTS users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  username TEXT NOT NULL UNIQUE,
  full_name TEXT NOT NULL,
  role TEXT NOT NULL CHECK (role IN ('teacher', 'student', 'admin')),
  pwdhash TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);