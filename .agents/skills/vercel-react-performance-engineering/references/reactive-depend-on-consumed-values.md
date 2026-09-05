# Declare the Smallest Truthful Reactive Dependencies

| Property | Detail |
| --- | --- |
| Decision | `reactive-depend-on-consumed-values` |
| Outcome | Re-run synchronization only when a consumed reactive value changes. |
| Signals | Effects depend on broad objects while reading one primitive field. |
| Tags | `reactive-work`, `effect`, `dependencies`, `identity` |

## Decision

Dependencies describe code; they are not a tuning knob. Extract the primitive value
the Effect actually consumes and include every reactive value reported by the linter.
To change dependencies, restructure the Effect rather than suppressing the rule.

## Avoid

```tsx
useEffect(() => connectToWarehouse(user.warehouseId), [user])
```

## Prefer

```tsx
const warehouseId = user.warehouseId
useEffect(() => connectToWarehouse(warehouseId), [warehouseId])
```

For threshold behavior, derive the boolean first and depend on that signal.

## Boundaries

- Do not omit a reactive value to prevent an inconvenient re-run.
- Move stable constants outside the component when they are truly non-reactive.
- Use Effect Events for latest non-reactive reads when supported.

## Verification

Keep the exhaustive-deps linter enabled. Change unrelated fields and then the consumed
field; only the latter should resynchronize.

## Official References

- [React removing Effect dependencies](https://react.dev/learn/removing-effect-dependencies)
