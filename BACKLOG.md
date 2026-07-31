Here is the translated backlog using standard software engineering terminology:

# BACKLOG — Deeply

## Phase 1 — Dashboard (Mock Data)

* [ ] Project setup (stack, folder structure, routing)
* [ ] `/login` — Login screen (hardcoded auth for MVP, single test user)
* [ ] `/` — Dashboard
* [ ] Exercise list (mocked in local JSON, no database for now)
* [ ] Filters: grade, subject, topic, type
* [ ] Progress display (mocked mastery %)
* [ ] Suggestions section (mocked)


* [ ] `/exercises/:id` — Exercise view (mocked)
* [ ] Display subject / topic / grade / source
* [ ] Display learning objectives
* [ ] Display reference document / prompt (text + image)
* [ ] Links to suggested exercises



## Phase 2 — Real Data Model

* [ ] Zod schemas: Exercise, Question, Objective, Attempt
* [ ] Replace mock data with real JSON files (at least 5–10 handcrafted exercises)
* [ ] CLI: Zod validation tool for JSON files prior to integration
* [ ] Connect dashboard to real data (end of mocking)

## Phase 3 — Playable Exercise (Vertical Slice, MCQ Only)

* [ ] `/exercises/:id/play`
* [ ] Display one MCQ question at a time
* [ ] Answer validation + instant feedback + explanation


* [ ] `/exercises/:id/result`
* [ ] Attempt score
* [ ] List of achieved / unachieved learning objectives


* [ ] Save attempts to the database

**Key Milestone**: By the end of this phase, the complete end-to-end flow must work (dashboard → exercise view → MCQ exercise → results), even with a single question type and subject.

## Phase 4 — Additional Question Types

* [ ] Word reordering
* [ ] Fill-in-the-blank (free text)
* [ ] Fill-in-the-blank (word bank)
* [ ] Item ordering

## Future / Out of Scope for MVP

* [ ] PDF/image-to-JSON conversion CLI (assisted, non-automated)
* [ ] Production auth system (multi-user)
* [ ] Viewable attempt history (`/exercises/:id/attempts/:attemptId`)
* [ ] AI-powered generation of "smart" distractors (targeting typical misconceptions)
* [ ] Transition from percentage scoring to a Knowledge Space Theory-based model