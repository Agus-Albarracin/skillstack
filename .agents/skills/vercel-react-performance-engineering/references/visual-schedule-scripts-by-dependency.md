# Schedule Scripts by Dependency and Criticality

| Property | Detail |
| --- | --- |
| Decision | `visual-schedule-scripts-by-dependency` |
| Outcome | Avoid parser blocking while preserving required execution order. |
| Signals | Raw scripts in document head, analytics, legacy DOM dependencies. |
| Tags | `visual-pipeline`, `script`, `defer`, `async` |

## Decision

Use `defer` for scripts that must execute after parsing and in document order. Use
`async` for independent scripts that may execute as soon as downloaded. In Next.js,
prefer `next/script` and choose a strategy from the integration's true timing needs.

## Prefer

```tsx
import Script from 'next/script'

<Script src="/inventory-widget.js" strategy="afterInteractive" />
<Script src="https://metrics.example/sdk.js" strategy="lazyOnload" />
```

## Boundaries

- `beforeInteractive` is exceptional and belongs only to code required before hydration.
- Preserve CSP, integrity, consent, and failure isolation.
- Do not use `async` for scripts with ordering dependencies.
- Module scripts have their own deferred behavior.

## Verification

Inspect HTML parsing, script fetch and execution, hydration, and dependency order under
slow network. Block each script to confirm the core application still behaves as designed.

## Official References

- [Next.js Script](https://nextjs.org/docs/app/api-reference/components/script)
- [MDN script element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script)
