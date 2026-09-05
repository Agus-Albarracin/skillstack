# Animate a Composited Wrapper Around SVG

| Property | Detail |
| --- | --- |
| Decision | `visual-animate-composited-wrapper` |
| Outcome | Give browsers a predictable HTML layer for transform and opacity animation. |
| Signals | Complex SVG animation stutters or repaints excessively. |
| Tags | `visual-pipeline`, `svg`, `animation`, `compositing` |

## Avoid

```tsx
<svg className="spin" viewBox="0 0 24 24">...</svg>
```

## Prefer

```tsx
<span className="spin" aria-hidden="true">
  <svg viewBox="0 0 24 24">...</svg>
</span>
```

Animate `transform` or `opacity` on the wrapper and keep semantic labeling on the
appropriate element. This is a measured fallback, not a claim that every browser
fails to composite every SVG animation.

## Boundaries

- Do not add wrappers that break layout, semantics, or pointer behavior.
- Respect `prefers-reduced-motion`.
- Profile paint and composite layers before changing a smooth animation.

## Verification

Inspect the performance timeline and layer activity on target browsers. Frame time
and paint work should improve without visual or accessibility regressions.

## Official References

- [MDN CSS animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations/Using_CSS_animations)
