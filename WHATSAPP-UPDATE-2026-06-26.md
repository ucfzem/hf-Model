# WhatsApp Order Buttons + Comment Commander — 2026-06-26

## Summary
Added WhatsApp-based ordering to all products and a new "How to Order" section.

## Changes

### Product Cards
- Replaced all 8 "Quick Add" buttons with green **"Commander via WhatsApp"** links
- Each link opens WhatsApp with pre-filled message: product name + price
- WhatsApp number: +212641904359
- CSS: Green (#25D366) hover button, appears on card hover

### New Section: "Comment Commander"
- 3-step ordering guide:
  1. Choose your piece (browse + click WhatsApp button)
  2. Chat with us (team confirms availability, sizing, pricing)
  3. Pay securely (bank transfer, PayPal, COD in Morocco)
- CTA button: "Commencer ma commande" → WhatsApp
- Translations in FR, EN, ES, AR

### i18n
- Replaced `quick-add` key with `order-whatsapp` in all 4 languages
- Added 8 new translation keys for the "How to Order" section

### vercel.json
- Added `buildCommand: ""`, `installCommand: ""`, `outputDirectory: "."`, `framework: null`
- Prevents Vercel from running `npm run build` on static HTML site

## Commits
- `07825bd` — Add WhatsApp order buttons + Comment Commander section
- `5feaf3e` — Fix vercel.json: skip build for static site

## Deployment
- **Vercel**: https://hf-model.vercel.app/ (production)
- **Deploy ID**: `dpl_6qMoTadJ9Cs5anhXWpnqbZPcAxGx`
