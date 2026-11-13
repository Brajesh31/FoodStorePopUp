# Testing

## Automated syntax check
```bash
node --check food.js
```

## Manual checks
1. Open the page in a desktop browser.
2. Confirm all menu cards render.
3. Click an item priced at Rs. 100 or less and confirm Rs. 40 delivery is shown.
4. Click an item priced above Rs. 100 and confirm no delivery charge is shown.
5. Press Back and confirm the popup and overlay are removed.
6. Repeat the flow with a different item.
7. Test the layout at a narrow mobile width.
8. Check browser console and network failures for remote images.

Known behavior: repeated clicks before closing the popup can create multiple overlays. This is documented and has not been changed in this documentation-only batch.
