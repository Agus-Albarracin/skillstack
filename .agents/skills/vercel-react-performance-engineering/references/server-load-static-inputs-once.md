# Load Process-Stable Inputs Once

| Property | Detail |
| --- | --- |
| Decision | `server-load-static-inputs-once` |
| Outcome | Remove repeated file or network I/O from request execution. |
| Signals | Fonts, logos, templates, immutable configuration, OG image assets. |
| Tags | `server-execution`, `static-io`, `module-scope`, `warm-instance` |

## Decision

Create the read or fetch promise at module initialization when the input is identical
for every request and safe to retain. Await that promise inside the handler. Warm
invocations reuse it; cold starts pay the cost once rather than once per request.

## Avoid

```ts
export async function GET() {
  const font = await readFile('./assets/report.woff2')
  return renderReport({ font })
}
```

## Prefer

```ts
const fontPromise = readFile(new URL('./assets/report.woff2', import.meta.url))

export async function GET() {
  return renderReport({ font: await fontPromise })
}
```

## Boundaries

- Do not retain request-, user-, or tenant-specific values in module scope.
- Use a freshness policy for files or configuration that can change at runtime.
- Consider resident memory before retaining large assets.
- Ensure the bundler or deployment trace includes the statically referenced file.

## Verification

Instrument the I/O across multiple requests and a cold start. Warm requests should
perform no new read, and deployment must still contain the asset.

## Official References

- [Next.js output file tracing](https://nextjs.org/docs/app/api-reference/config/next-config-js/output)
