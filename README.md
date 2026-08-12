# Orange Blossom Preschool — Plain React Refactor

A refactor of the original TanStack Start + TypeScript app to **plain Vite + React (JavaScript)** using **react-router-dom**. All CSS (Tailwind v4 utility classes and design tokens) and all page-level logic were preserved unchanged. Only the framework layer was swapped.

## What was replaced

| Original | Now |
| --- | --- |
| TanStack Start (SSR) | Vite (SPA) |
| TanStack Router (file-based) | `react-router-dom` v6 (declarative) |
| TypeScript `.ts` / `.tsx` | JavaScript `.js` / `.jsx` |
| Route `head.meta` for `<title>`/OG tags | `useDocumentTitle` hook + static `<meta>` in `index.html` |
| `loader` + `useLoaderData` (programme detail) | `useParams` + array `.find()` in-component |
| `Link params={{ programmeId: p.id }}` | `Link to={`/programmes/${p.id}`}` |
| `activeProps={{className}}` | `NavLink className={({isActive}) => ...}` |

## What was **not** changed

- Every Tailwind utility class in every component (same visual output).
- `src/styles.css` — copied byte-for-byte (design tokens, `@utility` helpers, colors).
- All page copy, images, form logic, tab logic, accordion FAQs.
- Data in `src/data/programmes.js` (types stripped only).

## Run locally

```sh
npm install
npm run dev
```

Then open http://localhost:5173.

## Build

```sh
npm run build
npm run preview
```
