import { defineConfig, type Plugin } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'
import { parse as parseToml } from 'smol-toml'

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

// https://vite.dev/config/
// For the SSR (prerender) build we only need the TOML loader + React's JSX
// transform — Tailwind CSS generation and the React Compiler pass are client-only.
export default defineConfig(({ isSsrBuild }) =>
  isSsrBuild
    ? { plugins: [toml(), react()] }
    : {
        plugins: [
          toml(),
          tailwindcss(),
          react(),
          babel({ presets: [reactCompilerPreset()] }),
        ],
      },
)
