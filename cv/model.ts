// data.toml -> a CV document that knows nothing about the output format.
// A renderer (latex.ts) only decides how each piece looks. The CV is English only;
// `lang` is passed around because the data is localized.
import {
  data, loc, onCv, refOrText, segments, paragraphTexts, formatName, entryLocation, authors, pubLinks,
  type Entry, type Lang, type Link,
} from '@site/lib/data'
import { t } from '@site/lib/i18n'

/** A run of text, optionally linked or emphasized. */
export interface Run { text: string; url?: string; strong?: boolean; em?: boolean }
export type Rich = Run[]

export interface Contact { kind: 'email' | 'website' | 'github' | 'linkedin'; text: string; url: string }

/** `given` and `family` are styled apart ("EungGu" "Yun"); `altName` is the Korean name. */
export interface Header { given: string; family: string; altName: string; contacts: Contact[] }

export interface EntryItem {
  kind: 'entry'
  title: Rich
  period?: string
  org?: Rich
  unit?: Rich
  place?: string
  details: Rich[]
}

export interface PubItem {
  kind: 'pub'
  title: Rich
  authors: Rich
  equal: boolean
  venue: string
  year: number
  note?: string
}

export interface ServiceItem { kind: 'service'; role: string; venue: string; years: Rich }
export interface SkillItem { kind: 'skill'; label: string; value: string }

export type Item = EntryItem | PubItem | ServiceItem | SkillItem

/** Publications are grouped by type; other sections have a single untitled group. */
export interface Group { title?: string; items: Item[] }

/** `positions`: experience / education (organization first). `items`: awards / projects (title first). */
export interface Section { id: string; title: string; layout?: 'positions' | 'items'; groups: Group[] }

export interface CvDocument {
  header: Header
  intro: Rich[]
  sections: Section[]
  labels: { equal: string; updated: string }
  updated: string
}

/* ------------------------------------------------------------------ text */

/** Reference links are bold, a publication shown by its own title is italic, plain URLs stay plain. */
const run = (l: Link): Run => ({
  text: l.text,
  url: l.url,
  em: l.ref === 'pub' && l.own,
  strong: !!l.ref && !(l.ref === 'pub' && l.own),
})
const rich = (text: string, lang: Lang): Rich => segments(text, lang).map(run)
const link = (l: Link | undefined): Rich => (l ? [{ text: l.text, url: l.url }] : [])

/* ----------------------------------------------------------------- dates */

type DatePoint = NonNullable<Entry['date']>

/** CV dates: "2023. 03", semesters "2019 Spring". */
function cvDate(d: DatePoint): string {
  if (d.term) return `${d.year} ${d.term === 'spring' ? 'Spring' : 'Fall'}`
  return d.month ? `${d.year}. ${String(d.month).padStart(2, '0')}` : String(d.year)
}

function cvPeriod(e: Entry): string | undefined {
  if (e.date) return cvDate(e.date)
  if (!e.start) return undefined
  return `${cvDate(e.start)} – ${e.end ? cvDate(e.end) : 'Now'}`
}

/* ---------------------------------------------------------------- pieces */

function header(lang: Lang): Header {
  const p = data.personal
  const name = loc(p.name, lang)
  const contacts: Contact[] = [
    { kind: 'email' as const, text: p.email, url: `mailto:${p.email}` },
    p.website ? { kind: 'website' as const, text: p.website, url: `https://${p.website}` } : undefined,
    p.github ? { kind: 'github' as const, text: p.github, url: `https://github.com/${p.github}` } : undefined,
    p.linkedin ? { kind: 'linkedin' as const, text: p.linkedin, url: `https://www.linkedin.com/in/${p.linkedin}` } : undefined,
  ].filter((c) => c !== undefined)
  return { given: name.given, family: name.family, altName: formatName(loc(p.name, 'ko'), 'ko'), contacts }
}

function entry(e: Entry, lang: Lang): EntryItem {
  return {
    kind: 'entry',
    title: [{ text: loc(e.title, lang), url: loc(e.url, lang) }],
    period: cvPeriod(e),
    org: e.org ? link(refOrText(e.org, lang)) : undefined,
    unit: e.unit ? link(refOrText(e.unit, lang)) : undefined,
    place: entryLocation(e, lang),
    details: onCv(e.details).map((d) => rich(loc(d.text, lang), lang)),
  }
}

function entries(id: string, title: string, list: Entry[], lang: Lang, layout: Section['layout']): Section | undefined {
  const items = onCv(list).map((e) => entry(e, lang))
  return items.length ? { id, title, layout, groups: [{ items }] } : undefined
}

const TYPES = ['conference', 'workshop', 'journal', 'preprint'] as const

function publications(lang: Lang): Section | undefined {
  const s = t(lang)
  const pubs = onCv(data.publications)
  const groups: Group[] = TYPES.map((type) => ({
    title: s[type],
    items: pubs.filter((p) => p.type === type).map((p): PubItem => ({
      kind: 'pub',
      title: [{ text: p.title, url: pubLinks(p).title }],
      authors: authors(p).flatMap((a, i) => [
        ...(i ? [{ text: ', ' }] : []),
        { text: a.name + (a.equal ? '*' : ''), strong: a.me },
      ]),
      equal: !!p.equal?.length,
      venue: p.venue,
      year: p.year,
      note: loc(p.note, lang),
    })),
  })).filter((g) => g.items.length)
  return groups.length ? { id: 'publications', title: s.publications, groups } : undefined
}

function services(lang: Lang): Section | undefined {
  const items = onCv(data.services).map((sv): ServiceItem => {
    // The CV lists years in ascending order (see data.toml).
    const years: Rich = []
    for (const y of [...sv.years].sort((a, b) => a.year - b.year)) {
      if (years.length) years.push({ text: ', ' })
      years.push({ text: String(y.year), url: y.url })
      const note = loc(y.note, lang)
      // Inside the CV's own parentheses, drop the note's: "(Top reviewer ~8%)".
      if (note) years.push({ text: ` (${note.replace(/[()]/g, '')})` })
    }
    return { kind: 'service', role: loc(sv.role, lang), venue: sv.venue, years }
  })
  return items.length ? { id: 'services', title: t(lang).services, groups: [{ items }] } : undefined
}

function skills(lang: Lang): Section | undefined {
  const items = onCv(data.skills).map((g): SkillItem => ({
    kind: 'skill',
    label: loc(g.category, lang),
    value: g.items.map((x) => loc(x, lang)).join(', '),
  }))
  return items.length ? { id: 'skills', title: t(lang).skills, groups: [{ items }] } : undefined
}

/* -------------------------------------------------------------- document */

export function cvDocument(today = new Date()): CvDocument {
  const lang: Lang = 'en'
  const s = t(lang)
  const sections = [
    entries('experience', s.experience, data.experiences, lang, 'positions'),
    entries('education', s.education, data.education, lang, 'positions'),
    publications(lang),
    services(lang),
    entries('awards', s.awards, data.awards, lang, 'items'),
    entries('projects', s.projects, data.projects, lang, 'items'),
    skills(lang),
  ].filter((x) => x !== undefined)
  const pad = (n: number) => String(n).padStart(2, '0')
  return {
    header: header(lang),
    intro: paragraphTexts(loc(data.bio, lang)).map((p) => rich(p, lang)),
    sections,
    labels: { equal: s.equal, updated: 'Update' },
    updated: `${today.getFullYear()}. ${pad(today.getMonth() + 1)}. ${pad(today.getDate())}`,
  }
}
