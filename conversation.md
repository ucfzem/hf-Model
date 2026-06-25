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

### Status / spy page (June 25, 2026)
- `api/status.js` — serverless function exposing Vercel system env vars (commit SHA, branch, author, URL, etc.) — no secrets exposed
- `status.html` — UI page that fetches from `/api/status` and renders deployment metadata
- `vercel.json` — config for function memory/ timeout + no-cache header on API
- Set to `noindex` so it doesn't appear in search results
- URL: https://hf-model.vercel.app/status
- `robots.txt` — allows all crawlers, points to sitemap
- `sitemap.xml` — single URL with xhtml:alternate for all 4 languages (fr, en, es, ar) + x-default
- Updated HTML `<head>` with:
  - Meta description
  - Canonical URL
  - hreflang tags for all languages
  - Open Graph (og:title, og:description, og:url, og:type)
  - Google Search Console verification `<meta name="google-site-verification" content="0eXwLNTkh_ZGhquTMWXv5g-q5SCbH3s6iSBFhyxZaaY">`

### Logo update (June 25, 2026)
- Old single `assets/logo.png` replaced with two theme-aware logos:
  - `assets/logo-light.png` — shown in light mode
  - `assets/logo-dark.png` — shown in dark mode
- `setTheme()` JS now switches both header and footer logo `src` on theme toggle
- Both logos resized to 72px height with transparency preserved

### Multilingual (4 languages)
- Added language switcher in header with flags: 🇫🇷 🇬🇧 🇪🇸 🇲🇦
- Arabic uses Moroccan flag
- Full translations for all text in French, English, Spanish, Arabic
- RTL support for Arabic (`dir="rtl"`)
- Language preference saved in localStorage
- All text content translated: nav, hero, products, footer, badges, buttons
- Updated location: Tangier (Tanger / Tánger / طنجة), year: 2026

### Social links (June 25, 2026)
- Instagram → https://www.instagram.com/hafidaa_roeya
- TikTok → https://www.tiktok.com/@hafida.affaki

### New sections (June 25, 2026)
- **Accessoires** — product grid with 4 items (belt, silk bag, earrings, clutch)
- **Notre Histoire** — brand story
- **Artisans** — craftsmanship
- **Durabilité** — sustainability
- **Contactez-Nous** — contact form
- **FAQ** — accordion with 5 questions
- **Presse** — press mentions
- **Carrières** — careers
- **Livraison & Retours** — shipping & returns info
- **Guide des Tailles** — size guide
- **Politique de Confidentialité** — privacy policy
- All sections fully translated in FR/EN/SP/AR
- Nav updated with Accessoires, Contact, FAQ links
- Smooth scroll offset for fixed header (scroll-padding-top)
