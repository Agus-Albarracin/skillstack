# Preserve Identity for Repeated RSC Payload Values

| Property | Detail |
| --- | --- |
| Decision | `server-preserve-payload-identity` |
| Outcome | Avoid serializing equivalent data multiple times across a Server-to-Client boundary. |
| Signals | Original and transformed collections passed together to a Client Component. |
| Tags | `server-execution`, `rsc`, `serialization`, `identity` |

## Decision

React can reuse serialized values when the same reference appears repeatedly. A
server-side `map`, `filter`, spread, slice, or immutable sort creates another
container and therefore another payload entry. Send the source value once and make
cheap presentation transformations in the client when it already needs that data.

## Avoid

```tsx
<StockTable rows={rows} sortedRows={rows.toSorted(bySku)} />
```

## Prefer

```tsx
<StockTable rows={rows} />

// Client Component
const sortedRows = useMemo(() => rows.toSorted(bySku), [rows])
```

Primitive arrays duplicate more payload than object arrays whose nested references
can still be shared.

## Boundaries

- Send derived data when the client does not need the source or transformation is too costly there.
- Measure payload size; do not move sensitive or server-only logic to the browser.

## Verification

Compare the RSC payload and client computation. The transfer should shrink without
adding a larger main-thread cost or changing sort stability.

## Official References

- [Next.js Server and Client Components](https://nextjs.org/docs/app/getting-started/server-and-client-components)
