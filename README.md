# lt0.co

Personal site boilerplate for [lt0.co](https://lt0.co). Built with [Astro](https://astro.build).

Light comic aesthetic: each project is a skewed panel with a stack of empty drawings behind it and a caption box overlapping the corner.

## Commands

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
npm run preview  # preview production build
```

## Editing by hand

### Home page

Edit `src/pages/index.astro`. Add a `<ComicPanel>` per project:

```astro
---
import coverOne from '../assets/covers/one.svg';
---

<ComicPanel
  href="/one"
  title="Project One"
  blurb="Short caption under the panel."
  cover={coverOne}
/>
```

Cover doodles live in `src/assets/covers/` — drop in an SVG (or other image) and import it.

### Adding a subpage

Create a markdown file in `src/content/pages/`, e.g. `notes.md`:

```md
---
title: Notes
description: Optional one-line summary.
url: https://example.com
draft: false
---

Your page content goes here.
```

Filename → slug: `notes.md` → `/notes`. Link it from the home page with a `ComicPanel`.

### Site metadata & logo

`src/config/site.ts` — name, tagline, URL, and `logo.variants` (random pick each load).

### Styles

`src/styles/global.css` — ink/paper colors and comic panel layout.

## Structure

```
src/
├── assets/covers/          # comic panel cover images
├── config/site.ts
├── content.config.ts
├── content/pages/
├── components/
│   ├── ComicPanel.astro
│   └── Logo.astro
├── layouts/
│   ├── HomeLayout.astro
│   └── ArticleLayout.astro
├── pages/
│   ├── index.astro
│   └── [slug].astro
└── styles/global.css
```
