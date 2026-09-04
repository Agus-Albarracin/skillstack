# Operating principles

These rules apply across the skill; the patterns provide their Next.js-specific form.

1. **The server is authoritative.** Client, tool, and agent input establishes intent, never price, identity, inventory, or permission. Recompute sensitive values from authoritative server data.
2. **Fail closed.** Missing auth, secrets, signatures, or safety checks must stop the request rather than select an insecure fallback.
3. **Keep authority close to the data.** Reuse transactions, constraints, stored operations, and queues that already own correctness instead of recreating their logic in a route.
4. **Verify before changing.** Read current code and trace request, schema, and response boundaries. Mark untested assumptions as such rather than treating boilerplate as proven.
5. **Document consequential seams.** When a change alters an API, schema, payment path, or core workflow, update the relevant documentation in the same change.
6. **Make external effects idempotent.** Charges, email, fulfillment, and webhook effects need a deduplication or atomic-claim strategy before they can be retried safely.
