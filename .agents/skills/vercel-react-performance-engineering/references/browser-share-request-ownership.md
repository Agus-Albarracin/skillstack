# Share Ownership of Identical Client Requests

| Property | Detail |
| --- | --- |
| Decision | `browser-share-request-ownership` |
| Outcome | Produce one request and one cache entry for identical remote data. |
| Signals | Multiple components fetch the same URL during mount. |
| Tags | `browser-resources`, `deduplication`, `cache-key`, `client-data` |

## Decision

Use a shared client data layer with stable cache keys, such as SWR or the project's
established equivalent. Central ownership should define deduplication, freshness,
revalidation, errors, and mutations instead of reproducing those policies in Effects.

## Avoid

```tsx
useEffect(() => {
  fetch(`/api/stock/${sku}`).then(r => r.json()).then(setStock)
}, [sku])
```

in every consumer of the same stock record.

## Prefer

```tsx
const { data, error, isLoading } = useSWR(
  sku ? ['/api/stock', sku] : null,
  ([base, key]) => fetch(`${base}/${key}`).then(r => r.json())
)
```

## Boundaries

- Include tenant, locale, permissions, and representation in cache keys when relevant.
- Define mutation invalidation and acceptable staleness.
- Prefer server data fetching when a Client Component is not required.

## Verification

Mount concurrent consumers and inspect the network. They should share one request,
then respond correctly to focus, mutation, error, and stale-data scenarios.

## Official References

- [SWR request deduplication](https://swr.vercel.app/docs/advanced/performance#deduplication)
