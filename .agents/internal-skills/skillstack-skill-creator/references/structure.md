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
