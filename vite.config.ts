import { defineConfig, type Plugin } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'
import { parse as parseToml } from 'smol-toml'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

const DATA_TOML = fileURLToPath(new URL('./data.toml', import.meta.url))

// Transforms `*.toml` imports into a default-exported object at build time
// (used by src/content.ts). Runs in both the client and the SSR/prerender build.
function toml(): Plugin {
  return {
    name: 'toml-loader',
    transform(code, id) {
      if (!id.split('?')[0].endsWith('.toml')) return null
      return { code: `export default ${JSON.stringify(parseToml(code))}`, map: null }
    },
  }
}

type Data = {
  personal: {
    name: string
    email: string
    github: string
    scholar: string
    linkedin: string
    website: string
    company: string
    companyUrl: string
    profileImage: string
  }
  meta: { jobTitle: string; description: string }
  education: { institution: string }[]
}

// Generates the document head (title, description, canonical, Open Graph/Twitter,
// and schema.org JSON-LD) from data.toml so the content has a single source of truth.
function htmlMeta(): Plugin {
  return {
    name: 'html-meta',
    transformIndexHtml() {
      const data = parseToml(readFileSync(DATA_TOML, 'utf-8')) as unknown as Data
      const p = data.personal
      const base = p.website.replace(/\/+$/, '')
      const url = `${base}/`
      const image = `${base}${p.profileImage}`
      const title = `${p.name} — ${data.meta.jobTitle}`
      const [firstName, ...rest] = p.name.split(' ')
      const description = data.meta.description
      const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: p.name,
        url,
        image,
        jobTitle: data.meta.jobTitle,
        email: `mailto:${p.email}`,
        worksFor: { '@type': 'Organization', name: p.company, url: p.companyUrl },
        alumniOf: data.education.map((e) => ({ '@type': 'CollegeOrUniversity', name: e.institution })),
        sameAs: [p.github, p.scholar, p.linkedin],
      }
      return [
        { tag: 'title', children: title, injectTo: 'head' as const },
        { tag: 'meta', attrs: { name: 'description', content: description }, injectTo: 'head' as const },
        { tag: 'link', attrs: { rel: 'canonical', href: url }, injectTo: 'head' as const },
        { tag: 'meta', attrs: { property: 'og:type', content: 'profile' }, injectTo: 'head' as const },
        { tag: 'meta', attrs: { property: 'og:title', content: title }, injectTo: 'head' as const },
        { tag: 'meta', attrs: { property: 'og:description', content: description }, injectTo: 'head' as const },
        { tag: 'meta', attrs: { property: 'og:url', content: url }, injectTo: 'head' as const },
        { tag: 'meta', attrs: { property: 'og:image', content: image }, injectTo: 'head' as const },
        { tag: 'meta', attrs: { property: 'og:image:alt', content: p.name }, injectTo: 'head' as const },
        { tag: 'meta', attrs: { property: 'profile:first_name', content: firstName }, injectTo: 'head' as const },
        { tag: 'meta', attrs: { property: 'profile:last_name', content: rest.join(' ') }, injectTo: 'head' as const },
        { tag: 'meta', attrs: { name: 'twitter:card', content: 'summary' }, injectTo: 'head' as const },
        { tag: 'meta', attrs: { name: 'twitter:title', content: title }, injectTo: 'head' as const },
        { tag: 'meta', attrs: { name: 'twitter:description', content: description }, injectTo: 'head' as const },
        { tag: 'meta', attrs: { name: 'twitter:image', content: image }, injectTo: 'head' as const },
        { tag: 'script', attrs: { type: 'application/ld+json' }, children: JSON.stringify(jsonLd), injectTo: 'head' as const },
      ]
    },
  }
}

// https://vite.dev/config/
// For the SSR (prerender) build we only need the TOML loader + React's JSX
// transform — Tailwind, the React Compiler, and html-meta are client-build only.
export default defineConfig(({ isSsrBuild }) =>
  isSsrBuild
    ? { plugins: [toml(), react()] }
    : {
        plugins: [
          toml(),
          htmlMeta(),
          tailwindcss(),
          react(),
          babel({ presets: [reactCompilerPreset()] }),
        ],
      },
)
