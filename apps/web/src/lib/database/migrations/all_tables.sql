CREATE TYPE "user_role" AS ENUM (
	'student',
	'teacher',
	'admin'
);

CREATE TYPE "learning_item_type" AS ENUM (
	'course',
	'practice',
	'solved_exercise'
);

CREATE TABLE IF NOT EXISTS "users" (
	"id" TEXT NOT NULL,
	"username" TEXT NOT NULL UNIQUE,
	"full_name" TEXT NOT NULL,
	"role" USER_ROLE NOT NULL,
	"password_hash" TEXT NOT NULL,
	"created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
	PRIMARY KEY("id")
);

CREATE TABLE IF NOT EXISTS "educational_systems" (
	"id" TEXT NOT NULL,
	"name" TEXT NOT NULL,
	PRIMARY KEY("id")
);

CREATE TABLE IF NOT EXISTS "grades" (
	"id" TEXT NOT NULL UNIQUE,
	"system_id" TEXT NOT NULL,
	"name" TEXT NOT NULL,
	PRIMARY KEY("id")
);

CREATE TABLE IF NOT EXISTS "subjects" (
	"id" TEXT NOT NULL,
	"grade_id" TEXT NOT NULL,
	"name" TEXT NOT NULL,
	-- a url friendly version of name
	"url_name" TEXT NOT NULL,
	"icon_path" TEXT NOT NULL,
	PRIMARY KEY("id")
);

COMMENT ON COLUMN "subjects"."url_name" IS 'a url friendly version of name';

CREATE TABLE IF NOT EXISTS "chapters" (
	"id" TEXT NOT NULL,
	"subject_id" TEXT NOT NULL,
	"title" TEXT NOT NULL,
	"description" TEXT NOT NULL,
	PRIMARY KEY("id")
);

CREATE TABLE IF NOT EXISTS "learning_items" (
	"id" TEXT NOT NULL,
	"title" TEXT NOT NULL,
	"type" LEARNING_ITEM_TYPE NOT NULL,
	"source" TEXT,
	"created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
	"updated_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
	PRIMARY KEY("id")
);

CREATE TABLE IF NOT EXISTS "chapters_items" (
	"chapter_id" TEXT NOT NULL,
	"learning_item_id" TEXT NOT NULL,
	PRIMARY KEY("chapter_id", "learning_item_id")
);

CREATE TABLE IF NOT EXISTS "progresses" (
	"user_id" TEXT NOT NULL,
	"learning_item_id" TEXT NOT NULL,
	"progress" SMALLINT DEFAULT null CHECK(progress BETWEEN 0 AND 100),
	"updated_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
	PRIMARY KEY("user_id", "learning_item_id")
);

ALTER TABLE "subjects"
ADD FOREIGN KEY("grade_id") REFERENCES "grades"("id")
ON UPDATE NO ACTION ON DELETE CASCADE;
ALTER TABLE "chapters"
ADD FOREIGN KEY("subject_id") REFERENCES "subjects"("id")
ON UPDATE NO ACTION ON DELETE CASCADE;
ALTER TABLE "progresses"
ADD FOREIGN KEY("user_id") REFERENCES "users"("id")
ON UPDATE NO ACTION ON DELETE CASCADE;
ALTER TABLE "progresses"
ADD FOREIGN KEY("learning_item_id") REFERENCES "learning_items"("id")
ON UPDATE NO ACTION ON DELETE CASCADE;
ALTER TABLE "chapters_items"
ADD FOREIGN KEY("learning_item_id") REFERENCES "learning_items"("id")
ON UPDATE NO ACTION ON DELETE CASCADE;
ALTER TABLE "chapters_items"
ADD FOREIGN KEY("chapter_id") REFERENCES "chapters"("id")
ON UPDATE NO ACTION ON DELETE CASCADE;
ALTER TABLE "grades"
ADD FOREIGN KEY("system_id") REFERENCES "educational_systems"("id")
ON UPDATE NO ACTION ON DELETE CASCADE;