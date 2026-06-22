import type { ReactNode } from 'react'

// Renders an external link when href is set, otherwise a plain span.
export function MaybeLink({
  href,
  className,
  children,
}: {
  href?: string
  className?: string
  children: ReactNode
}) {
  if (!href) return <span className={className}>{children}</span>
  return (
    <a href={href} target="_blank" rel="noreferrer" className={`${className ?? ''} hover:underline`}>
      {children}
    </a>
  )
}
