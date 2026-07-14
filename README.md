# Travel planner platform

Travel planner platform — Next.js 15 + Contentful CMS

---

## Quick Start

1. **Clone the repository**

   ```
   git clone <repo-url>
   cd travel-planner-platform
   ```

2. **Copy and configure environment variables**

   ```
   cp .env.example .env.local
   ```

   Edit `.env.local` and fill in your Contentful credentials (see below for all required variables).

3. **Install dependencies**

   ```
   npm install
   ```

4. **Run the development server**

   ```
   npm run dev
   ```

   The app runs on [http://localhost:3010](http://localhost:3010).

---

## Environment Variables

The following environment variables are required (see `.env.example`):

- `CONTENTFUL_SPACE_ID` — Your Contentful Space ID
- `CONTENTFUL_DELIVERY_TOKEN` — Your Contentful Content Delivery API token

Add these to your `.env.local` file before running the app.

---

## Tech Stack

- **Frontend:** Next.js 15 (App Router, TypeScript, Tailwind CSS)
- **CMS:** Contentful (data fetched via Contentful JS SDK)
- **Image Optimization:** next/image
- **Routing:** next/link
- **Fonts:** next/font/google (Inter)
- **Styling:** Tailwind CSS

---

## Coding Rules (MANDATORY)

**All code must follow these rules. Violations cause build errors.**

1. **'use client' Directive:**  
   - Place `'use client'` as the very first line in any file using React hooks, event handlers, or browser APIs.
   - Omit only for pure async server components (no hooks, no event handlers).
   - When in doubt, add `'use client'`.

2. **Import Paths:**  
   - Always use the `@/` alias for imports.  
   - **Correct:** `import Header from '@/components/Header'`  
   - **Wrong:** `import Header from '../components/Header'` (build error)

3. **Images:**  
   - Use `next/image` for all images.  
   - Never use bare `<img>` tags.

4. **Links:**  
   - Use `next/link` for all internal navigation.  
   - Never use bare `<a>` tags for internal links.

5. **Fonts:**  
   - Use `next/font/google` for fonts.  
   - Never use `<link>` CDN tags in JSX or HTML.

6. **No Bare React Import:**  
   - Do not write `import React from "react"` (not needed in Next.js 13+).

7. **next/dynamic:**  
   - Never use `dynamic()` with `{ ssr: false }` in a Server Component.
   - If you need `ssr: false`, the file must have `'use client'` as the first line.
   - In Server Components, import components directly.

8. **Data Fetching:**  
   - Use async/await directly in Server Components.
   - Never use `getServerSideProps`, `getStaticProps`, or `getInitialProps`.

9. **TypeScript:**  
   - Strict types only — no `any`, no implicit any.
   - Always define a `Props` interface/type for every component.

10. **Page Metadata:**  
    - Every page file must export `metadata` or `generateMetadata`.

11. **Styling:**  
    - Use Tailwind CSS utility classes.
    - Avoid inline `style={{}}` objects unless unavoidable.

12. **Async Params:**  
    - In Next.js 15, page props (`params`, `searchParams`) are Promises.
    - Example:  
      ```ts
      type Props = { params: Promise<{ slug: string }> }
      const { slug } = await params
      ```

---

## Project Structure

- `/app` — Next.js App Router pages and layouts
- `/components` — React components (always import via `@/components/...`)
- `/lib` — Contentful SDK and utility functions
- `/styles` — Tailwind CSS and global styles

---

## Data Layer

- All data is fetched directly from Contentful using the [contentful JS SDK](https://www.contentful.com/developers/docs/javascript/tutorials/using-js-cda-sdk/).
- Space ID and Delivery Token are loaded from environment variables.

---

## Design Reference

- Homepage includes: hero section, featured destinations, search, and brand introduction.
- See Figma/design files for layout and component details.

---

## Support

For issues or questions, open a GitHub issue or contact the project maintainer.

---

**Happy travels!**