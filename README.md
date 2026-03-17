# EungGu Yun - GitHub Pages

A one-page personal website styled as a curriculum vitae, built with React, Vite, Tailwind CSS, and shadcn/ui.

## Development

```bash
bun install       # install dependencies
bun run init      # set up git hooks (first time only)
bun run dev       # start dev server at http://localhost:5173
bun run build     # production build
bun run preview   # preview production build
```

## Linting & Formatting

```bash
bun run lint        # check for lint issues (oxlint)
bun run lint:fix    # auto-fix lint issues
bun run format      # check formatting (oxfmt)
bun run format:fix  # auto-fix formatting
bun run check       # run all pre-commit checks manually
```

## Project Structure

```text
data/
  resume.toml          # resume content (education, experience, publications, etc.)
src/
  components/
    cv/                # CV-specific components (header, section components)
    ui/                # shadcn/ui components (avatar, badge, card, etc.)
    theme-provider.tsx # dark/light theme support
    theme-selector.tsx # theme toggle control
  types/               # TypeScript type definitions for resume data
```

## Editing Resume Data

All resume content lives in [`data/resume.toml`](data/resume.toml). A JSON Schema ([`data/schema.json`](data/schema.json)) is referenced at the top of the file for editor autocompletion and validation.

### Sections

| Section      | TOML key           | Description                                                        |
| ------------ | ------------------ | ------------------------------------------------------------------ |
| Personal     | `[personal]`       | Name, title, email, links, profile image, etc.                     |
| Education    | `[[education]]`    | Degrees, institutions, GPAs, thesis                                |
| Experience   | `[[experience]]`   | Work history with title, company, department                       |
| Publications | `[[publications]]` | Papers grouped by `type` (conference, workshop, journal, preprint) |
| Projects     | `[[projects]]`     | Research / industry project entries                                |
| Awards       | `[[awards]]`       | Scholarships, honors, recognitions                                 |

### Field conventions

- **`period`** — Education and experience entries use an inline table with `start` (required) and `end` (optional) as TOML local dates (`YYYY-MM-DD`). Omitting `end` means "present". Awards and projects use a plain string instead.
- **`details`** — An array of strings rendered as bullet points. Supports inline Markdown (`**bold**`, `*italic*`, `[links](url)`).
- **`authors`** — A single string. Wrap your name in `**double asterisks**` to highlight it. Use `*` after names to mark equal contribution, then add a `note` field (e.g., `"*: Equal contribution"`).
- **`type`** (publications) — One of `"conference"`, `"workshop"`, `"journal"`, or `"preprint"`. Publications are grouped by this value in the UI.

### Example: adding an education entry

```toml
[[education]]
institution = "University Name"
school = "Department of Computer Science"
degree = "Ph.D. in Computer Science"
period = { start = 2023-03-01 }          # omit `end` for ongoing
location = "City, Country"
details = [
  "Supervisor: Prof. **Name**",
  "GPA: 4.0 / 4.0",
]
```

## Tech Stack

- [React](https://react.dev/) 19
- [Vite](https://vite.dev/) 7
- [Tailwind CSS](https://tailwindcss.com/) 4
- [shadcn/ui](https://ui.shadcn.com/)
- [TypeScript](https://www.typescriptlang.org/) 5.9
- [smol-toml](https://github.com/squirrelchat/smol-toml) — TOML parsing for resume data
- [Lucide](https://lucide.dev/) — icons
- [oxlint](https://oxc.rs/) / [oxfmt](https://oxc.rs/) — linting & formatting

## License

Licensed under the [MIT license](./LICENSE).
