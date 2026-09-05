# Reuse Stable Regular Expressions

| Property | Detail |
| --- | --- |
| Decision | `compute-reuse-regular-expressions` |
| Outcome | Avoid repeated compilation while preserving stateful matching semantics. |
| Signals | Constant RegExp constructed inside render or a hot loop. |
| Tags | `compute-hot-path`, `regexp`, `state`, `reuse` |

## Prefer

```ts
const SKU_PATTERN = /^[A-Z]{3}-\d{6}$/

function isSku(value: string) {
  return SKU_PATTERN.test(value)
}
```

For a pattern derived from props, memoize it with the complete dependency set and
escape user text before constructing it.

## Stateful Flags

Regular expressions with `g` or `y` mutate `lastIndex`. Reset it before reuse or avoid
sharing that instance across independent calls.

## Boundaries

- Do not hoist a pattern that depends on locale, flags, or user input.
- Protect against catastrophic backtracking for untrusted strings.
- React Compiler may already stabilize a render-local construction.

## Verification

Test consecutive matches, failures, Unicode input, escaped user text, and global or
sticky flags. Benchmark only when construction appears in a measured path.

## Official References

- [MDN RegExp lastIndex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex)
