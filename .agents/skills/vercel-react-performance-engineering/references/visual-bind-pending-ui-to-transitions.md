# Bind Pending Feedback to Its Transition

| Property | Detail |
| --- | --- |
| Decision | `visual-bind-pending-ui-to-transitions` |
| Outcome | Keep loading feedback aligned with interruptible React work. |
| Signals | Manual loading boolean surrounds a transition-driven update. |
| Tags | `visual-pipeline`, `use-transition`, `pending`, `feedback` |

## Prefer

```tsx
const [isPending, startTransition] = useTransition()

function chooseRegion(region: string) {
  startTransition(async () => {
    const report = await loadRegion(region)
    startTransition(() => setReport(report))
  })
}

return isPending ? <Progress /> : <Report data={report} />
```

Use `isPending` for the transition it belongs to instead of maintaining a separate
boolean that can drift on errors, overlap, or interruption.

## Boundaries

- Not every request is a transition; explicit request state may still be needed.
- Avoid replacing useful existing content with a disruptive global spinner.
- Confirm current React semantics for state updates after `await`.

## Verification

Test overlapping selections, failures, and interruption. Pending feedback must start
and stop with the latest transition and the interface must remain operable.

## Official References

- [React useTransition](https://react.dev/reference/react/useTransition)
