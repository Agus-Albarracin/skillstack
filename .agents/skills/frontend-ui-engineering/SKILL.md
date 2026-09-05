---
name: frontend-ui-engineering
description: Build and review production-quality user interfaces with deliberate visual systems, accessible interactions, responsive layouts, and complete async states. Use when creating or changing pages, components, navigation, forms, dialogs, or user-facing UI behavior.
---

# Frontend UI Engineering

Build interfaces that belong to the product: clear in hierarchy, intentional in their visual decisions, usable with keyboard and assistive technology, and complete in every meaningful state.

## Operating Contract

- MUST inspect the existing visual system, component patterns, and product context before introducing a new UI language.
- MUST use native HTML semantics before adding ARIA, and preserve keyboard and focus behavior for every interaction.
- MUST design loading, empty, error, success, and pending states when the product can reach them.
- MUST make responsive choices from content hierarchy and available space, not from a decorative desktop composition.
- MUST avoid generic defaults: unearned gradients, oversized cards, arbitrary spacing, and a palette unrelated to the product are not design decisions.
- SHOULD keep components focused, compose stable primitives, and place state ownership close to the behavior it controls.
- SHOULD verify the finished interface with real content and the project’s supported viewport range.

## Reference Router

`priority` measures the impact of ignoring a guide. `dependsOn` defines the order in which guides must be resolved; it never derives order from impact.

| Reference | Priority | dependsOn | Use when |
| --- | --- | --- | --- |
| [`visual-system`](references/visual-system.md) | `CRITICAL` | — | Always, before making visual decisions. |
| [`component-boundaries`](references/component-boundaries.md) | `HIGH` | `visual-system` | Creating or refactoring UI components. |
| [`interaction-accessibility`](references/interaction-accessibility.md) | `CRITICAL` | `component-boundaries` | Adding controls, forms, dialogs, navigation, or feedback. |
| [`responsive-layouts`](references/responsive-layouts.md) | `HIGH` | `visual-system` | Changing layouts across viewport sizes. |
| [`state-and-feedback`](references/state-and-feedback.md) | `HIGH` | `component-boundaries` | Handling asynchronous, empty, error, success, or optimistic states. |
| [`review-checklist`](references/review-checklist.md) | `MEDIUM` | `interaction-accessibility`, `responsive-layouts`, `state-and-feedback` | Verifying completed UI work. |

## Workflow

1. Read `visual-system`, inspect what the product already communicates, and identify the user task and its states.
2. Resolve the router dependencies for the work at hand before implementing.
3. Build the smallest coherent component structure with semantics and state ownership decided explicitly.
4. Test the interface with real content, keyboard navigation, and relevant viewport sizes.
5. Use `review-checklist` to close gaps before handing off the work.

Do not manufacture a design system when the project already has one. When it does not, establish only the few decisions necessary for the feature and make them reusable.