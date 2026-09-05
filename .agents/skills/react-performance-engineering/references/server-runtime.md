# Server Runtime

| Rule | Decision | Verify |
| --- | --- | --- |
| `authorize-server-mutations` | Authenticate and authorize inside every remotely invokable mutation. | Direct invocation cannot bypass the check. |
| `deduplicate-per-request` | Use request-scoped memoization for repeated reads with identical inputs. | One request performs one underlying read. |
| `bound-shared-cache` | Use bounded, expiring cross-request caches only for data with an explicit freshness policy. | Capacity, TTL, invalidation, and tenant scope are defined. |
| `preserve-reference-identity` | Reuse object references when sending the same RSC data more than once. | The serialized payload does not repeat equivalent data unnecessarily. |
| `hoist-static-io` | Load process-stable assets once rather than on every request. | Request traces omit repeated static I/O. |
| `isolate-request-state` | Never place user or request data in mutable module scope. | Concurrent requests cannot observe each other’s values. |
| `narrow-client-payload` | Pass only fields a client boundary renders or uses. | RSC payload size falls without extra client fetching. |
| `compose-parallel-server-work` | Arrange sibling server components so independent reads begin together. | Server timing contains no structural waterfall. |
| `parallelize-nested-work` | Resolve each item’s dependency chain inside a shared parallel join. | A slow item does not block other items from progressing. |
| `defer-post-response-work` | Schedule non-critical logging or analytics after the response when the runtime supports it. | Response latency excludes that side effect. |
