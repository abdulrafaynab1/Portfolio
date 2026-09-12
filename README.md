# Portfolio site

A React + Vite starter for an electrical/embedded engineering portfolio.
Design concept: you as an IC — the hero renders like a datasheet pinout,
the "about" section is a component spec table, skills are grouped like
PCB subsystems. No component library, no Tailwind — just plain CSS with
a token system in `src/index.css`, so it's easy to read and change.

## Run it

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## Build for deploy

```bash
npm run build
```

Outputs static files to `dist/`. Deploy that folder to Netlify, Vercel,
GitHub Pages, or any static host.

## What to edit first

Everything in brackets, like `[Your City]`, is a placeholder. Search the
project for `[` to find them all, or start here:

- `index.html` — page title and meta description
- `src/components/Hero.jsx` — your name, tagline, and pin labels
- `src/components/About.jsx` — the spec table (`specs` array) and bio copy
- `src/components/Skills.jsx` — the `subsystems` array
- `src/data/projects.js` — your real projects (add as many as you want)
- `src/components/Contact.jsx` — the `ports` array (email, GitHub, LinkedIn)
- `src/components/Footer.jsx` — name in the copyright line

## Design tokens

All colors, fonts, and spacing live as CSS variables at the top of
`src/index.css`. Change the palette there and it propagates everywhere —
nothing is hardcoded per-component.

- `--bg`, `--bg-surface` — warm dark background layers
- `--copper`, `--copper-bright` — primary accent (traces, buttons, links)
- `--phosphor`, `--phosphor-bright` — secondary accent (status dots)
- `--font-display` (Fraunces), `--font-body` (IBM Plex Sans),
  `--font-mono` (IBM Plex Mono)

## Deploying

The site is fully static after `npm run build` (outputs to `dist/`), so any
static host works. Push your code to a GitHub repo first — all three options
below pick it up from there.

### Vercel (easiest, zero config)

1. Push this project to a GitHub repo.
2. Go to vercel.com, sign in with GitHub, click **Add New → Project**.
3. Select the repo. Vercel auto-detects Vite — leave the defaults
   (Build command `npm run build`, Output directory `dist`).
4. Click **Deploy**. You get a live URL in about a minute, and every push to
   `main` redeploys automatically.
5. Optional: add a custom domain under **Settings → Domains**.

### Netlify

1. Push this project to a GitHub repo.
2. Go to app.netlify.com, **Add new site → Import an existing project**.
3. Pick the repo. Set build command to `npm run build`, publish directory
   to `dist`.
4. Deploy. Same auto-redeploy-on-push behavior as Vercel.
5. Because this uses client-side routing (`react-router-dom`), add a
   `public/_redirects` file with this line so `/resume` doesn't 404 on
   refresh:
   ```
   /*    /index.html   200
   ```

### GitHub Pages

GitHub Pages serves static files but doesn't rewrite unknown routes to
`index.html` by default, which breaks direct loads of `/resume`. Easiest fix
is `vite-plugin-single-spa`-style 404 redirect trick, or simpler: use
[`gh-pages`](https://www.npmjs.com/package/gh-pages) to publish `dist/`:

```bash
npm install --save-dev gh-pages
```

Add to `package.json` scripts:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

Then in `vite.config.js`, set `base: '/your-repo-name/'` if deploying to
`username.github.io/repo-name` (skip this if using a custom domain or a
`username.github.io` root repo). Run `npm run deploy`, then enable Pages in
the repo's Settings → Pages, source: `gh-pages` branch.

Note: GitHub Pages has the same refresh-on-subroute issue as Netlify: copy
`dist/index.html` to `dist/404.html` after build so deep links fall back to
the app instead of GitHub's 404 page.

**Recommendation:** if you don't have a strong reason otherwise, go with
Vercel — it needs the least configuration for a Vite + React Router app.

## Structure

```
src/
  components/   one component + one CSS file per section
  data/         projects.js — edit this instead of touching JSX for content
  App.jsx       assembles the sections
  index.css     tokens + global styles
```

Each section is intentionally a separate component so you can reorder,
remove, or add sections (e.g. "Writing", "Talks") without touching the rest.
