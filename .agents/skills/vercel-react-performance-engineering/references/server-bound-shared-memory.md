# Bound Cross-Request Memory

| Property | Detail |
| --- | --- |
| Decision | `server-bound-shared-memory` |
| Outcome | Reuse safe data across requests without unbounded growth or stale tenant leakage. |
| Signals | Module-level Map, LRU, expensive repeated reads, warm instances. |
| Tags | `server-execution`, `cache`, `lru`, `freshness` |

## Decision

A cross-request cache needs explicit ownership, maximum size, TTL, invalidation,
key completeness, tenant scope, and deployment topology. Use an LRU or platform data
cache when process-local reuse is acceptable; use shared storage when instances must
observe the same value.

## Prefer

```ts
const products = new LRUCache<string, Product>({
  max: 500,
  ttl: 60_000,
})

async function readProduct(tenantId: string, sku: string) {
  const key = `${tenantId}:${sku}`
  const hit = products.get(key)
  if (hit) return hit
  const product = await db.product.findFirst({ where: { tenantId, sku } })
  if (product) products.set(key, product)
  return product
}
```

## Boundaries

- Process memory is not durable and may not be shared across replicas or cold starts.
- Include every dimension that changes authorization or representation in the key.
- Define invalidation for writes and do not cache secrets longer than required.
- Prevent stampedes when many misses request the same expensive value.

## Verification

Test capacity eviction, TTL expiry, write invalidation, cold instances, concurrent
misses, and cross-tenant keys. Observe hit rate and memory rather than assuming value.

## Official References

- [Next.js cache handlers](https://nextjs.org/docs/app/api-reference/config/next-config-js/cacheHandlers)
