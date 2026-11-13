# Development

## Requirements
- A modern browser.
- Python 3 for an optional local HTTP server.
- Node.js only for JavaScript syntax validation.

## Run locally
```bash
python -m http.server 8000
```
Open <http://localhost:8000/>.

## Files
- `index.html`: food cards and data attributes.
- `food.css`: card, responsive layout, overlay and popup styles.
- `food.js`: click handlers and displayed total calculation.

Keep the data attributes and visible product labels synchronized. Avoid injecting untrusted content through `innerHTML`; use text nodes or `textContent` for dynamic values.
