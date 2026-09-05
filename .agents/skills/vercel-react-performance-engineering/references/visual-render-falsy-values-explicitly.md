# Render Numeric Falsy Values Explicitly

| Property | Detail |
| --- | --- |
| Decision | `visual-render-falsy-values-explicitly` |
| Outcome | Prevent `0` or `NaN` from appearing as accidental JSX output. |
| Signals | Logical-AND rendering with a number or unknown value. |
| Tags | `visual-pipeline`, `jsx`, `conditional`, `correctness` |

## Avoid

```tsx
{backorders && <BackorderBadge count={backorders} />}
```

When `backorders` is `0`, React renders the zero.

## Prefer

```tsx
{backorders > 0 ? <BackorderBadge count={backorders} /> : null}
```

Boolean conditions are safe with `&&`; use an explicit comparison or ternary when
the condition's value could itself be rendered.

## Boundaries

- Decide deliberately whether empty strings, zero, and `NaN` are meaningful output.
- Keep conditions readable; extract complex policy into a named boolean.

## Verification

Render zero, positive, negative, missing, and invalid values. Snapshots or DOM tests
must show only the intended branches.

## Official References

- [React conditional rendering](https://react.dev/learn/conditional-rendering)
