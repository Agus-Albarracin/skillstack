# Merge Compatible Collection Passes

| Property | Detail |
| --- | --- |
| Decision | `compute-merge-compatible-passes` |
| Outcome | Reduce traversal and intermediate allocation over large collections. |
| Signals | Several filters or maps traverse the same measured input. |
| Tags | `compute-hot-path`, `array`, `iteration`, `allocation` |

## Avoid

```ts
const lowStock = products.filter(product => product.stock < 5)
const disabled = products.filter(product => !product.active)
const featured = products.filter(product => product.featured)
```

## Prefer

```ts
const lowStock: Product[] = []
const disabled: Product[] = []
const featured: Product[] = []

for (const product of products) {
  if (product.stock < 5) lowStock.push(product)
  if (!product.active) disabled.push(product)
  if (product.featured) featured.push(product)
}
```

## Boundaries

- Prefer readable declarative passes unless profiling shows material cost.
- Preserve callback order, holes, mutation behavior, and error semantics.
- Do not merge passes whose results have different lifetimes or dependencies.

## Verification

Compare CPU, allocation, and outputs on realistic data. Add equivalence tests for
items that belong to zero, one, or several result groups.

## Official References

- [MDN iterative array methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods)
