# Store Non-Visual Transient Values in Refs

| Property | Detail |
| --- | --- |
| Decision | `reactive-store-nonvisual-values-in-refs` |
| Outcome | Update transient integration state without scheduling a render. |
| Signals | Timer IDs, latest coordinates, mutable handles, in-flight flags. |
| Tags | `reactive-work`, `use-ref`, `transient-state`, `render` |

## Decision

Use state for values that determine rendered output. Use a ref for mutable values that
must survive renders but whose change should not render the component.

## Prefer

```tsx
const pointerRef = useRef({ x: 0, y: 0 })

useEffect(() => {
  const move = (event: PointerEvent) => {
    pointerRef.current = { x: event.clientX, y: event.clientY }
  }
  window.addEventListener('pointermove', move)
  return () => window.removeEventListener('pointermove', move)
}, [])
```

## Boundaries

- Reading or writing refs during render can make behavior unpredictable.
- If the value changes visible UI, keep it in state or an external store.
- Imperative DOM updates need cleanup and should not conflict with React ownership.

## Verification

Track render count during frequent updates. The ref should update without rendering,
and any consumer should observe the correct latest value.

## Official References

- [React useRef](https://react.dev/reference/react/useRef)
