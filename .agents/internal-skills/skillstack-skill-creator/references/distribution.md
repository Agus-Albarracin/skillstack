# Distribution

Choose visibility before creating files. Visibility describes the audience and
the exported payload; it is not a priority level.

| Visibility | Source location | Public vendorized payload |
| --- | --- | --- |
| `public` | `.agents/skills/<skill-name>/` | `SKILL.md` plus required `references/`, `scripts/`, and `assets/`. |
| `internal` | `.agents/internal-skills/<skill-name>/` | None. The skill is available only through Skillstack's repository governance. |

Public export uses an allowlist. Include only resources that a consumer's agent
needs to execute the skill. Exclude `metadata.json`, `evals/`, internal skills,
and maintainer-only notes. If an import contains an excluded artifact, remove it
from the consumer project rather than treating it as operational input.

Never put credentials, private customer data, internal URLs, or unpublished
strategy in either package type.
