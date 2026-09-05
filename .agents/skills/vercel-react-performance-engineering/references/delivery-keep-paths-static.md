# Keep Import and Asset Paths Statically Analyzable

| Property | Detail |
| --- | --- |
| Decision | `delivery-keep-paths-static` |
| Outcome | Let bundlers and deployment tracers include only known dependencies. |
| Signals | Computed import paths, dynamic filesystem joins, oversized traces. |
| Tags | `delivery-budget`, `static-analysis`, `imports`, `deployment-trace` |

## Decision

Express the finite dependency set in syntax the compiler can analyze. A path
assembled from arbitrary runtime strings may cause a broad context bundle, omit a
required deployment file, or prevent a build from proving what is reachable.

## Avoid

```ts
const formatter = await import(`./formatters/${locale}.ts`)
const template = await readFile(join(process.cwd(), folder, `${name}.html`))
```

## Prefer

```ts
const formatters = {
  en: () => import('./formatters/en'),
  es: () => import('./formatters/es'),
} as const

const templates = {
  receipt: new URL('./templates/receipt.html', import.meta.url),
  refund: new URL('./templates/refund.html', import.meta.url),
} as const
```

Validate the incoming key before selecting from either map.

## Boundaries

- A truly open plugin system needs an explicit runtime discovery and packaging design.
- Keep allowlists close to the capability they constrain.
- Test every supported key in the production artifact, not only in development.

## Verification

Inspect build output and deployment traces. Only declared modules and assets should
be present, and each declared option must resolve after deployment.

## Official References

- [Next.js output file tracing](https://nextjs.org/docs/app/api-reference/config/next-config-js/output)
