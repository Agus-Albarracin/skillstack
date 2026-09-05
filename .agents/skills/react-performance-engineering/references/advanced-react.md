# Advanced React

| Rule | Decision | Verify |
| --- | --- | --- |
| `exclude-effect-events-from-deps` | Treat Effect Events as non-reactive callbacks and keep them out of dependency arrays. | The effect reacts only to declared reactive values. |
| `stabilize-external-handler` | Store the latest handler behind a stable subscription when an external API requires stable identity. | Subscription lifecycle is stable while behavior stays current. |
| `initialize-once-per-runtime` | Guard true application-lifetime initialization explicitly. | Development remounts and multiple roots do not duplicate setup. |
| `read-latest-with-ref` | Use a latest-value ref only when a stable callback must observe current data without resubscribing. | No stale reads occur and the escape hatch is documented. |
