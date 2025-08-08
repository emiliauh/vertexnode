# VertexNode Hosting – One-Page Site

Production-ready single-page marketing site for a server hosting company.

## Stack
- Next.js (App Router) + React + TypeScript
- Tailwind CSS
- Local shadcn-like UI primitives (replace with real shadcn/ui if desired)
- Lucide icons
- next-themes (dark/light)

## Dev
```bash
pnpm i
pnpm dev
```
Open http://localhost:3000

## Build
```bash
pnpm build
pnpm start
```

## Edit pricing / locations
- Plans: `lib/pricing.ts`
- Calculator formula: `estimateCustomPrice()` in `lib/pricing.ts`
- Data centers & latency: `components/NetworkMap.tsx`

## Env vars
```
NEXT_PUBLIC_GTAG_ID=  # optional
NEXT_PUBLIC_PIXEL_ID= # optional
```

## Performance targets
- Lighthouse ≥ 95 (mobile + desktop) with default Next.js optimizations
- No heavy videos; SVG/AVIF/WebP images
- CLS < 0.05 via stable dimensions and sticky header
- LCP < 2.5 s (optimize hero, deploy behind CDN)

## Accessibility
- WCAG 2.2 AA oriented
- Keyboard focus states, `focus-visible` rings
- Reduced motion support

## SEO
- Metadata (OpenGraph/Twitter)
- JSON-LD: Organization, Product, FAQ (see `lib/seo.ts` and `DocsPreview`)
- Semantic headings (H1–H3)

## Testing
Responsive at 360/768/1024/1440; test Chrome/Firefox/Safari. No console errors.

## Notes
- Contact form uses a placeholder submit. Wire to your backend or form service.
- Cookie consent stores preferences in `localStorage`.
- Replace `public/og-cover.png` with an optimized 1200×630 image (<100KB).
