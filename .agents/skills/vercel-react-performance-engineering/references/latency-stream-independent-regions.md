# Stream Independent Regions Deliberately

| Property | Detail |
| --- | --- |
| Decision | `latency-stream-independent-regions` |
| Outcome | Deliver useful shell content without waiting for the slowest region. |
| Signals | Suspense-enabled reads, slow panels, independent page regions. |
| Tags | `latency-graph`, `suspense`, `streaming`, `rendering` |

## Decision

Place Suspense boundaries around regions that are independently useful and can
reveal a stable fallback. A boundary is a product decision: it controls reveal
order, loading feedback, state preservation, and whether already visible content
can disappear during a later suspension.

## Avoid

```tsx
export default async function Dashboard() {
  const report = await readQuarterlyReport()
  return <PageShell><Report data={report} /></PageShell>
}
```

The shell waits for the report.

## Prefer

```tsx
export default function Dashboard() {
  return (
    <PageShell>
      <Suspense fallback={<ReportSkeleton />}>
        <QuarterlyReport />
      </Suspense>
    </PageShell>
  )
}
```

## Boundaries

- Do not create a boundary around every component; coordinate related content.
- Keep fallback dimensions stable to avoid layout shifts.
- Suspense does not detect data fetched from an Effect.
- Use transitions or deferred values when an update should preserve already revealed content.

## Verification

Throttle the slow dependency and inspect streamed HTML and the browser filmstrip.
The shell must arrive first, the fallback must be accessible, and reveal order must
match product intent.

## Official References

- [React Suspense](https://react.dev/reference/react/Suspense)
- [Next.js loading UI and streaming](https://nextjs.org/docs/app/getting-started/linking-and-navigating#streaming)
