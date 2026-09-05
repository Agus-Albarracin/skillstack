# Reuse Truly Static JSX Elements

| Property | Detail |
| --- | --- |
| Decision | `visual-reuse-static-elements` |
| Outcome | Avoid recreating large immutable element trees during repeated renders. |
| Signals | Large static SVG or skeleton literal inside a hot component. |
| Tags | `visual-pipeline`, `jsx`, `static`, `compiler` |

## Prefer

```tsx
const emptyChart = (
  <svg aria-hidden="true" viewBox="0 0 200 80">...</svg>
)

function ChartFrame({ empty }: { empty: boolean }) {
  return empty ? emptyChart : <LiveChart />
}
```

Hoist only elements whose props, context, and ownership are genuinely static. Modern
compilers may perform this optimization automatically.

## Boundaries

- Do not hoist elements that depend on props, local state, context, or request data.
- Shared element objects should remain immutable.
- Prefer clarity when the tree is small or not on a measured render path.

## Verification

Profile the hot component and confirm less render allocation or work. Behavior must
remain correct across roots, themes, localization, and server requests.

## Official References

- [React Compiler memoization](https://react.dev/learn/react-compiler)
