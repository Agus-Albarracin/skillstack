# JavaScript Hot Paths

Apply these only after profiling identifies CPU or DOM work as a material bottleneck.

| Rule | Decision | Verify |
| --- | --- | --- |
| `batch-dom-style-writes` | Apply related style changes together through a class or one write. | Layout tracing shows fewer invalidations. |
| `index-repeated-lookups` | Build a Map when a collection is searched repeatedly. | Lookup cost falls enough to repay index construction. |
| `cache-loop-properties` | Hoist stable property reads out of hot loops. | The optimized loop remains readable and measurably faster. |
| `cache-pure-expensive-results` | Memoize costly pure work with an explicit size and invalidation policy. | Cache growth is bounded and hit rate is useful. |
| `cache-storage-reads` | Avoid repeatedly parsing unchanged browser storage in one interaction. | Storage access disappears from the hot path. |
| `combine-compatible-passes` | Merge collection passes when the same large input is traversed repeatedly. | Allocation and CPU decrease without obscuring intent. |
| `check-cheap-shape-first` | Reject length or shape mismatches before expensive comparison. | Common negative cases exit early. |
| `exit-as-soon-as-known` | Return when the outcome is determined. | Later work is unreachable for settled cases. |
| `hoist-regular-expressions` | Reuse stable regular expressions outside repeated execution. | The hot path avoids repeated construction. |
| `scan-for-extrema` | Find min or max with a scan instead of sorting the full collection. | Input order remains intact and complexity is linear. |
| `use-set-or-map-for-membership` | Use Set or Map for repeated membership and keyed access. | Data size and lookup frequency justify construction. |
| `preserve-input-order` | Use immutable sorting when callers share the input collection. | Optimization does not mutate upstream state. |
| `map-and-filter-once` | Produce only retained mapped values in one pass when allocation matters. | Output matches the two-pass implementation. |
| `defer-idle-work` | Schedule optional background work during idle time with a fallback. | Primary interaction is unaffected and work still eventually runs. |
