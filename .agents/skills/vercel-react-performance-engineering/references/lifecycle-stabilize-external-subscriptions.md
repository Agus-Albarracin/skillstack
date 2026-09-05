# Stabilize External Subscriptions While Calling the Latest Handler

| Property | Detail |
| --- | --- |
| Decision | `lifecycle-stabilize-external-subscriptions` |
| Outcome | Avoid unsubscribe/resubscribe churn without invoking a stale callback. |
| Signals | External API requires stable function identity while React props change. |
| Tags | `lifecycle`, `subscription`, `handler`, `identity` |

## Decision

Prefer `useEffectEvent` when available. For integrations that cannot use it, store the
latest handler in a ref and subscribe with one stable wrapper.

## Prefer

```tsx
const latestHandler = useRef(onMessage)
useEffect(() => { latestHandler.current = onMessage }, [onMessage])

useEffect(() => {
  const listener = (message: Message) => latestHandler.current(message)
  bus.subscribe(listener)
  return () => bus.unsubscribe(listener)
}, [bus])
```

## Boundaries

- Include the external source itself in dependencies when its identity can change.
- Do not hide reactive synchronization inputs behind the ref.
- Match subscribe and unsubscribe arguments exactly.
- Document this escape hatch; normal event props do not need it.

## Verification

Change the handler repeatedly. Subscription count should stay stable, emitted events
must reach the latest handler, and unmount must release the listener.

## Official References

- [React reading latest props and state from an Effect](https://react.dev/reference/react/useEffect#reading-the-latest-props-and-state-from-an-effect)
