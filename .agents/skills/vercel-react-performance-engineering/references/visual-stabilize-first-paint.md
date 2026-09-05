# Stabilize Browser-Only Preferences Before Hydration

| Property | Detail |
| --- | --- |
| Decision | `visual-stabilize-first-paint` |
| Outcome | Avoid both server crashes and a visible post-hydration preference flash. |
| Signals | Theme, density, locale, or another preference exists only in browser storage. |
| Tags | `visual-pipeline`, `hydration`, `first-paint`, `storage` |

## Decision

Prefer a server-readable cookie when the preference affects initial HTML. When the
source must remain browser-only, run a minimal audited script before paint that
updates a stable attribute to the same value the client will use.

## Prefer

```tsx
<html suppressHydrationWarning>
  <head>
    <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
  </head>
  <body>{children}</body>
</html>
```

The script should read a fixed key, validate an allowlisted value, and set a class or
`data-theme`; never interpolate untrusted content.

## Boundaries

- Inline scripts must comply with Content Security Policy through a nonce or hash.
- Keep server and client defaults identical.
- Suppression belongs only on the intentionally divergent node.
- Prefer framework-supported theme patterns over ad hoc DOM rewrites.

## Verification

Test first visit, saved preferences, disabled storage, strict CSP, slow hydration, and
JavaScript disabled. Inspect the filmstrip and hydration console.

## Official References

- [React hydrateRoot mismatch guidance](https://react.dev/reference/react-dom/client/hydrateRoot#handling-different-client-and-server-content)
