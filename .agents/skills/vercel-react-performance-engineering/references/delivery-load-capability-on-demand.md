# Load Optional Capabilities on Demand

| Property | Detail |
| --- | --- |
| Decision | `delivery-load-capability-on-demand` |
| Outcome | Exclude disabled or unreachable capabilities from ordinary execution. |
| Signals | Feature flags, export formats, admin tools, optional parsers. |
| Tags | `delivery-budget`, `conditional-import`, `feature-gate`, `capability` |

## Decision

Place the dynamic import inside the condition or handler that activates a capability.
An imported module is part of the graph even when later code decides not to use it.

## Avoid

```ts
import { generateWorkbook } from './workbook'

export async function download(format: string, rows: Row[]) {
  if (format === 'csv') return toCsv(rows)
  return generateWorkbook(rows)
}
```

## Prefer

```ts
export async function download(format: string, rows: Row[]) {
  if (format === 'csv') return toCsv(rows)
  if (format === 'xlsx') {
    const { generateWorkbook } = await import('./workbook')
    return generateWorkbook(rows)
  }
  throw new Error('Unsupported export format')
}
```

## Boundaries

- Keep the import specifier static so bundlers create a predictable chunk.
- Validate capability access before downloading privileged code or data.
- Avoid many tiny chunks whose request overhead exceeds their byte savings.

## Verification

Inspect the initial graph and activate every capability in a production build.
Disabled paths must not fetch their module; enabled paths must handle loading errors.

## Official References

- [JavaScript import()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import)
