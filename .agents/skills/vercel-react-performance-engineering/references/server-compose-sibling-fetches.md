# Compose Server Components for Concurrent Reads

| Property | Detail |
| --- | --- |
| Decision | `server-compose-sibling-fetches` |
| Outcome | Prevent a parent's read from delaying independent descendant work. |
| Signals | Async parent fetches before rendering independent children. |
| Tags | `server-execution`, `rsc`, `composition`, `latency-graph` |

## Decision

Place independently fetching Server Components as siblings so React can begin their
work without waiting for an unrelated async parent. Component nesting should model
data dependency, not merely visual containment.

## Avoid

```tsx
async function Page() {
  const summary = await readSummary()
  return <Layout summary={summary}><Alerts /></Layout>
}
```

`Alerts` cannot begin until `readSummary` completes.

## Prefer

```tsx
async function Summary() {
  return <SummaryCard value={await readSummary()} />
}

function Page() {
  return <Layout><Summary /><Alerts /></Layout>
}
```

Use Suspense where either sibling should stream independently.

## Boundaries

- Keep actual dependencies explicit through props or shared promises.
- Preserve error boundaries and reveal order expected by the product.
- Request memoization can deduplicate shared reads without lifting them to a blocking parent.

## Verification

Inspect server spans: sibling reads should start together. Confirm the composed tree
still produces the intended layout, loading states, and errors.

## Official References

- [Next.js parallel data fetching](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#parallel-data-fetching)
