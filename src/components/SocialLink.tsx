import type { ReactNode } from 'react'

export function SocialLink({ href, label, children }: { href: string; label: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target={href.startsWith('mailto') ? undefined : '_blank'}
      rel="noreferrer"
      aria-label={label}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-gray-600 text-sm font-medium hover:border-indigo-300 hover:text-indigo-700 transition-all shadow-sm"
    >
      {children}
    </a>
  )
}
