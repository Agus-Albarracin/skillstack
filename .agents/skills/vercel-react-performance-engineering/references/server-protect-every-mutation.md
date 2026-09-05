# Protect Every Remotely Invokable Mutation

| Property | Detail |
| --- | --- |
| Decision | `server-protect-every-mutation` |
| Outcome | Prevent direct invocation from bypassing identity, permission, or input checks. |
| Signals | Server Actions, Route Handlers, RPC mutations, webhook commands. |
| Tags | `server-execution`, `authorization`, `validation`, `mutation` |

## Decision

Treat every Server Action and mutation endpoint as public-facing. Authenticate the
caller, authorize the exact resource operation, and validate untrusted input inside
the mutation. Middleware and protected layouts improve navigation but do not replace
the mutation's own enforcement boundary.

## Avoid

```ts
'use server'
export async function adjustStock(sku: string, quantity: number) {
  return db.stock.update({ where: { sku }, data: { quantity } })
}
```

## Prefer

```ts
'use server'
export async function adjustStock(input: unknown) {
  const actor = await requireSession()
  const command = stockAdjustmentSchema.parse(input)
  await requirePermission(actor, 'stock:write', command.warehouseId)
  return inventory.adjust(command, { actorId: actor.userId })
}
```

## Boundaries

- Authorization follows the resource and tenant, not only the user's broad role.
- Revalidate authorization at execution time; UI state can be stale or forged.
- Preserve audit data and idempotency where retries can repeat a mutation.

## Verification

Invoke the action directly as anonymous, authenticated-but-forbidden, cross-tenant,
invalid-input, and authorized callers. Only the last case may mutate state.

## Official References

- [Next.js authentication guide](https://nextjs.org/docs/app/guides/authentication)
