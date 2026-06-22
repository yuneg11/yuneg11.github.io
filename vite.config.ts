import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// For the SSR (prerender) build we only need React's JSX transform — Tailwind CSS
// generation and the React Compiler pass are client-only, so they are skipped.
export default defineConfig(({ isSsrBuild }) =>
  isSsrBuild
    ? { plugins: [react()] }
    : {
        plugins: [
          tailwindcss(),
          react(),
          babel({ presets: [reactCompilerPreset()] }),
        ],
      },
)
