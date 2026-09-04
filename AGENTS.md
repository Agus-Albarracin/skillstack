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

## Skills

| Skill | Trigger | Path |
| --- | --- | --- |
| `nextjs-specialist` | Next.js 16 App Router routes, layouts, React Server/Client Component boundaries, Server Actions, Cache Components, Route Handlers, or OpenNext/Cloudflare Workers deployment. | `.agents/skills/nextjs-specialist/SKILL.md` |
| `vercel-react-best-practices` | React components, Next.js routes, layouts, data fetching, rendering, performance, or bundle changes. | `.agents/skills/vercel-react-best-practices/SKILL.md` |
| `tailwind-best-practices` | Writing, reviewing, or refactoring Tailwind classes, design tokens, responsive layouts, or UI styling. | `.agents/skills/tailwind-best-practices/SKILL.md` |
| `optimise-seo` | Metadata, canonical URLs, sitemaps, robots rules, JSON-LD, redirects, indexing, social previews, security headers, or Core Web Vitals. | `.agents/skills/optimise-seo/SKILL.md` |
| `atomic-commits` | Planning, staging, creating, reviewing, or verifying local commits. | `.agents/skills/atomic-commits/SKILL.md` |

## Project Checks

- Run `npm run lint` for source or configuration changes.
- Run `npm run build` when a change can affect compilation, routing, metadata,
  static generation, or the production bundle.
- Use the narrowest meaningful check for documentation-only changes.
