# skillstack — Agent Skills Index

When working on this project, load every relevant skill before making changes.

Explicit user instructions take precedence over this file and over guidelines
provided by a skill.

## How to Use

1. Match the current task against the triggers in the table below.
2. Read the complete `SKILL.md` for every matching skill before changing files.
3. Apply multiple skills when their scopes overlap.
4. Keep changes focused and run checks appropriate to their scope.
5. After completing a coherent change, use `atomic-commits` to inspect, stage,
   commit, and verify it.
6. Do not push, pull, fetch, open a pull request, merge, rebase, tag, amend, or
   change remotes unless the user requests that operation separately.

## Internal Skill Governance

Before proposing, creating, migrating, or modifying a Skillstack skill, read
`.agents/internal-skills/skillstack-skill-creator/SKILL.md`. This internal skill
defines the business contract for Skillstack skills; it is never vendorized.

## Skills

| Skill | Trigger | Path |
| --- | --- | --- |
| `frontend-design` | Establishing or reshaping visual direction, typography, color, composition, content voice, or a distinctive interface identity. | `.agents/skills/frontend-design/SKILL.md` |
| `frontend-ui-engineering` | Building or modifying user-facing interfaces, pages, components, responsive layouts, accessibility, interaction states, or UI quality. | `.agents/skills/frontend-ui-engineering/SKILL.md` |
| `nextjs-specialist` | Next.js 16 App Router routes, layouts, React Server/Client Component boundaries, Server Actions, Cache Components, Route Handlers, or OpenNext/Cloudflare Workers deployment. | `.agents/skills/nextjs-specialist/SKILL.md` |
| `vercel-react-best-practices` | React and Next.js performance guidance for data fetching, bundles, server execution, rendering, and JavaScript hot paths. | `.agents/skills/vercel-react-best-practices/SKILL.md` |
| `tailwind-best-practices` | Writing, reviewing, or refactoring Tailwind classes, design tokens, responsive layouts, or UI styling. | `.agents/skills/tailwind-best-practices/SKILL.md` |
| `optimise-seo` | Metadata, canonical URLs, sitemaps, robots rules, JSON-LD, redirects, indexing, social previews, security headers, or Core Web Vitals. | `.agents/skills/optimise-seo/SKILL.md` |
| `atomic-commits` | Planning, staging, creating, reviewing, or verifying local commits. | `.agents/skills/atomic-commits/SKILL.md` |
| `skillstack-skill-creator` | Creating, migrating, validating, or changing a Skillstack skill or its distribution boundary. Internal only. | `.agents/internal-skills/skillstack-skill-creator/SKILL.md` |

When both frontend skills apply, use `frontend-design` to establish the visual
direction before implementing and validating it with `frontend-ui-engineering`.

## Project Checks

- Run `npm run lint` for source or configuration changes.
- Run `npm run build` when a change can affect compilation, routing, metadata,
  static generation, or the production bundle.
- Use the narrowest meaningful check for documentation-only changes.
