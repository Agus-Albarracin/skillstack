# Subscribe to the Signal the UI Actually Uses

| Property | Detail |
| --- | --- |
| Decision | `reactive-subscribe-to-derived-signals` |
| Outcome | Render only when a meaningful state boundary changes. |
| Signals | Continuous values reduced to a boolean or enum for display. |
| Tags | `reactive-work`, `derived-signal`, `subscription`, `media-query` |

## Decision

When output depends on a classification rather than the raw continuous value,
subscribe to that classification. A viewport width can change on every pixel while
the layout mode changes only when a breakpoint is crossed.

## Avoid

```tsx
const width = useWindowWidth()
const compact = width < 768
```

## Prefer

```tsx
const compact = useMediaQuery('(max-width: 767px)')
```

## Boundaries

- Keep the raw value when it visibly drives position, scale, or another continuous output.
- Provide a deterministic server snapshot for external-store subscriptions.
- Prefer CSS media queries when JavaScript does not need the result.

## Verification

Resize within one breakpoint and across it. The component should render for the mode
change, not every intermediate pixel.

## Official References

- [React useSyncExternalStore](https://react.dev/reference/react/useSyncExternalStore)
