# Isolate Expensive Work Behind Stable Component Boundaries

| Property | Detail |
| --- | --- |
| Decision | `reactive-isolate-expensive-subtrees` |
| Outcome | Skip costly subtree work when its inputs are unchanged or the branch is absent. |
| Signals | Expensive calculation occurs before an early return. |
| Tags | `reactive-work`, `memo`, `component-boundary`, `profiler` |

## Decision

Move expensive work into the component that owns it, then memoize that component
only when profiling shows repeated renders with stable props. The parent can return
early without calculating hidden content.

## Prefer

```tsx
const DemandChart = memo(function DemandChart({ points }: Props) {
  const model = useMemo(() => buildModel(points), [points])
  return <Chart model={model} />
})

function Panel({ open, points }: PanelProps) {
  if (!open) return null
  return <DemandChart points={points} />
}
```

## Boundaries

- Stable props are required; a new object or callback defeats `memo`.
- React Compiler may remove the need for manual memoization.
- Memoization is an optimization, never a correctness dependency.

## Verification

Use React Profiler to compare render count and calculation time with the branch
closed and with unchanged inputs. Include memo comparison overhead in the result.

## Official References

- [React memo](https://react.dev/reference/react/memo)
- [React useMemo](https://react.dev/reference/react/useMemo)
