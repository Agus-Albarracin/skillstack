# Read Action-Only Values at Action Time

| Property | Detail |
| --- | --- |
| Decision | `reactive-read-at-action-time` |
| Outcome | Avoid subscribing a component to values that do not affect its render. |
| Signals | Search params, storage, or location read only inside a callback. |
| Tags | `reactive-work`, `subscription`, `event-handler`, `state-read` |

## Decision

If a value matters only when an action occurs, read it in that action. Subscribing
during render makes every change schedule a render even though the visible output
does not depend on the value.

## Avoid

```tsx
const params = useSearchParams()
const share = () => sendLink(params.get('campaign'))
```

## Prefer

```tsx
const share = () => {
  const params = new URLSearchParams(window.location.search)
  sendLink(params.get('campaign'))
}
```

## Boundaries

- Subscribe when the value changes rendered output.
- Read browser globals only in client code and after the action occurs.
- Capture a render-time snapshot when consistency with the displayed UI matters.

## Verification

Change the external value without triggering the action. The component should not
render; invoking the action should still read the latest intended value.

## Official References

- [React separating events from Effects](https://react.dev/learn/separating-events-from-effects)
