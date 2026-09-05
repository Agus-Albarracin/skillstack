---
name: react-performance-engineering
description: Build, review, and optimize React and Next.js applications across async flow, bundle delivery, server work, client data, render frequency, hydration, JavaScript hot paths, and advanced React patterns. Use for performance implementation, profiling, audits, and regression prevention.
---

# React Performance Engineering

Performance work starts with evidence, protects correctness, and ends with a measurable result. Optimize the bottleneck the product actually has.

## When to Apply

- Building or reviewing React components and Next.js routes with performance-sensitive behavior.
- Investigating slow navigation, large bundles, request waterfalls, excessive renders, hydration cost, or long tasks.
- Establishing performance constraints before a feature reaches production.

## Operating Contract

- MUST inspect installed React and framework versions before selecting an API.
- MUST preserve correctness, authorization, cache consistency, and accessibility while optimizing.
- MUST prioritize network waterfalls and shipped JavaScript before micro-optimizations.
- MUST measure or provide observable evidence for a claimed improvement.
- MUST keep Server Components as the default in Next.js and move only required interactivity into client boundaries.
- SHOULD remove work before memoizing it and narrow subscriptions before adding caches.

## Reference Categories by Priority

| Reference | Priority | Use when |
| --- | --- | --- |
| [`async-flow`](references/async-flow.md) | `CRITICAL` | Eliminating sequential waits and streaming independent work. |
| [`bundle-delivery`](references/bundle-delivery.md) | `CRITICAL` | Reducing initial JavaScript and loading code by intent. |
| [`server-runtime`](references/server-runtime.md) | `HIGH` | Optimizing server rendering, serialization, caching, and request work. |
| [`client-data`](references/client-data.md) | `HIGH` | Coordinating browser requests, listeners, and persisted state. |
| [`render-frequency`](references/render-frequency.md) | `MEDIUM` | Reducing avoidable renders and repeated computation. |
| [`paint-hydration`](references/paint-hydration.md) | `MEDIUM` | Improving rendering, hydration, scripts, SVG, and long-list behavior. |
| [`javascript-hot-paths`](references/javascript-hot-paths.md) | `LOW` | Improving measured CPU-heavy JavaScript paths. |
| [`advanced-react`](references/advanced-react.md) | `LOW` | Applying stable-event and one-time initialization patterns. |
| [`official-docs`](references/official-docs.md) | `LOW` | Confirming version-sensitive APIs against primary documentation. |

## Quick Reference

| Order | Category | Decision |
| --- | --- | --- |
| 1 | Async flow | Start independent work together and await at the latest safe point. |
| 2 | Bundle delivery | Ship only the code needed for the current route and interaction. |
| 3 | Server runtime | Minimize repeated work, shared mutable state, and serialized payloads. |
| 4 | Client data | Deduplicate resources and version browser persistence. |
| 5 | Render frequency | Subscribe narrowly and derive values without effect loops. |
| 6 | Paint and hydration | Keep rendering stable, streamable, and friendly to the main thread. |
| 7 | JavaScript hot paths | Optimize data structures and loops only where measurement justifies it. |
| 8 | Advanced React | Use escape hatches intentionally and document their lifecycle. |

## Workflow

1. Reproduce the performance problem and establish a baseline.
2. Identify the highest-priority category that explains the bottleneck.
3. Read its reference and select the smallest applicable decision.
4. Implement without weakening correctness or product behavior.
5. Re-run the same measurement and report the before/after evidence.

## Verification

- Production build and repository checks pass.
- Bundle, request, render, or field/lab evidence matches the original bottleneck.
- No optimization introduces stale data, unauthorized access, hydration mismatch, or inaccessible UI.
- Unavailable measurements and remaining uncertainty are reported plainly.
