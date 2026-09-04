---
name: nextjs-specialist
description: Build, review, and refactor Next.js 16 App Router applications using React Server Components, Server Actions, Cache Components, Route Handlers, and OpenNext. Use for Next.js routes, rendering, mutations, caching, endpoints, or deployment; not generic React outside Next.js.
---

# Next.js Specialist

Production guidance for Next.js App Router work. Start from the project's installed versions, deployment target, and conventions; do not introduce a second data layer, UI system, or hosting platform without a user request.

## Defaults

- Prefer Server Components. Move `'use client'` to the smallest interactive leaf and pass only serializable props across that boundary.
- Treat Server Actions as public POST endpoints: authenticate, authorize, validate, mutate, and return minimal data.
- Use Route Handlers for webhooks, streaming, uploads, scheduled callers, or external HTTP contracts.
- Decide caching explicitly. Do not cache personalized, permission-sensitive, inventory, price, cart, or checkout state without a documented consistency design.
- Keep secrets and privileged data access behind `import 'server-only'`. Re-derive authority and commercial values from server-side sources.
- Read the relevant code path before changing it, verify both sides of each contract, and run the repository's required checks. In this workspace, follow `AGENTS.md` and load any narrower local skills it names.

## Load focused guidance

- Routing, layouts, dynamic segments, parallel routes, or `proxy.ts`: [patterns/app-router.md](patterns/app-router.md)
- Server/Client boundaries, serialization, Suspense, or server-only modules: [patterns/server-components.md](patterns/server-components.md)
- Forms, `useActionState`, Server Actions, or cache updates after mutation: [patterns/server-actions.md](patterns/server-actions.md)
- `'use cache'`, tags, `updateTag`, `revalidateTag`, PPR, or freshness: [patterns/use-cache.md](patterns/use-cache.md)
- Webhooks, streaming, `after()`, CSRF, or runtime selection: [patterns/route-handlers.md](patterns/route-handlers.md)
- OpenNext, Cloudflare Workers, bindings, or production-like preview: [patterns/deployment-workers.md](patterns/deployment-workers.md)
- Failure modes and unsafe shortcuts: [anti-patterns.md](anti-patterns.md)
- Terms and authoritative links: [references/glossary.md](references/glossary.md) and [references/official-docs-links.md](references/official-docs-links.md)

## Handoffs

Use `vercel-react-best-practices` for React or Next.js performance work, `tailwind-best-practices` for Tailwind edits, and `optimise-seo` for metadata, indexing, structured data, or sitemap work. This skill owns their Next.js-specific integration.
