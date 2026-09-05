# Model Partial Dependency Graphs Explicitly

| Property | Detail |
| --- | --- |
| Decision | `latency-model-partial-dependencies` |
| Outcome | Serialize only edges that represent real data dependencies. |
| Signals | One result feeds a subset of later operations. |
| Tags | `latency-graph`, `dependency-graph`, `concurrency`, `server` |

## Decision

Represent each dependency chain independently. A stage-based implementation often
waits for every task in stage one before any task in stage two, even when only one
stage-two task needs a particular result.

## Avoid

```ts
const [account, catalog] = await Promise.all([
  readAccount(accountId),
  readCatalog(),
])
const [credit, recommendations] = await Promise.all([
  readCredit(account.id),
  recommend(catalog),
])
```

`recommend` waits for `account` even though it depends only on `catalog`.

## Prefer

```ts
const accountPromise = readAccount(accountId)
const catalogPromise = readCatalog()

const creditPromise = accountPromise.then(account => readCredit(account.id))
const recommendationsPromise = catalogPromise.then(recommend)

const [account, catalog, credit, recommendations] = await Promise.all([
  accountPromise,
  catalogPromise,
  creditPromise,
  recommendationsPromise,
])
```

## Boundaries

- Keep the graph readable; named promises are preferable to deeply nested chains.
- Preserve transaction and authorization ordering where later work must not start early.
- Use orchestration libraries only when the graph is complex enough to justify another dependency.

## Verification

Visualize span start times. Each node should begin as soon as all of its own
inputs exist, without waiting for unrelated siblings.

## Official References

- [Promise concurrency methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
