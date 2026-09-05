# Keep Effect Events Non-Reactive

| Property | Detail |
| --- | --- |
| Decision | `lifecycle-keep-effect-events-nonreactive` |
| Outcome | Prevent a latest-value callback from becoming an Effect trigger. |
| Signals | `useEffectEvent` result appears in a dependency array. |
| Tags | `lifecycle`, `effect-event`, `dependencies`, `react` |

## Decision

Effect Events represent non-reactive logic called from an Effect. Do not include the
returned function in dependency arrays; keep every genuinely reactive value in the
Effect and read latest non-reactive values inside the Effect Event.

## Prefer

```tsx
const onConnected = useEffectEvent(() => notify(theme))

useEffect(() => {
  const connection = connect(roomId)
  connection.on('connected', onConnected)
  return () => connection.close()
}, [roomId])
```

## Boundaries

- Call Effect Events only from Effects or other Effect Events.
- Never use them to hide a dependency that should trigger synchronization.
- Verify React and lint-plugin versions support the API and its dependency semantics.

## Verification

Change `theme` and `roomId` independently. Notifications must use the latest theme,
while only `roomId` reconnects the external system.

## Official References

- [React useEffectEvent](https://react.dev/reference/react/useEffectEvent)
