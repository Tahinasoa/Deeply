CREATE SCHEMA IF NOT EXISTS "public";

CREATE TYPE learning_item_type AS ENUM (
	'course',
	'practice',
	'solved_exercise');

CREATE TYPE user_role AS ENUM (
	'student',
	'teacher',
	'admin');

CREATE  TABLE "public".chapters ( 
	id                   text  NOT NULL  ,
	title                text  NOT NULL  ,
	description          text  NOT NULL  ,
	CONSTRAINT pk_chapters PRIMARY KEY ( id )
 );

CREATE  TABLE "public".educational_systems ( 
	id                   text  NOT NULL  ,
	name                 text  NOT NULL  ,
	CONSTRAINT pk_educational_systems PRIMARY KEY ( id )
 );

CREATE  TABLE "public".grades ( 
	id                   text  NOT NULL  ,
	name                 text  NOT NULL  ,
	CONSTRAINT unq_grades_id UNIQUE ( id ) ,
	CONSTRAINT pk_grades PRIMARY KEY ( id )
 );

CREATE  TABLE "public".learning_items ( 
	id                   text  NOT NULL  ,
	title                text  NOT NULL  ,
	"type"               "public".learning_item_type  NOT NULL  ,
	"source"             text    ,
	created_at           timestamptz DEFAULT now() NOT NULL  ,
	updated_at           timestamptz DEFAULT now() NOT NULL  ,
	CONSTRAINT pk_learning_items PRIMARY KEY ( id )
 );

CREATE  TABLE "public".chapters_items ( 
	chapter_id           text  NOT NULL  ,
	learning_item_id     text  NOT NULL  ,
	CONSTRAINT pk_chapters_items PRIMARY KEY ( chapter_id, learning_item_id )
 );

CREATE  TABLE "public".subjects ( 
	id                   text  NOT NULL  ,
	name                 text  NOT NULL  ,
	url_name             text  NOT NULL  ,
	icon_path            text  NOT NULL  ,
	CONSTRAINT pk_subjects PRIMARY KEY ( id )
 );

COMMENT ON COLUMN "public".subjects.url_name IS 'a url friendly version of name';

CREATE  TABLE "public".systems_grades ( 
	id                   text  NOT NULL  ,
	system_id            text  NOT NULL  ,
	grade_id             text  NOT NULL  ,
	CONSTRAINT pk_systems_grades PRIMARY KEY ( system_id, grade_id ),
	CONSTRAINT unq_systems_grades_id UNIQUE ( id ) 
 );

CREATE  TABLE "public".curricula ( 
	id                   text  NOT NULL  ,
	systems_grades_id    text  NOT NULL  ,
	subject_id           text  NOT NULL  ,
	CONSTRAINT pk_subjects_systems_grades PRIMARY KEY ( systems_grades_id, subject_id ),
	CONSTRAINT unq_curricula_id UNIQUE ( id ) 
 );

CREATE  TABLE "public".curriculum_chapters ( 
	id                   text    ,
	curriculum_id        text  NOT NULL  ,
	chapter_id           text  NOT NULL  ,
	CONSTRAINT pk_curriculum_chapters PRIMARY KEY ( curriculum_id, chapter_id )
 );

CREATE  TABLE "public".users ( 
	id                   text  NOT NULL  ,
	username             text  NOT NULL  ,
	full_name            text  NOT NULL  ,
	"role"               "public".user_role  NOT NULL  ,
	password_hash        text  NOT NULL  ,
	created_at           timestamptz DEFAULT now() NOT NULL  ,
	CONSTRAINT unq_users_username UNIQUE ( username ) ,
	CONSTRAINT pk_users PRIMARY KEY ( id )
 );

CREATE  TABLE "public".progresses ( 
	user_id              text  NOT NULL  ,
	learning_item_id     text  NOT NULL  ,
	progress             smallint    ,
	updated_at           timestamptz DEFAULT now() NOT NULL  ,
	CONSTRAINT pk_progresses PRIMARY KEY ( user_id, learning_item_id )
 );

ALTER TABLE "public".progresses ADD CONSTRAINT cns_progresses_progress CHECK ( progress BETWEEN 0 AND 100 );

ALTER TABLE "public".chapters_items ADD CONSTRAINT fk_chapters_items_chapters FOREIGN KEY ( chapter_id ) REFERENCES "public".chapters( id ) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "public".chapters_items ADD CONSTRAINT fk_chapters_items_learning_items FOREIGN KEY ( learning_item_id ) REFERENCES "public".learning_items( id ) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "public".curricula ADD CONSTRAINT fk_curricula_systems_grades FOREIGN KEY ( systems_grades_id ) REFERENCES "public".systems_grades( id ) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "public".curricula ADD CONSTRAINT fk_curricula_subjects FOREIGN KEY ( subject_id ) REFERENCES "public".subjects( id ) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "public".curriculum_chapters ADD CONSTRAINT fk_curriculum_chapters_curricula FOREIGN KEY ( curriculum_id ) REFERENCES "public".curricula( id ) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "public".curriculum_chapters ADD CONSTRAINT fk_curriculum_chapters_chapters FOREIGN KEY ( chapter_id ) REFERENCES "public".chapters( id ) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "public".progresses ADD CONSTRAINT fk_progresses_users FOREIGN KEY ( user_id ) REFERENCES "public".users( id ) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "public".progresses ADD CONSTRAINT fk_progresses_learning_items FOREIGN KEY ( learning_item_id ) REFERENCES "public".learning_items( id ) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "public".systems_grades ADD CONSTRAINT fk_systems_grades_educational_systems FOREIGN KEY ( system_id ) REFERENCES "public".educational_systems( id ) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "public".systems_grades ADD CONSTRAINT fk_systems_grades_grades FOREIGN KEY ( grade_id ) REFERENCES "public".grades( id ) ON DELETE CASCADE ON UPDATE CASCADE;
