# Deployment guide — Dr. Rahul Patley site

The site builds with Vite and ships to GitHub Pages via GitHub Actions.

## Local development

```bash
npm install
npm run dev      # http://localhost:5173/dr-rahul-patley/
npm run build    # outputs to dist/
npm run preview  # serve dist/ locally
```

Node 20+ recommended.

## First-time GitHub setup

1. Push this repo to GitHub as `dr-rahul-patley` (any user/org).
2. In the repo, go to **Settings → Pages**, set **Source** to `GitHub Actions`.
3. Push to `main`. The `Deploy to GitHub Pages` workflow builds and publishes.
4. Site URL: `https://<username>.github.io/dr-rahul-patley/`

The workflow auto-sets Vite's `base` from the repo name, so renaming the repo
just works without code changes.

## Custom domain

If you point a domain (e.g. `drrahulpatley.com`) at GitHub Pages:

1. Add a `public/CNAME` file containing your domain on a single line.
2. Configure DNS: `CNAME` record from `www` (or apex via ALIAS/A records to GH IPs)
   pointing at `<username>.github.io`.
3. In **Settings → Pages**, fill in the custom-domain field and enable HTTPS.
4. Set the workflow env to `VITE_BASE=/` (or just override locally) since the
   site now lives at the domain root, not under a subpath.

## Files

| Path | Purpose |
|---|---|
| `index.html` | Vite entry point at the repo root |
| `src/` | React source (ES modules, ported from `project/src/`) |
| `public/assets/` | Static images served as-is |
| `project/` | Original Claude Design prototype, kept as design reference |
| `vite.config.js` | Build config; `base` controlled by `VITE_BASE` env |
| `.github/workflows/deploy.yml` | Builds and publishes on push to `main` |
