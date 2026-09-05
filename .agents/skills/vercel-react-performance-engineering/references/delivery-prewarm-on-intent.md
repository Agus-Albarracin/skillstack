# Prewarm Expensive Destinations on Credible Intent

| Property | Detail |
| --- | --- |
| Decision | `delivery-prewarm-on-intent` |
| Outcome | Hide future loading latency without competing with the current page. |
| Signals | Focus, pointer hover, viewport proximity, likely next step. |
| Tags | `delivery-budget`, `preload`, `prefetch`, `user-intent` |

## Decision

Begin loading an expensive route or capability after a strong signal that the user
will need it. Intent prewarming is speculation with a budget: use it where the
probability and saved latency justify bytes, CPU, battery, and server traffic.

## Prefer

```tsx
const warmStudio = () => {
  void import('./forecast-studio')
}

<button
  onFocus={warmStudio}
  onPointerEnter={warmStudio}
  onClick={() => setOpen(true)}
>
  Open forecast studio
</button>
```

For navigation, prefer Next.js `<Link>` prefetch behavior or `router.prefetch`
instead of rebuilding route prefetching manually.

## Boundaries

- Respect reduced-data preferences and constrained connections where practical.
- Do not prewarm every visible option or duplicate framework prefetching.
- Ensure repeated signals reuse the same module or route promise.
- Never treat prefetch completion as authorization for the eventual action.

## Verification

Measure first-use latency and speculative transfer volume. The warmed interaction
should improve while unused preloads remain within an explicit budget.

## Official References

- [Next.js prefetching](https://nextjs.org/docs/app/guides/prefetching)
