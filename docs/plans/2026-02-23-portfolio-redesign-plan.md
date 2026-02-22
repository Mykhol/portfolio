# Portfolio Redesign Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Rebuild michaelhowell.nz as a minimal Astro site with a bento grid home page and Markdown blog.

**Architecture:** Static Astro site with Tailwind CSS v4 for styling and content collections for blog posts. Zero JavaScript shipped to the browser. Deployed to Vercel as static output.

**Tech Stack:** Astro 5, Tailwind CSS v4, Markdown content collections, Vercel static deployment.

---

### Task 1: Scaffold Astro Project

Remove all existing source files and initialize a fresh Astro project. Keep only `public/headshot.jpg`, the `docs/` folder, and git history.

**Step 1: Save headshot and clean the project**

```bash
cp public/headshot.jpg /tmp/headshot-backup.jpg
```

Remove all source files, configs, and dependencies:

```bash
rm -rf src/ content/ public/ node_modules/
rm -f package.json package-lock.json yarn.lock tsconfig.json next.config.mjs tailwind.config.ts postcss.config.js .eslintrc.json next-env.d.ts
```

**Step 2: Create the Astro project**

```bash
npm create astro@latest -- . --template minimal --no-install --no-git
```

This creates a minimal Astro project in the current directory. Select defaults if prompted.

**Step 3: Install dependencies**

```bash
npm install
```

**Step 4: Add Tailwind CSS integration**

```bash
npx astro add tailwind
```

Accept the prompts. This installs `@tailwindcss/vite` and updates `astro.config.mjs`.

**Step 5: Install Tailwind Typography plugin**

```bash
npm install @tailwindcss/typography
```

**Step 6: Restore headshot**

```bash
cp /tmp/headshot-backup.jpg public/headshot.jpg
```

**Step 7: Verify dev server starts**

```bash
npm run dev
```

Visit `http://localhost:4321` — should show the default Astro page.

**Step 8: Commit**

```bash
git add -A
git commit -m "feat: scaffold Astro project with Tailwind CSS"
```

---

### Task 2: Base Layout and Global Styles

Create the shared layout with navigation, global CSS with Tailwind, and the base HTML structure.

**Files:**
- Create: `src/layouts/Base.astro`
- Modify: `src/styles/global.css` (create if not exists)
- Modify: `astro.config.mjs` (add site URL)

**Step 1: Configure Astro for the site**

Edit `astro.config.mjs` to set the site URL:

```javascript
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://michaelhowell.nz',
  vite: {
    plugins: [tailwindcss()],
  },
});
```

**Step 2: Create global CSS**

Create `src/styles/global.css`:

```css
@import "tailwindcss";
@plugin "@tailwindcss/typography";

@theme {
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --color-accent: #2563eb;
}
```

**Step 3: Create the base layout**

Create `src/layouts/Base.astro`:

```astro
---
interface Props {
  title?: string;
  description?: string;
}

const { title = 'Michael Howell', description = 'Software engineer, student, tinkerer' } = Astro.props;
const pageTitle = title === 'Michael Howell' ? title : `${title} | Michael Howell`;
---

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content={description} />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
    <title>{pageTitle}</title>
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  </head>
  <body class="bg-white text-neutral-900 antialiased">
    <nav class="max-w-3xl mx-auto px-6 py-8 flex justify-between items-center">
      <a href="/" class="text-sm font-medium text-neutral-900 hover:text-accent transition-colors">michael howell</a>
      <a href="/blog" class="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">blog</a>
    </nav>
    <main class="max-w-3xl mx-auto px-6 pb-16">
      <slot />
    </main>
  </body>
</html>

<style>
  @import '../styles/global.css';
</style>
```

**Step 4: Update the index page to use the layout**

Replace `src/pages/index.astro` with:

```astro
---
import Base from '../layouts/Base.astro';
---

<Base>
  <p>Home page placeholder</p>
</Base>
```

**Step 5: Verify layout renders**

```bash
npm run dev
```

Check that the nav appears with "michael howell" and "blog" links, and the placeholder text renders below.

**Step 6: Commit**

```bash
git add -A
git commit -m "feat: add base layout with nav and global styles"
```

---

### Task 3: Bento Grid Home Page

Build the bento grid home page with all cards.

**Files:**
- Modify: `src/pages/index.astro`

**Step 1: Build the bento grid home page**

Replace `src/pages/index.astro` with the full bento grid layout:

```astro
---
import Base from '../layouts/Base.astro';
import { getCollection } from 'astro:content';

const posts = await getCollection('blog');
const latestPost = posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())[0];
---

<Base>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <!-- Name + Role (spans 2 columns) -->
    <div class="md:col-span-2 bg-neutral-50 rounded-2xl p-8 border border-neutral-100">
      <h1 class="text-3xl font-bold tracking-tight">Michael Howell</h1>
      <p class="mt-2 text-neutral-500 text-lg">Software engineer, student, tinkerer</p>
    </div>

    <!-- Photo -->
    <div class="bg-neutral-50 rounded-2xl overflow-hidden border border-neutral-100">
      <img src="/headshot.jpg" alt="Michael Howell" class="w-full h-full object-cover" />
    </div>

    <!-- Currently -->
    <div class="bg-neutral-50 rounded-2xl p-6 border border-neutral-100">
      <p class="text-xs uppercase tracking-wide text-neutral-400 mb-2">Currently</p>
      <p class="text-sm text-neutral-700">Building emissions tooling at <a href="https://generatezero.co.nz" class="text-accent hover:underline" target="_blank" rel="noopener">Generate Zero</a></p>
    </div>

    <!-- Location -->
    <div class="bg-neutral-50 rounded-2xl p-6 border border-neutral-100">
      <p class="text-xs uppercase tracking-wide text-neutral-400 mb-2">Location</p>
      <p class="text-sm text-neutral-700">Auckland, New Zealand</p>
    </div>

    <!-- Education -->
    <div class="bg-neutral-50 rounded-2xl p-6 border border-neutral-100">
      <p class="text-xs uppercase tracking-wide text-neutral-400 mb-2">Education</p>
      <p class="text-sm text-neutral-700">Computer Systems Engineering<br/>University of Auckland</p>
    </div>

    <!-- Latest Post (spans 2 columns) -->
    {latestPost ? (
      <a href={`/blog/${latestPost.id}`} class="md:col-span-2 bg-neutral-50 rounded-2xl p-6 border border-neutral-100 hover:border-neutral-300 transition-colors block">
        <p class="text-xs uppercase tracking-wide text-neutral-400 mb-2">Latest writing</p>
        <p class="text-sm font-medium text-neutral-900">{latestPost.data.title}</p>
        <p class="text-xs text-neutral-400 mt-1">{latestPost.data.date.toLocaleDateString('en-NZ', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
      </a>
    ) : (
      <div class="md:col-span-2 bg-neutral-50 rounded-2xl p-6 border border-neutral-100">
        <p class="text-xs uppercase tracking-wide text-neutral-400 mb-2">Latest writing</p>
        <p class="text-sm text-neutral-400 italic">Coming soon</p>
      </div>
    )}

    <!-- Social Links -->
    <div class="bg-neutral-50 rounded-2xl p-6 border border-neutral-100">
      <p class="text-xs uppercase tracking-wide text-neutral-400 mb-3">Links</p>
      <div class="flex gap-4">
        <a href="https://github.com/Mykhol" target="_blank" rel="noopener" class="text-neutral-500 hover:text-neutral-900 transition-colors text-sm">GitHub</a>
        <a href="https://linkedin.com/in/michaelhowell" target="_blank" rel="noopener" class="text-neutral-500 hover:text-neutral-900 transition-colors text-sm">LinkedIn</a>
      </div>
    </div>
  </div>
</Base>
```

Note: The `latestPost` logic depends on the blog content collection existing. If it doesn't exist yet, this will error. Create a placeholder collection first (Task 4) or temporarily remove the latestPost logic and add it back after Task 4.

**Step 2: Verify the bento grid renders**

```bash
npm run dev
```

Check: 7 cards in an asymmetric grid on desktop, stacked on mobile. Cards have subtle borders and gray backgrounds.

**Step 3: Commit**

```bash
git add -A
git commit -m "feat: add bento grid home page"
```

---

### Task 4: Blog Content Collection

Set up the Astro content collection for blog posts and create one example post.

**Files:**
- Create: `src/content.config.ts`
- Create: `src/blog/hello-world.md`

**Step 1: Define the content collection schema**

Create `src/content.config.ts`:

```typescript
import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    summary: z.string(),
  }),
});

export const collections = { blog };
```

**Step 2: Create a sample blog post**

Create `src/blog/hello-world.md`:

```markdown
---
title: "Hello, world"
date: 2026-02-23
summary: "First post on the new site."
---

This is a placeholder post to test the blog setup. Replace or delete this once you have real content.
```

**Step 3: Verify the collection loads**

```bash
npm run dev
```

The home page should now show "Hello, world" in the Latest Writing card.

**Step 4: Commit**

```bash
git add -A
git commit -m "feat: add blog content collection with sample post"
```

---

### Task 5: Blog Listing Page

Create the `/blog` page that lists all posts sorted newest first.

**Files:**
- Create: `src/pages/blog/index.astro`

**Step 1: Create the blog listing page**

Create `src/pages/blog/index.astro`:

```astro
---
import Base from '../../layouts/Base.astro';
import { getCollection } from 'astro:content';

const posts = await getCollection('blog');
const sortedPosts = posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
---

<Base title="Blog" description="Thoughts and writing by Michael Howell">
  <h1 class="text-2xl font-bold tracking-tight mb-8">Blog</h1>
  {sortedPosts.length === 0 ? (
    <p class="text-neutral-400 italic">No posts yet.</p>
  ) : (
    <ul class="space-y-6">
      {sortedPosts.map((post) => (
        <li>
          <a href={`/blog/${post.id}`} class="group block">
            <p class="font-medium text-neutral-900 group-hover:text-accent transition-colors">{post.data.title}</p>
            <p class="text-sm text-neutral-500 mt-1">{post.data.summary}</p>
            <p class="text-xs text-neutral-400 mt-1">{post.data.date.toLocaleDateString('en-NZ', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </a>
        </li>
      ))}
    </ul>
  )}
</Base>
```

**Step 2: Verify the blog listing renders**

```bash
npm run dev
```

Navigate to `/blog` — should show the "Hello, world" post with title, summary, and date.

**Step 3: Commit**

```bash
git add -A
git commit -m "feat: add blog listing page"
```

---

### Task 6: Blog Post Page

Create the dynamic blog post page that renders individual Markdown posts.

**Files:**
- Create: `src/pages/blog/[slug].astro`

**Step 1: Create the blog post page**

Create `src/pages/blog/[slug].astro`:

```astro
---
import Base from '../../layouts/Base.astro';
import { getCollection, render } from 'astro:content';

export async function getStaticPaths() {
  const posts = await getCollection('blog');
  return posts.map((post) => ({
    params: { slug: post.id },
    props: { post },
  }));
}

const { post } = Astro.props;
const { Content } = await render(post);
---

<Base title={post.data.title} description={post.data.summary}>
  <article>
    <a href="/blog" class="text-sm text-neutral-400 hover:text-neutral-600 transition-colors mb-6 inline-block">&larr; Back to blog</a>
    <h1 class="text-3xl font-bold tracking-tight mt-2">{post.data.title}</h1>
    <p class="text-sm text-neutral-400 mt-2">{post.data.date.toLocaleDateString('en-NZ', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
    <div class="prose prose-neutral mt-8 max-w-none">
      <Content />
    </div>
  </article>
</Base>
```

**Step 2: Verify the blog post renders**

```bash
npm run dev
```

Navigate to `/blog/hello-world` — should show the post title, date, back link, and rendered Markdown content with Tailwind Typography styling.

**Step 3: Commit**

```bash
git add -A
git commit -m "feat: add blog post page with prose styling"
```

---

### Task 7: SEO and Metadata

Add OpenGraph metadata, favicon, and robots configuration.

**Files:**
- Modify: `src/layouts/Base.astro`
- Create: `public/favicon.svg`

**Step 1: Create a simple favicon**

Create `public/favicon.svg`:

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">M</text></svg>
```

**Step 2: Add OpenGraph tags to the base layout**

Update the `<head>` section of `src/layouts/Base.astro` to include OpenGraph and Twitter meta tags:

Add these tags inside `<head>`, after the existing meta tags:

```html
<meta property="og:title" content={pageTitle} />
<meta property="og:description" content={description} />
<meta property="og:type" content="website" />
<meta property="og:url" content={Astro.url.href} />
<meta name="twitter:card" content="summary" />
<meta name="twitter:title" content={pageTitle} />
<meta name="twitter:description" content={description} />
```

**Step 3: Verify meta tags render**

```bash
npm run dev
```

View page source — confirm OG and Twitter tags are present.

**Step 4: Commit**

```bash
git add -A
git commit -m "feat: add SEO metadata and favicon"
```

---

### Task 8: Production Build and Verify

Run a production build to ensure everything works before deploying.

**Step 1: Build the site**

```bash
npm run build
```

Expected: Successful build with no errors. Output in `dist/` directory.

**Step 2: Preview the build**

```bash
npm run preview
```

Visit `http://localhost:4321` and verify:
- Home page: bento grid renders correctly, all 7 cards visible
- Nav: "michael howell" links to home, "blog" links to blog listing
- Blog listing: shows the sample post
- Blog post: renders Markdown with prose styling
- Responsive: shrink browser to mobile width, grid collapses to single column

**Step 3: Commit any final fixes**

```bash
git add -A
git commit -m "chore: verify production build"
```

---

### Task 9: Vercel Deployment Config

Ensure Vercel can deploy the site as a static build.

**Files:**
- Modify: `astro.config.mjs` (if Vercel adapter is needed)

**Step 1: Check if Vercel adapter is needed**

For a fully static site, Astro's default static output works with Vercel out of the box. No adapter needed. Vercel auto-detects Astro projects.

If deployment fails, install the Vercel adapter:

```bash
npx astro add vercel
```

And update `astro.config.mjs` to use `output: 'static'` with the Vercel adapter.

**Step 2: Commit**

```bash
git add -A
git commit -m "chore: configure for Vercel deployment"
```

---

### Task 10: Clean Up

Remove leftover files from the old Next.js project that weren't caught in Task 1.

**Step 1: Check for leftover files**

```bash
git status
ls -la
```

Look for any files that don't belong (old configs, .next/, etc.). Remove them.

**Step 2: Final commit**

```bash
git add -A
git commit -m "chore: clean up leftover files from old site"
```
