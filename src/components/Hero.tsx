import { personal } from '../content.ts'
import { SocialLink } from './SocialLink.tsx'

export function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col justify-center pt-20 pb-16 px-6 max-w-5xl mx-auto w-full"
    >
      <div className="flex flex-col-reverse md:flex-row items-start md:items-end justify-between gap-10">
        <div className="flex-1">
          <p className="text-sm font-medium text-indigo-600 tracking-widest uppercase mb-4">
            {personal.title}
          </p>
          <h1 className="font-serif text-5xl md:text-7xl text-gray-900 leading-tight mb-6">
            EungGu Yun
          </h1>
          <p className="text-gray-500 text-base max-w-md leading-relaxed mb-8">
            AI Researcher at{' '}
            <a href={personal.companyUrl} target="_blank" rel="noreferrer" className="text-gray-900 hover:text-indigo-700 hover:underline font-medium">
              {personal.company}
            </a>{' '}
            working on industrial computer vision — image anomaly detection, efficient inference, and language-assisted vision systems. Previously studied loss landscapes at KAIST Graduate School of AI.
          </p>
          <div className="flex flex-wrap gap-3">
            <SocialLink href={`mailto:${personal.email}`} label="Email">
              <svg width="15" height="15" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884zM18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Email
            </SocialLink>
            <SocialLink href={personal.github} label="GitHub">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.165c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </SocialLink>
            <SocialLink href={personal.scholar} label="Google Scholar">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 24a7 7 0 110-14 7 7 0 010 14zm0-24L0 9.5l4.838 3.94A8 8 0 0112 10a8 8 0 017.162 3.44L24 9.5z"/>
              </svg>
              Scholar
            </SocialLink>
            <SocialLink href={personal.linkedin} label="LinkedIn">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </SocialLink>
          </div>
          <p className="mt-5 flex items-center gap-1.5 text-sm text-gray-500">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
            </svg>
            {personal.location}
          </p>
        </div>
        <div className="shrink-0">
          <div className="w-44 h-44 md:w-72 md:h-72 rounded-2xl overflow-hidden ring-1 ring-gray-200 shadow-lg">
            <img
              src={personal.profileImage}
              alt="EungGu Yun"
              width={460}
              height={460}
              decoding="async"
              fetchPriority="high"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
