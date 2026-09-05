# Trim Invisible SVG Precision

| Property | Detail |
| --- | --- |
| Decision | `visual-trim-vector-precision` |
| Outcome | Reduce vector payload without changing the rendered asset. |
| Signals | Generated paths contain excessive decimal coordinates. |
| Tags | `visual-pipeline`, `svg`, `payload`, `optimization` |

## Avoid

```svg
<path d="M10.293847 20.847362 L30.938472 40.192837" />
```

## Prefer

```svg
<path d="M10.3 20.8 L30.9 40.2" />
```

Use an SVG optimizer with a precision appropriate to the viewBox and target display
size. Preserve IDs, accessibility metadata, animation hooks, and intentional shapes.

## Boundaries

- Small viewBoxes and thin strokes may require more precision.
- Never accept optimizer output without a visual diff.
- Keep source artwork separately when designers need lossless editing.

## Verification

Compare bytes and render before/after at normal and zoomed sizes, including dark mode
and every state that changes fills, masks, gradients, or animation.

## Official References

- [MDN SVG paths](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorials/SVG_from_scratch/Paths)
