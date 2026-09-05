# Hoist Default Non-Primitive Identities

| Property | Detail |
| --- | --- |
| Decision | `reactive-hoist-default-identities` |
| Outcome | Keep optional default props stable across parent renders. |
| Signals | Inline default arrays, objects, or functions in memoized components. |
| Tags | `reactive-work`, `identity`, `default-prop`, `memo` |

## Decision

JavaScript creates a new array, object, or function every time a default expression
runs. Hoist immutable defaults to module scope so shallow prop comparison can reuse
the same identity.

## Avoid

```tsx
const Filters = memo(function Filters({ rules = [], onReset = () => {} }: Props) {
  return <Editor rules={rules} onReset={onReset} />
})
```

## Prefer

```tsx
const EMPTY_RULES: readonly Rule[] = []
const NOOP = () => {}

const Filters = memo(function Filters({
  rules = EMPTY_RULES,
  onReset = NOOP,
}: Props) {
  return <Editor rules={rules} onReset={onReset} />
})
```

## Boundaries

- Never mutate a shared default.
- Do not hoist a value that legitimately depends on props or request state.
- Apply only where identity affects behavior or measured rendering.

## Verification

Record prop identities and renders while omitting the optional props. The memoized
component should skip unchanged work and shared defaults must remain immutable.

## Official References

- [React memo](https://react.dev/reference/react/memo)
