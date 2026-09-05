# Scan Once for Minimum and Maximum

| Property | Detail |
| --- | --- |
| Decision | `compute-scan-for-extrema` |
| Outcome | Find extrema in linear time without copying or reordering input. |
| Signals | Sorting an entire collection only to read its first or last item. |
| Tags | `compute-hot-path`, `algorithm`, `min-max`, `array` |

## Prefer

```ts
function stockRange(items: Stock[]) {
  if (items.length === 0) return null
  let lowest = items[0]
  let highest = items[0]

  for (let index = 1; index < items.length; index++) {
    if (items[index].quantity < lowest.quantity) lowest = items[index]
    if (items[index].quantity > highest.quantity) highest = items[index]
  }
  return { lowest, highest }
}
```

Sorting is `O(n log n)` and changes or copies the entire collection; one scan is `O(n)`.

## Boundaries

- Define empty input, ties, `NaN`, and comparison semantics.
- `Math.min(...largeArray)` may exceed argument limits; use a loop for large data.
- Sort when the complete order is actually required.

## Verification

Test empty, single, tied, negative, and large inputs. Confirm input order and identity
remain unchanged.

## Official References

- [MDN Math.max](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max)
