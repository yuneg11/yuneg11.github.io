import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Publication } from '@/lib/cv-data'
import ReactMarkdown, { Components } from 'react-markdown'

const inlineMarkdownComponents: Components = {
  p: ({ children }) => <span>{children}</span>,
  strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
  em: ({ children }) => <em className="italic">{children}</em>,
  a: ({ children, href }) => (
    <a href={href} className="hover:underline" target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  ),
}

interface PublicationsProps {
  publications: {
    conference: Publication[]
    workshop: Publication[]
    journal: Publication[]
    preprint: Publication[]
  }
}

export function Publications({ publications }: PublicationsProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl">Publications</CardTitle>
      </CardHeader>
      <CardContent className="space-y-8">
        {/* Conference Papers */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Conference</h3>
          <div className="space-y-6">
            {publications.conference.map((pub, index) => (
              <PublicationItem key={index} publication={pub} />
            ))}
          </div>
        </div>

        <Separator />

        {/* Workshop Papers */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Workshop</h3>
          <div className="space-y-6">
            {publications.workshop.map((pub, index) => (
              <PublicationItem key={index} publication={pub} />
            ))}
          </div>
        </div>

        <Separator />

        {/* Journal Papers */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Journal</h3>
          <div className="space-y-6">
            {publications.journal.map((pub, index) => (
              <PublicationItem key={index} publication={pub} />
            ))}
          </div>
        </div>

        <Separator />

        {/* Preprint Papers */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Preprint</h3>
          <div className="space-y-6">
            {publications.preprint.map((pub, index) => (
              <PublicationItem key={index} publication={pub} />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

interface PublicationItemProps {
  publication: Publication
}

function PublicationItem({ publication }: PublicationItemProps) {
  const titleContent = publication.url ? (
    <a
      href={publication.url}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline cursor-pointer"
    >
      {publication.title}
    </a>
  ) : (
    publication.title
  )

  return (
    <div className="space-y-2">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
        <div className="flex-1">
          <h4 className="font-medium leading-relaxed">{titleContent}</h4>
          <div className="text-sm text-muted-foreground">
            <ReactMarkdown components={inlineMarkdownComponents}>
              {publication.authors}
            </ReactMarkdown>
          </div>
        </div>
        <div className="flex flex-col sm:items-end gap-1">
          <Badge variant="secondary">{publication.venue}</Badge>
          <span className="text-sm text-muted-foreground">{publication.year}</span>
        </div>
      </div>
      {publication.note && (
        <div className="text-xs text-muted-foreground italic">
          <ReactMarkdown components={inlineMarkdownComponents}>
            {publication.note}
          </ReactMarkdown>
        </div>
      )}
    </div>
  )
}
