# Isolate Request State From Module Scope

| Property | Detail |
| --- | --- |
| Decision | `server-isolate-request-state` |
| Outcome | Prevent races and data leakage between concurrent renders. |
| Signals | Mutable module variables holding viewer, locale, request, or temporary output. |
| Tags | `server-execution`, `concurrency`, `request-scope`, `security` |

## Decision

Treat server module scope as process-wide shared memory. Concurrent requests can
interleave within the same instance, so pass request data through function arguments,
component props, or a correctly scoped request context.

## Avoid

```tsx
let currentWarehouse: Warehouse | null = null

export default async function Page() {
  currentWarehouse = await warehouseForRequest()
  return <Stock />
}
```

## Prefer

```tsx
export default async function Page() {
  const warehouse = await warehouseForRequest()
  return <Stock warehouse={warehouse} />
}
```

## Boundaries

Immutable configuration, correctly keyed bounded caches, and stateless clients may
live at module scope. Mutable user data may not.

## Verification

Run overlapping requests for different tenants with deliberate delays. Each response
must contain only its own context, including error and retry paths.

## Official References

- [Next.js Server and Client Components](https://nextjs.org/docs/app/getting-started/server-and-client-components)
