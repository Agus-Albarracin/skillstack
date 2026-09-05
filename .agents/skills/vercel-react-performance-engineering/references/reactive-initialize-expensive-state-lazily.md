# Initialize Expensive State Lazily

| Property | Detail |
| --- | --- |
| Decision | `reactive-initialize-expensive-state-lazily` |
| Outcome | Run initial computation once per mount instead of every render. |
| Signals | Parsing storage, building indexes, expensive constructors in `useState`. |
| Tags | `reactive-work`, `use-state`, `initializer`, `computation` |

## Avoid

```tsx
const [index] = useState(buildSearchIndex(products))
```

The expression is evaluated on every render even though React uses it only initially.

## Prefer

```tsx
const [index] = useState(() => buildSearchIndex(products))
```

## Boundaries

- The initializer must be pure; React may call it twice in development Strict Mode.
- If the value must change when a prop changes, model that relationship explicitly.
- Direct literals and cheap primitives do not need the function form.
- Browser storage access requires a client-safe hydration strategy.

## Verification

Instrument the initializer through multiple renders and a remount. It should run once
per mount in production, with development behavior understood.

## Official References

- [React avoiding recreating initial state](https://react.dev/reference/react/useState#avoiding-recreating-the-initial-state)
