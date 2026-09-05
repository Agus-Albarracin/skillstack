# Own Runtime-Wide Initialization Explicitly

| Property | Detail |
| --- | --- |
| Decision | `lifecycle-own-runtime-initialization` |
| Outcome | Initialize a process or browser capability once without tying it to component mounts. |
| Signals | SDK startup in a mount Effect, duplicate initialization in Strict Mode. |
| Tags | `lifecycle`, `initialization`, `idempotency`, `strict-mode` |

## Decision

If a capability truly belongs to the application runtime, give it an explicit
idempotent initializer or initialize it at the application entrypoint. Component
mounts are not a reliable proxy for application lifetime.

## Prefer

```ts
let telemetry: Telemetry | undefined

export function getTelemetry() {
  telemetry ??= createTelemetry()
  return telemetry
}
```

For SSR, confirm whether “once” means once per request, process, deployment instance,
browser tab, or user session. Those are different ownership boundaries.

## Boundaries

- Do not put request or tenant data in a process-wide singleton.
- Initialization must be safe under hot reload, multiple React roots, and retries.
- Provide teardown for tests and runtimes that require it.

## Verification

Exercise development Strict Mode, production, hot reload, multiple roots, SSR
concurrency, and test isolation. Count initialization and cleanup calls.

## Official References

- [React synchronizing with Effects](https://react.dev/learn/synchronizing-with-effects)
