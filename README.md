# Cloud X Global

Vite + React website for Cloud X Global (Pvt) Ltd.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## GitHub Pages deployment

This project is configured for the repository site:

`https://kwenu.github.io/Cloudxglobal/`

The workflow in `.github/workflows/deploy.yml` builds the Vite application and deploys the generated `dist` folder to GitHub Pages whenever changes are pushed to `main`.

In GitHub, open **Settings → Pages → Build and deployment → Source** and select **GitHub Actions**.
