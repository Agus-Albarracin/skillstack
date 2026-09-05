# Skip Rendering Work for Offscreen Content

| Property | Detail |
| --- | --- |
| Decision | `visual-skip-offscreen-work` |
| Outcome | Defer layout and paint for long content outside the viewport. |
| Signals | Large feeds, tables, timelines, or accordions dominate initial rendering. |
| Tags | `visual-pipeline`, `content-visibility`, `virtualization`, `long-list` |

## Prefer

```css
.timeline-entry {
  content-visibility: auto;
  contain-intrinsic-size: auto 12rem;
}
```

`content-visibility: auto` lets the browser skip offscreen layout and paint while
retaining content in the document. Supply a realistic intrinsic size to reduce
scrollbar and layout shifts. For extremely large interactive collections, use a
virtualization strategy that preserves focus and navigation.

## Boundaries

- Test find-in-page, accessibility-tree, focus, print, and anchor navigation behavior.
- A poor intrinsic estimate can create cumulative layout shift.
- Do not apply containment where descendants must affect outside layout.
- Measure DOM size as well as paint; content visibility does not remove nodes.

## Verification

Compare initial rendering cost, layout, paint, CLS, scrolling, keyboard navigation,
and browser search on a realistically sized data set.

## Official References

- [MDN content-visibility](https://developer.mozilla.org/en-US/docs/Web/CSS/content-visibility)
- [web.dev content-visibility](https://web.dev/articles/content-visibility)
