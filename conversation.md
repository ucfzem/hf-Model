# H.A. Models — hf-Model Project

## Links
- **Vercel (primary):** https://hf-model.vercel.app
- **GitHub Pages:** https://ucfzem.github.io/hf-Model/
- **Repository:** https://github.com/ucfzem/hf-Model
- **Conversation backup:** This file

## Changes Made

### Initial setup
- Created project with luxury Moroccan fashion landing page (`index.html`)
- Pushed to `ucfzem/hf-Model` repo
- Enabled GitHub Pages on `main` branch

### Image replacement (June 25, 2026)
- Replaced all external Unsplash image URLs with local assets
- 14 images from provided zip → `assets/caftans/img-01.jpg` through `img-14.jpg`
- All images compressed to under 500 KB each
- Image mapping:
  - **Hero mannequins:** img-01 → img-04
  - **Product grid:** img-01 → img-08
  - **Mother & Daughter section:** img-09 → img-12 (unique images, not reused)

### Migration to Vercel
- Installed Vercel CLI and deployed project
- Connected GitHub repo for auto-deployments
- Production URL: https://hf-model.vercel.app
- GitHub Pages kept as backup

### Rebrand
- "Maison Zahra" → "H.A. Models" throughout the site
- Title, logo, footer, and newsletter heading updated

### Multilingual (4 languages)
- Added language switcher in header with flags: 🇫🇷 🇬🇧 🇪🇸 🇲🇦
- Arabic uses Moroccan flag
- Full translations for all text in French, English, Spanish, Arabic
- RTL support for Arabic (`dir="rtl"`)
- Language preference saved in localStorage
- All text content translated: nav, hero, products, footer, badges, buttons
- Updated location: Tangier (Tanger / Tánger / طنجة), year: 2026
