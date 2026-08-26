CREATE TABLE if not EXISTS users (
  id SERIAL PRIMARY KEY,
  public_id TEXT NOT NULL UNIQUE,
  username TEXT NOT NULL UNIQUE,
  full_name TEXT NOT NULL,
  role TEXT NOT NULL CHECK (role IN ('teacher', 'student', 'admin')),
  pwdhash TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);