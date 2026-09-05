# Delay Optional Third-Party SDKs

| Property | Detail |
| --- | --- |
| Decision | `delivery-delay-optional-sdks` |
| Outcome | Keep analytics and support tooling off the primary readiness path. |
| Signals | Analytics, chat, experiments, replay, advertising. |
| Tags | `delivery-budget`, `third-party`, `scripts`, `hydration` |

## Decision

Load non-critical third-party code after the primary interface becomes usable.
Separate legal or product requirements from convenience: consent management and
fraud protection may need earlier execution than analytics dashboards.

## Avoid

```tsx
import { ReplayClient } from '@vendor/replay'

export default function RootLayout({ children }: Props) {
  ReplayClient.start()
  return children
}
```

## Prefer

```tsx
import Script from 'next/script'

export function OptionalTelemetry() {
  return (
    <Script
      src="https://telemetry.example/client.js"
      strategy="lazyOnload"
    />
  )
}
```

For module SDKs, import them after consent or during idle time and buffer only the
minimal events the product must retain.

## Boundaries

- Validate Content Security Policy and privacy requirements.
- Never postpone security controls merely to improve a metric.
- Protect the app from third-party failure, timeouts, and global side effects.

## Verification

Block the third-party origin and confirm the primary UI still loads. Compare main-
thread work, requests, and hydration timing with and without the integration.

## Official References

- [Next.js Script component](https://nextjs.org/docs/app/api-reference/components/script)
