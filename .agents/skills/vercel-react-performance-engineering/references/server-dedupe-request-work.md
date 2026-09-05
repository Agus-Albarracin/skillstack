# Deduplicate Repeated Work Within One Request

| Property | Detail |
| --- | --- |
| Decision | `server-dedupe-request-work` |
| Outcome | Execute identical database, authentication, or computation work once per render request. |
| Signals | The same function is called from layouts, pages, and nested Server Components. |
| Tags | `server-execution`, `react-cache`, `deduplication`, `request-scope` |

## Decision

Wrap repeated non-fetch work in React `cache` at module scope. The memoized function
and its cache are request-scoped in Server Components; this is deduplication, not a
cross-request freshness policy. Next.js already memoizes matching server `fetch`
requests during rendering, so do not wrap those without a separate reason.

## Prefer

```ts
import { cache } from 'react'

export const readViewer = cache(async () => {
  const session = await requireSession()
  return db.user.findUnique({ where: { id: session.userId } })
})
```

## Identity Rules

`cache` compares arguments with `Object.is`. Prefer primitive identifiers or reuse
the same object reference; two equivalent inline objects are different cache keys.
Errors are cached for the same arguments during that request as well.

## Boundaries

- `cache` is for React Server Components, not arbitrary client or Route Handler caching.
- Declare the memoized function once; wrapping the same function twice creates separate caches.
- Never let deduplication bypass per-call authorization semantics.

## Verification

Instrument the underlying operation and render multiple consumers in one request.
It should execute once, then execute again on a separate request.

## Official References

- [React cache](https://react.dev/reference/react/cache)
- [Next.js caching guide](https://nextjs.org/docs/app/guides/caching)
