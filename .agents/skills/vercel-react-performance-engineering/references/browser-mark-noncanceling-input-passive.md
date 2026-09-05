# Mark Non-Canceling Input Listeners Passive

| Property | Detail |
| --- | --- |
| Decision | `browser-mark-noncanceling-input-passive` |
| Outcome | Let scrolling begin without waiting for JavaScript cancellation. |
| Signals | Touch and wheel listeners that never call `preventDefault`. |
| Tags | `browser-resources`, `passive`, `scroll`, `input` |

## Decision

Register touch and wheel listeners with `{ passive: true }` when the handler never
cancels the event. This tells the browser it can proceed with scrolling immediately.

## Prefer

```ts
useEffect(() => {
  const track = (event: WheelEvent) => analytics.sample(event.deltaY)
  window.addEventListener('wheel', track, { passive: true })
  return () => window.removeEventListener('wheel', track)
}, [])
```

## Boundaries

- Passive handlers cannot call `preventDefault`; do not use them for gesture ownership.
- Prefer CSS `touch-action` when declaring allowed gestures.
- Keep handlers short and avoid layout work even when they are passive.

## Verification

Use the browser performance panel and event-listener inspection. Scrolling should
show no blocking-listener warning and behavior must remain correct on touch devices.

## Official References

- [MDN addEventListener options](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#using_passive_listeners)
