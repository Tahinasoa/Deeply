# BACKLOG — Deeply
## [x] Phase 0 —  init project
* [x] Project setup (stack, folder structure, routing)
* [x] dummy app

## [x] Phase 1 — Dashboard (Mock Data)
* [x] defined zod types for shared object (database, dashboard, session page, activity page).
* [x] mock database.

* [x] `/` — Dashboard : list of available session (featuring search, no filter)
* [x] session page 

* [x] MCQ as first activity.

## [ ] Phase 2 — Authentification system
* [x] Basic Authentification system, connected with a database.
* [ ] Test authentification system.
* [ ] Type JWT, Session, Authorize callbacks

## [ ] Phase 3 — Real Data
* [ ] real Postgresql database.
* [ ] CLI  : generation from raw text, integration to database
* [ ] Filters: grade, subject, topic, type

## [ ] Phase 5 — Pedagogical Features
* [ ] integrate pedagogical objectives to the session and activity types
* [ ] implement the mastery level from percentage of validated objectives
* [ ] implement feedback system based at the end of each ativity

## [ ] Phase 5 — Additional Activity Type

* [ ] MCQ with multiple correct answers
* [ ] fill-in-the-blank (free text)
* [ ] fill-in-the-blank (word bank)
* [ ] item reordering

## Future / Out of Scope for MVP

* [ ] PDF/image-to-JSON conversion CLI (assisted, non-automated)
* [ ] Transition from percentage scoring to a Knowledge Space Theory-based model
* [ ] implement a recommendation system.