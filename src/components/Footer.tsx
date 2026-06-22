import { personal } from '../content.ts'

const links = [
  { href: `mailto:${personal.email}`, label: 'Email' },
  { href: personal.github, label: 'GitHub' },
  { href: personal.scholar, label: 'Scholar' },
  { href: personal.linkedin, label: 'LinkedIn' },
]

export function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-5 text-sm text-gray-500">
        <p>© 2026 {personal.name}</p>
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noreferrer"
              className="hover:text-indigo-700 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a href="#hero" className="text-gray-400 hover:text-indigo-700 transition-colors">
            ↑ Top
          </a>
        </div>
      </div>
    </footer>
  )
}
