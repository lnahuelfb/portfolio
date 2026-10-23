# Prompt para Claude Code

Build a one-page portfolio site with Next.js (App Router, static export) and Tailwind CSS v4, using the files in `portfolio-design/` as the source of truth.

- `DESIGN.md` is the spec: page structure, exact copy, design tokens, layout notes and build/performance rules. Follow it exactly. Do not invent copy, metrics, testimonials or links.
- `mockups/desktop.html` and `mockups/mobile.html` are the visual reference (desktop dark, mobile light). They come from a design tool: ignore `<x-dc>`, `<helmet>`, `support.js`, the `{{...}}` placeholders and the `class Component extends DCLogic` script. Read the markup and inline styles for layout, spacing and colors; the CSS variables in the `<style>` block are the theme tokens.
- Convert inline styles to Tailwind classes using the tokens from `DESIGN.md` (the Tailwind v4 snippet). Split the page into components: Header, Hero, ProofStrip, CaseStudy (with ArchitectureDiagram and SpecTable), Projects, HowIWork, Contact, Footer.
- Theme: `next-themes` (class strategy, system default). Only client components: ThemeToggle and CopyEmailButton.
- Keep every `[bracket]` placeholder and every **[verify]** item as-is and list them at the end so I can fill them in.

Start by proposing the file structure, then build it.
