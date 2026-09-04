---
name: atomic-commits
description: Plan and create small, reviewable Git commits when the user asks to commit current changes, split a working tree into coherent commits, or prepare an atomic Conventional Commit history. Excludes pushing, pull requests, merging, rebasing, tagging, and amending unless separately requested.
metadata:
  author: gaac
  version: "1.0.0"
---

# Atomic Commits

Create the smallest coherent commits that remain honest, reviewable, and usable. Use Conventional Commits and preserve all user-owned work.

## When to Apply

Use this skill to inspect and group changes, stage a precise group, select a Conventional Commit message, create authorized local commits, and verify the resulting history.

## Rule Categories by Priority

| Priority | Responsibility | Rule |
| --- | --- | --- |
| 1 | Authorization and remote boundaries | `authorization-scope` |
| 2 | Working-tree and secret inspection | `inspect-safety` |
| 3 | Atomic grouping and dependency order | `group-atomic` |
| 4 | Conventional Commit message grammar | `message-format` |
| 5 | Type and scope classification | `type-selection` |
| 6 | Precise staging without data loss | `stage-preserve` |
| 7 | Verification and evidence | `verify-report` |

## How to Use

Always read [`rules/authorization-scope.md`](rules/authorization-scope.md). Then read only the other rule files needed for the current request:

- Planning only: `inspect-safety`, `group-atomic`, `message-format`, and `type-selection`.
- Creating commits: all rules.
- Reviewing proposed messages: `message-format` and `type-selection`.
- Diagnosing staging or hook problems: `stage-preserve` and `verify-report`.

Apply priorities in order when rules interact. Never treat this skill as authorization for an action the user did not request.

## Full Compiled Document

For the complete guide with every rule expanded, read [`AGENTS.md`](AGENTS.md).
