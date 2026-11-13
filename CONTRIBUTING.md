# Contributing

## Local setup
No package installation is needed. Serve the repository root with:
```bash
python -m http.server 8000
```

## Guidelines
- Keep the project dependency-free unless a new dependency is justified.
- Keep menu item labels and displayed prices synchronized with their data attributes.
- Use semantic HTML, accessible button controls, and meaningful image alternatives.
- Do not add payment forms, customer data collection, or order submission without a reviewed backend design.
- Do not commit secrets, personal data, generated output, or unlicensed images.

## Validation
Run `node --check food.js` and follow the manual checks in [docs/TESTING.md](docs/TESTING.md).

## Pull requests
Explain the user-visible change, list manual checks, and include screenshots for visual updates.
