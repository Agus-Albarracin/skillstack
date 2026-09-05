# Derive Synchronous Values During Render

| Property | Detail |
| --- | --- |
| Decision | `reactive-derive-during-render` |
| Outcome | Avoid stale intermediate renders and mirrored state. |
| Signals | Effects copy props or state into another state variable. |
| Tags | `reactive-work`, `derived-state`, `effect`, `render` |

## Decision

Calculate a value directly from current props and state during rendering. Mirroring
it through an Effect first renders stale output, commits, runs the Effect, and renders
again while creating another source of truth.

## Avoid

```tsx
const [total, setTotal] = useState(0)
useEffect(() => setTotal(lines.reduce(sumLine, 0)), [lines])
```

## Prefer

```tsx
const total = lines.reduce(sumLine, 0)
```

Use `useMemo` only if the pure calculation is measurably expensive.

## Boundaries

- Effects remain appropriate for synchronizing an external system.
- Use a `key` when an entire stateful subtree must reset for a new identity.
- Never mutate inputs while deriving output.

## Verification

Use Profiler or a render counter. One source update should produce one coherent render
without a corrective Effect pass.

## Official References

- [React You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect)
