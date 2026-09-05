# Mark Interruptible Updates as Transitions

| Property | Detail |
| --- | --- |
| Decision | `reactive-mark-nonurgent-updates` |
| Outcome | Keep urgent input responsive while background rendering catches up. |
| Signals | Tabs, filters, navigation, or derived panels with expensive renders. |
| Tags | `reactive-work`, `transition`, `scheduling`, `responsiveness` |

## Prefer

```tsx
const [isPending, startTransition] = useTransition()

function selectWarehouse(id: string) {
  setSelectedControl(id)
  startTransition(() => setVisibleWarehouse(id))
}
```

Updates inside the transition are interruptible and may be restarted when newer
urgent input arrives. Keep the controlled input's immediate state outside it.

## Boundaries

- Transitions do not make slow computation faster; they change scheduling priority.
- A transition cannot control a text input's urgent value.
- State updates after an `await` may require another transition boundary.
- Provide pending feedback without hiding already useful content.

## Verification

Profile under CPU throttling. Input should respond immediately, stale background work
should be interruptible, and pending UI should match the actual transition.

## Official References

- [React useTransition](https://react.dev/reference/react/useTransition)
