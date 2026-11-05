// Builds the English and Korean CV PDFs from data.toml.
//   bun run build          -> out/cv-<lang>.tex, out/cv-<lang>.pdf, and copies to web/public
import { mkdir } from 'node:fs/promises'
import { cvDocument } from './model'
import { latex } from './latex'
import type { Lang } from '../web/src/lib/data'

const out = new URL('./out/', import.meta.url).pathname
const publicDir = new URL('../web/public/', import.meta.url).pathname
// Where each PDF is served: /cv.pdf and /ko/cv.pdf, next to each home page.
const targets: Record<Lang, string> = { en: `${publicDir}cv.pdf`, ko: `${publicDir}ko/cv.pdf` }

await mkdir(out, { recursive: true })
for (const lang of Object.keys(targets) as Lang[]) {
  const src = `${out}cv-${lang}.tex`
  await Bun.write(src, latex(cvDocument(lang)))
  const proc = Bun.spawnSync(['tectonic', '--chatter', 'minimal', '--outdir', out, src], { stdout: 'inherit', stderr: 'inherit' })
  if (proc.exitCode !== 0) throw new Error(`tectonic failed for ${lang}`)
  await mkdir(targets[lang].replace(/[^/]+$/, ''), { recursive: true })
  await Bun.write(targets[lang], Bun.file(`${out}cv-${lang}.pdf`))
  console.log(`${lang}: ${targets[lang]}`)
}
