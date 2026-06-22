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

All content lives in plain data modules under [`src/data/`](src/data/) — edit these, not the components:

| File | Section |
|------|---------|
| `personal.ts` | name, title, links, profile image |
| `experiences.ts` | Experience timeline |
| `education.ts` | Education timeline |
| `publications.ts` | Publications (filterable) |
| `projects.ts` | Projects |
| `awards.ts` | Awards |
| `services.ts` | Academic services (reviewing) |
| `skills.ts` | Skills |

Shared content/view types are in [`src/types.ts`](src/types.ts). Presentational
components are in [`src/components/`](src/components/) and pure helpers in
[`src/lib/`](src/lib/); `src/App.tsx` is only the composition tree.

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
