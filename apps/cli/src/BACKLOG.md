# Deeply CLI — Backlog

## Overview
CLI tool for converting source documents (PDF, text, images) into structured JSON exercise format.

---

## Core Features

### 1. Document Parsing
- [ ] PDF parser — extract text, images, and structure
- [ ] Raw text parser — handle plain text documents
- [ ] Image parser — OCR support for scanned documents

### 2. Exercise Transformation
- [ ] Convert parsed documents to JSON exercise structure
- [ ] Extract exercise metadata:
  - Subject (matière)
  - Topic (thème)
  - Grade level (niveau)
  - Source reference
  - Pedagogical objectives
- [ ] Support multiple question types:
  - [ ] Simple MCQ (QCM simple)
  - [ ] Word rearranging (Réarrangement de mots)
  - [ ] Blank filling — free text (Texte à trous - réponse libre)
  - [ ] Blank filling — word bank (Texte à trous - banque de mots)
  - [ ] Element ordering (Réordonnancement d'éléments)

### 3. Data Validation
- [ ] Validate JSON structure integrity
- [ ] Check required fields (subject, topic, grade, questions, answers)
- [ ] Verify question type compliance
- [ ] Validate answer format for each question type
- [ ] Check for missing pedagogical objectives
- [ ] Report validation errors with clear messages

### 4. Database Integration
- [ ] Load validated exercises into database
- [ ] Handle duplicate detection
- [ ] Link exercises to sources
- [ ] Update exercise metadata

### 5. Configuration & Output
- [ ] CLI argument parsing (input file, output format, validation mode)
- [ ] JSON output with consistent schema
- [ ] Logging and error reporting
- [ ] Dry-run mode for validation without database commit

---

## Technical Requirements

### JSON Schema
- Define standard exercise JSON schema
- Include fields for all question types
- Support image/asset references
- Metadata structure for filtering

### Error Handling
- Clear error messages for malformed input
- Validation reports with line numbers
- Graceful fallback for partial data

### Performance
- Efficient PDF/image parsing
- Batch processing capability
- Memory-efficient for large documents

---

## Future Enhancements

- [ ] Admin dashboard replacement for CLI
- [ ] Web UI for exercise creation
- [ ] Template system for common exercise patterns
- [ ] Bulk import capabilities
- [ ] Exercise versioning and history
