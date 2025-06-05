import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'
import { MapPin, Mail, Github, Building, GraduationCap, Linkedin } from 'lucide-react'
import { PersonalInfo } from '@/lib/cv-data'

interface ProfileHeaderProps {
  personal: PersonalInfo
}

export function ProfileHeader({ personal }: ProfileHeaderProps) {
  return (
    <Card className="w-full">
      <CardContent className="pt-6">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <Avatar className="w-32 h-32 md:w-40 md:h-40">
              <AvatarImage src={personal.profile_image} alt={personal.name} />
              <AvatarFallback className="text-2xl">
                {personal.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
          </div>

          {/* Profile Info */}
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{personal.name}</h1>
            <p className="text-xl text-muted-foreground mb-4">{personal.title}</p>

            {/* Contact Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2">
                <Building className="w-4 h-4 text-muted-foreground" />
                <a
                  href={personal.company_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {personal.company}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                <a
                  href={personal.location_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {personal.location}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-muted-foreground" />
                <a
                  href={`mailto:${personal.email}`}
                  className="hover:underline"
                >
                  {personal.email}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Github className="w-4 h-4 text-muted-foreground" />
                <a
                  href={`https://github.com/${personal.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {personal.github}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-muted-foreground" />
                <a
                  href={personal.google_scholar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Google Scholar
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Linkedin className="w-4 h-4 text-muted-foreground" />
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
