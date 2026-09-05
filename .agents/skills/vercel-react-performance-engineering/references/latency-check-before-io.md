# Reject Synchronous Failures Before I/O

| Property | Detail |
| --- | --- |
| Decision | `latency-check-before-io` |
| Outcome | Avoid remote work when a local guard already settles the request. |
| Signals | Feature gates, validation, empty input, unsupported methods. |
| Tags | `latency-graph`, `guards`, `async`, `server` |

## Decision

Evaluate cheap synchronous conditions before requesting flags, sessions, or remote
data that are unnecessary when the guard fails. This changes the request graph:
the rejected path ends locally instead of paying network latency first.

## Avoid

```ts
async function quote(order: Order) {
  const experiment = await flags.forUser(order.customerId)
  if (order.lines.length === 0) return { total: 0 }
  return calculateQuote(order, experiment)
}
```

The empty-order branch waits for a flag it never consumes.

## Prefer

```ts
async function quote(order: Order) {
  if (order.lines.length === 0) return { total: 0 }
  const experiment = await flags.forUser(order.customerId)
  return calculateQuote(order, experiment)
}
```

## Boundaries

- Do not move a guard ahead of authentication when evaluating it would reveal protected information.
- Keep required auditing or rate limiting in place even when the business result is known locally.
- Start remote work early when every valid branch consumes it; this rule targets work that is optional.

## Verification

Trace both accepted and rejected paths. The rejected path should issue no request
for the skipped dependency, while authorization and observability remain intact.

## Official References

- [Next.js production checklist](https://nextjs.org/docs/app/guides/production-checklist)
