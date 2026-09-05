# Client Data

| Rule | Decision | Verify |
| --- | --- | --- |
| `deduplicate-client-requests` | Share cache keys and request ownership for identical remote data. | Concurrent consumers produce one network request. |
| `share-global-listeners` | Centralize identical window or document listeners. | Subscriber count can grow without listener count growing equally. |
| `use-passive-scroll-listeners` | Mark non-canceling touch and scroll listeners passive. | Scrolling is not blocked by listener negotiation. |
| `version-browser-storage` | Store minimal, versioned data and migrate or discard incompatible shapes. | Old persisted state cannot break the current UI. |
