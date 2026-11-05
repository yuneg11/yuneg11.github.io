import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://yuneg11.github.io',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  devToolbar: { enabled: false },
  vite: {
    // data.toml lives one level above this project.
    server: { fs: { allow: ['..'] } },
  },
})
