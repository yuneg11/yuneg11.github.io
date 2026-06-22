import { personal } from '../content.ts'

const navLinks = [
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'publications', label: 'Publications' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'awards', label: 'Awards' },
  { id: 'skills', label: 'Skills' },
]

// Sticky wayfinding header for the long single page. Links use the existing
// section ids; html has scroll-padding-top so targets clear this bar.
export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/70 bg-gray-50/80 backdrop-blur">
      <nav className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between gap-4">
        <a href="#hero" className="font-serif text-lg text-gray-900 hover:text-indigo-700 transition-colors">
          {personal.name}
        </a>
        <div className="hidden md:flex items-center gap-5 text-sm">
          {navLinks.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="text-gray-500 hover:text-indigo-700 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
