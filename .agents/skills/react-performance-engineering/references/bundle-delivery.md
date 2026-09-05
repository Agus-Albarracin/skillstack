# Bundle Delivery

| Rule | Decision | Verify |
| --- | --- | --- |
| `import-owned-module` | Import the narrow module that owns the symbol instead of a broad barrel when tooling cannot tree-shake it reliably. | Bundle analysis excludes unrelated exports. |
| `keep-paths-static` | Keep import and filesystem paths statically analyzable. | Build traces contain only intended modules and assets. |
| `lazy-load-heavy-ui` | Load heavy client components when their interaction becomes reachable. | Initial route JavaScript decreases without delaying primary UI. |
| `defer-third-parties` | Start analytics, support, and optional SDKs after critical interaction is ready. | Main content hydrates without waiting for them. |
| `load-by-capability` | Import optional code only when the feature is enabled or invoked. | Disabled features ship no client module. |
| `preload-from-intent` | Preload expensive destinations on a strong signal such as focus or hover. | Preload improves navigation without wasteful page-load traffic. |
