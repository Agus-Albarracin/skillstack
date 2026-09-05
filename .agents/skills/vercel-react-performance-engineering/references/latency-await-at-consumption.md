# Await Values Where They Become Necessary

| Property | Detail |
| --- | --- |
| Decision | `latency-await-at-consumption` |
| Outcome | Keep unrelated branches free from optional latency. |
| Signals | Conditional enrichment, permissions, format-specific work. |
| Tags | `latency-graph`, `branching`, `promises`, `server` |

## Decision

Create or await an asynchronous dependency in the branch that consumes its value.
An unconditional `await` makes every branch inherit the slowest optional dependency.

## Avoid

```ts
async function exportOrder(id: string, format: 'json' | 'pdf') {
  const renderer = await loadPdfRenderer()
  const order = await readOrder(id)
  if (format === 'json') return Response.json(order)
  return renderer.render(order)
}
```

## Prefer

```ts
async function exportOrder(id: string, format: 'json' | 'pdf') {
  const order = await readOrder(id)
  if (format === 'json') return Response.json(order)
  const renderer = await loadPdfRenderer()
  return renderer.render(order)
}
```

If loading can overlap with required work, start the promise early but await it
only inside the consuming branch.

## Boundaries

- Do not delay a dependency that every branch requires.
- Preserve eager failure when the API contract intentionally validates all dependencies first.
- Consider cancellation when a speculative promise may continue after an early return.

## Verification

Exercise every branch and inspect its network or server trace. A branch must not
wait for or load a dependency it never uses.

## Official References

- [JavaScript async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
