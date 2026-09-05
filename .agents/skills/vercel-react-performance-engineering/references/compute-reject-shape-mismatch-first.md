# Reject Cheap Shape Mismatches First

| Property | Detail |
| --- | --- |
| Decision | `compute-reject-shape-mismatch-first` |
| Outcome | Avoid sorting, serialization, or deep comparison when shape already differs. |
| Signals | Array equality or reconciliation with expensive comparison. |
| Tags | `compute-hot-path`, `early-check`, `comparison`, `array` |

## Prefer

```ts
function sameSkus(left: string[], right: string[]) {
  if (left.length !== right.length) return false

  const a = left.toSorted()
  const b = right.toSorted()
  for (let index = 0; index < a.length; index++) {
    if (a[index] !== b[index]) return false
  }
  return true
}
```

A constant-time length check removes two sorts and any temporary serialization in
the common mismatch path. Later comparisons should also exit at the first difference.

## Boundaries

- Equal lengths do not prove equality.
- Preserve duplicates when set equality is not the intended contract.
- Use immutable sorting so comparison does not mutate caller-owned arrays.

## Verification

Benchmark unequal-length, early-difference, late-difference, duplicate, and equal
inputs. Confirm originals remain unchanged.

## Official References

- [MDN Array length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length)
