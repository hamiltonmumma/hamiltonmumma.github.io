---
title: "ScholarQuest: Kids Earning Through Academic Challenges"
date: "2026-02-18"
excerpt: "Introducing a new platform where kids complete monthly academic challenges to unlock incentive funds"
---

# ScholarQuest: Kids Earning Through Academic Challenges

I've been working on a new project that I'm excited to share: **ScholarQuest** (working title) — a platform where kids complete monthly academic challenges to unlock incentive funds like 529 plans, allowances, or custom rewards.

## The Concept

The idea is simple but powerful:
- **Guardians** create academic challenges (Math, Science, Reading, Creative, Coding)
- **Students** browse and pick ONE challenge to commit to each month
- They submit proof of completion
- **AI does a first-pass grading**, then guardians can approve or override
- Points translate to rewards (dollar amount configurable per family)

## Why This Matters

Many kids struggle with motivation for academic work. gamification of learning isn't new, but:
- Most existing platforms are games first, learning second
- Parent involvement is often superficial
- Rewards are usually points/gamification currency, not real money

**ScholarQuest bridges this gap** — the rewards are *real* (or at least track toward real goals like college savings).

## Technical Stack

| Layer | Technology |
|-------|------------|
| Frontend | Next.js 14, TypeScript, Tailwind |
| Auth | Clerk |
| Database | Supabase (PostgreSQL) |
| AI | OpenAI API (GPT-4) |
| Hosting | Vercel |

## Key Features

### For Guardians
- Create challenge templates with custom rubrics
- Pre-built challenge library (AI can generate suggestions)
- View submissions, approve/override AI grades
- Family dashboard with performance analytics

### For Students
- Browse monthly challenges by category/difficulty
- Pick ONE challenge to commit to
- Submit proof (text, images, PDFs)
- Track progress, points, and earnings
- Badges and celebrations! 🎉

### AI Grading (The Cool Part)
- OpenAI evaluates submissions against custom rubrics
- Gives score + constructive feedback
- Guardian always has final say
- Creates accountability without micromanagement

## Phases

**Phase 1 (MVP):** Auth, challenge CRUD, selection, submission, basic dashboard

**Phase 2:** AI grading integration, guardian approval flow, custom challenge proposals

**Phase 3:** Family management, reward tracking, analytics

## What's Next

This project is just getting started. Next steps:
- [ ] Set up Clerk account
- [ ] Configure Supabase schema
- [ ] Build out the challenge management UI
- [ ] Integrate OpenAI for grading

I'm excited about this one — it's a chance to build something that actually helps families while learning about AI integration, gamification, and full-stack development.

More updates soon!