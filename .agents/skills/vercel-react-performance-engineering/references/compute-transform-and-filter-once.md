# Transform and Filter Without an Intermediate Array

| Property | Detail |
| --- | --- |
| Decision | `compute-transform-and-filter-once` |
| Outcome | Reduce traversal and allocation when mapping may omit values. |
| Signals | `.map(...).filter(...)` over a large measured collection. |
| Tags | `compute-hot-path`, `flat-map`, `array`, `allocation` |

## Avoid

```ts
const emails = customers
  .map(customer => customer.active ? customer.email : null)
  .filter(Boolean)
```

## Prefer

```ts
const emails = customers.flatMap(customer =>
  customer.active ? [customer.email] : []
)
```

A manual loop can avoid the short temporary arrays too when measurement justifies it.
Use type predicates when `.filter(Boolean)` would obscure the result type.

## Boundaries

- Prefer clear `map` plus `filter` for small inputs or when stages have separate meaning.
- `flatMap` flattens one level and skips empty slots according to array semantics.
- Preserve error order and callback side effects.

## Verification

Compare outputs, callback order, CPU, and allocation for accepted, rejected, sparse,
and large inputs.

## Official References

- [MDN Array flatMap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap)
