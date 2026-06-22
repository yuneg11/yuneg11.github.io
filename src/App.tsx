import { Header } from './components/Header.tsx'
import { Footer } from './components/Footer.tsx'
import { Band } from './components/Band.tsx'
import { Hero } from './components/Hero.tsx'
import { Experience } from './components/Experience.tsx'
import { Education } from './components/Education.tsx'
import { Publications } from './components/Publications.tsx'
import { Services } from './components/Services.tsx'
import { Projects } from './components/Projects.tsx'
import { Awards } from './components/Awards.tsx'
import { Skills } from './components/Skills.tsx'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="flex flex-col items-center">
        <Hero />
        <Band>
          <Experience />
        </Band>
        <Education />
        <Band>
          <Publications />
        </Band>
        <Services />
        <Band>
          <Projects />
        </Band>
        <Awards />
        <Band>
          <Skills />
        </Band>
      </main>
      <Footer />
    </div>
  )
}
