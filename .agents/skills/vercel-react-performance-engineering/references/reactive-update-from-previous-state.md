# Use Functional Updates for Previous-State Logic

| Property | Detail |
| --- | --- |
| Decision | `reactive-update-from-previous-state` |
| Outcome | Prevent stale closures and keep callbacks independent of current state identity. |
| Signals | A state setter reads the same state variable to compute its next value. |
| Tags | `reactive-work`, `state`, `functional-update`, `closure` |

## Avoid

```tsx
const append = useCallback((line: Line) => {
  setLines([...lines, line])
}, [lines])
```

## Prefer

```tsx
const append = useCallback((line: Line) => {
  setLines(current => [...current, line])
}, [])
```

React queues updater functions and supplies the current pending state, so concurrent
updates compose without relying on the closure that created the handler.

## Boundaries

- Direct assignment remains correct when next state does not depend on previous state.
- Updater functions must be pure; React may call them twice in development.
- Include other reactive values used by the callback in its dependencies.

## Verification

Trigger several updates in one event and after an asynchronous delay. No update may
be lost, and callback identity should remain stable when its true inputs are stable.

## Official References

- [React updating state based on previous state](https://react.dev/reference/react/useState#updating-state-based-on-the-previous-state)
