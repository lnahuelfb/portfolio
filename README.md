# nahuelfb.com

Source of my one-page portfolio: [nahuelfb.com](https://nahuelfb.com).

It is a sales page for B2B clients who need web data collection and automation (scrapers, data pipelines, job queues, retries and monitoring). Because performance is part of that pitch, the site is built to load as fast as possible everywhere.

## Performance

Lighthouse on the live site, run on 25 Oct 2026 in a clean browser profile:

| | Performance | Accessibility | Best practices | SEO |
|---|---|---|---|---|
| Desktop | 100 | 100 | 100 | 100 |
| Mobile | 97 | 100 | 100 | 100 |

How it stays fast:

- **Static export** (`output: "export"`): every page is built once, so Vercel only serves files from its CDN. There is no server work per visit.
- **Almost no client JavaScript.** Everything is a server component except the theme toggle and the copy-email button. The first load is about 179 KB of gzipped JS, which is mostly the React and Next.js runtime.
- **Inline CSS** (Tailwind v4, `experimental.inlineCss`), so styles never block the first paint.
- **Fonts:** Geist and Geist Mono, self-hosted through `next/font` with `display: swap`. No third-party requests.
- **Images:** the only image is the 192 px WebP headshot (3 KB). Icons are inline SVG and the architecture diagram is plain HTML and CSS, so it reflows on small screens.
- **Motion:** only 150 ms color transitions, and none with `prefers-reduced-motion`.
- **Caching and headers:** `vercel.json` sets security headers and the content type of the Open Graph image. Hashed assets get immutable caching from Vercel.

## Stack

- [Next.js](https://nextjs.org) (App Router, static export) and React
- [Tailwind CSS](https://tailwindcss.com) v4, with design tokens as CSS variables
- [next-themes](https://github.com/pacocoursey/next-themes) for light and dark mode (system default, no flash)
- TypeScript
- Vercel for hosting and cookie-free analytics, Cloudflare for DNS

## Accessibility

Semantic landmarks, a skip link, 44 px touch targets, visible focus rings, WCAG AA contrast in both themes, and a text alternative for the architecture diagram. The copy-email button reports success and failure to screen readers.

## Project structure

```
app/            layout, page, Open Graph image, robots and sitemap
components/     one component per section (Hero, CaseStudy, HowIWork, ...)
lib/site.ts     contact details, site URL and the availability flag
public/         headshot
portfolio-design/   design spec and mockups the site was built from
```

The spec in `portfolio-design/DESIGN.md` is the source of truth for the tokens, layout and copy.

## Run it locally

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Other scripts:

```bash
npm run build       # static export to ./out
npm run start       # serve ./out locally
npm run typecheck
```

## Configuration

Everything that changes between deployments lives in `lib/site.ts`: name, email, social links, the site URL and `available`, which shows or hides the "taking on new pilots" line. The URL can also be set with the `NEXT_PUBLIC_SITE_URL` environment variable.

## Notes

- Dependencies are updated weekly by Dependabot, with minor and patch updates grouped into one pull request.
- The case study on the page is real client work and is anonymized, so its source is not public.
