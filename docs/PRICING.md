# Pricing Behavior

The current demo reads an integer rupee amount from each card's `data-price` attribute.

| Item price | Displayed delivery charge |
| --- | ---: |
| Rs. 100 or less | Rs. 40 |
| Above Rs. 100 | Rs. 0 |

The displayed total is calculated in the browser. This is demonstration logic only. A production ordering system must calculate prices and delivery fees on the server using trusted catalog and delivery rules.
