# Defer Non-Critical Post-Response Side Effects

| Property | Detail |
| --- | --- |
| Decision | `server-defer-post-response-side-effects` |
| Outcome | Keep logging, analytics, and cleanup outside response latency. |
| Signals | Awaited telemetry or notification after a successful mutation. |
| Tags | `server-execution`, `after`, `side-effects`, `response-time` |

## Decision

Use Next.js `after` for work that may safely run after the response or prerender
finishes. Capture required request values in the supported execution context and
keep essential transaction work on the critical path.

## Prefer

```ts
import { after } from 'next/server'

export async function POST(request: Request) {
  const actor = await requireSession()
  const result = await executeCommand(await request.json(), actor)
  after(() => audit.write({ actorId: actor.userId, commandId: result.id }))
  return Response.json(result)
}
```

## Boundaries

- `after` still has platform duration limits and runs after errors or redirects.
- Do not defer work required for durability, authorization, or the response contract.
- Request APIs have different constraints in Server Components versus Route Handlers.
- Make retried side effects idempotent and observable.

## Verification

Compare response timing and confirm the deferred task completes on success, failure,
redirect, and platform shutdown scenarios supported by the deployment target.

## Official References

- [Next.js after](https://nextjs.org/docs/app/api-reference/functions/after)
