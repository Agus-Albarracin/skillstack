# Separate Layout Reads From DOM Writes

| Property | Detail |
| --- | --- |
| Decision | `compute-separate-layout-reads-writes` |
| Outcome | Avoid repeated forced synchronous layout. |
| Signals | Style writes interleaved with geometry reads in one task. |
| Tags | `compute-hot-path`, `dom`, `layout`, `reflow` |

## Decision

Group geometry reads before DOM writes, or group writes and read only after the browser
has a chance to process them. Reading `offsetWidth`, `getBoundingClientRect`, or
computed style after invalidating layout can force the browser to calculate layout now.

## Avoid

```ts
for (const row of rows) {
  row.style.height = '48px'
  totals.push(row.getBoundingClientRect().height)
}
```

## Prefer

```ts
const heights = rows.map(row => row.getBoundingClientRect().height)
rows.forEach(row => row.classList.add('compact-row'))
```

Prefer toggling a class over several imperative style assignments when CSS can own
the visual state.

## Boundaries

- A single read after a batch of writes may still require one layout; the goal is to avoid repetition.
- Use `requestAnimationFrame` only when scheduling across frames matches product behavior.
- React layout Effects still need read/write discipline.

## Verification

Record a browser performance trace and inspect forced-layout events, layout duration,
and interaction latency before and after.

## Official References

- [web.dev layout thrashing](https://web.dev/articles/avoid-large-complex-layouts-and-layout-thrashing)
