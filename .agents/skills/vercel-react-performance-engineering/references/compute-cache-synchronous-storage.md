# Cache Synchronous Storage Reads Within an Interaction

| Property | Detail |
| --- | --- |
| Decision | `compute-cache-synchronous-storage` |
| Outcome | Remove repeated storage access and parsing from a hot path. |
| Signals | Repeated localStorage, sessionStorage, or cookie reads. |
| Tags | `compute-hot-path`, `storage`, `cache`, `synchronous-io` |

## Prefer

```ts
const cache = new Map<string, string | null>()

export function readStored(key: string) {
  if (!cache.has(key)) cache.set(key, localStorage.getItem(key))
  return cache.get(key)
}

export function writeStored(key: string, value: string) {
  localStorage.setItem(key, value)
  cache.set(key, value)
}
```

Keep the memory value synchronized with writes. Invalidate it when another tab or an
external actor can change the backing store.

## Boundaries

- Browser storage is synchronous and unavailable during server rendering.
- Cache parsed values only with schema validation and a version.
- Listen for `storage` events or clear on visibility changes when freshness requires it.
- Cookies can change through server responses and need a deliberate refresh boundary.

## Verification

Count storage reads through repeated calls, then test writes, cross-tab updates,
visibility changes, corrupt values, and server rendering.

## Official References

- [MDN Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)
- [MDN storage event](https://developer.mozilla.org/en-US/docs/Web/API/Window/storage_event)
