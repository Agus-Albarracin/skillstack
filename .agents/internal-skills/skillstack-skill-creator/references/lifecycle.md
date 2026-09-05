# Lifecycle

`metadata.json` records the current state of a source skill maintained by
Skillstack. It is internal information, not a consumer dependency.

| Resource | Detail |
| --- | --- |
| `status: native` | Skillstack owns the operative guidance and no longer depends on an external source to explain it. |
| `status: migrating` | External material is still being reviewed and adapted into Skillstack's voice and operating model. |
| `sources` | Immutable external revisions still needed while a skill is `migrating`. Use a commit SHA, tag, or release; never a moving branch. |
| `version` | Semantic version of the maintained source skill. Update it when its supported behavior or contract changes. |
| `visibility` | Internal maintenance classification. `internal` skills are never catalogued or exported publicly. |

When migrating a skill, extract only the reusable decisions that change agent
behavior. Replace copied material with Skillstack guidance and route official
documentation only when it is needed. Once the operative guidance is owned by
Skillstack, set `status` to `native` and set `sources` to `[]`. Do not retain a
repository merely because it inspired the original migration: it is no longer
an active source for the native skill.
