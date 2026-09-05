---
name: vercel-react-performance-engineering
description: Build, audit, and optimize React and Next.js applications with Skillstack's evidence-driven performance system. Use for request latency, bundle delivery, server execution, browser resources, reactive work, rendering, JavaScript hot paths, or lifecycle-sensitive integrations.
---

# Vercel React Performance Engineering

Treat performance as a product constraint: protect correctness first, remove the
largest source of delay, and prove the result with evidence from the same path
that exposed the problem.

## When to Apply

- Building or reviewing performance-sensitive React components and Next.js routes.
- Investigating slow navigation, request waterfalls, large bundles, repeated server work, excessive renders, hydration instability, or long main-thread tasks.
- Establishing budgets and regression checks before a feature reaches production.
- Choosing between concurrency, caching, code splitting, memoization, scheduling, and lower-level JavaScript optimization.

## Operating Contract

- MUST inspect the installed React, Next.js, runtime, and browser support before selecting a version-sensitive API.
- MUST preserve correctness, authorization, tenant isolation, cache consistency, accessibility, and user-visible behavior.
- MUST establish a baseline before changing code and compare the same scenario afterward.
- MUST address latency graphs and delivery budgets before local micro-optimizations unless evidence points elsewhere.
- MUST keep server execution as the default in Next.js and create client boundaries only for required interactivity.
- MUST define ownership, lifetime, capacity, freshness, and invalidation before introducing a cache.
- MUST report unavailable measurements and remaining uncertainty instead of claiming an unverified improvement.
- SHOULD remove work before scheduling it, narrow subscriptions before memoizing them, and prefer platform or framework primitives over custom machinery.

## Reference Categories by Priority

`priority` measures the expected impact of ignoring a decision. `dependsOn`
defines reading order and never derives from priority.

| Order | Category | Priority | dependsOn | Use when |
| --- | --- | --- | --- | --- |
| 1 | Response Latency Graph | `CRITICAL` | - | Async work is serialized, delayed, or blocking useful output. |
| 2 | Delivery Budget | `CRITICAL` | `Response Latency Graph` | Initial JavaScript, imports, or optional dependencies delay readiness. |
| 3 | Server Execution | `HIGH` | `Response Latency Graph` | Server work, caching, serialization, or request isolation dominates. |
| 4 | Browser Resource Ownership | `HIGH` | `Delivery Budget` | Browser requests, listeners, or persisted data lack shared ownership. |
| 5 | Reactive Work Control | `MEDIUM` | `Browser Resource Ownership` | Components render, compute, subscribe, or synchronize too often. |
| 6 | Visual Pipeline | `MEDIUM` | `Delivery Budget`, `Reactive Work Control` | Paint, hydration, scripts, SVG, or hidden UI affect responsiveness. |
| 7 | Compute Hot Paths | `LOW-MEDIUM` | `Reactive Work Control` | Profiling identifies material CPU, allocation, storage, or DOM cost. |
| 8 | Lifecycle Escape Hatches | `LOW` | `Reactive Work Control` | External subscriptions or runtime-wide initialization need stable identity. |

## Quick Reference

### 1. Response Latency Graph

- [`latency-check-before-io`](references/latency-check-before-io.md) - `HIGH`: reject synchronous failures before starting optional asynchronous work.
- [`latency-await-at-consumption`](references/latency-await-at-consumption.md) - `HIGH`: await a value only in the branch that consumes it.
- [`latency-launch-independent-work`](references/latency-launch-independent-work.md) - `CRITICAL`: launch unrelated operations together and join them once.
- [`latency-model-partial-dependencies`](references/latency-model-partial-dependencies.md) - `CRITICAL`: encode real dependencies without serializing sibling work.
- [`latency-start-early-join-late`](references/latency-start-early-join-late.md) - `CRITICAL`: start useful work early in handlers and await it at the last responsible point.
- [`latency-stream-independent-regions`](references/latency-stream-independent-regions.md) - `HIGH`: stream independently useful regions through deliberate Suspense boundaries.

### 2. Delivery Budget

- [`delivery-import-from-owner`](references/delivery-import-from-owner.md) - `CRITICAL`: import the module that owns a symbol instead of paying for broad barrels.
- [`delivery-keep-paths-static`](references/delivery-keep-paths-static.md) - `HIGH`: keep import and asset paths statically analyzable.
- [`delivery-split-heavy-interactions`](references/delivery-split-heavy-interactions.md) - `CRITICAL`: defer heavy client features until their interaction becomes reachable.
- [`delivery-delay-optional-sdks`](references/delivery-delay-optional-sdks.md) - `MEDIUM`: load non-critical third-party code after primary readiness.
- [`delivery-load-capability-on-demand`](references/delivery-load-capability-on-demand.md) - `HIGH`: import optional modules only when the capability is enabled or invoked.
- [`delivery-prewarm-on-intent`](references/delivery-prewarm-on-intent.md) - `MEDIUM`: preload expensive destinations after credible user intent.

### 3. Server Execution

- [`server-protect-every-mutation`](references/server-protect-every-mutation.md) - `CRITICAL`: authenticate, authorize, and validate inside every remotely invokable mutation.
- [`server-dedupe-request-work`](references/server-dedupe-request-work.md) - `MEDIUM`: deduplicate repeated non-fetch work within one render request.
- [`server-bound-shared-memory`](references/server-bound-shared-memory.md) - `HIGH`: bound cross-request memory and define freshness and isolation.
- [`server-preserve-payload-identity`](references/server-preserve-payload-identity.md) - `LOW`: preserve object identity when the same RSC data crosses a boundary twice.
- [`server-load-static-inputs-once`](references/server-load-static-inputs-once.md) - `HIGH`: load process-stable assets outside request execution.
- [`server-isolate-request-state`](references/server-isolate-request-state.md) - `HIGH`: keep user and request data out of mutable module scope.
- [`server-minimize-client-contract`](references/server-minimize-client-contract.md) - `HIGH`: serialize only fields required by the client boundary.
- [`server-compose-sibling-fetches`](references/server-compose-sibling-fetches.md) - `CRITICAL`: compose server components so independent reads begin together.
- [`server-chain-per-item`](references/server-chain-per-item.md) - `CRITICAL`: chain each item's dependent reads inside one shared parallel join.
- [`server-defer-post-response-side-effects`](references/server-defer-post-response-side-effects.md) - `MEDIUM`: schedule non-critical side effects after the response when supported.

### 4. Browser Resource Ownership

- [`browser-share-request-ownership`](references/browser-share-request-ownership.md) - `MEDIUM-HIGH`: give identical client reads one cache key and request owner.
- [`browser-multiplex-global-listeners`](references/browser-multiplex-global-listeners.md) - `LOW`: share one global listener across many subscribers.
- [`browser-mark-noncanceling-input-passive`](references/browser-mark-noncanceling-input-passive.md) - `MEDIUM`: mark scroll and touch listeners passive when they never cancel input.
- [`browser-version-persisted-state`](references/browser-version-persisted-state.md) - `MEDIUM`: store minimal versioned browser data and migrate or discard old shapes.

### 5. Reactive Work Control

- [`reactive-read-at-action-time`](references/reactive-read-at-action-time.md) - `MEDIUM`: avoid render subscriptions for values used only by a later action.
- [`reactive-isolate-expensive-subtrees`](references/reactive-isolate-expensive-subtrees.md) - `MEDIUM`: isolate expensive work behind a stable component boundary.
- [`reactive-hoist-default-identities`](references/reactive-hoist-default-identities.md) - `MEDIUM`: reuse default arrays, objects, and functions across renders.
- [`reactive-depend-on-consumed-values`](references/reactive-depend-on-consumed-values.md) - `LOW`: declare the smallest truthful reactive dependencies.
- [`reactive-subscribe-to-derived-signals`](references/reactive-subscribe-to-derived-signals.md) - `MEDIUM`: subscribe to the derived signal that actually changes output.
- [`reactive-derive-during-render`](references/reactive-derive-during-render.md) - `MEDIUM`: calculate synchronous derived data during render instead of mirroring it through state.
- [`reactive-update-from-previous-state`](references/reactive-update-from-previous-state.md) - `MEDIUM`: use functional updates when next state depends on previous state.
- [`reactive-initialize-expensive-state-lazily`](references/reactive-initialize-expensive-state-lazily.md) - `MEDIUM`: pass expensive initial state as an initializer function.
- [`reactive-skip-trivial-memoization`](references/reactive-skip-trivial-memoization.md) - `LOW-MEDIUM`: keep cheap primitive expressions direct.
- [`reactive-split-independent-synchronization`](references/reactive-split-independent-synchronization.md) - `MEDIUM`: separate hooks that synchronize unrelated processes.
- [`reactive-handle-interactions-at-source`](references/reactive-handle-interactions-at-source.md) - `MEDIUM`: execute interaction-specific effects inside their event handlers.
- [`reactive-mark-nonurgent-updates`](references/reactive-mark-nonurgent-updates.md) - `MEDIUM`: mark interruptible state updates as transitions.
- [`reactive-defer-expensive-views`](references/reactive-defer-expensive-views.md) - `MEDIUM`: let expensive derived views lag behind urgent input.
- [`reactive-store-nonvisual-values-in-refs`](references/reactive-store-nonvisual-values-in-refs.md) - `MEDIUM`: keep frequently changing non-visual values in refs.
- [`reactive-keep-component-types-stable`](references/reactive-keep-component-types-stable.md) - `HIGH`: define component types outside other component bodies.

### 6. Visual Pipeline

- [`visual-animate-composited-wrapper`](references/visual-animate-composited-wrapper.md) - `LOW`: animate an HTML wrapper around complex SVG content.
- [`visual-skip-offscreen-work`](references/visual-skip-offscreen-work.md) - `HIGH`: defer layout and paint for genuinely offscreen content.
- [`visual-reuse-static-elements`](references/visual-reuse-static-elements.md) - `LOW`: reuse immutable JSX rather than rebuilding it during every render.
- [`visual-trim-vector-precision`](references/visual-trim-vector-precision.md) - `LOW`: remove SVG precision that produces no visible difference.
- [`visual-stabilize-first-paint`](references/visual-stabilize-first-paint.md) - `MEDIUM`: align browser-only preferences before hydration without a visible flash.
- [`visual-suppress-only-expected-mismatches`](references/visual-suppress-only-expected-mismatches.md) - `LOW-MEDIUM`: suppress hydration warnings only for intentional contained differences.
- [`visual-preserve-hidden-ui-state`](references/visual-preserve-hidden-ui-state.md) - `MEDIUM`: retain hidden UI state only when product behavior requires it.
- [`visual-render-falsy-values-explicitly`](references/visual-render-falsy-values-explicitly.md) - `LOW`: prevent numeric falsy values from leaking into JSX output.
- [`visual-bind-pending-ui-to-transitions`](references/visual-bind-pending-ui-to-transitions.md) - `LOW`: derive pending feedback from the transition that owns the work.
- [`visual-hint-only-proven-resources`](references/visual-hint-only-proven-resources.md) - `HIGH`: issue resource hints only when the network graph proves they are critical.
- [`visual-schedule-scripts-by-dependency`](references/visual-schedule-scripts-by-dependency.md) - `HIGH`: choose script scheduling from execution order and criticality.

### 7. Compute Hot Paths

- [`compute-separate-layout-reads-writes`](references/compute-separate-layout-reads-writes.md) - `MEDIUM`: separate layout reads from DOM writes.
- [`compute-index-repeated-lookups`](references/compute-index-repeated-lookups.md) - `LOW-MEDIUM`: build an index for repeated keyed searches.
- [`compute-hoist-stable-loop-access`](references/compute-hoist-stable-loop-access.md) - `LOW-MEDIUM`: move stable property access out of measured hot loops.
- [`compute-cache-pure-repeated-work`](references/compute-cache-pure-repeated-work.md) - `MEDIUM`: cache costly pure work with bounded ownership and invalidation.
- [`compute-cache-synchronous-storage`](references/compute-cache-synchronous-storage.md) - `LOW-MEDIUM`: avoid repeated synchronous browser-storage reads in one interaction.
- [`compute-merge-compatible-passes`](references/compute-merge-compatible-passes.md) - `LOW-MEDIUM`: combine collection passes when allocation and traversal are material.
- [`compute-reject-shape-mismatch-first`](references/compute-reject-shape-mismatch-first.md) - `MEDIUM-HIGH`: reject cheap shape mismatches before expensive comparison.
- [`compute-stop-when-result-known`](references/compute-stop-when-result-known.md) - `LOW-MEDIUM`: exit a function as soon as its outcome is settled.
- [`compute-reuse-regular-expressions`](references/compute-reuse-regular-expressions.md) - `LOW-MEDIUM`: reuse stable regular expressions and respect stateful flags.
- [`compute-scan-for-extrema`](references/compute-scan-for-extrema.md) - `LOW`: find extrema with one scan instead of sorting.
- [`compute-use-keyed-membership`](references/compute-use-keyed-membership.md) - `LOW-MEDIUM`: use Set or Map for repeated membership and keyed access.
- [`compute-preserve-shared-collections`](references/compute-preserve-shared-collections.md) - `MEDIUM-HIGH`: use immutable collection operations when inputs are shared.
- [`compute-transform-and-filter-once`](references/compute-transform-and-filter-once.md) - `LOW-MEDIUM`: transform and retain values without an avoidable intermediate array.
- [`compute-schedule-background-work`](references/compute-schedule-background-work.md) - `MEDIUM`: yield optional work so urgent interaction can proceed.

### 8. Lifecycle Escape Hatches

- [`lifecycle-keep-effect-events-nonreactive`](references/lifecycle-keep-effect-events-nonreactive.md) - `LOW`: keep Effect Events outside dependency arrays.
- [`lifecycle-stabilize-external-subscriptions`](references/lifecycle-stabilize-external-subscriptions.md) - `LOW`: subscribe once while calling the latest external handler.
- [`lifecycle-own-runtime-initialization`](references/lifecycle-own-runtime-initialization.md) - `LOW-MEDIUM`: make application-lifetime initialization explicit and idempotent.
- [`lifecycle-read-latest-through-stable-callback`](references/lifecycle-read-latest-through-stable-callback.md) - `LOW`: expose current values through a stable callback only when integration identity requires it.

Read [`official-docs`](references/official-docs.md) before adopting a version-sensitive API or when the target project's framework version differs from the examples.

## Workflow

1. Reproduce the user-visible problem and record a baseline from production mode or an equivalent environment.
2. Draw the relevant request, module, render, or main-thread graph and locate the dominant cost.
3. Resolve category `dependsOn` entries, then read only the individual decisions that match the evidence.
4. Implement the smallest change that removes the cost without weakening the operating contract.
5. Repeat the same measurement, compare the result, and retain a regression guard when practical.

## Verification

- Repository checks and a production build pass for the target application.
- Network, bundle, profiler, server trace, or browser-performance evidence addresses the original bottleneck.
- Critical-path duration, shipped bytes, render count, or long-task time improves without moving equivalent cost elsewhere.
- Authorization, cache freshness, request isolation, hydration, accessibility, and error behavior remain correct.
- Every recommendation names its evidence, compatibility assumptions, and any remaining trade-off.
