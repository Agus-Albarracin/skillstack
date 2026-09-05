# Use Keyed Collections for Repeated Membership

| Property | Detail |
| --- | --- |
| Decision | `compute-use-keyed-membership` |
| Outcome | Replace repeated linear membership checks with keyed access. |
| Signals | `includes` or `find` runs repeatedly against the same collection. |
| Tags | `compute-hot-path`, `set`, `map`, `lookup` |

## Avoid

```ts
items.filter(item => allowedIds.includes(item.id))
```

## Prefer

```ts
const allowed = new Set(allowedIds)
items.filter(item => allowed.has(item.id))
```

Use `Set` for membership and `Map` when a key maps to a value. Build the keyed
collection once at the narrowest scope where it can serve repeated lookups.

## Boundaries

- Construction and memory may outweigh savings for small or one-off checks.
- Set equality follows SameValueZero and object keys compare by identity.
- Preserve duplicates and order separately when they matter.

## Verification

Benchmark including construction and validate primitive, object, duplicate, and
missing keys with realistic collection sizes.

## Official References

- [MDN Set performance](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set#performance)
