# Suppress Only Expected Hydration Mismatches

| Property | Detail |
| --- | --- |
| Decision | `visual-suppress-only-expected-mismatches` |
| Outcome | Silence a known one-level difference without hiding structural bugs. |
| Signals | Time, locale, or unavoidable server/client text divergence. |
| Tags | `visual-pipeline`, `hydration`, `warning`, `ssr` |

## Prefer

```tsx
<time dateTime={iso} suppressHydrationWarning>
  {new Date(iso).toLocaleString()}
</time>
```

Use the escape hatch only when the difference is intentional, contained, and cannot
be made deterministic. React does not attempt to patch mismatched text when the
attribute is used, and suppression works only one level deep.

## Boundaries

- Do not place suppression on a broad application wrapper.
- Fix invalid HTML, browser-only branches, and unstable IDs instead.
- Prefer server-provided locale/timezone or client-only rendering when appropriate.

## Verification

Remove suppression temporarily and confirm the mismatch is exactly the documented
value. Keep tests for the surrounding markup so new mismatches remain visible.

## Official References

- [React hydrateRoot suppressing unavoidable mismatch errors](https://react.dev/reference/react-dom/client/hydrateRoot#suppressing-unavoidable-hydration-mismatch-errors)
