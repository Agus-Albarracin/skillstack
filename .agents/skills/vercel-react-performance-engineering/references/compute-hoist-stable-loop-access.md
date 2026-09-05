# Hoist Stable Access Out of Hot Loops

| Property | Detail |
| --- | --- |
| Decision | `compute-hoist-stable-loop-access` |
| Outcome | Avoid repeated property traversal in a proven hot loop. |
| Signals | Deep invariant property or collection length read for every iteration. |
| Tags | `compute-hot-path`, `loop`, `property-access`, `profiling` |

## Avoid

```ts
for (let index = 0; index < lines.length; index++) {
  charge(lines[index], policy.pricing.tax.defaultRate)
}
```

## Prefer

```ts
const rate = policy.pricing.tax.defaultRate
const count = lines.length
for (let index = 0; index < count; index++) {
  charge(lines[index], rate)
}
```

## Boundaries

- Hoist only values that cannot change during the loop.
- Modern engines optimize many property reads; require a measured path.
- Do not trade obvious code for negligible improvement.

## Verification

Use a representative benchmark and verify identical output when getters, proxies, or
mutation could affect semantics.

## Official References

- [MDN for statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
