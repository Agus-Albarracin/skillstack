# Split Heavy Interaction Boundaries

| Property | Detail |
| --- | --- |
| Decision | `delivery-split-heavy-interactions` |
| Outcome | Keep rarely used client features out of the initial route budget. |
| Signals | Editors, charts, maps, previews, large dialogs. |
| Tags | `delivery-budget`, `dynamic-import`, `code-splitting`, `interaction` |

## Decision

Lazy-load a heavy Client Component or library when the user reaches the interaction
that needs it. The boundary should follow capability ownership, not arbitrary file
size, and it must include accessible loading and failure behavior.

## Avoid

```tsx
import ForecastStudio from './forecast-studio'

export function ForecastButton() {
  return <ForecastStudio initiallyOpen={false} />
}
```

## Prefer

```tsx
import dynamic from 'next/dynamic'

const ForecastStudio = dynamic(() => import('./forecast-studio'), {
  loading: () => <p role="status">Loading forecast tools...</p>,
})

export function ForecastButton({ open }: { open: boolean }) {
  return open ? <ForecastStudio /> : null
}
```

## Boundaries

- Do not delay above-the-fold content that is always needed.
- `ssr: false` is valid only for Client Components and browser-only behavior.
- Preserve focus, keyboard operation, retry, and error feedback at the boundary.
- Account for interaction delay: smaller initial bundles can make first use slower.

## Verification

Compare initial route chunks and the first-open interaction under network throttling.
Confirm the feature module is absent before use and cached after successful loading.

## Official References

- [Next.js lazy loading](https://nextjs.org/docs/app/guides/lazy-loading)
