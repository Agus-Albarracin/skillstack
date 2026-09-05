---
name: skillstack-skill-creator
description: Create, migrate, validate, and maintain Skillstack skills. Use before proposing or changing any Skillstack skill, including its public or internal distribution boundary. Internal governance only; do not vendorize this skill.
---

# Skillstack Skill Creator

Create skills that encode Skillstack's reusable expertise without exporting its
maintenance infrastructure or company governance.

## Business Contract

- MUST classify a skill as `public` or `internal` before proposing its files.
- MUST define the skill's domain, trigger boundary, critical rules, and validation
  before writing its `SKILL.md`.
- MUST keep shared instructions and operational decisions in `SKILL.md`; load
  conditional detail from `references/`.
- MUST use the Skillstack `SKILL.md` pattern: a title, an activation boundary,
  an operating contract, a reference catalogue, a quick reference when the
  skill contains multiple rules, a workflow, and verification. Omit a section
  only when it is genuinely inapplicable.
- MUST keep public packages operational: distribute only `SKILL.md`, and include
  `references/`, `scripts/`, or `assets/` only when they are needed at runtime.
- MUST keep `metadata.json` and `evals/` inside Skillstack. They are maintenance
  artifacts, never public vendorized payload.
- MUST adapt external material into Skillstack's own guidance. Do not copy a
  source manual wholesale.
- MUST remove a vendorized source once its guidance has been fully replaced by
  a native Skillstack skill. A former repository may inform Git history, but it
  is not an active `sources` entry.
- MUST add a validation strategy for every `CRITICAL` rule when it can be checked
  mechanically.
- MUST preserve user-owned work and use `atomic-commits` after a coherent change.

## Reference Router

`priority` measures the impact of ignoring a guide. `dependsOn` defines reading
order; do not derive order from priority.

| Reference | Priority | dependsOn | Use when |
| --- | --- | --- | --- |
| [`structure`](references/structure.md) | `CRITICAL` | — | Always, before designing the skill tree or its entrypoint. |
| [`distribution`](references/distribution.md) | `CRITICAL` | `structure` | Choosing public or internal visibility, or preparing a public package. |
| [`lifecycle`](references/lifecycle.md) | `HIGH` | `structure` | Migrating external guidance or updating internal maintenance metadata. |
| [`validation`](references/validation.md) | `HIGH` | `structure` | Checking a new or changed skill, its references, or its eval coverage. |

## Workflow

1. Read `structure`, identify the task boundary, then classify visibility.
2. Read the references required by that classification and lifecycle state.
3. Propose the smallest useful tree and explain omitted optional directories.
4. Write the entrypoint first, then only the routed resources it needs.
5. Validate the structure, paths, frontmatter, and relevant evals before committing.

Never make an internal governance skill discoverable in the public catalog. Never
make a consumer download Skillstack's `metadata.json` or `evals/`.
