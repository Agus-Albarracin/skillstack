# Split Independent Synchronization Processes

| Property | Detail |
| --- | --- |
| Decision | `reactive-split-independent-synchronization` |
| Outcome | Re-run only the computation or Effect whose own inputs changed. |
| Signals | One hook performs unrelated tasks with different dependencies. |
| Tags | `reactive-work`, `effect`, `use-memo`, `separation` |

## Avoid

```tsx
useEffect(() => {
  analytics.page(pathname)
  document.title = title
}, [pathname, title])
```

## Prefer

```tsx
useEffect(() => analytics.page(pathname), [pathname])
useEffect(() => { document.title = title }, [title])
```

The same rule applies to a combined `useMemo`: split stages when their dependency
sets differ and an intermediate result can be reused.

## Boundaries

- Keep one Effect for one synchronization process even if it has several necessary steps.
- Avoid splitting when atomic cleanup or ordering is part of correctness.
- Extract repeated synchronization into a custom Hook instead of duplicating it.

## Verification

Change each dependency independently. Only the corresponding process should run,
and cleanup ordering must remain correct.

## Official References

- [React removing Effect dependencies](https://react.dev/learn/removing-effect-dependencies)
