# Start Work Early and Join It Late

| Property | Detail |
| --- | --- |
| Decision | `latency-start-early-join-late` |
| Outcome | Overlap request parsing and local computation with remote I/O. |
| Signals | Route Handlers, API handlers, validation plus independent reads. |
| Tags | `latency-graph`, `route-handler`, `overlap`, `server` |

## Decision

Start promises as soon as their inputs are available, continue with independent
local work, and await at the last responsible point. This differs from blindly
parallelizing everything: authorization and input validation still define hard gates.

## Avoid

```ts
export async function POST(request: Request) {
  const input = schema.parse(await request.json())
  const actor = await requireActor()
  const limits = await readLimits(actor.orgId)
  return Response.json(await createOrder(input, limits))
}
```

## Prefer

```ts
export async function POST(request: Request) {
  const actorPromise = requireActor()
  const input = schema.parse(await request.json())
  const actor = await actorPromise
  const limitsPromise = readLimits(actor.orgId)
  validateOrderPolicy(input, actor)
  return Response.json(await createOrder(input, await limitsPromise))
}
```

## Boundaries

- Never begin privileged work before authentication provides its required identity.
- Do not start costly work for payloads that cheap validation will reject.
- Ensure early promises are awaited or deliberately cancelled so rejections are observed.

## Verification

Trace parsing, authentication, validation, and data access. Independent spans
should overlap without moving protected work before its authorization boundary.

## Official References

- [Next.js Route Handlers](https://nextjs.org/docs/app/getting-started/route-handlers)
