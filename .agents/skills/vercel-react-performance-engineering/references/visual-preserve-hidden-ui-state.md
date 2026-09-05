# Preserve Hidden UI State Intentionally

| Property | Detail |
| --- | --- |
| Decision | `visual-preserve-hidden-ui-state` |
| Outcome | Keep expensive hidden UI ready without losing its local state. |
| Signals | Frequently toggled panels whose remount cost or state loss is harmful. |
| Tags | `visual-pipeline`, `activity`, `visibility`, `state-preservation` |

## Prefer

```tsx
import { Activity } from 'react'

<Activity mode={open ? 'visible' : 'hidden'}>
  <InventoryFilters />
</Activity>
```

An Activity boundary hides the subtree while preserving state for later restoration.
Use normal conditional rendering when unmounting and resetting state is desirable.

## Boundaries

- Verify the installed React version supports `Activity`.
- Hidden trees still consume memory and may perform deferred work.
- Define accessibility and focus behavior when visibility changes.
- Do not preserve sensitive state longer than product policy allows.

## Verification

Toggle repeatedly and confirm state preservation, focus transfer, hidden accessibility,
memory, Effect lifecycle, and reopen latency.

## Official References

- [React Activity](https://react.dev/reference/react/Activity)
