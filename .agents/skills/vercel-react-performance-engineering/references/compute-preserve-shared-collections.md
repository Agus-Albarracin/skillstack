# Preserve Shared Collections During Reordering

| Property | Detail |
| --- | --- |
| Decision | `compute-preserve-shared-collections` |
| Outcome | Prevent mutation bugs in React props, state, caches, and shared callers. |
| Signals | `.sort`, `.reverse`, or `.splice` applied to borrowed arrays. |
| Tags | `compute-hot-path`, `immutability`, `array`, `react-state` |

## Avoid

```tsx
const sorted = useMemo(() => products.sort(byPrice), [products])
```

`sort` mutates the prop array.

## Prefer

```tsx
const sorted = useMemo(() => products.toSorted(byPrice), [products])
```

Use `toReversed`, `toSpliced`, and `with` for equivalent immutable operations where
the runtime supports them; otherwise copy before using the mutating method.

## Boundaries

- Inspect the supported browser and Node targets before using modern methods.
- A new array changes identity, so memoize only when downstream work justifies it.
- Define comparator stability and avoid mutating nested objects.

## Verification

Freeze the input in tests, compare sorted output, and run compatibility checks against
the target runtime. The original array must retain order and identity.

## Official References

- [MDN Array toSorted](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted)
