# FoodStorePopUp

FoodStorePopUp is a static food-menu interface built with HTML, CSS, and vanilla JavaScript. Visitors can browse a fixed list of food items and open an order-summary popup showing the selected item's displayed price and a simple delivery-charge calculation.

> This is a frontend demonstration only. It does not submit orders, collect customer details, connect to a restaurant, check availability, or process payments.

## Features
- Static menu cards with item names, descriptions, images, and prices.
- Click-to-open order summary.
- Delivery charge calculation in the browser.
- Responsive card and popup styling.

## Technology
- HTML5
- CSS3
- Vanilla JavaScript

## Project files
```text
index.html   Food menu markup and demo item data
food.css     Layout, menu card and popup styling
food.js      Popup creation and price calculation
docs/        Project and testing documentation
```

## Run locally
No dependencies or build step are required. Open `index.html` directly, or serve the repository root:

```bash
python -m http.server 8000
```

Visit <http://localhost:8000/>.

## Current behavior
Each menu card contains a `data-title` and `data-price`. Clicking a card creates an order-summary overlay. The JavaScript adds a fixed delivery charge of Rs. 40 when the item price is Rs. 100 or less, otherwise it adds no delivery charge.

## Limitations and known issues
- Prices and delivery rules are hard-coded and can be changed in the browser.
- No order is sent to a server or restaurant.
- No checkout, payment, customer account, or delivery tracking exists.
- Product images are loaded from remote Unsplash Source URLs and depend on third-party availability.
- The current click handler creates a new popup each time a menu item is clicked. Avoid rapid repeated clicks until popup lifecycle handling is improved.
- The `change()` helper in `food.js` references an element ID that is not present in the current HTML and is not part of the documented flow.

## Documentation
- [Architecture](docs/ARCHITECTURE.md)
- [Development](docs/DEVELOPMENT.md)
- [Pricing behavior](docs/PRICING.md)
- [Testing](docs/TESTING.md)
- [Deployment](docs/DEPLOYMENT.md)

## Contributing and license
See [CONTRIBUTING.md](CONTRIBUTING.md). Licensed under MIT, see [LICENSE](LICENSE).

Last updated: 2026-11-14 00:01 UTC
