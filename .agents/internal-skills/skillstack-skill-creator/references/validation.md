# Validation

Validate the smallest set of observable invariants that proves the change is
usable and safe.

| Check | Applies to | Evidence |
| --- | --- | --- |
| Frontmatter | Every `SKILL.md` | Valid `name` and discriminating `description`; name matches directory. |
| Router paths | Skills with `references/` | Every linked file exists and no reference is orphaned. |
| Package boundary | Public skills | Export contains no `metadata.json`, `evals/`, or internal-only resources. |
| Metadata JSON | Maintained source skills | Valid JSON, current version and visibility, immutable source revisions when present. |
| Evals | `CRITICAL` behavior when feasible | Realistic prompt, expected result, and observable assertions. |

Run focused checks before committing. Use a script only after a validation is
repeated enough to justify deterministic automation. Report unavailable checks
plainly; do not claim they passed.
