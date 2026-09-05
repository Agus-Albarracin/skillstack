# Defer Expensive Derived Views

| Property | Detail |
| --- | --- |
| Decision | `reactive-defer-expensive-views` |
| Outcome | Let urgent input render before a costly dependent view. |
| Signals | Search, charts, or large lists recompute on every keystroke. |
| Tags | `reactive-work`, `deferred-value`, `concurrency`, `input` |

## Prefer

```tsx
const [query, setQuery] = useState('')
const deferredQuery = useDeferredValue(query)
const matches = useMemo(
  () => searchInventory(items, deferredQuery),
  [items, deferredQuery]
)
const stale = query !== deferredQuery
```

Render the input from `query` and the expensive result from `deferredQuery`. A subtle
stale indicator can communicate that the result is catching up.

## Boundaries

- Deferral does not reduce computation; memoize the expensive derivation as appropriate.
- Use debouncing when the goal is to reduce network request frequency.
- Keep accessibility feedback understandable and avoid indefinite stale content.

## Verification

Type rapidly under CPU throttling. Keystrokes should paint promptly, intermediate
result renders may be abandoned, and the final result must match the latest input.

## Official References

- [React useDeferredValue](https://react.dev/reference/react/useDeferredValue)
