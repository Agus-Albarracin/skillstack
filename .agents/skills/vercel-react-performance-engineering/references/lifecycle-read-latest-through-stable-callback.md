# Read Latest Values Through a Stable Callback

| Property | Detail |
| --- | --- |
| Decision | `lifecycle-read-latest-through-stable-callback` |
| Outcome | Give timers or external integrations current data without recreating their callback. |
| Signals | Long-lived callback needs latest props or state but must keep stable identity. |
| Tags | `lifecycle`, `latest-value`, `callback`, `effect-event` |

## Decision

Use `useEffectEvent` for a callback invoked from an Effect. When that API is unavailable
or the integration occurs outside Effects, a carefully maintained latest-value ref can
provide a stable wrapper. This is an escape hatch, not ordinary dependency management.

## Prefer

```tsx
const onTick = useEffectEvent(() => {
  reportProgress(completed, total)
})

useEffect(() => {
  const id = setInterval(onTick, 1000)
  return () => clearInterval(id)
}, [])
```

## Boundaries

- Keep truly reactive values as Effect dependencies when changes require resubscription.
- Do not call Effect Events from render or normal event handlers.
- Stable identity must not conceal stale resource ownership.

## Verification

Update the referenced values without restarting the timer or subscription. Each call
must observe the latest values, and cleanup must still occur exactly once.

## Official References

- [React useEffectEvent](https://react.dev/reference/react/useEffectEvent)
