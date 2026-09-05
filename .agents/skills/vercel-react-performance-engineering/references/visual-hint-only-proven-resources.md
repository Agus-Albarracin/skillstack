# Hint Only Proven Critical Resources

| Property | Detail |
| --- | --- |
| Decision | `visual-hint-only-proven-resources` |
| Outcome | Start critical connections or downloads early without starving higher-value work. |
| Signals | Late fonts, images, styles, modules, or third-party connections. |
| Tags | `visual-pipeline`, `preload`, `preconnect`, `network-priority` |

## Decision

Choose the narrowest hint supported by evidence: DNS prefetch for name resolution,
preconnect for an imminent cross-origin connection, preload for a known current-page
resource, and module preloading for an expected module. Frameworks may already emit
hints, so inspect the final document and network graph first.

## Prefer

```tsx
import { preconnect, preload } from 'react-dom'

preconnect('https://assets.example.com')
preload('https://assets.example.com/report.woff2', {
  as: 'font',
  crossOrigin: 'anonymous',
})
```

## Boundaries

- Incorrect `as`, credentials mode, or URL can cause a duplicate download.
- Too many high-priority hints compete with the actual critical path.
- Same-origin preconnect usually adds no value.

## Verification

Compare waterfall start times, reuse, priority, and LCP. Confirm there are no duplicate
transfers and remove hints that do not improve the target metric.

## Official References

- [React DOM resource preloading APIs](https://react.dev/reference/react-dom#resource-preloading-apis)
