# yuneg11.github.io

Personal academic website for **EungGu Yun** — AI Researcher.
Live at <https://yuneg11.github.io/>.

## Stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite 8](https://vite.dev/) with the [React Compiler](https://react.dev/learn/react-compiler)
- [Tailwind CSS 4](https://tailwindcss.com/) (CSS-first `@theme`, no config file)
- Self-hosted fonts via [Fontsource](https://fontsource.org/) (DM Sans, DM Serif Display)
- Static prerendering (SSG) so the served HTML is fully populated for crawlers and social scrapers
- Package manager: [Bun](https://bun.sh/)

## Editing content

All site content lives in [`src/data.toml`](src/data.toml) — edit it directly, no
code changes needed. It has one table/array per section:

| TOML key | Section |
|----------|---------|
| `[personal]` | name, title, links, profile image |
| `[[experiences]]` | Experience timeline |
| `[[education]]` | Education timeline |
| `[[publications]]` | Publications (filterable) |
| `[[projects]]` | Projects |
| `[[awards]]` | Awards |
| `[[services]]` | Academic services (reviewing) |
| `[[skills]]` | Skills |

`src/content.ts` loads and validates the TOML against the interfaces in
[`src/types.ts`](src/types.ts). Presentational components are in
[`src/components/`](src/components/) and pure helpers in [`src/lib/`](src/lib/);
`src/App.tsx` is only the composition tree.

In author strings, wrap a name in `**double asterisks**` to bold it (used to
highlight the site owner in publication author lists).

## Commands

```bash
bun install        # install dependencies
bun run dev        # start the dev server
bun run lint       # eslint
bun run build      # type-check, build, prerender to dist/
bun run preview    # preview the production build locally
```

## Build & prerender

`bun run build` runs `tsc -b`, builds the client bundle, then does a second
SSR build (`src/entry-server.tsx`) and injects the rendered markup into
`dist/index.html` via [`scripts/prerender.mjs`](scripts/prerender.mjs). The
client (`src/main.tsx`) hydrates that markup.

## Deployment

Pushing to the `v4` branch triggers
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds with
Bun and publishes `dist/` to GitHub Pages.
