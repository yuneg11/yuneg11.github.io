import type { ReactNode } from 'react'

// The alternating white band that wraps every other section in App.
// Width is capped by <Section> itself, so the band only owns the full-bleed background.
export function Band({ children }: { children: ReactNode }) {
  return <div className="w-full bg-white border-y border-gray-100">{children}</div>
}
