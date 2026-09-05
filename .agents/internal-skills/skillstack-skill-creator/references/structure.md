# Structure

Start every skill with a concise `SKILL.md` that states its trigger, shared
instructions, business rules, and routing. Keep content that is needed only for
a specific situation in a focused file under `references/`.

| Resource | Include when | Do not use for |
| --- | --- | --- |
| `SKILL.md` | Always. | Copied manuals, changelogs, or conditional detail. |
| `references/` | A detailed procedure or pattern is needed only for some tasks. | Unlinked documentation. |
| `scripts/` | Repeated, deterministic automation improves reliability. | One-off commands or placeholders. |
| `assets/` | A generated result needs a reusable template or resource. | Agent instructions. |
| `metadata.json` | Skillstack maintains the source skill. | Runtime configuration or public distribution. |
| `evals/` | Behavior needs repeatable regression coverage. | Runtime behavior or consumer installation. |

Do not create empty optional directories. Every reference must be linked from
`SKILL.md`, use a relative path, and be one level deep from the entrypoint.

## SKILL.md Pattern

Use this predictable entrypoint structure. Keep headings in English and adapt
the body to the skill's domain.

```md
# {Skill Title}

## When to Apply

## Operating Contract

## Reference Categories by Priority

## Quick Reference

## Workflow

## Verification
```

`When to Apply`, `Operating Contract`, `Workflow`, and `Verification` are the
default shared contract. `Reference Categories by Priority` and `Quick
Reference` are required when a skill routes multiple rules or reference groups;
they may be omitted for a small workflow with no such catalogue. Add sections
such as `Compatibility`, `Examples`, `Gotchas`, or `Available Scripts` only
when the resource or constraint exists.
