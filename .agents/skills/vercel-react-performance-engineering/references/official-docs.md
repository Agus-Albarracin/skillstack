# Official Documentation Map

Use primary documentation to verify APIs against the React, Next.js, browser, and
runtime versions installed in the target project. A reference file expresses a
Skillstack decision; these links define the platform behavior underneath it.

## React Rendering and State

- [React reference](https://react.dev/reference/react)
- [Suspense](https://react.dev/reference/react/Suspense)
- [Activity](https://react.dev/reference/react/Activity)
- [memo](https://react.dev/reference/react/memo)
- [useMemo](https://react.dev/reference/react/useMemo)
- [useRef](https://react.dev/reference/react/useRef)
- [useState](https://react.dev/reference/react/useState)
- [useTransition](https://react.dev/reference/react/useTransition)
- [useDeferredValue](https://react.dev/reference/react/useDeferredValue)
- [useSyncExternalStore](https://react.dev/reference/react/useSyncExternalStore)
- [useEffectEvent](https://react.dev/reference/react/useEffectEvent)
- [You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect)
- [Removing Effect Dependencies](https://react.dev/learn/removing-effect-dependencies)
- [Preserving and Resetting State](https://react.dev/learn/preserving-and-resetting-state)
- [React Compiler](https://react.dev/learn/react-compiler)

## React DOM and Browser Delivery

- [React DOM resource preloading APIs](https://react.dev/reference/react-dom#resource-preloading-apis)
- [hydrateRoot](https://react.dev/reference/react-dom/client/hydrateRoot)
- [MDN script element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script)
- [MDN dynamic import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import)
- [MDN content-visibility](https://developer.mozilla.org/en-US/docs/Web/CSS/content-visibility)
- [MDN Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)
- [MDN requestIdleCallback](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestIdleCallback)
- [web.dev layout performance](https://web.dev/articles/avoid-large-complex-layouts-and-layout-thrashing)
- [web.dev long-task optimization](https://web.dev/articles/optimize-long-tasks)

## Next.js App Router

- [Production checklist](https://nextjs.org/docs/app/guides/production-checklist)
- [Server and Client Components](https://nextjs.org/docs/app/getting-started/server-and-client-components)
- [Data fetching](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching)
- [Caching](https://nextjs.org/docs/app/guides/caching)
- [Authentication](https://nextjs.org/docs/app/guides/authentication)
- [Lazy loading](https://nextjs.org/docs/app/guides/lazy-loading)
- [Prefetching](https://nextjs.org/docs/app/guides/prefetching)
- [Script](https://nextjs.org/docs/app/api-reference/components/script)
- [`after`](https://nextjs.org/docs/app/api-reference/functions/after)
- [`optimizePackageImports`](https://nextjs.org/docs/app/api-reference/config/next-config-js/optimizePackageImports)
- [Output file tracing](https://nextjs.org/docs/app/api-reference/config/next-config-js/output)

## Compatibility Contract

- Do not promote an experimental, canary, deprecated, or framework-specific API without checking the installed version.
- Prefer the target framework's built-in behavior when it already owns caching, prefetching, code splitting, scripts, or resource hints.
- Record a compatibility fallback when browsers or deployment adapters do not share the same capability.
- Recheck documentation when dependencies change; examples are not a substitute for current API contracts.
