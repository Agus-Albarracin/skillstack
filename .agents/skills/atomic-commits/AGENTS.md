# Atomic Commits — Compiled Guide

Create the smallest coherent commits that remain honest, reviewable, and usable. Use Conventional Commits and preserve all user-owned work.

## 1. Authorization and Remote Boundaries

Treat planning, staging, committing, and remote operations as separate permissions. Inspect and propose when asked to plan. Stage and create local commits only when explicitly authorized. Do not push, pull, fetch, open pull requests, merge, rebase, tag, amend, change remotes, alter Git identity, or rewrite history unless separately requested. Authorization for atomic commits covers only in-scope work, never unrelated pre-existing changes.

## 2. Working-Tree and Secret Inspection

Before planning or staging, inspect the repository root, branch, status, staged and unstaged diffs, untracked files, and recent history. Separate current-task work from user-owned work. Detect credentials, private keys, tokens, environment files, generated output, large binaries, and dependency caches; never stage suspected secrets. Do not discard or absorb unrelated changes. Use patch staging for mixed files only when separation is unambiguous.

## 3. Atomic Grouping and Dependency Order

Each commit must represent one reason for change and leave the repository usable when practical. Keep implementation with required tests and documentation. Separate independent fixes, features, refactors, tooling, and documentation. Order prerequisites before dependents. Do not split a coherent behavior merely by file type, and do not combine unrelated work because it was edited together. Prefer groups that can be reviewed, verified, and reverted independently.

## 4. Conventional Commit Message Grammar

Use `<type>[optional scope][!]: <imperative summary>`. Keep the summary concise, specific, normally lowercase, and without a trailing period. Describe the outcome, not the editing activity. Add a body for important motivation, tradeoffs, migration details, or consequences. Mark breaking changes only when real. Avoid vague subjects.

## 5. Type and Scope Classification

Choose the type by intent: `feat` for supported behavior, `fix` for defects, `perf` for performance, `refactor` for behavior-preserving production restructuring, `test` for test-only changes, `docs` for human-facing documentation, `style` for source presentation only, `build` for dependencies and build tooling, `ci` for pipelines, `chore` for otherwise-unclassified maintenance, and `revert` for reversals. Visible UI styling is normally `feat` or `fix`. Use a short stable scope only when it improves clarity.

## 6. Precise Staging Without Data Loss

Stage explicit reviewed paths or patches. Avoid broad staging in a dirty tree. Preserve the existing index and never include staged user changes without authorization. Verify the staged diff before committing. Do not use destructive cleanup, checkout, reset, restore, or stash to simplify staging. If a hook changes files or a commit fails, inspect status before retrying; do not bypass hooks without permission.

## 7. Verification and Evidence

Run focused checks appropriate to each group when feasible. After committing, verify the subject, changed paths, and status. Report the hash, exact subject, included work, checks and results, remaining changes, and deliberately omitted remote operations. Never claim success without evidence.
