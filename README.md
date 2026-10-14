# No Label storefront preview

Responsive static storefront preview based on the Stitch export. Visual direction: black, oxblood and bone, editorial type, and “Defined by God, Not Culture.” Campaign images are placeholders.

## Ghana launch setup

Ghana (GH) is confirmed. GHS (GH₵) is proposed; confirm currency before sale. Product names, final images, variants, prices, stock, and shipping zones/rates/timing are still needed. This preview does not accept orders or collect payment details.

## Checkout direction

Paystack is the recommended candidate for Ghana, pending approval and merchant account setup. Keep secrets on a server, calculate totals server-side, and verify each transaction before marking an order paid. See [Accept Payments](https://paystack.com/docs/payments/accept-payments/) and [Verify Payments](https://paystack.com/docs/payments/verify-payments/).

To preview locally, run `python3 -m http.server 8080` from this folder.