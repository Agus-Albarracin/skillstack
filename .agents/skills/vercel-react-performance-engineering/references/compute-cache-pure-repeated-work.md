# Cache Pure Repeated Computation With a Policy

| Property | Detail |
| --- | --- |
| Decision | `compute-cache-pure-repeated-work` |
| Outcome | Reuse expensive deterministic results without unbounded memory. |
| Signals | The same pure transformation dominates repeated profiles. |
| Tags | `compute-hot-path`, `memoization`, `cache`, `invalidation` |

## Prefer

```ts
const slugCache = new Map<string, string>()

function cachedSlug(label: string) {
  const hit = slugCache.get(label)
  if (hit !== undefined) return hit
  const value = createSlug(label)
  if (slugCache.size >= 500) slugCache.delete(slugCache.keys().next().value!)
  slugCache.set(label, value)
  return value
}
```

Cache only pure work whose key fully represents its inputs. Define owner, maximum
size, lifetime, invalidation, and whether cached errors or absent values are valid.

## Boundaries

- Module caches are process-wide on the server and can cross requests.
- A falsy result still needs a reliable cache-hit test.
- Do not cache cheap operations or values with low reuse.
- Use `useMemo` for component-local expensive calculations across renders.

## Verification

Measure hit rate, retained memory, miss cost, eviction, and output equivalence. Clear
or rotate the cache when its input domain changes.

## Official References

- [React cache, memo, and useMemo comparison](https://react.dev/reference/react/cache#when-should-i-use-cache-memo-or-usememo)
