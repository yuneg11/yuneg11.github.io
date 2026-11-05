// Builds the CV PDF from data.toml (English only).
//   bun run build   -> out/cv.tex, out/cv.pdf, copied to web/public/cv.pdf
import { mkdir } from 'node:fs/promises'
import { cvDocument } from './model'
import { latex } from './latex'

const out = new URL('./out/', import.meta.url).pathname
const target = new URL('../web/public/cv.pdf', import.meta.url).pathname

await mkdir(out, { recursive: true })
await Bun.write(`${out}cv.tex`, latex(cvDocument()))
const proc = Bun.spawnSync(['tectonic', '--chatter', 'minimal', '--outdir', out, `${out}cv.tex`], { stdout: 'inherit', stderr: 'inherit' })
if (proc.exitCode !== 0) throw new Error('tectonic failed')
await Bun.write(target, Bun.file(`${out}cv.pdf`))
console.log(target)
