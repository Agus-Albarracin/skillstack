# Stop Work When the Result Is Known

| Property | Detail |
| --- | --- |
| Decision | `compute-stop-when-result-known` |
| Outcome | Skip remaining computation after a settled result. |
| Signals | Validation, search, permission checks, scans with a decisive match. |
| Tags | `compute-hot-path`, `early-return`, `control-flow`, `validation` |

## Avoid

```ts
let invalid = false
for (const line of lines) {
  if (line.quantity <= 0) invalid = true
  calculateTax(line)
}
return !invalid
```

## Prefer

```ts
for (const line of lines) {
  if (line.quantity <= 0) return false
  calculateTax(line)
}
return true
```

## Boundaries

- Do not exit before required cleanup, auditing, or collection of all validation errors.
- Prefer `some`, `every`, or `find` when they express short-circuit intent clearly.
- Preserve side-effect ordering if later iterations are semantically required.

## Verification

Instrument iterations for early, middle, late, and no-match cases. Confirm required
side effects and error reporting remain unchanged.

## Official References

- [MDN return](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return)
