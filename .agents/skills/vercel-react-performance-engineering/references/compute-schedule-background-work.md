# Yield Optional Background Work

| Property | Detail |
| --- | --- |
| Decision | `compute-schedule-background-work` |
| Outcome | Keep the main thread available for urgent input and paint. |
| Signals | Analytics, persistence, precomputation, or large optional loops. |
| Tags | `compute-hot-path`, `scheduling`, `idle`, `long-task` |

## Prefer

```ts
const scheduleIdle = window.requestIdleCallback
  ? (task: IdleRequestCallback) => requestIdleCallback(task, { timeout: 2000 })
  : (task: IdleRequestCallback) => setTimeout(() => task({
      didTimeout: true,
      timeRemaining: () => 0,
    }), 0)

scheduleIdle(() => persistRecentSearches())
```

Chunk large work and reschedule while items remain. A timeout is appropriate when the
task must eventually run even if the page never becomes idle.

## Boundaries

- `requestIdleCallback` has limited browser availability; provide a tested fallback.
- Never defer immediate feedback, correctness, or required durability.
- Idle work can be lost when a page closes; use lifecycle-appropriate APIs for delivery.
- Keep each chunk below the long-task threshold on target devices.

## Verification

Profile interaction and long tasks under CPU throttling. Confirm background work
eventually completes in busy and unsupported environments.

## Official References

- [MDN requestIdleCallback](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestIdleCallback)
- [web.dev optimize long tasks](https://web.dev/articles/optimize-long-tasks)
