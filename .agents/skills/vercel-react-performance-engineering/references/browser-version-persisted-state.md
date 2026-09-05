# Version and Minimize Browser-Persisted State

| Property | Detail |
| --- | --- |
| Decision | `browser-version-persisted-state` |
| Outcome | Prevent old schemas and oversized synchronous payloads from breaking current UI. |
| Signals | localStorage, sessionStorage, persisted client caches. |
| Tags | `browser-resources`, `storage`, `schema`, `migration` |

## Decision

Store the smallest durable representation with an explicit schema version. Parse
defensively, migrate known old versions, and discard corrupt or unsupported data.
Treat browser storage as untrusted, synchronous input rather than application state.

## Prefer

```ts
type StoredPrefs = { version: 2; compact: boolean }

function readPrefs(): StoredPrefs {
  try {
    const value = JSON.parse(localStorage.getItem('prefs') ?? 'null')
    if (value?.version === 2 && typeof value.compact === 'boolean') return value
  } catch {}
  return { version: 2, compact: false }
}
```

## Boundaries

- Never persist secrets or data that authorization must protect.
- Avoid duplicating large server responses; store identifiers or user preferences.
- Coordinate changes from other tabs through the `storage` event when required.
- Batch writes and keep synchronous parsing off measured hot paths.

## Verification

Test empty, corrupt, previous-version, oversized, and cross-tab values. The UI must
recover without crashing and storage size must stay within a documented budget.

## Official References

- [MDN Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)
