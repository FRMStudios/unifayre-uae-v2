# Unifayre Foods — Deployment Guide

Everything a developer needs to take this site live on a custom domain.

## What this is

- **Framework:** Next.js 16 (App Router) + React 19
- **Styling:** Tailwind CSS v4
- **Animation:** Framer Motion 12
- **Carousel:** Embla
- **Single-page site:** the entire landing experience renders at `/` and `/vegetarian` (same content; vegetarian is kept for backward-compatible links)
- **Lead form:** POSTs to `/api/lead` which optionally relays to Formspree

## Source code

**Canonical:** https://github.com/FRMStudios/unifayre-uae-v2

The production branch is `main`. Every commit on `main` auto-deploys to Vercel.

If your team is given a zip file instead of GitHub access, extract it and run the same commands below.

---

## Prerequisites

| Requirement | Version |
|---|---|
| Node.js | **20.x** or **22.x** (LTS) |
| npm | 10+ |
| Git | any modern version |

---

## Local build

```bash
# 1. Clone or extract
git clone https://github.com/FRMStudios/unifayre-uae-v2.git
cd unifayre-uae-v2

# 2. Install
npm install

# 3. Dev server
npm run dev          # http://localhost:3000

# 4. Production build
npm run build
npm run start        # serves the production build on http://localhost:3000
```

---

## Environment variables

Only the lead form uses env vars, and **both are optional** — if neither is set, lead submissions are logged to the server console but not forwarded.

Create `.env.local` at the repo root with:

```env
# Where the lead form forwards submissions (Formspree, Zapier, your own webhook, etc.)
FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID

# Optional CC email for every lead
FORMSPREE_CC_EMAIL=leads@unifayre.com
```

On Vercel: add the same two vars under **Project Settings → Environment Variables**.

---

## Deployment options

### Option A — Vercel (recommended; what's running today)

The repo is already connected. Two paths:

1. **Continue with the current Vercel project.**
   - Hand the project ownership to the client's Vercel account, OR add the dev as a team member.
   - Add the custom domain in **Settings → Domains** → enter `unifayre.com` (or whatever domain) → Vercel issues SSL and gives you DNS records.
   - Point DNS at Vercel (see DNS section below).
   - That's it — the site is live on the custom domain in 1–5 minutes after DNS propagates.

2. **Fork to a new Vercel project.**
   - Connect the GitHub repo to your new Vercel project.
   - Framework preset: **Next.js** (auto-detected).
   - Build command: `npm run build`
   - Output directory: leave blank (Next.js managed).
   - Install command: `npm install`
   - Add env vars (see above).
   - Add the custom domain.

### Option B — Self-hosted Node server

```bash
npm run build
PORT=3000 npm run start
```

Put it behind nginx/Caddy and add SSL via Let's Encrypt. Use a process manager (`pm2`, `systemd`).

Minimum host specs: 1 vCPU, 1 GB RAM. Static-asset traffic is heavy in CDN terms; consider Cloudflare in front.

### Option C — Docker

A minimal Dockerfile (none committed yet — add if you go this route):

```dockerfile
FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["node", "server.js"]
```

(Add `output: 'standalone'` to `next.config.ts` to enable the standalone build.)

---

## Custom domain DNS (apex + www)

Whichever host you use, point DNS at it. For Vercel:

| Record | Name | Value |
|---|---|---|
| A | `@` | `76.76.21.21` |
| CNAME | `www` | `cname.vercel-dns.com` |

For other hosts, follow that host's instructions. SSL is automatic on Vercel / Netlify / Cloudflare Pages. For self-hosted, use Let's Encrypt via Certbot or Caddy.

---

## File map (what lives where)

```
unifayre-uae-v2/
├── src/
│   ├── app/
│   │   ├── layout.tsx          ← site-wide metadata, font, providers
│   │   ├── page.tsx            ← the live landing page (/)
│   │   ├── vegetarian/page.tsx ← same content, /vegetarian alias
│   │   └── api/lead/route.ts   ← lead form POST handler
│   ├── components/
│   │   ├── v2/                 ← every section component on the live page
│   │   │   ├── HeroCarousel.tsx
│   │   │   ├── OurRange.tsx              (Product Portfolio)
│   │   │   ├── ImageFeatureSection.tsx   (Our Story)
│   │   │   ├── WhereWeFit.tsx
│   │   │   ├── WhyUnifayreDynamic.tsx
│   │   │   ├── TrustedByDark.tsx
│   │   │   ├── LeadFormDark.tsx
│   │   │   ├── VegLandingNav.tsx
│   │   │   └── LandingFooter.tsx
│   │   ├── ui/                 ← lightbox, scroll progress, etc.
│   │   └── sections/           ← legacy v1 (unused on the live page)
│   └── lib/
│       ├── data.ts             ← INTEREST_CHIPS, COUNTRIES, BUSINESS_TYPES, WhatsApp number
│       └── products.ts         ← every SKU (name, image, category, tag, scope)
└── public/
    ├── brand/                  ← Unifayre wordmark PNGs
    ├── images/veg/
    │   ├── heroes/             ← hero-{1,2,3}.png + hero-{1,2,3}-mobile.png
    │   ├── categories/         ← *-portfolio.png + *-portfolio-mobile.png + *-banner.png
    │   ├── lifestyle/          ← Where We Fit collage
    │   ├── story/              ← Our Story plant photos
    │   └── why/                ← Why Unifayre rotating background
    ├── products/               ← every SKU thumbnail (~70 files)
    └── qsr/                    ← QSR brand logos for the marquee
```

### Replacing an image

Drop the new file at the same path with the same filename. Commit and push. The deploy picks it up automatically. No code change needed unless the filename or path changes.

### Adding a new SKU

Edit `src/lib/products.ts`. Add a row with `name`, `image`, `category`, `scope`, optional `tag`. Drop the matching thumbnail under `public/products/{category}/{slug}.jpg`.

### Changing a section's copy

Each section's text lives inline in its component file (under `src/components/v2/`). Search for the heading or sentence; edit; commit.

---

## Lead form storage

The current `/api/lead` handler:

1. Logs every submission to the server console (visible in Vercel logs).
2. If `FORMSPREE_ENDPOINT` is set, forwards the payload to Formspree which emails it to whichever inbox the form is configured for.

To replace Formspree with something else (Zapier, Make, a CRM webhook, your own SMTP), edit `src/app/api/lead/route.ts`. The payload shape is documented inline.

---

## Things the dev should verify before going live

1. **Build passes** locally with `npm run build`.
2. **All images load** — open every section in the browser and watch the Network tab for 404s.
3. **Lead form works end-to-end** with the production `FORMSPREE_ENDPOINT` set.
4. **Custom domain SSL** — confirm `https://` resolves with a valid cert.
5. **Mobile responsive** — tested on a real phone in addition to DevTools.
6. **WhatsApp link** — `src/lib/data.ts` → `WHATSAPP_URL` and `WHATSAPP_DISPLAY` point at the correct number.
7. **Footer email** — `LandingFooter.tsx` references `uae@unifayre.com`. Update if needed.

---

## Repo conventions

- All routes / paths are URL-safe (lowercase, dashes, no spaces, no `&`).
- All visible copy uses straight hyphens, not em-dashes.
- The Unifayre wordmark is `/public/brand/unifayre-logo-dark.png` (white, for dark backgrounds) and `/public/brand/unifayre-logo-light.png` (black, for light backgrounds).
- The desktop and mobile category banners coexist: mobile versions have a `-mobile` suffix.
