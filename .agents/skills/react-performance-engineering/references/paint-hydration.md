# Paint and Hydration

| Rule | Decision | Verify |
| --- | --- | --- |
| `animate-wrapper-not-svg` | Animate a composited HTML wrapper around complex SVG content. | Animation avoids repeated SVG layout work. |
| `skip-offscreen-rendering` | Use content visibility or virtualization for genuinely long views. | Offscreen work falls without breaking search or accessibility. |
| `hoist-static-jsx` | Move immutable JSX outside repeated component execution. | Static nodes are not recreated per render. |
| `trim-svg-precision` | Remove coordinate precision that does not change the rendered asset. | Visual diff is clean and payload is smaller. |
| `stabilize-client-only-values` | Provide a deterministic first render for browser-only state. | Hydration produces no flicker or mismatch. |
| `suppress-only-expected-mismatch` | Suppress hydration warnings only when the mismatch is intentional and contained. | Unexpected mismatches remain visible. |
| `preserve-hidden-state-intentionally` | Use React’s visibility primitives when hidden UI must retain state. | Hidden work and retained state match product intent. |
| `render-conditionals-explicitly` | Use explicit branches when falsy values could leak into output. | Zero and empty values render intentionally. |
| `surface-transition-state` | Use transition state for feedback tied to non-urgent updates. | Pending UI matches the actual transition. |
| `declare-resource-hints` | Add preload or preconnect only for resources proven critical. | The network waterfall improves without contention. |
| `schedule-scripts-deliberately` | Choose `defer`, `async`, or framework script strategy from dependency and execution order. | Scripts do not block parsing or race required dependencies. |
