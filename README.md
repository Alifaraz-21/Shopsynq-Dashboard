# ShopSynq Dashboard (Next.js)

Converted from the saved `shopsynq-Dashboard.htm` / `shopsynq-Dashboard-Tab-TimeClock.htm`
snapshots into a standalone Next.js (App Router + TypeScript) dashboard project — separate
from the marketing site.

## Structure
- `app/components/Sidebar.tsx` — nav (My Jobs / Time Clock), fully functional client-side
  routing via `next/link` + `usePathname` for active-tab highlighting
- `app/components/Header.tsx` — top bar
- `app/page.tsx` — "My Jobs" tab (`/`)
- `app/time-clock/page.tsx` — "Time Clock" tab (`/time-clock`)
- `app/globals.css` — the site's compiled styling (custom `.card`, `.btn-primary`, `.nav-item`,
  etc. classes), all base64 font-face data stripped and swapped for `next/font` Inter
- `public/logo.png` — extracted from the embedded base64 logo

## No live links
Every `https://app.shopsynq.ai/...` reference from the original snapshot was removed. The
two dashboard tabs now navigate entirely internally (`/` and `/time-clock`).

## Getting started
```bash
npm install
npm run dev
```
"# Shopsynq-Dashboard" 
