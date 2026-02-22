# Portfolio Redesign Design

## Purpose

Personal brand website with occasional blog writing. Not job-seeking — a curated online presence at michaelhowell.nz.

## Tech Stack

- **Framework:** Astro (static site generation, zero JS by default)
- **Styling:** Tailwind CSS
- **Content:** Markdown files via Astro content collections
- **Deployment:** Vercel (static output)
- **Domain:** michaelhowell.nz

## Pages

### Home Page — Bento Grid

An asymmetric grid of cards creating a curated dashboard feel.

**Cards:**
- Name + role (large) — "Michael Howell" with tagline
- Photo — headshot cropped into a grid tile
- Currently — what you're working on (e.g., "Building emissions tooling at Generate Zero")
- Location — "Auckland, NZ"
- Latest post — auto-pulls most recent blog post title + date
- Social links — GitHub, LinkedIn, etc. as icons
- Education — University of Auckland, Computer Systems Engineering

**Responsive:** 3-4 column grid on desktop, single column stack on mobile. Cards have subtle gray tint or thin borders. Minimal interaction — clickable where appropriate, subtle hover feedback.

### Blog Listing (`/blog`)

Simple list of posts: title, date, one-line summary. Sorted newest first. No pagination.

### Blog Post (`/blog/[slug]`)

Title large at top, date underneath, clean prose styling via Tailwind Typography. Markdown support for headings, code blocks (syntax highlighted), images, links, lists. Back-to-blog link.

**Content format:** `.md` files with frontmatter (title, date, summary).

## Visual Style

- **Colors:** Light background (white/near-white), dark text, one subtle accent color, card backgrounds with slight gray tint or thin border
- **Typography:** Sans-serif (system font stack or Inter), clean sizing, generous line height
- **Navigation:** Top of page — "michael howell" left (links home), "blog" right. Not sticky. No hamburger.
- **Footer:** Minimal or none
- **Performance:** Zero JS shipped by default. Static HTML + CSS.

## Project Structure

```
/
├── src/
│   ├── layouts/
│   │   └── Base.astro
│   ├── pages/
│   │   ├── index.astro
│   │   └── blog/
│   │       ├── index.astro
│   │       └── [slug].astro
│   ├── content/
│   │   └── blog/
│   └── styles/
│       └── global.css
├── public/
│   └── headshot.jpg
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## What's Being Removed

Everything from the existing Next.js site. Clean slate — no old blog posts, no old components. Only `public/headshot.jpg` is carried over.
