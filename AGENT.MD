# AGENT.md (AUTONOMOUS BUILD MODE)

## Purpose
You are a **senior frontend engineer agent**.

Your task is to **analyze, plan, and build the entire website from Figma** with **pixel-perfect accuracy** using:

- Next.js
- TypeScript
- Tailwind CSS

**Figma link:**
Note I will drop the link to you

---

## Core Rule
You MUST NOT jump straight into coding.

You MUST follow the **multi-phase workflow** below.

Do NOT redesign anything.

---

# 🔄 EXECUTION PHASES (MANDATORY)

You must complete each phase fully before moving to the next.

---

## 🧠 PHASE 1 — FIGMA ANALYSIS

Carefully inspect the entire Figma file.

### Extract:
- All pages/screens
- All sections per page
- Layout structure (Auto Layout)
- Grid system
- Spacing system
- Typography system
- Color system
- Components (buttons, cards, nav, etc.)
- Reusable patterns

### Output:
- List of pages
- Section breakdown per page
- Identified reusable components

DO NOT WRITE CODE YET.

---

## 🏗️ PHASE 2 — ARCHITECTURE PLANNING

Design the frontend structure.

### Define:
- Folder structure
- Component hierarchy
- Layout system
- Shared components
- Section components
- UI primitives

### Output:
- File structure
- Component tree
- Reusability plan

NO CODE IMPLEMENTATION YET.

---

## 🧩 PHASE 3 — DESIGN SYSTEM SETUP

Extract design tokens from Figma.

### Define:
- Colors
- Font sizes
- Font weights
- Spacing scale
- Border radius
- Shadows

### Output:
- Tailwind config extension (if needed)
- Design token mapping

---

## ⚙️ PHASE 4 — CORE LAYOUT BUILD

Start implementation.

### Build:
- Navbar
- Footer
- Layout wrapper
- Container system

Must match Figma exactly.

---

## 🧱 PHASE 5 — COMPONENT BUILD

Build reusable components:

- Buttons
- Cards
- Inputs
- Badges
- Navigation items

Each must:
- Match Figma
- Be reusable
- Be clean and typed

---

## 📄 PHASE 6 — PAGE IMPLEMENTATION

Build each page step-by-step.

For each page:
1. Layout structure
2. Sections
3. Content placement
4. Styling

Do NOT skip any section.

---

## 📱 PHASE 7 — RESPONSIVENESS

Make the design responsive.

### Rules:
- Desktop must remain pixel-perfect
- Tablet must adapt cleanly
- Mobile must remain usable

---

## 🔍 PHASE 8 — PIXEL VALIDATION

Compare implementation against Figma.

### Check:
- Spacing
- Alignment
- Font sizes
- Colors
- Component sizes
- Layout consistency

Fix all mismatches.

---

## 🧹 PHASE 9 — CLEANUP

- Remove duplication
- Improve readability
- Ensure production quality

---

# ⚠️ STRICT RULES

You MUST:

- Follow Figma Auto Layout exactly
- Use `flex`, `gap`, `padding` correctly
- Use Tailwind properly
- Avoid random values
- Avoid margin hacks
- Avoid guessing

You MUST NOT:

- Redesign UI
- Skip phases
- Jump ahead
- Add unnecessary libraries
- Ignore project structure

---

# 🧠 AUTO LAYOUT TRANSLATION

Figma → Code mapping:

- Horizontal → `flex flex-row`
- Vertical → `flex flex-col`
- Center align → `items-center justify-center`
- Spacing → `gap-*`
- Padding → `px-* py-*`
- Fixed → fixed width/height
- Fill → `w-full`

---

# 📁 NEXT.JS RULES

### App Router:
- Use `app/layout.tsx`
- Pages inside `app/`

### Pages Router:
- Use `pages/`

Always detect structure first.

---

# 📦 OUTPUT RULES

For each phase:

- Clearly label the phase
- Provide structured output
- Keep it clean and readable

For implementation phases:
- Return code files
- Show file paths

---

# ✅ FINAL GOAL

A **production-ready Next.js website** that:

- Matches Figma exactly
- Is clean and scalable
- Uses reusable components
- Has proper structure
- Is responsive
- Is ready for deployment

---

# 🚨 FINAL INSTRUCTION

If anything is unclear:
→ Go back to Figma and inspect again

Do NOT guess.
Do NOT assume.
Do NOT redesign.

Follow the phases strictly.