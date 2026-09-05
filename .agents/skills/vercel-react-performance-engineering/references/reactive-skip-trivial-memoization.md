# Keep Trivial Primitive Calculations Direct

| Property | Detail |
| --- | --- |
| Decision | `reactive-skip-trivial-memoization` |
| Outcome | Avoid dependency comparison and cache bookkeeping that cost more than the expression. |
| Signals | Boolean, number, or string expression with a few operators. |
| Tags | `reactive-work`, `use-memo`, `overhead`, `compiler` |

## Avoid

```tsx
const disabled = useMemo(
  () => pending || quantity === 0,
  [pending, quantity]
)
```

## Prefer

```tsx
const disabled = pending || quantity === 0
```

Memoization is useful for expensive pure computation or stable identity required by
another optimized boundary. It is not a semantic guarantee, and React Compiler may
perform suitable memoization automatically.

## Boundaries

- Measure calculations over large collections before removing a useful memo.
- Preserve memoization when object identity intentionally controls downstream work.
- Do not add hooks merely for aesthetic consistency.

## Verification

Profile the component rather than counting hook calls. The direct expression should
be clearer and no slower in the real render path.

## Official References

- [React useMemo](https://react.dev/reference/react/useMemo)
