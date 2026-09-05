# Handle Interaction Effects at Their Source

| Property | Detail |
| --- | --- |
| Decision | `reactive-handle-interactions-at-source` |
| Outcome | Prevent unrelated reactive changes from replaying a user action. |
| Signals | State flag plus Effect used to submit, buy, notify, or download. |
| Tags | `reactive-work`, `event-handler`, `effect`, `side-effect` |

## Avoid

```tsx
const [submitted, setSubmitted] = useState(false)
useEffect(() => {
  if (submitted) submitOrder(cart)
}, [submitted, cart])
```

Changing `cart` after submission can repeat the command.

## Prefer

```tsx
function handleSubmit() {
  submitOrder(cart)
}
```

Use Effects for synchronization caused by the component being present or by a
reactive value, not for a specific event whose origin is already known.

## Boundaries

- Share logic between multiple event handlers through a normal function.
- Keep lifecycle-driven subscriptions and synchronization in Effects.
- Disable or make commands idempotent when rapid repeated input is possible.

## Verification

Perform the interaction once, then change unrelated state and remount the component.
The command must run only for the original event.

## Official References

- [React You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect)
