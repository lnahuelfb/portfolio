# One-page portfolio design spec: Direction B, "Ops console"

For: Nahuel Fernandez Beschtedt. Build target: a static Next.js page (App Router, `output: 'export'`) with Tailwind.

**How to read this spec**
- Every line of copy comes from your brief. Lines marked **[verify]** are wording I inferred from your facts. Check them before shipping.
- Text in `[brackets]` is a placeholder for you to fill in.
- I left out anything that only looks like a live dashboard: no fake "uptime 99.9%", no blinking status dots, no live counters. The console look comes from the type, the borders and the key–value tables, not from made-up data.

---

## 1. Page structure (scan order)

| # | Section | Anchor | Job in the 60-second scan |
|---|---|---|---|
| 0 | Top bar | — | Name, jump links, a persistent email button |
| 1 | Hero | `#top` | What I do, with the email button |
| 2 | Proof strip | — | Four hard numbers from the case study, readable at a glance |
| 3 | Case study | `#work` | The proof: context, architecture diagram, spec table |
| 4 | Personal projects | `#projects` | Two live demos you can click |
| 5 | How I work | `#process` | How a pilot runs, so the next step feels low-risk |
| 6 | Contact | `#contact` | Email, with a promise to reply |
| 7 | Footer | — | Links and a theme toggle |

---

## 2. Copy and layout, section by section

### 0 · Top bar (sticky, 56px tall)

- Left: wordmark **Nahuel Fernandez** in Geist 600, 15px.
- Right (desktop): `Case study` · `Projects` · `How I work` in Geist Mono 13px, muted. Then a small outline button **Email me**.
- Right (mobile): only the **Email me** button and the theme toggle. No hamburger menu: the page is short enough to scroll.
- Background: `--bg` at 85% opacity with `backdrop-blur-sm` and a 1px bottom border in `--border`. That is the only blur on the page.

### 1 · Hero

**Eyebrow** (Geist Mono 12px, uppercase, muted, with a 40px round headshot to its left):
> FULL-STACK DEVELOPER · ARGENTINA (UTC-3)

**Headline** (display size):
> Reliable data collection and automation, built to keep running.

**Subline** (body-lg, muted, at most 60 characters per line):
> I build scrapers, data pipelines and the systems around them: job queues, retries, recovery after failures and monitoring. I work async, with clear written updates.

**Actions:**
- Primary button: **Email me →**, which opens `mailto:nahuel@yourdomain.com?subject=Pilot%20project`
- Text links: `LinkedIn ↗` and `GitHub ↗` (Geist Mono 14px, muted, accent on hover)

**Right column: the "What I build" panel** (a card in `--surface` with a 1px border, a title bar and key–value rows in mono):

```
┌ what-i-build ─────────────────────────────┐
│ collect    web sources · APIs · browsers  │
│ queue      Redis job queues, split by load│
│ recover    retries · resume after failure │
│ watch      monitoring · alerts            │
│ ship       API + web app                  │
├───────────────────────────────────────────┤
│ stack  TypeScript Node.js React Next.js   │
│        PostgreSQL Prisma Python FastAPI   │
│        Playwright Redis                   │
└───────────────────────────────────────────┘
```

- The title bar reads `what-i-build` on the left. On the right are three 8px circles in `--border` (no traffic-light colors).
- The row keys are accent-colored, Geist Mono 13px. The values use `--text`.
- **[verify]** the "alerts" wording under `watch`. If you don't set up alerts, write `monitoring · logs`.

**Layout:** on desktop, 12 columns: text spans 7, panel spans 5, vertically centered. Top padding is 120px, bottom 80px. On mobile everything stacks in one column, the panel follows the actions, and the stack rows wrap.

### 2 · Proof strip

Directly under the hero: a full-width bordered row of four cells separated by 1px dividers.

| Value (Geist 600, 32px) | Label (mono 12px, muted, uppercase) |
|---|---|
| 38 | DATA SOURCE MODULES |
| ~1,700 | AUTOMATED TESTS |
| ~3 months | BUILT SOLO |
| 3–4 min | PER REPORT |

Caption under the strip (small, muted): *From the case study below. Report time measured on the first 20 studies.*

On mobile the four cells become a 2×2 grid.

### 3 · Case study `#work`

**Section label:** `01 / CASE STUDY` (mono, accent)

**Title:**
> A due diligence report platform, built solo

**Intro** (body-lg):
> A web platform that produces due diligence reports on people and companies. It collects data from 38 source modules in parallel and assembles the results into one report. The client uses it in production, internally. I built the backend, the API and the web app on my own in about three months.

**Architecture diagram.** Build it with HTML and CSS, not as an image, so it reflows on small screens:

```
[ Sources ]  →  [ Redis queues ]  →  [ Workers ]  →  [ API ]  →  [ Web app ]
 38 modules      one per module,      Python ·        FastAPI ·    React ·
 21 people       split by load        Playwright      MySQL        TypeScript
 17 companies
```

- Each node is a card in `--surface` with a 1px border and 8px radius. Its name is in Geist 600, 15px; its details are in mono 12px, muted.
- The "Redis queues" node has an accent-colored border and label, because the queues are the core of the system.
- Connectors are 1px lines in `--border-strong`, with a small chevron (`›`) in muted color.
- On desktop the five nodes sit in a row of equal widths, with a 24px gap that holds the connector. On mobile they form a vertical stack with a 16px down-chevron between nodes.
- Caption (small, muted): *Simplified. Source names are left out for confidentiality.*
- **[verify]** that the workers really run Python/Playwright and that MySQL sits behind the API. Adjust the node labels to match your actual layout.

**Key points** (three short blocks in a row on desktop, stacked on mobile; mono label, then 1–2 lines of body text):

1. `ISOLATION`: Each source module runs on its own Redis queue, split by load, so a slow source doesn't hold up the rest of the report. **[verify]**
2. `TESTING`: About 1,700 automated tests, and CI runs on every pull request.
3. `DELIVERY`: An API and a web app in React and TypeScript, used internally by the client in production.

**Spec table** (key–value, mono keys, 1px row dividers, max width 720px):

| Key | Value |
|---|---|
| role | Sole developer (backend, API, front end) |
| sources | 38 modules: 21 for people, 17 for companies |
| queues | Redis, one queue per module, split by load |
| backend | Python, FastAPI, Playwright, Redis, MySQL |
| front end | React, TypeScript |
| quality | ~1,700 automated tests · CI on every pull request |
| timeline | ~3 months |
| report time | ~3–4 minutes (first 20 studies) |
| status | In production, used internally by the client |
| sources used | Public and third-party web sources |

Below the table, in small muted text: *Client and data sources anonymized.*

### 4 · Personal projects `#projects`

**Section label:** `02 / PERSONAL PROJECTS`

**Title:**
> Two things I built for myself

Two cards side by side on desktop, stacked on mobile. Each card holds: a name, a one-line description, stack tags and two links.

**Card 1**
- Name: **[Project name]**
- Description: > A credit-card and debt management app. [Add one line on what a user does with it.]
- Tags: React · TypeScript · Node.js · Express · PostgreSQL · Prisma · Zod · TanStack Query · JWT
- Links: `Live demo ↗` · `Source ↗`

**Card 2**
- Name: **Turnealo**
- Description: > An appointment-management SaaS. [Add one line on who it's for.]
- Tags: Next.js · [rest of stack]
- Links: `Live demo ↗` · `Source ↗`

**Card style:** `--surface` background, 1px border, 24px padding. Tags are mono 12px pills: 1px border, 4px radius, muted text. On hover, the card border changes to `--border-strong`. Nothing moves. No screenshots here: they would compete with the case study and add weight to the page. If you add them later, use one 16:10 image per card, lazy-loaded.

### 5 · How I work `#process`

**Section label:** `03 / HOW I WORK`

**Title:**
> Start small, in writing

**Steps** (a numbered vertical list on desktop: number column, then title and body; the numbers are mono and accent-colored):

1. **You describe the problem by email.** Tell me what data you need, where it comes from and how often. A few paragraphs is enough.
2. **We agree on a small fixed-scope pilot.** One clear deliverable, scope agreed in writing before I start, so you can judge the work before committing to more.
3. **I work async and keep you updated in writing.** You get regular written updates on what's done, what's next and any blockers, with no need to schedule meetings.
4. **Optional: monthly maintenance.** Websites and data sources change, and scrapers break when they do. If you want, I keep things running after delivery.

**Side note** (a small bordered box: mono label `TIME ZONE`):
> I'm on UTC-3. That overlaps with the full US business day and with European afternoons.

**[verify]** the update cadence. If you can commit to one, state it (for example, "updates twice a week") instead of "regular".

### 6 · Contact `#contact`

A centered card, max width 640px, with 48px padding and a 1px accent-colored top border.

- 64px headshot, centered.
- **Title:** > Have a data collection or automation problem?
- **Body:** > Send me a short description and I'll reply within one business day with questions or a pilot proposal.
- **Primary button:** **Email nahuel@yourdomain.com**, a `mailto:` link with the subject prefilled
- Next to it, a small icon button labeled `Copy email`. On click it copies the address and changes its label to "Copied" for 2 seconds. This helps visitors on a desktop without a mail client.
- **Links row:** `LinkedIn ↗` · `GitHub ↗`

### 7 · Footer

One row with a top border, mono 12px, muted.
- Left: `© 2026 Nahuel Fernandez Beschtedt`
- Right: `LinkedIn` · `GitHub` · theme toggle (sun/moon icon, 32px hit area)

---

## 3. Design tokens

### Colors (CSS variables)

| Token | Dark (default) | Light | Use |
|---|---|---|---|
| `--bg` | `#0B0D10` | `#F7F8FA` | Page background |
| `--surface` | `#12161B` | `#FFFFFF` | Cards, panel, diagram nodes |
| `--surface-2` | `#181D23` | `#F0F2F5` | Panel title bar, tag hover |
| `--border` | `#232A33` | `#E2E5EA` | Default 1px borders |
| `--border-strong` | `#323B47` | `#C9CED6` | Hover, connectors |
| `--text` | `#E6E8EB` | `#0B0D10` | Headings, body |
| `--muted` | `#8B95A3` | `#5B6472` | Secondary text, labels |
| `--accent` | `#F5A524` | `#A84D08` | Labels, links on hover, key highlights |
| `--accent-fg` | `#0B0D10` | `#FFFFFF` | Text on the accent button |
| `--accent-soft` | `rgba(245,165,36,.12)` | `rgba(180,83,9,.08)` | Queue node fill, focus ring halo |

All text/background pairs above meet WCAG AA. The amber accent is reserved for labels, the primary button, focus states and the queue node. It is never used for long passages of body text.

### Typography

Fonts: **Geist** and **Geist Mono**, loaded with `next/font` (from the `geist` package or Google Fonts), self-hosted with `display: swap`. That means two font families and nothing else.

| Token | Size / line height (desktop) | Mobile | Weight | Tracking |
|---|---|---|---|---|
| display | 52 / 56 | 36 / 40 | 600 | -0.025em |
| h2 | 32 / 38 | 26 / 32 | 600 | -0.02em |
| h3 | 18 / 26 | 18 / 26 | 600 | -0.01em |
| body-lg | 18 / 30 | 17 / 28 | 400 | 0 |
| body | 16 / 26 | 16 / 26 | 400 | 0 |
| small | 14 / 20 | 14 / 20 | 400 | 0 |
| mono-label | 12 / 16, uppercase | same | 500 | 0.08em |
| mono-data | 13 / 20 | 13 / 20 | 400 | 0 |
| stat | 32 / 36 | 28 / 32 | 600 | -0.02em |

### Spacing, radius and layout

- Base unit is 4px. Use Tailwind's default scale.
- Container: `max-w-[1120px] mx-auto px-5 md:px-8`.
- Section padding: `py-16` on mobile, `md:py-24` on desktop. Sections are separated by a 1px `--border` line, not by background changes.
- Inside a section: label → 12px → title → 16px → intro → 40px → content.
- Radius: 8px for cards, the panel and diagram nodes; 6px for buttons; 4px for tags.
- Borders are always 1px. There are no shadows in dark mode; in light mode cards get `0 1px 2px rgba(11,13,16,.04)`.
- Buttons are 44px tall (40px for the top-bar button), with 18px horizontal padding and Geist 500, 15px.
- Focus: `outline: 2px solid var(--accent); outline-offset: 2px` on every interactive element.
- Breakpoints: Tailwind defaults. Layouts switch at `md` (768px); the hero split starts at `lg` (1024px).

### Tailwind v4 snippet

```css
/* app/globals.css */
@import "tailwindcss";

@custom-variant dark (&:where(.dark, .dark *));

:root {
  --bg:#F7F8FA; --surface:#FFFFFF; --surface-2:#F0F2F5;
  --border:#E2E5EA; --border-strong:#C9CED6;
  --text:#0B0D10; --muted:#5B6472;
  --accent:#A84D08; --accent-fg:#FFFFFF; --accent-soft:rgba(180,83,9,.08);
}
.dark {
  --bg:#0B0D10; --surface:#12161B; --surface-2:#181D23;
  --border:#232A33; --border-strong:#323B47;
  --text:#E6E8EB; --muted:#8B95A3;
  --accent:#F5A524; --accent-fg:#0B0D10; --accent-soft:rgba(245,165,36,.12);
}

@theme inline {
  --color-bg: var(--bg);
  --color-surface: var(--surface);
  --color-surface-2: var(--surface-2);
  --color-border: var(--border);
  --color-border-strong: var(--border-strong);
  --color-text: var(--text);
  --color-muted: var(--muted);
  --color-accent: var(--accent);
  --color-accent-fg: var(--accent-fg);
  --color-accent-soft: var(--accent-soft);
  --font-sans: var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif;
  --font-mono: var(--font-geist-mono), ui-monospace, monospace;
}

body { background: var(--bg); color: var(--text); }
```

Theme handling: use `next-themes` with `attribute="class"`, `defaultTheme="system"` and `enableSystem`. It follows the visitor's OS setting, offers a manual toggle and avoids a flash of the wrong theme. If you'd rather make it dark-first, set `defaultTheme="dark"`.

---

## 4. Layout notes

### Desktop (≥1024px)
- Hero: a 7/5 split.
- Proof strip: four equal cells.
- Diagram: one horizontal row of five nodes.
- Key points: three columns.
- Spec table: one column, 720px wide.
- Projects: two columns.
- How I work: steps take 8 columns, the time-zone box takes 4 and sticks at `top-24`.
- Contact: a centered card.
- When a visitor jumps to an anchor, the sticky top bar must not cover the heading. Set `scroll-margin-top: 72px` on the sections.

### Tablet (768–1023px)
- The hero stacks, with the panel at 100% width below the actions.
- The diagram stays horizontal if every node fits at ≥128px wide; otherwise it switches to the vertical layout. A simpler rule: horizontal only from `lg` up.

### Mobile (<768px)
- One column, 20px side padding.
- Order: eyebrow → headline → subline → buttons → panel → proof strip (2×2) → case study.
- The **Email me** button is full width in the hero. The top bar keeps its small email button, so a contact option stays visible while scrolling.
- The diagram is a vertical stack. The spec table becomes stacked key/value pairs (key above value) so long values don't squeeze.
- Tap targets are at least 44px. Body text never goes below 16px.

---

## 5. Build and performance notes

- Static export. No client JavaScript except the theme toggle and the copy-email button: keep everything else as server components.
- Images: only the headshot. Export it at 128×128 and 192×192 (AVIF/WebP) and serve it with `next/image` and `priority` in the hero. No other images, icons are inline SVG (lucide-react or hand-written).
- Motion: only color and border transitions of 150ms. Respect `prefers-reduced-motion`. No scroll animations, no parallax, no typing effects.
- SEO and sharing: set the `<title>` to "Nahuel Fernandez · Data collection and automation developer" and reuse the subline as the meta description. Make one OG image with Next's `ImageResponse`: dark background, the headline and your name.
- Accessibility: use semantic `<header>`, `<main>`, `<section aria-labelledby>`, `<footer>`. Give the diagram `role="img"` and an `aria-label` that spells out the flow. All external links get `rel="noopener"` and a visually hidden "(opens in new tab)" label.
- Before launch: replace the placeholder email address, fill every `[bracket]` and resolve every **[verify]**.
