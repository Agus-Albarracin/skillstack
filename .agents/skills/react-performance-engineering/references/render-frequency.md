# Render Frequency

| Rule | Decision | Verify |
| --- | --- | --- |
| `defer-callback-reads` | Read state inside the callback when rendering does not depend on it. | The component no longer subscribes only for a later action. |
| `memoize-expensive-boundary` | Isolate expensive work behind a component boundary with stable inputs. | Profiler shows skipped work on unchanged inputs. |
| `hoist-default-objects` | Define default arrays, objects, and functions once. | Memoized children receive stable defaults. |
| `use-primitive-dependencies` | Depend on the primitive values an effect actually consumes. | Effects do not rerun for unrelated object identity changes. |
| `subscribe-to-derived-signal` | Subscribe to the smallest derived state that affects output. | Unrelated source changes do not render the component. |
| `derive-during-render` | Compute synchronous derived state during render instead of mirroring it through an effect. | One update produces one render path without correction. |
| `use-functional-updates` | Use functional state updates when next state depends on previous state. | Callbacks remain correct without stale closures. |
| `initialize-state-lazily` | Pass expensive initializers to state as functions. | Initialization runs once per mount. |
| `skip-trivial-memo` | Leave inexpensive primitive expressions un-memoized. | Hook overhead is not larger than the calculation. |
| `split-independent-hooks` | Separate computations or effects with different dependencies. | A change reruns only the dependent work. |
| `handle-actions-in-events` | Keep interaction-triggered effects in their event handler. | Unrelated renders cannot repeat the action. |
| `transition-nonurgent-work` | Mark interruptible updates as transitions. | Input and primary interaction remain responsive. |
| `defer-expensive-view` | Use deferred values when expensive results may lag behind input. | Typing stays immediate while results catch up. |
| `store-transient-values-in-ref` | Keep frequently changing non-visual values in refs. | Updates do not trigger visual renders. |
| `define-components-at-module-scope` | Keep component types stable across parent renders. | Child state survives parent renders. |
