# yuneg11.github.io

Personal website and CV, both generated from a single [`data.toml`](data.toml).

- Website: <https://yuneg11.github.io> (English and Korean)
- CV: <https://yuneg11.github.io/cv.pdf>, and every dated version on the
  [releases](../../releases) page

## Layout

| Path | What it is |
| --- | --- |
| `data.toml` | The only source of content. Its header documents the conventions (localized values, references, dates, visibility). |
| `lib/` | Shared loader: parses `data.toml`, resolves references, formats names, dates and links. Also the UI strings (`i18n.ts`). |
| `web/` | The website (Astro). |
| `cv/` | The CV: `model.ts` turns the data into a format-neutral document, `latex.ts` renders it for XeTeX. |
| `.github/workflows/` | `deploy.yml` publishes the site on every push to `main`; `release.yml` publishes the CV for a `vYYMMDD` tag. |

## Commands

Requires [Bun](https://bun.sh) and, for the CV, [Tectonic](https://tectonic-typesetting.github.io) (`brew install tectonic`).

```sh
bun install
bun run dev      # website at http://localhost:4321
bun run cv       # CV -> web/public/cv.pdf
bun run build    # CV, then the website -> web/dist
```

The first `bun run cv` downloads the LaTeX packages it needs; later runs take about a second.

## Releasing the CV

```sh
git tag v261105 && git push origin v261105
```

The release workflow builds the CV and attaches it as `cv-261105.pdf` to a release named after the tag.
