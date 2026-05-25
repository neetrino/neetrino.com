# Hidden product links & orders

Admin-only products with secret URLs (`/p/{secretSlug}`). Not linked from the public site.

## Admin

- Products: `/admin/products` — create, edit, copy secret URL, deactivate.
- Orders: `/admin/orders` — list and view details.

## Public product URL

`https://neetrino.com/p/{secretSlug}` — `noindex, nofollow`. Slug is generated on create (24-byte base64url).

## Start order + IDBank redirect

`POST /api/products/{secretSlug}/start-order` — creates `PENDING` order and payment, registers with ArCa, returns `redirectUrl` for the bank form. Optional body field `language`: `hy` | `ru` | `en`.

## Product types

- **ONE_TIME** — one successful paid purchase then unavailable (`SOLD` when payment is connected).
- **PERMANENT** — multiple purchases while `ACTIVE`.

## Database

Run `pnpm db:migrate` locally, `pnpm db:deploy` on production after deploy.

See `docs/PAYMENTS_IDBANK_ARCA.md` for the next payment integration step.
