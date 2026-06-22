import type { ReactNode } from 'react'

export function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="py-16 px-6 max-w-5xl mx-auto w-full">
      <div className="flex items-baseline gap-4 mb-8">
        <h2 className="font-serif text-3xl md:text-4xl text-gray-900 shrink-0">{title}</h2>
        <div className="flex-1 h-px bg-gray-200" />
      </div>
      {children}
    </section>
  )
}
