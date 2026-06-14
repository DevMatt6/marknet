# Marknet

## Project overview

Marknet is a Next.js 16 app-router project with TypeScript, Tailwind CSS, Framer Motion, shadcn/ui-style primitives, and custom reusable sections/components. The project supports bilingual content through a locale provider and dictionary-based messaging.

## Tech stack

- Next.js 16 with App Router
- React + TypeScript
- Tailwind CSS v4
- Framer Motion
- Lenis
- shadcn/ui-style component patterns
- Lucide React
- Localized dictionaries for IT/EN copy
- pnpm as preferred package manager

## Project goals

- Keep the codebase modular and easy to reuse for future brand/site builds
- Prefer reusable sections and composable UI primitives
- Maintain a premium, minimal, editorial visual direction
- Avoid generic SaaS styling and repetitive AI-looking layouts
- Preserve consistency across all pages and sections so the site feels like a single designed system

## Working rules

- Reuse existing components before creating new ones
- Preserve the current folder structure unless there is a strong reason to change it
- Prefer server/client boundaries that match Next.js best practices
- Keep components small, typed, readable, and easy to maintain
- Keep text content easy to replace and centralized when possible
- When editing UI, respect spacing, typography, color consistency, and motion consistency across the existing design system
- Avoid introducing unnecessary dependencies
- Avoid large rewrites when a targeted fix is enough
- Prefer pnpm for package and script commands

## Design guidance

- Use restrained, high-end visual design
- Favor strong typography, spacing rhythm, contrast, and subtle motion
- Prefer neutral or controlled surfaces with carefully managed accent usage
- Keep hero sections visually distinctive but not noisy
- Avoid flashy gradients, glowing effects, and template-like feature grids unless explicitly requested
- Avoid generic AI-looking sections, repetitive card layouts, or overdesigned marketing patterns
- New UI must feel curated and intentional, not auto-generated

## Motion guidance

- Use subtle scroll reveal animations across sections where appropriate
- Prefer restrained reveal effects based on opacity, translateY, and clip-path
- Keep motion elegant and premium, never flashy or exaggerated
- Use scroll reveal to support hierarchy and rhythm, not as decoration
- Respect prefers-reduced-motion and provide minimal-motion fallbacks
- Avoid revealing every single element independently; animate by section or logical group
- Match the same motion language already present in the project when adding or editing sections

## Section consistency rules

- Any new section must visually feel like part of the existing Marknet system, not like an isolated new block
- Before creating a new section, inspect the nearest existing sections and reuse their spacing rhythm, heading structure, content density, and layout logic
- Reuse existing container widths, section padding, grid behavior, border radius, and visual hierarchy patterns whenever possible
- Prefer extending existing section patterns over inventing a completely new layout
- New sections must match the current tone: premium, minimal, editorial, and never generic or AI-looking
- Keep the same balance of typography, whitespace, contrast, and restrained motion already used across the site
- If a section includes animation, use the same subtle motion language and scroll reveal approach already used in the project
- Avoid introducing new visual motifs, new card styles, new button logic, or different spacing systems unless explicitly requested
- When adding a section, check adjacent sections so transitions between blocks feel intentional and consistent
- If a new section requires cards, badges, buttons, or content blocks, prefer the existing design system and shadcn-based components already present in the project

## Section workflow

- Before generating a new section, first analyze 2–3 existing sections from the same page
- Extract their common layout rules, spacing rhythm, heading style, and motion behavior
- Build the new section as a variation of those existing patterns, not as a disconnected concept
- If the new section feels visually louder or stylistically different than the surrounding blocks, simplify it until it fits naturally

## Component guidance

- Put shared UI in `components/`
- Keep page/section composition readable and separated by concern
- Prefer prop-driven components over hardcoded variations
- Prefer reusable design system components over one-off markup
- Use shadcn-based components whenever appropriate and keep them customizable
- When adding interactive controls, ensure valid accessible HTML and avoid nested interactive elements
- When using images or media, prefer production-safe sources and preserve aspect ratio correctly

## Typography and layout

- Respect the existing typography hierarchy already present in the project
- Preserve the visual relationship between display text, section headings, body copy, and supporting labels
- Keep spacing rhythm consistent across sections and breakpoints
- Prefer clean editorial layouts with intentional whitespace over dense multi-card grids
- On desktop, layouts should feel structured and balanced; on mobile, they should stack cleanly without losing hierarchy

## Localization

- Existing copy may come from locale dictionaries and providers
- Preserve IT/EN support when touching visible text
- Avoid hardcoding user-facing strings when a dictionary-driven pattern already exists
- When adding a new visible section, consider whether the copy should be localization-ready from the beginning

## Styling rules

- Use Tailwind utilities consistently with the current code style
- Follow existing naming patterns and layout conventions
- Keep responsive behavior intentional across mobile and desktop
- Prefer simple class composition over overly abstract styling helpers
- Match the current visual language before introducing any new utility combination or layout pattern

## Output expectations

When asked to implement a feature:

1. Inspect the relevant existing file(s)
2. Analyze nearby sections/components before designing anything new
3. Make the smallest clean change that solves the request
4. Preserve project conventions and visual consistency
5. Reuse existing patterns before inventing new ones
6. Flag architectural issues only if they materially affect the requested task
