# Deeply — MVP Specification

## Overview

**Name:** Deeply

**Description:** A simple app that helps middle/high school students learn complex
concepts more deeply, beyond simple memorization. It focuses on diagnostics and
remediation, closely anchored to national curricula.

The product is composed of two separate apps:

- **Data creation tool** — a simple CLI that transforms a source document into an
  activity. It will later evolve into an admin dashboard.
- **Web app** — the application accessible to end users (students).

---

## Web App

### Login screen

- Standard authentication.

### Dashboard

- Shows available exercises and student progress.
- Includes filters: grade, subject, topic, type.
- Includes suggestions (recommended exercises).

### Exercise board

Shows information about a specific exercise:

- Subject, topic, grade
- Source (the document the exercise was generated from — e.g. *Bacc 2023,
  Mathématiques, Partie A*)
- Current level of mastery (for the MVP: percentage of success; for the final
  product: based on Knowledge Space Theory)
- Pedagogical objectives
- Supporting document: exercise statement, image(s) — possibly the original
  exercise
- Link to suggested exercises

### Exercise page

- No timer.
- Displays one question at a time. The correct answer is shown immediately
  after answering, along with an explanation.
- Supported question types:
  - Simple MCQ
  - Word rearranging
  - Blank filling (free text)
  - Blank filling (word bank)
  - Element ordering (e.g. reordering the steps to solve an equation, or
    reordering events on a timeline)
- The supporting document can be displayed at any time during the exercise.

### Post-diagnostic screen

- Shows the latest score on the exercise.
- Shows a short list of pedagogical objectives, each marked as validated or
  not validated.

---

## Data Creation (CLI)

- Several CLI tools convert source documents (PDF, raw text, image, etc.)
  into **JSON** format.
- A separate tool validates the structure and integrity of this data, then
  integrates it into the database.