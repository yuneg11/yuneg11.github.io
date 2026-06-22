import type { ReactNode } from 'react'

// The alternating white band that wraps every other section in App.
export function Band({ children }: { children: ReactNode }) {
  return (
    <div className="w-full bg-white border-y border-gray-100">
      <div className="max-w-5xl mx-auto">{children}</div>
    </div>
  )
}
