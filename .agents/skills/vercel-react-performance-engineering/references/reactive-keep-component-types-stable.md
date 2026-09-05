# Keep Component Types Stable

| Property | Detail |
| --- | --- |
| Decision | `reactive-keep-component-types-stable` |
| Outcome | Prevent remounts, state loss, repeated Effects, and DOM replacement. |
| Signals | A component function is declared inside another component. |
| Tags | `reactive-work`, `component-identity`, `remount`, `state` |

## Avoid

```tsx
function ProductPage({ product, theme }: Props) {
  function Price() {
    return <strong className={theme}>{product.price}</strong>
  }
  return <Price />
}
```

Every parent render creates a different component type.

## Prefer

```tsx
function Price({ value, theme }: { value: number; theme: string }) {
  return <strong className={theme}>{value}</strong>
}

function ProductPage({ product, theme }: Props) {
  return <Price value={product.price} theme={theme} />
}
```

## Boundaries

- Render callbacks expected by a library are not automatically component declarations.
- Pass required values as props instead of capturing parent scope.
- Watch for focus loss, animation restart, and Effect churn as diagnostic symptoms.

## Verification

Trigger a parent render while interacting with the child. Child state, focus, DOM
identity, and subscriptions should survive.

## Official References

- [React preserving and resetting state](https://react.dev/learn/preserving-and-resetting-state)
