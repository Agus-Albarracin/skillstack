# Multiplex Global Browser Listeners

| Property | Detail |
| --- | --- |
| Decision | `browser-multiplex-global-listeners` |
| Outcome | Keep one platform listener while supporting many React subscribers. |
| Signals | Repeated window, document, media-query, or storage listeners. |
| Tags | `browser-resources`, `event-listener`, `subscription`, `cleanup` |

## Decision

When many components observe the same global source, create one shared subscription
and fan changes out to consumers, commonly through `useSyncExternalStore`. This
centralizes cleanup and supplies a coherent snapshot for concurrent rendering.

## Prefer

```ts
const listeners = new Set<() => void>()

function subscribe(listener: () => void) {
  if (listeners.size === 0) window.addEventListener('online', emit)
  listeners.add(listener)
  return () => {
    listeners.delete(listener)
    if (listeners.size === 0) window.removeEventListener('online', emit)
  }
}
```

Pair it with stable `getSnapshot` and `getServerSnapshot` functions.

## Boundaries

- Do not combine listeners whose options or semantics differ.
- Cleanup must use the same target, event, handler, and capture option.
- Protect browser-only access during server rendering.

## Verification

Mount and unmount many consumers while instrumenting `addEventListener`. Listener
count should remain one, snapshots should update once, and the final unmount cleans up.

## Official References

- [React useSyncExternalStore](https://react.dev/reference/react/useSyncExternalStore)
