# Launch Independent Work Together

| Property | Detail |
| --- | --- |
| Decision | `latency-launch-independent-work` |
| Outcome | Replace additive latency with the duration of the slowest independent operation. |
| Signals | Consecutive awaits with no data dependency. |
| Tags | `latency-graph`, `concurrency`, `promise-all`, `critical-path` |

## Decision

When operations do not consume one another's results, start them in the same turn
and join them with `Promise.all`. Sequential syntax is a performance decision: it
creates a waterfall even when the data model has no dependency.

## Avoid

```ts
const stock = await readStock(sku)
const price = await readPrice(sku)
const offers = await readOffers(sku)
```

## Prefer

```ts
const [stock, price, offers] = await Promise.all([
  readStock(sku),
  readPrice(sku),
  readOffers(sku),
])
```

## Error Semantics

`Promise.all` rejects on the first rejection but does not cancel work already
started. Use settled results only when partial success is part of the product
contract, and use abort signals when abandoned work is expensive.

## Boundaries

- Respect service concurrency limits, transaction ordering, and rate limits.
- Do not parallelize writes whose order is part of correctness.
- Avoid unbounded `Promise.all` over user-sized collections; apply a concurrency limit.

## Verification

Record a server trace. All independent spans should overlap, and total duration
should approach the slowest span rather than their sum. Re-test failure behavior.

## Official References

- [Promise.all](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)
