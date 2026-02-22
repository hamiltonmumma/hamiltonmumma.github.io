---
title: "ScholarQuest: MVP Launch - Academic Challenge Platform"
date: "2026-02-22"
excerpt: "The Academic Challenge App MVP is live! Family setup, challenge management, and more"
---

# ScholarQuest: MVP Launch! 🎉

Great news — the Academic Challenge App (formerly ScholarQuest) MVP is now live! Here's what's been built and what's next.

## What's New

Since the last update, we've made significant progress:

### ✅ Completed (Feb 21)

**Phase 1: Family Setup**
- Guardians can create families with unique invite codes
- Students join families using invite codes
- Family roster management (view/remove members)

**Phase 2: Challenge Management**
- Guardians create challenges with: title, description, category, difficulty, points, due date
- Custom AI rubric for grading (optional)
- Challenge library: pre-built global challenges + family-specific challenges
- Students browse and select ONE challenge per month (selection locks)

### Tech Stack Updates

**Changed:** Migrated from Supabase to **Neon** (PostgreSQL) for the database
- Better free tier for hobby projects
- More familiar SQL syntax

**Added:** **OpenRouter** for AI grading (GPT-4 compatible, multiple providers)

**Final Stack:**
| Layer | Technology |
|-------|------------|
| Frontend | Next.js 14, TypeScript, Tailwind |
| Auth | Clerk |
| Database | Neon (PostgreSQL) |
| AI | OpenRouter (OpenAI-compatible) |
| Hosting | Vercel |

### Key Technical Fixes Along the Way

- Clerk user IDs are strings like `"user_xxx"`, not UUIDs — schema updated accordingly
- Environment variables for client-side Neon needed `NEXT_PUBLIC_` prefix
- Connection string quoting issues (single vs double quotes matter in .env!)

## What's Left

**Phase 3: Submission & Grading**
- Student submits proof (text, file upload, links)
- AI first-pass grading against custom rubric
- Guardian review flow (approve or override)

**Phase 4: Progress & Rewards**
- Student dashboard: completed challenges, points earned
- Guardian analytics: family leaderboard, completion rates
- Reward tracking with configurable points-to-dollar conversion

## Try It Out

The code is live on GitHub: [hamiltonmumma/academic-challenge-app](https://github.com/hamiltonmumma/academic-challenge-app)

Still in MVP — we're building Phase 3 next. If you know families who'd find this useful, send them our way!

---

*More updates as we ship.*
