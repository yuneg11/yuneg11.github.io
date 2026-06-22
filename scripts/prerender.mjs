// Injects the server-rendered app HTML into dist/index.html at build time.
// Run after `vite build` (client) and `vite build --ssr` (server).
import { readFileSync, writeFileSync, readdirSync } from 'node:fs'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { dirname, resolve } from 'node:path'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const serverDir = resolve(root, 'dist/server')

const entryFile =
  readdirSync(serverDir).find((f) => f.startsWith('entry-server') && f.endsWith('.js')) ??
  readdirSync(serverDir).find((f) => f.endsWith('.js'))

if (!entryFile) {
  throw new Error('prerender: no server entry .js found in dist/server')
}

const { render } = await import(pathToFileURL(resolve(serverDir, entryFile)).href)
const appHtml = render()

const htmlPath = resolve(root, 'dist/index.html')
let html = readFileSync(htmlPath, 'utf-8')

if (html.includes('<!--app-html-->')) {
  html = html.replace('<!--app-html-->', appHtml)
} else if (html.includes('<div id="root"></div>')) {
  html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
} else {
  throw new Error('prerender: could not find injection point in dist/index.html')
}

writeFileSync(htmlPath, html)
console.log(`✓ Prerendered dist/index.html (${appHtml.length} chars from ${entryFile})`)
