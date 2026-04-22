import { useState, useEffect } from 'react'

// ── Data ──────────────────────────────────────────────────────────────────────

const personal = {
  name: 'EungGu Yun',
  title: 'AI Researcher & Engineer',
  email: 'yuneg11@gmail.com',
  github: 'https://github.com/yuneg11',
  scholar: 'https://scholar.google.com/citations?user=r7-847MAAAAJ',
  linkedin: 'https://www.linkedin.com/in/yuneg',
  location: 'Seoul, South Korea',
  company: 'SAIGE',
  companyUrl: 'https://saige.ai/',
  profileImage: '/profile.jpg',
}

const experiences = [
  {
    title: 'AI Researcher',
    company: 'SAIGE',
    dept: 'AI Lab',
    period: 'Mar 2023 – Present',
    location: 'Seoul, South Korea',
    details: ['Research on Image Anomaly Detection for industrial inspection.'],
  },
  {
    title: 'Research Intern',
    company: 'Artificial Intelligence Institute of Seoul National University (AIIS)',
    dept: 'Deep Representation Learning Research Group (DRL)',
    period: 'Jul 2020 – Sep 2020',
    location: 'Seoul, South Korea',
    details: [
      'Supervisor: Prof. Wonjong Rhee',
      'Research on model interpretability and activation on-off patterns.',
      'Reproduced CNN visualization methods including Grad-CAM, (C)LRP, etc.',
    ],
  },
  {
    title: 'Research Intern',
    company: 'Electronics and Telecommunications Research Institute (ETRI)',
    dept: 'Artificial Intelligence Research Laboratory',
    period: 'Jan 2020 – Feb 2020',
    location: 'Daejeon, South Korea',
    details: [
      'Supervisor: Yoo-mi Park',
      'Tested and debugged ETRI Deep Learning HPC Platform Dashboard.',
      'Implemented AlexNet and ResNet models with DL-MDL.',
    ],
  },
]

const education = [
  {
    institution: 'Korea Advanced Institute of Science and Technology (KAIST)',
    school: 'Graduate School of AI',
    degree: 'M.S. in Artificial Intelligence',
    period: 'Mar 2021 – Feb 2023',
    location: 'Daejeon, South Korea',
    details: [
      'Supervisor: Prof. Juho Lee',
      'Lab: Statistical Inference and Machine Learning Lab (SIML)',
      'Thesis: Traversing Between Modes in Function Space for Fast Ensembling',
      'GPA: 4.08 / 4.3',
    ],
  },
  {
    institution: 'SungKyunKwan University (SKKU)',
    school: 'Department of Computer Science and Engineering',
    degree: 'B.S. in Computer Science and Engineering',
    period: 'Mar 2017 – Aug 2020',
    location: 'Seoul, South Korea',
    details: ['Total GPA: 4.33 / 4.5', 'Major GPA: 4.47 / 4.5'],
  },
]

type PubType = 'conference' | 'workshop' | 'journal' | 'preprint'

const publications: {
  type: PubType
  title: string
  authors: string
  venue: string
  year: number
  url: string
  note?: string
}[] = [
  {
    type: 'conference',
    title: 'ELDET: Early-Learning Distillation with Noisy Labels for Object Detection',
    authors: 'Dongmin Choi, Sangbin Lee, **EungGu Yun**, Jonghyuk Baek, Frank Chongwoo Park',
    venue: 'NeurIPS',
    year: 2025,
    url: 'https://openreview.net/forum?id=IWEc6kpy8O',
  },
  {
    type: 'conference',
    title: 'Language-Assisted Feature Transformation for Anomaly Detection',
    authors: '**EungGu Yun**, Heonjin Ha, Yeongwoo Nam, Bryan Dongik Lee',
    venue: 'ICLR',
    year: 2025,
    url: 'https://arxiv.org/abs/2503.01184',
  },
  {
    type: 'conference',
    title: 'A Simple Early Exiting Framework for Accelerated Sampling in Diffusion Models',
    authors: 'Taehong Moon, Moonseok Choi, **EungGu Yun**, Jongmin Yoon, Gayoung Lee, Jaewoong Cho, Juho Lee',
    venue: 'ICML',
    year: 2024,
    url: 'https://arxiv.org/abs/2408.05927',
  },
  {
    type: 'conference',
    title: 'Learning Dynamic Brain Connectome with Graph Transformers for Psychiatric Diagnosis Classification',
    authors: 'Byung-Hoon Kim, Jungwon Choi, **EungGu Yun**, Kyungsang Kim, Xiang Li, Juho Lee',
    venue: 'IEEE ISBI',
    year: 2024,
    url: 'https://ieeexplore.ieee.org/abstract/document/10635508/',
  },
  {
    type: 'conference',
    title: 'Probabilistic Imputation for Time-series Classification with Missing Data',
    authors: 'SeungHyun Kim*, Hyunsu Kim*, **EungGu Yun***, Hwangrae Lee, Jaehun Lee, Juho Lee',
    venue: 'ICML',
    year: 2023,
    url: 'https://arxiv.org/abs/2308.06738',
    note: '*: Equal contribution',
  },
  {
    type: 'conference',
    title: 'Traversing Between Modes in Function Space for Fast Ensembling',
    authors: '**EungGu Yun***, Hyungi Lee*, Giung Nam*, Juho Lee',
    venue: 'ICML',
    year: 2023,
    url: 'https://arxiv.org/abs/2306.11304',
    note: '*: Equal contribution',
  },
  {
    type: 'conference',
    title: 'Martingale Posterior Neural Processes',
    authors: 'Hyungi Lee, **EungGu Yun**, Giung Nam, Edwin Fong, Juho Lee',
    venue: 'ICLR',
    year: 2023,
    url: 'https://arxiv.org/abs/2304.09431',
    note: 'Spotlight',
  },
  {
    type: 'conference',
    title: 'Scale Mixtures of Neural Network Gaussian Processes',
    authors: 'Hyungi Lee, **EungGu Yun**, Hongseok Yang, Juho Lee',
    venue: 'ICLR',
    year: 2022,
    url: 'https://arxiv.org/abs/2107.01408',
  },
  {
    type: 'workshop',
    title: 'A Generative Self-Supervised Framework Using Functional Connectivity in fMRI Data',
    authors: 'Jungwon Choi, Seongho Keum, **EungGu Yun**, Byung-Hoon Kim, Juho Lee',
    venue: 'NeurIPS Workshop on TGL',
    year: 2023,
    url: 'https://arxiv.org/abs/2312.01994',
  },
  {
    type: 'workshop',
    title: 'Large-scale Graph Representation Learning of Dynamic Brain Connectome with Transformers',
    authors: 'Byung-Hoon Kim, Jungwon Choi, **EungGu Yun**, Kyungsang Kim, Xiang Li, Juho Lee',
    venue: 'NeurIPS Workshop on TGL',
    year: 2023,
    url: 'https://arxiv.org/abs/2312.14939',
  },
  {
    type: 'workshop',
    title: 'Early Exiting for Accelerated Inference in Diffusion Models',
    authors: 'Taehong Moon, Moonseok Choi, **EungGu Yun**, Jongmin Yoon, Gayoung Lee, Juho Lee',
    venue: 'ICML Workshop on SPIGM',
    year: 2023,
    url: 'https://openreview.net/forum?id=nhGdjo9Xed',
  },
  {
    type: 'journal',
    title: 'Recent Advances of Radiative Transfer Emulator in WRF Model',
    authors: 'Hwan-Jin Song, Soonyoung Roh, Park Sa Kim, Juho Lee, Giung Nam, **EungGu Yun**, Jongmin Yoon',
    venue: 'KOMES',
    year: 2022,
    url: 'https://www.dbpia.co.kr/Journal/articleDetail?nodeId=NODE11162111',
  },
  {
    type: 'journal',
    title: 'Benefits of Stochastic Weight Averaging in Developing Neural Network Radiation Scheme for Numerical Weather Prediction',
    authors: 'Hwan-Jin Song, Soonyoung Roh, Juho Lee, Giung Nam, **EungGu Yun**, Jongmin Yoon, Park Sa Kim',
    venue: 'JAMES',
    year: 2022,
    url: 'https://doi.org/10.1029/2021MS002921',
  },
  {
    type: 'preprint',
    title: 'On-Off Pattern Encoding and Path-Count Encoding as Deep Neural Network Representations',
    authors: 'Euna Jung, Jaekeol Choi, **EungGu Yun**, Wonjong Rhee',
    venue: 'arXiv',
    year: 2020,
    url: 'https://arxiv.org/abs/2401.09518',
  },
]

const projects = [
  {
    title: 'Bayesian Inference for Time-series Data with Missing Values',
    org: 'Samsung Research',
    period: '2022. 08 – 2023. 02',
    details: [
      'Developing a Bayesian deep learning method to quantify uncertainty within missing values.',
      'Proposed multivariate time-series classification model using ObsDropout regularization.',
      'Validated on PhysioNet 2012, MIMIC-III, and UCI human activity datasets.',
    ],
  },
  {
    title: 'Developing AI-based Emulator for Physics Processes in Numerical Models',
    org: 'National Institute of Meteorological Sciences (NIMS)',
    period: '2021. 05 – 2022. 07',
    details: [
      'Research on alternative techniques of physical processes in numerical weather prediction (NWP) based on AI.',
      'Goal: reduce computational costs and improve accuracy of NWP.',
    ],
  },
]

const awards = [
  {
    title: 'The National Scholarship for Science and Engineering',
    org: 'Korea Student Aid Foundation (KOSAF)',
    period: '2019 – 2020',
    detail: 'Supports undergraduates with strong academic performance in science and engineering.',
  },
  {
    title: 'SungKyun Software Scholarship',
    org: 'SungKyunKwan University (SKKU)',
    period: '2017 – 2018',
    detail: 'Supports students with an outstanding GPA.',
  },
  {
    title: "Dean's List Award",
    org: 'College of Computing, SungKyunKwan University (SKKU)',
    period: '2017 – 2019',
    detail: 'In recognition of high scholastic achievement. (6 times)',
  },
]

// ── Helpers ───────────────────────────────────────────────────────────────────

function renderAuthors(raw: string) {
  return raw.split(/(\*\*[^*]+\*\*)/).map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="font-semibold text-gray-900">
          {part.slice(2, -2)}
        </strong>
      )
    }
    return <span key={i}>{part}</span>
  })
}

const venueColors: Record<string, string> = {
  NeurIPS: 'bg-blue-50 text-blue-700 border-blue-200',
  ICLR: 'bg-sky-50 text-sky-700 border-sky-200',
  ICML: 'bg-indigo-50 text-indigo-700 border-indigo-200',
  'IEEE ISBI': 'bg-slate-50 text-slate-600 border-slate-200',
}

function VenueBadge({ venue }: { venue: string }) {
  const base = venueColors[venue] ?? 'bg-gray-100 text-gray-500 border-gray-200'
  return (
    <span className={`inline-block px-2 py-0.5 text-xs font-semibold rounded border ${base}`}>
      {venue}
    </span>
  )
}

const pubTypeShortLabels: Record<PubType, string> = {
  conference: 'Conference',
  workshop: 'Workshop',
  journal: 'Journal',
  preprint: 'Preprint',
}

const pubTypeColors: Record<PubType, string> = {
  conference: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  workshop: 'bg-amber-50 text-amber-700 border-amber-200',
  journal: 'bg-purple-50 text-purple-700 border-purple-200',
  preprint: 'bg-gray-100 text-gray-500 border-gray-200',
}

function TypeBadge({ type }: { type: PubType }) {
  return (
    <span className={`inline-block px-2 py-0.5 text-xs font-semibold rounded border ${pubTypeColors[type]}`}>
      {pubTypeShortLabels[type]}
    </span>
  )
}

// ── Nav ───────────────────────────────────────────────────────────────────────

const navLinks = [
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#publications', label: 'Publications' },
  { href: '#projects', label: 'Projects' },
  { href: '#awards', label: 'Awards' },
]

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#hero" className="font-serif text-lg text-gray-900 hover:text-blue-600 transition-colors">
          EY
        </a>
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-gray-500 hover:text-blue-600 transition-colors font-medium"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <button
          className="md:hidden p-1 text-gray-600"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <>
                <line x1="4" y1="4" x2="18" y2="18" />
                <line x1="18" y1="4" x2="4" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="7" x2="19" y2="7" />
                <line x1="3" y1="13" x2="19" y2="13" />
              </>
            )}
          </svg>
        </button>
      </div>
      {menuOpen && (
        <nav className="md:hidden bg-white border-b border-gray-200 px-6 py-3 flex flex-col gap-3">
          {navLinks.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-gray-600 hover:text-blue-600 font-medium transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}

// ── Social link ───────────────────────────────────────────────────────────────

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target={href.startsWith('mailto') ? undefined : '_blank'}
      rel="noreferrer"
      aria-label={label}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-gray-600 text-sm font-medium hover:border-blue-300 hover:text-blue-600 transition-all shadow-sm"
    >
      {children}
    </a>
  )
}

// ── Hero ──────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center pt-20 pb-16 px-6 max-w-5xl mx-auto w-full"
    >
      <div className="flex flex-col-reverse md:flex-row items-start md:items-end justify-between gap-10">
        <div className="flex-1">
          <p className="text-sm font-medium text-blue-600 tracking-widest uppercase mb-4">
            AI Researcher & Engineer
          </p>
          <h1 className="font-serif text-5xl md:text-7xl text-gray-900 leading-tight mb-6 whitespace-nowrap">
            EungGu Yun
          </h1>
          <p className="text-gray-500 text-base max-w-md leading-relaxed mb-8">
            Researcher at{' '}
            <a href={personal.companyUrl} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline font-medium">
              SAIGE
            </a>{' '}
            working on industrial image anomaly detection. Previously at KAIST Graduate School of AI.
          </p>
          <div className="flex flex-wrap gap-3">
            <SocialLink href={`mailto:${personal.email}`} label="Email">
              <svg width="15" height="15" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884zM18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Email
            </SocialLink>
            <SocialLink href={personal.github} label="GitHub">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.165c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </SocialLink>
            <SocialLink href={personal.scholar} label="Google Scholar">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 24a7 7 0 110-14 7 7 0 010 14zm0-24L0 9.5l4.838 3.94A8 8 0 0112 10a8 8 0 017.162 3.44L24 9.5z"/>
              </svg>
              Scholar
            </SocialLink>
            <SocialLink href={personal.linkedin} label="LinkedIn">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </SocialLink>
          </div>
        </div>
        <div className="shrink-0">
          <div className="w-36 h-36 md:w-52 md:h-52 rounded-2xl overflow-hidden ring-1 ring-gray-200 shadow-lg">
            <img
              src={personal.profileImage}
              alt="EungGu Yun"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Section wrapper ───────────────────────────────────────────────────────────

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="py-20 px-6 max-w-5xl mx-auto w-full">
      <div className="flex items-baseline gap-4 mb-12">
        <h2 className="font-serif text-3xl md:text-4xl text-gray-900 shrink-0">{title}</h2>
        <div className="flex-1 h-px bg-gray-200" />
      </div>
      {children}
    </section>
  )
}

// ── Experience ────────────────────────────────────────────────────────────────

function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="flex flex-col">
        {experiences.map((e, i) => (
          <div key={i} className="flex gap-0">
            {/* date column */}
            <div className="w-28 sm:w-36 shrink-0 text-right pr-4 pt-1">
              <p className="text-xs font-medium text-gray-500 leading-tight">{e.period}</p>
              <p className="text-xs text-gray-400 mt-0.5">{e.location}</p>
            </div>
            {/* spine + dot */}
            <div className="relative flex flex-col items-center w-5 shrink-0">
              <div className={`absolute top-0 w-px bg-gray-200 ${i === 0 ? 'top-2' : 'top-0'} ${i === experiences.length - 1 ? 'bottom-[calc(100%-2rem)]' : 'bottom-0'}`} />
              <div className="relative z-10 mt-1.5 w-2.5 h-2.5 rounded-full bg-blue-500 ring-2 ring-white shrink-0" />
            </div>
            {/* content */}
            <div className="flex-1 pl-4 pb-8">
              <h3 className="text-base font-semibold text-gray-900 leading-tight">{e.title}</h3>
              <p className="text-sm text-blue-600 font-medium mt-0.5">{e.company}</p>
              <p className="text-xs text-gray-400 mt-0.5">{e.dept}</p>
              <ul className="mt-2 space-y-1.5">
                {e.details.map((d, j) => (
                  <li key={j} className="text-sm text-gray-600 flex gap-2">
                    <span className="text-blue-400 mt-0.5 shrink-0">›</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

// ── Education ─────────────────────────────────────────────────────────────────

function Education() {
  return (
    <Section id="education" title="Education">
      <div className="flex flex-col">
        {education.map((e, i) => (
          <div key={i} className="flex gap-0">
            {/* date column */}
            <div className="w-28 sm:w-36 shrink-0 text-right pr-4 pt-1">
              <p className="text-xs font-medium text-gray-500 leading-tight">{e.period}</p>
              <p className="text-xs text-gray-400 mt-0.5">{e.location}</p>
            </div>
            {/* spine + dot */}
            <div className="relative flex flex-col items-center w-5 shrink-0">
              <div className={`absolute top-0 w-px bg-gray-200 ${i === 0 ? 'top-2' : 'top-0'} ${i === education.length - 1 ? 'bottom-[calc(100%-2rem)]' : 'bottom-0'}`} />
              <div className="relative z-10 mt-1.5 w-2.5 h-2.5 rounded-full bg-blue-500 ring-2 ring-white shrink-0" />
            </div>
            {/* content */}
            <div className="flex-1 pl-4 pb-8">
              <h3 className="text-base font-semibold text-gray-900 leading-tight">{e.degree}</h3>
              <p className="text-sm text-blue-600 font-medium mt-0.5">{e.institution}</p>
              <p className="text-xs text-gray-400 mt-0.5">{e.school}</p>
              <ul className="mt-2 space-y-1.5">
                {e.details.map((d, j) => (
                  <li key={j} className="text-sm text-gray-600 flex gap-2">
                    <span className="text-blue-400 mt-0.5 shrink-0">›</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

// ── Publications ──────────────────────────────────────────────────────────────

const pubTypeOrder: PubType[] = ['conference', 'workshop', 'journal', 'preprint']

function Publications() {
  const sortedPubs = [...publications].sort(
    (a, b) => pubTypeOrder.indexOf(a.type) - pubTypeOrder.indexOf(b.type)
  )

  return (
    <Section id="publications" title="Publications">
      <div className="space-y-4">
        {sortedPubs.map((p, i) => (
          <article
            key={i}
            className="bg-white rounded-xl border border-gray-200 p-5 hover:border-blue-200 hover:shadow-sm transition-all duration-200 group"
          >
            <div className="flex items-center gap-1.5 flex-wrap mb-2">
              <TypeBadge type={p.type} />
              <VenueBadge venue={p.venue} />
              <span className="inline-block px-2 py-0.5 text-xs font-semibold rounded border bg-gray-100 text-gray-500 border-gray-200">
                {p.year}
              </span>
            </div>
            <a
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="block text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors leading-snug mb-1.5"
            >
              {p.title}
            </a>
            <p className="text-xs text-gray-500 leading-relaxed">
              {renderAuthors(p.authors)}
            </p>
            {p.note && (
              <p className="text-xs text-amber-600 font-medium mt-1">{p.note}</p>
            )}
          </article>
        ))}
      </div>
    </Section>
  )
}

// ── Projects ──────────────────────────────────────────────────────────────────

function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <article key={i} className="bg-white rounded-xl border border-gray-200 p-6 hover:border-blue-200 hover:shadow-md transition-all duration-200 flex flex-col">
            <div className="flex items-start justify-between gap-3 mb-3">
              <div>
                <h3 className="text-sm font-semibold text-gray-900 leading-snug mb-1">{p.title}</h3>
                <span className="text-xs text-blue-600 font-medium">{p.org}</span>
              </div>
              <span className="text-xs text-gray-400 shrink-0 font-medium">{p.period}</span>
            </div>
            <ul className="mt-2 space-y-1.5 flex-1">
              {p.details.map((d, j) => (
                <li key={j} className="text-sm text-gray-600 flex gap-2">
                  <span className="text-blue-400 mt-0.5 shrink-0">›</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}

// ── Awards ────────────────────────────────────────────────────────────────────

function Awards() {
  return (
    <Section id="awards" title="Awards">
      <div className="flex flex-col gap-4">
        {awards.map((a, i) => (
          <article key={i} className="bg-white rounded-xl border border-gray-200 p-5 hover:border-blue-200 hover:shadow-sm transition-all duration-200">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
              <h3 className="text-sm font-semibold text-gray-900">{a.title}</h3>
              <span className="text-xs text-gray-400 font-medium shrink-0">{a.period}</span>
            </div>
            <p className="text-xs text-blue-600 font-medium mb-1.5">{a.org}</p>
            <p className="text-sm text-gray-500">{a.detail}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}

// ── Footer ────────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white mt-10">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
        <span className="font-serif text-xl text-gray-900">EungGu Yun</span>
        <div className="flex items-center gap-4 flex-wrap justify-center">
          <a href={`mailto:${personal.email}`} className="hover:text-blue-600 transition-colors">
            {personal.email}
          </a>
          <span aria-hidden>·</span>
          <a href={personal.github} target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">
            GitHub
          </a>
          <span aria-hidden>·</span>
          <a href={personal.scholar} target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">
            Scholar
          </a>
          <span aria-hidden>·</span>
          <a href={personal.linkedin} target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}

// ── App ───────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Nav />
      <main className="flex flex-col items-center">
        <Hero />
        <div className="w-full bg-white border-y border-gray-100">
          <div className="max-w-5xl mx-auto">
            <Experience />
          </div>
        </div>
        <Education />
        <div className="w-full bg-white border-y border-gray-100">
          <div className="max-w-5xl mx-auto">
            <Publications />
          </div>
        </div>
        <Projects />
        <div className="w-full bg-white border-y border-gray-100">
          <div className="max-w-5xl mx-auto">
            <Awards />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
