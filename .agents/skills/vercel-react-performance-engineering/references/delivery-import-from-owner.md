# Import Symbols From Their Owning Module

| Property | Detail |
| --- | --- |
| Decision | `delivery-import-from-owner` |
| Outcome | Avoid parsing and bundling unrelated exports from broad entrypoints. |
| Signals | Barrel files, icon libraries, utility suites, slow development imports. |
| Tags | `delivery-budget`, `imports`, `tree-shaking`, `bundle` |

## Decision

Import a symbol from the narrow module that owns it when the package's public
exports permit that path and the toolchain cannot reliably eliminate the barrel.
Large barrels can force module discovery, transformation, or runtime evaluation
for exports the route never uses.

## Avoid

```tsx
import { Chart, DatePicker, RichEditor } from '@acme/ui'
```

when the page renders only `DatePicker` and the barrel eagerly touches every module.

## Prefer

```tsx
import { DatePicker } from '@acme/ui/date-picker'
```

Alternatively, use a framework-supported import optimizer when it preserves the
package's supported public API.

## Boundaries

- Do not deep-import private internals that a package may change without notice.
- Confirm that direct paths preserve CSS and side-effect registration.
- Modern tree shaking may already solve the production bundle; measure build and dev costs too.

## Verification

Compare the route chunk, transformed module count, and development startup before
and after. Confirm the package supports the selected export path.

## Official References

- [Next.js optimizePackageImports](https://nextjs.org/docs/app/api-reference/config/next-config-js/optimizePackageImports)
