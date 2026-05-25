# IDBank / ArCa payments (Neetrino)

One-time invoice payments via IDBank through the ArCa REST API. This is **not** a shop or cart integration.

## Flow

1. Client calls `POST /api/payment/idbank/initiate` with amount and description.
2. Server creates `Order` + `Payment` (`PENDING`), calls ArCa `register.do`, stores `arcaOrderId`, returns `redirectUrl` (`formUrl`).
3. Client redirects the user to `formUrl`.
4. After payment, the bank redirects to:
   - Success: `https://neetrino.com/wc-api/idbank_successful?order=LOCAL_ORDER_ID` (ArCa may append `orderId`).
   - Fail: `https://neetrino.com/wc-api/idbank_failed?order=LOCAL_ORDER_ID`
5. Success handler calls `getOrderStatusExtended.do` and marks paid **only** if `paymentState === "DEPOSITED"` or `orderStatus === 2`.
6. User is redirected to `/payment/success?order=...` or `/payment/fail?order=...`.

## Environment variables

Set in `.env.local` (local) or hosting secrets (production). **Never** use `NEXT_PUBLIC_*` for credentials.

| Variable                   | Purpose                                         |
| -------------------------- | ----------------------------------------------- |
| `DATABASE_URL`             | PostgreSQL (existing)                           |
| `ARCA_TEST_MODE`           | `true` = test gateway, else live                |
| `ARCA_BANK`                | Bank id (default `idbank`)                      |
| `ARCA_USERNAME`            | Test merchant username                          |
| `ARCA_PASSWORD`            | Test merchant password                          |
| `ARCA_LIVE_USERNAME`       | Live merchant username                          |
| `ARCA_LIVE_PASSWORD`       | Live merchant password                          |
| `APP_URL`                  | Public site origin, e.g. `https://neetrino.com` |
| `PAYMENT_RECONCILE_SECRET` | Protects `GET /api/payment/idbank/reconcile`    |

## ArCa base URLs

- Test: `https://ipaytest.arca.am:8445/payment/rest`
- Live: `https://ipay.arca.am/payment/rest`

## Callback URLs (register with IDBank)

- Success / return: `https://neetrino.com/wc-api/idbank_successful`
- Fail: `https://neetrino.com/wc-api/idbank_failed`

`register.do` `returnUrl` is built per order as:

`https://neetrino.com/wc-api/idbank_successful?order={LOCAL_ORDER_ID}`

## Initiate API

`POST /api/payment/idbank/initiate`

```json
{
  "amountAMD": 10000,
  "description": "Website development — invoice #42",
  "customerName": "Optional",
  "customerEmail": "client@example.com",
  "customerPhone": "+37400000000",
  "language": "hy"
}
```

Response:

```json
{
  "success": true,
  "orderId": "cuid...",
  "orderNumber": "NTR-...",
  "redirectUrl": "https://..."
}
```

## Reconcile (optional cron)

`GET /api/payment/idbank/reconcile`

Header: `X-Payment-Reconcile-Secret: <PAYMENT_RECONCILE_SECRET>` or `Authorization: Bearer <secret>`

Re-checks pending payments older than 15 minutes via `getOrderStatusExtended.do`.

## Local setup

1. Apply migration: `pnpm db:migrate` (requires `DATABASE_URL`).
2. `pnpm db:generate`
3. Set env vars above.
4. `pnpm dev` — test initiate with curl/Postman, complete payment on test gateway.

## Security

- ArCa username/password are read only in `lib/server/payment/*` (`import "server-only"`).
- Do **not** mark orders paid from the callback URL alone; always verify with `getOrderStatusExtended.do`.
- Do not log passwords or full ArCa credentials.
- Reconcile endpoint must stay secret; do not expose in the browser.

## Database

Models: `Order`, `Payment` (see `prisma/schema.prisma`). Run `pnpm db:deploy` on production releases after merging migrations.
