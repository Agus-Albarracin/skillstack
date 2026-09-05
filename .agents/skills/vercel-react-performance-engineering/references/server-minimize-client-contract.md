# Minimize the Server-to-Client Contract

| Property | Detail |
| --- | --- |
| Decision | `server-minimize-client-contract` |
| Outcome | Reduce HTML and RSC transfer without adding client fetches. |
| Signals | Whole database entities passed to Client Components that use a few fields. |
| Tags | `server-execution`, `rsc`, `serialization`, `client-boundary` |

## Decision

Pass only the serializable fields a Client Component renders or uses. The boundary
is an API contract: broad objects increase transfer size, expose accidental data,
and couple client code to server schemas.

## Avoid

```tsx
const customer = await db.customer.findUnique({ where: { id } })
return <CustomerBadge customer={customer} />
```

## Prefer

```tsx
const customer = await db.customer.findUnique({
  where: { id },
  select: { displayName: true, status: true },
})
return <CustomerBadge name={customer.displayName} status={customer.status} />
```

## Boundaries

- Do not fragment the contract so far that the client must refetch the same data.
- Keep secrets and server-only types behind the boundary.
- Validate serializability and preserve identifiers needed for interaction.

## Verification

Compare RSC payload bytes and inspect the public props. Confirm the client performs
no compensating request and all interactions still have required identifiers.

## Official References

- [Next.js passing data to Client Components](https://nextjs.org/docs/app/getting-started/server-and-client-components#passing-data-from-server-to-client-components)
