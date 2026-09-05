# Chain Dependencies Per Item

| Property | Detail |
| --- | --- |
| Decision | `server-chain-per-item` |
| Outcome | Let fast items advance without waiting for the slowest peer. |
| Signals | Batch reads followed by dependent enrichment reads. |
| Tags | `server-execution`, `concurrency`, `batch`, `dependency-graph` |

## Decision

For a collection of independent chains, place each dependent operation inside its
item's promise before joining the collection. A two-stage join makes every item in
stage two wait for the slowest item in stage one.

## Avoid

```ts
const orders = await Promise.all(ids.map(readOrder))
const owners = await Promise.all(orders.map(order => readCustomer(order.customerId)))
```

## Prefer

```ts
const owners = await Promise.all(
  ids.map(id => readOrder(id).then(order => readCustomer(order.customerId)))
)
```

## Boundaries

- Add a concurrency limit for large or attacker-controlled collections.
- Deduplicate repeated dependent keys when many items share the same owner.
- Choose fail-fast or partial-result semantics explicitly.

## Verification

Delay one first-stage item. Dependent reads for other items should start as soon as
their own input resolves, and concurrency must remain within service limits.

## Official References

- [Promise.all](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)
