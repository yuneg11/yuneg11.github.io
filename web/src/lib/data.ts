// Loads ../data.toml and resolves its conventions (see the header of that file).
import { parse } from 'smol-toml'
import raw from '../../../data.toml?raw'

export type Lang = 'en' | 'ko'

/* ------------------------------------------------------------------ types */

type Localized<T> = T | { en: T; ko: T }
type NameParts = { given: string; family: string }
type Name = string | NameParts
type DatePoint = { year: number; month?: number; term?: 'spring' | 'fall' }

interface Visibility { cv?: boolean; web?: boolean }
interface Detail extends Visibility { text: Localized<string> }

export interface Entry extends Visibility {
  title: Localized<string>
  url?: Localized<string>
  org?: string
  unit?: Localized<string>
  location?: string
  date?: DatePoint
  start?: DatePoint
  end?: DatePoint
  details?: Detail[]
}

export interface Publication extends Visibility {
  id: string
  type: 'conference' | 'workshop' | 'journal' | 'preprint'
  title: string
  authors: string[]
  equal?: string[]
  venue: string
  year: number
  url?: string
  arxiv?: string
  github?: string
  note?: Localized<string>
  image?: string
  bibtex?: string
}

/** Paper links: `url` is the official page, `arxiv` an ID, `github` "owner/repo". */
export const pubLinks = (p: Publication) => {
  const arxiv = p.arxiv ? `https://arxiv.org/abs/${p.arxiv}` : undefined
  return {
    paper: p.url,
    arxiv,
    code: p.github ? `https://github.com/${p.github}` : undefined,
    title: p.url ?? arxiv,
  }
}

interface ServiceYear { year: number; note?: Localized<string>; url?: string }
interface Service extends Visibility { role: Localized<string>; venue: string; years: ServiceYear[] }
interface SkillGroup extends Visibility { category: Localized<string>; items: Localized<string>[] }
interface Org { name: Localized<string>; url?: Localized<string>; location?: string }
interface Person { name: Localized<Name>; honorific?: Localized<string>; url?: Localized<string> }
interface Place { city: Localized<string>; country: Localized<string> }

interface Data {
  personal: {
    name: Localized<NameParts>
    email: string
    github?: string
    linkedin?: string
    scholar?: string
    website?: string
    location?: string
  }
  meta: { description: Localized<string>; image?: string }
  bio: Localized<string>
  experiences: Entry[]
  education: Entry[]
  publications: Publication[]
  projects: Entry[]
  awards: Entry[]
  services: Service[]
  skills: SkillGroup[]
  places: Record<string, Place>
  orgs: Record<string, Org>
  people: Record<string, Person>
}

export const data = parse(raw) as unknown as Data

/* ------------------------------------------------------------ localizing */

function isLocalized(v: unknown): v is { en: unknown; ko: unknown } {
  if (v === null || typeof v !== 'object' || Array.isArray(v)) return false
  const keys = Object.keys(v).sort()
  return keys.length === 2 && keys[0] === 'en' && keys[1] === 'ko'
}

/** Pick the value for `lang` from a localized value. */
export function loc<T>(v: Localized<T>, lang: Lang): T
export function loc<T>(v: Localized<T> | undefined, lang: Lang): T | undefined
export function loc<T>(v: Localized<T> | undefined, lang: Lang): T | undefined {
  if (v === undefined) return undefined
  return isLocalized(v) ? (v as { en: T; ko: T })[lang] : (v as T)
}

/** Visible on the website / in the CV (default true). */
export const onWeb = <T extends Visibility>(xs: T[] = []) => xs.filter((x) => x.web !== false)
export const onCv = <T extends Visibility>(xs: T[] = []) => xs.filter((x) => x.cv !== false)

/* ------------------------------------------------------------- references */

const REF = /^(org|person|pub|place):([a-z0-9-]+)$/
const isRef = (s: string) => REF.test(s)

const pubsById = new Map(data.publications.map((p) => [p.id, p]))

type Resolved =
  | { kind: 'org'; id: string; value: Org }
  | { kind: 'person'; id: string; value: Person }
  | { kind: 'pub'; id: string; value: Publication }
  | { kind: 'place'; id: string; value: Place }

export function resolve(ref: string): Resolved {
  const m = REF.exec(ref)
  if (!m) throw new Error(`Not a reference: ${ref}`)
  const [, kind, id] = m
  const value =
    kind === 'org' ? data.orgs[id]
    : kind === 'person' ? (id === 'me' ? me : data.people[id])
    : kind === 'pub' ? pubsById.get(id)
    : data.places[id]
  if (!value) throw new Error(`Unresolved reference in data.toml: ${ref}`)
  return { kind, id, value } as Resolved
}

const me: Person = { name: data.personal.name, url: data.personal.website && `https://${data.personal.website}` }

/* ------------------------------------------------------------------ names */

export function formatName(n: Name, lang: Lang): string {
  if (typeof n === 'string') return n
  return lang === 'ko' ? `${n.family}${n.given}` : `${n.given} ${n.family}`
}

const personName = (p: Person, lang: Lang) => formatName(loc(p.name, lang), lang)

/** Name with the honorific placed by locale: "Prof. Juho Lee", "이주호 교수". */
function personTitled(p: Person, lang: Lang): string {
  const name = personName(p, lang)
  const h = loc(p.honorific, lang)
  if (!h) return name
  return lang === 'ko' ? `${name} ${h}` : `${h} ${name}`
}

/* --------------------------------------------------------------- display */

/** Text with an optional url. `ref` is the reference kind when the text came from one;
 *  `own` is true when the text is the target's own name or title (`<kind:id>` form). */
export interface Link { text: string; url?: string; ref?: Resolved['kind']; own?: boolean }

/** Label and url of any reference, as shown inside text. */
export function refLink(ref: string, lang: Lang): Link {
  const r = resolve(ref)
  switch (r.kind) {
    case 'org': return { text: loc(r.value.name, lang), url: loc(r.value.url, lang) }
    case 'person': return { text: personTitled(r.value, lang), url: loc(r.value.url, lang) }
    case 'pub': return { text: r.value.title, url: pubLinks(r.value).title }
    case 'place': return { text: formatPlace(r.value, lang) }
  }
}

/** A field that may be a reference or plain (localized) text. */
export function refOrText(v: Localized<string> | undefined, lang: Lang): Link | undefined {
  const s = loc(v, lang)
  if (!s) return undefined
  return isRef(s) ? refLink(s, lang) : { text: s }
}

function formatPlace(p: Place, lang: Lang): string {
  return lang === 'ko' ? loc(p.city, lang) : `${loc(p.city, lang)}, ${loc(p.country, lang)}`
}

export function entryLocation(e: Entry, lang: Lang): string | undefined {
  const ref = e.location ?? (e.org && isRef(e.org) ? (resolve(e.org).value as Org).location : undefined)
  if (!ref) return undefined
  return isRef(ref) ? formatPlace(resolve(ref).value as Place, lang) : ref
}

/* ------------------------------------------------------------------ dates */

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function formatDate(d: DatePoint, lang: Lang): string {
  if (d.term) {
    if (lang === 'ko') return `${d.year}년 ${d.term === 'spring' ? 1 : 2}학기`
    return `${d.term === 'spring' ? 'Spring' : 'Fall'} ${d.year}`
  }
  if (d.month) {
    return lang === 'ko' ? `${d.year}. ${String(d.month).padStart(2, '0')}` : `${MONTHS[d.month - 1]} ${d.year}`
  }
  return String(d.year)
}

export const isOngoing = (e: Entry) => !e.date && !!e.start && !e.end

export function formatPeriod(e: Entry, lang: Lang, present: string): string | undefined {
  if (e.date) return formatDate(e.date, lang)
  if (!e.start) return undefined
  const end = e.end ? formatDate(e.end, lang) : present
  return `${formatDate(e.start, lang)} – ${end}`
}

/* ------------------------------------------------------------------- text */

const LINK = /<((?:org|person|pub|place):[a-z0-9-]+)>|\[([^\]]+)\]\(([^)\s]+)\)/g

/** Text with the two allowed Markdown link forms -> plain and linked runs. */
export function segments(text: string, lang: Lang): Link[] {
  const out: Link[] = []
  let last = 0
  for (const m of text.matchAll(LINK)) {
    if (m.index > last) out.push({ text: text.slice(last, m.index) })
    if (m[1]) out.push({ ...refLink(m[1], lang), ref: resolve(m[1]).kind, own: true })
    else if (isRef(m[3])) out.push({ text: m[2], url: refLink(m[3], lang).url, ref: resolve(m[3]).kind })
    else out.push({ text: m[2], url: m[3] })
    last = m.index + m[0].length
  }
  if (last < text.length) out.push({ text: text.slice(last) })
  return out
}

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

function anchor({ text, url }: Link): string {
  if (!url) return esc(text)
  const external = /^https?:/.test(url)
  return `<a href="${esc(url)}"${external ? ' target="_blank" rel="noopener"' : ''}>${esc(text)}</a>`
}

/** Text with the two allowed Markdown link forms -> inline HTML. */
export const inline = (text: string, lang: Lang) => segments(text, lang).map(anchor).join('')

/** Multi-line text joined into paragraphs (a blank line starts a new one). */
export const paragraphTexts = (text: string) =>
  text.trim().split(/\n\s*\n/).map((p) => p.replace(/\s*\n\s*/g, ' '))

/** Multi-line text -> one inline-HTML string per paragraph. */
export const paragraphs = (text: string, lang: Lang) => paragraphTexts(text).map((p) => inline(p, lang))

/* ---------------------------------------------------------------- authors */

interface Author { name: string; url?: string; me: boolean; equal: boolean }

/** Author lists always use the English name. */
export function authors(p: Publication): Author[] {
  const equal = new Set(p.equal ?? [])
  return p.authors.map((a) => {
    const base = { me: a === 'person:me', equal: equal.has(a) }
    if (!isRef(a)) return { name: a, ...base }
    const person = resolve(a).value as Person
    return { name: personName(person, 'en'), url: base.me ? undefined : loc(person.url, 'en'), ...base }
  })
}

/* -------------------------------------------------------------- personal */

export const currentJob = data.experiences.find(isOngoing)

export function socialLinks(lang: Lang) {
  const p = data.personal
  return [
    { key: 'email', label: lang === 'ko' ? '이메일' : 'Email', url: `mailto:${p.email}` },
    p.scholar && { key: 'scholar', label: 'Google Scholar', short: 'Scholar', url: `https://scholar.google.com/citations?user=${p.scholar}` },
    p.github && { key: 'github', label: 'GitHub', url: `https://github.com/${p.github}` },
    p.linkedin && { key: 'linkedin', label: 'LinkedIn', url: `https://www.linkedin.com/in/${p.linkedin}` },
  ].filter(Boolean) as { key: string; label: string; short?: string; url: string }[]
}
