# Index Collections Used for Repeated Lookups

| Property | Detail |
| --- | --- |
| Decision | `compute-index-repeated-lookups` |
| Outcome | Replace repeated linear scans with keyed access. |
| Signals | `.find()` runs inside another collection traversal. |
| Tags | `compute-hot-path`, `map`, `index`, `complexity` |

## Avoid

```ts
const enriched = orders.map(order => ({
  ...order,
  customer: customers.find(customer => customer.id === order.customerId),
}))
```

## Prefer

```ts
const customerById = new Map(customers.map(customer => [customer.id, customer]))
const enriched = orders.map(order => ({
  ...order,
  customer: customerById.get(order.customerId),
}))
```

Building the index is linear and each lookup is expected constant time, replacing a
potential product of collection sizes with the sum of their sizes.

## Boundaries

- A one-off lookup over a small array may not repay index construction.
- Define duplicate-key behavior; later `Map` entries replace earlier ones.
- Rebuild or incrementally update the index when source data changes.

## Verification

Benchmark realistic collection sizes and validate missing and duplicate keys. Include
index allocation in the measurement.

## Official References

- [MDN Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
