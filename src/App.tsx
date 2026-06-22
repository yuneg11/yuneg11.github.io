import { useState } from 'react'

// ── Data ──────────────────────────────────────────────────────────────────────

const personal = {
  name: 'EungGu Yun',
  title: 'AI Researcher & Engineer',
  email: 'yuneg11@gmail.com',
  github: 'https://github.com/yuneg11',
  scholar: 'https://scholar.google.com/citations?user=r7-847MAAAAJ',
  linkedin: 'https://www.linkedin.com/in/yuneg',
  website: 'https://yuneg11.github.io',
  location: 'Seoul, South Korea',
  company: 'SAIGE',
  companyUrl: 'https://saige.ai/',
  profileImage: '/profile.jpg',
}

type Detail = string | { text: string; url: string }

const experiences: {
  title: string
  company: string
  companyUrl?: string
  dept: string
  deptUrl?: string
  period: string
  location: string
  details: Detail[]
}[] = [
  {
    title: 'AI Researcher',
    company: 'SAIGE',
    companyUrl: 'https://saige.ai/en/',
    dept: 'AI Lab',
    period: 'Mar 2023 – Present',
    location: 'Seoul, South Korea',
    details: [
      'Research on image anomaly detection (IAD) systems for industrial inspection.',
      'Research language-assisted vision models for data-efficient training.',
      'Conduct TensorRT-based optimization for real-time inference in object detection and tracking.',
      'Fine-tune VLMs for context-aware industrial safety monitoring.',
    ],
  },
  {
    title: 'Research Intern',
    company: 'Artificial Intelligence Institute of Seoul National University (AIIS)',
    companyUrl: 'https://aiis.snu.ac.kr/eng/',
    dept: 'Deep Representation Learning Research Group (DRL)',
    deptUrl: 'http://drl.snu.ac.kr',
    period: 'Jul 2020 – Sep 2020',
    location: 'Seoul, South Korea',
    details: [
      { text: 'Supervisor: Prof. Wonjong Rhee', url: 'http://drl.snu.ac.kr/?p=13209' },
      'Research on model interpretability and activation on-off patterns.',
      'Reproduced CNN visualization methods including Grad-CAM, (C)LRP, etc.',
    ],
  },
  {
    title: 'Research Intern',
    company: 'Electronics and Telecommunications Research Institute (ETRI)',
    companyUrl: 'https://etri.re.kr/eng/main/main.etri',
    dept: 'Artificial Intelligence Research Laboratory',
    deptUrl: 'https://etri.re.kr/eng/sub6/sub6_0101.etri?departCode=10',
    period: 'Jan 2020 – Feb 2020',
    location: 'Daejeon, South Korea',
    details: [
      { text: 'Supervisor: Yoo-mi Park', url: 'https://kr.linkedin.com/in/yoomipark-etri' },
      'Tested and debugged ETRI Deep Learning HPC Platform Dashboard.',
      'Implemented AlexNet and ResNet models with DL-MDL.',
    ],
  },
]

const education: {
  institution: string
  institutionUrl?: string
  school: string
  schoolUrl?: string
  degree: string
  period: string
  location: string
  details: Detail[]
}[] = [
  {
    institution: 'Korea Advanced Institute of Science and Technology (KAIST)',
    institutionUrl: 'https://www.kaist.ac.kr/en/',
    school: 'Graduate School of AI',
    schoolUrl: 'https://gsai.kaist.ac.kr',
    degree: 'M.S. in Artificial Intelligence',
    period: 'Mar 2021 – Feb 2023',
    location: 'Daejeon, South Korea',
    details: [
      { text: 'Supervisor: Prof. Juho Lee', url: 'https://juho-lee.github.io' },
      { text: 'Lab: Statistical Inference and Machine Learning Lab (SIML)', url: 'https://siml.kaist.ac.kr' },
      'Thesis: Traversing Between Modes in Function Space for Fast Ensembling',
      'Research interests: Loss landscape, Neural processes',
    ],
  },
  {
    institution: 'SungKyunKwan University (SKKU)',
    institutionUrl: 'https://www.skku.edu/eng/',
    school: 'Department of Computer Science and Engineering',
    schoolUrl: 'https://cs.skku.edu/en/college/department/cse_intro',
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
    authors: 'Dongmin Choi, Sangbin Lee, **EungGu Yun**, Jonghyuk Baek, Frank C. Park',
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
    title: 'Large-scale Graph Representation Learning of Dynamic Brain Connectome with Transformers',
    authors: 'Byung-Hoon Kim, Jungwon Choi, **EungGu Yun**, Kyungsang Kim, Xiang Li, Juho Lee',
    venue: 'TGL @ NeurIPS',
    year: 2023,
    url: 'https://arxiv.org/abs/2312.14939',
  },
  {
    type: 'workshop',
    title: 'A Generative Self-Supervised Framework using Functional Connectivity in fMRI Data',
    authors: 'Jungwon Choi, Seongho Keum, **EungGu Yun**, Byung-Hoon Kim, Juho Lee',
    venue: 'TGL @ NeurIPS',
    year: 2023,
    url: 'https://arxiv.org/abs/2312.01994',
  },
  {
    type: 'workshop',
    title: 'Early Exiting for Accelerated Inference in Diffusion Models',
    authors: 'Taehong Moon, Moonseok Choi, **EungGu Yun**, Jongmin Yoon, Gayoung Lee, Juho Lee',
    venue: 'SPIGM @ ICML',
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

const projects: { title: string; org: string; orgUrl?: string; period: string; details: string[] }[] = [
  {
    title: 'Bayesian Inference for Time-series Data with Missing Values',
    org: 'Samsung Research',
    orgUrl: 'https://research.samsung.com',
    period: 'Aug 2022 – Feb 2023',
    details: [
      'Developing a Bayesian deep learning method to quantify uncertainty within missing values.',
      'Proposed multivariate time-series classification model using ObsDropout regularization.',
      'Validated on PhysioNet 2012, MIMIC-III, and UCI human activity datasets.',
    ],
  },
  {
    title: 'Developing AI-based Emulator for Physics Processes in Numerical Models',
    org: 'National Institute of Meteorological Sciences (NIMS)',
    orgUrl: 'http://www.nims.go.kr/AE/MA/main.jsp',
    period: 'May 2021 – Jul 2022',
    details: [
      'Research on alternative techniques of physical processes in numerical weather prediction (NWP) based on AI.',
      'Goal: reduce computational costs and improve accuracy of NWP.',
    ],
  },
]

const awards: { title: string; org: string; orgUrl?: string; period: string; detail: string }[] = [
  {
    title: 'The National Scholarship for Science and Engineering',
    org: 'Korea Student Aid Foundation (KOSAF)',
    orgUrl: 'https://www.kosaf.go.kr/eng/jsp/aid/aid02_01_01.jsp',
    period: '2019 Spring – 2020 Spring',
    detail: 'Supports undergraduates with strong academic performance in science and engineering.',
  },
  {
    title: 'SungKyun Software Scholarship',
    org: 'SungKyunKwan University (SKKU)',
    orgUrl: 'https://cs.skku.edu/en/edures/education/view/4137',
    period: '2017 Spring – 2018 Fall',
    detail: 'Supports students with an outstanding GPA.',
  },
  {
    title: "Dean's List Award",
    org: 'College of Computing, SungKyunKwan University (SKKU)',
    orgUrl: 'https://cs.skku.edu/en',
    period: '2017 Spring – 2019 Fall',
    detail: 'In recognition of high scholastic achievement. (6 times)',
  },
]

const services: { venue: string; years: { year: number; note?: string; url?: string }[] }[] = [
  {
    venue: 'NeurIPS',
    years: [
      { year: 2025, note: 'Top 8%', url: 'https://neurips.cc/Conferences/2025/ProgramCommittee#:~:text=EungGu%20Yun' },
      { year: 2024, url: 'https://neurips.cc/Conferences/2024/ProgramCommittee#:~:text=EungGu%20Yun' },
      { year: 2023, url: 'https://neurips.cc/Conferences/2023/ProgramCommittee#:~:text=EungGu%20Yun' },
    ],
  },
  { venue: 'ICML', years: [{ year: 2025, url: 'https://icml.cc/Conferences/2025/ProgramCommittee#:~:text=EungGu%20Yun' }] },
  {
    venue: 'ICLR',
    years: [
      { year: 2025, url: 'https://iclr.cc/Conferences/2025/ProgramCommittee#:~:text=EungGu%20Yun' },
      { year: 2024, url: 'https://iclr.cc/Conferences/2024/Reviewers#:~:text=EungGu%20Yun' },
    ],
  },
  {
    venue: 'AAAI',
    years: [
      { year: 2026, url: 'https://aaai.org/conference/aaai/aaai-26/2026-program-committee#:~:text=EungGu%20Yun' },
      { year: 2025 },
    ],
  },
  { venue: 'Pattern Recognition', years: [{ year: 2026 }] },
]

const skills: { category: string; items: string[] }[] = [
  { category: 'Programming', items: ['Python', 'JavaScript', 'C', 'C++', 'LaTeX'] },
  { category: 'Deep Learning', items: ['PyTorch', 'JAX', 'TPU'] },
  { category: 'Systems', items: ['Linux', 'Docker', 'Google Cloud'] },
  { category: 'Languages', items: ['Korean (native)', 'English (intermediate)'] },
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
  NeurIPS: 'bg-gray-100 text-gray-700 border-gray-200',
  ICLR: 'bg-gray-100 text-gray-700 border-gray-200',
  ICML: 'bg-gray-100 text-gray-700 border-gray-200',
  'IEEE ISBI': 'bg-gray-100 text-gray-700 border-gray-200',
}

function VenueBadge({ venue }: { venue: string }) {
  const base = venueColors[venue] ?? 'bg-gray-100 text-gray-700 border-gray-200'
  return (
    <span className={`inline-block px-2 py-0.5 text-xs font-semibold rounded border ${base}`}>
      {venue}
    </span>
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
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-gray-600 text-sm font-medium hover:border-gray-400 hover:text-gray-900 transition-all shadow-sm"
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
      className="flex flex-col justify-center pt-20 pb-20 px-6 max-w-5xl mx-auto w-full"
    >
      <div className="flex flex-col-reverse md:flex-row items-start md:items-end justify-between gap-10">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-900 tracking-widest uppercase mb-4">
            AI Researcher & Engineer
          </p>
          <h1 className="font-serif text-5xl md:text-7xl text-gray-900 leading-tight mb-6">
            EungGu Yun
          </h1>
          <p className="text-gray-500 text-base max-w-md leading-relaxed mb-8">
            AI Researcher at{' '}
            <a href={personal.companyUrl} target="_blank" rel="noreferrer" className="text-gray-900 hover:underline font-medium">
              SAIGE
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
        </div>
        <div className="shrink-0">
          <div className="w-44 h-44 md:w-72 md:h-72 rounded-2xl overflow-hidden ring-1 ring-gray-200 shadow-lg">
            <img
              src={personal.profileImage}
              alt="EungGu Yun"
              width={512}
              height={512}
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

// ── Link helper ───────────────────────────────────────────────────────────────

function MaybeLink({
  href,
  className,
  children,
}: {
  href?: string
  className?: string
  children: React.ReactNode
}) {
  if (!href) return <span className={className}>{children}</span>
  return (
    <a href={href} target="_blank" rel="noreferrer" className={`${className ?? ''} hover:underline`}>
      {children}
    </a>
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
              <p className="text-xs text-gray-500 mt-0.5">{e.location}</p>
            </div>
            {/* spine + dot */}
            <div className="relative flex flex-col items-center w-5 shrink-0">
              <div className={`absolute w-px bg-gray-200 bottom-0 ${i === 0 ? 'top-2' : 'top-0'}`} />
              <div className="relative z-10 mt-1.5 w-2.5 h-2.5 rounded-full bg-gray-900 ring-2 ring-white shrink-0" />
            </div>
            {/* content */}
            <div className="flex-1 pl-4 pb-8">
              <h3 className="text-base font-semibold text-gray-900 leading-tight">{e.title}</h3>
              <p className="text-sm mt-0.5">
                <MaybeLink href={e.companyUrl} className="text-gray-900 font-medium">{e.company}</MaybeLink>
              </p>
              <p className="text-xs mt-0.5">
                <MaybeLink href={e.deptUrl} className="text-gray-500">{e.dept}</MaybeLink>
              </p>
              <ul className="mt-2 space-y-1.5">
                {e.details.map((d, j) => {
                  const text = typeof d === 'string' ? d : d.text
                  const url = typeof d === 'string' ? undefined : d.url
                  return (
                    <li key={j} className="text-sm text-gray-600 flex gap-2">
                      <span className="text-gray-500 mt-0.5 shrink-0">›</span>
                      <MaybeLink href={url}>{text}</MaybeLink>
                    </li>
                  )
                })}
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
              <p className="text-xs text-gray-500 mt-0.5">{e.location}</p>
            </div>
            {/* spine + dot */}
            <div className="relative flex flex-col items-center w-5 shrink-0">
              <div className={`absolute w-px bg-gray-200 bottom-0 ${i === 0 ? 'top-2' : 'top-0'}`} />
              <div className="relative z-10 mt-1.5 w-2.5 h-2.5 rounded-full bg-gray-900 ring-2 ring-white shrink-0" />
            </div>
            {/* content */}
            <div className="flex-1 pl-4 pb-8">
              <h3 className="text-base font-semibold text-gray-900 leading-tight">{e.degree}</h3>
              <p className="text-sm mt-0.5">
                <MaybeLink href={e.institutionUrl} className="text-gray-900 font-medium">{e.institution}</MaybeLink>
              </p>
              <p className="text-xs mt-0.5">
                <MaybeLink href={e.schoolUrl} className="text-gray-500">{e.school}</MaybeLink>
              </p>
              <ul className="mt-2 space-y-1.5">
                {e.details.map((d, j) => {
                  const text = typeof d === 'string' ? d : d.text
                  const url = typeof d === 'string' ? undefined : d.url
                  return (
                    <li key={j} className="text-sm text-gray-600 flex gap-2">
                      <span className="text-gray-500 mt-0.5 shrink-0">›</span>
                      <MaybeLink href={url}>{text}</MaybeLink>
                    </li>
                  )
                })}
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

type PubFilter = 'all' | PubType

function Publications() {
  const [filter, setFilter] = useState<PubFilter>('all')

  const byType = [...publications].sort(
    (a, b) => pubTypeOrder.indexOf(a.type) - pubTypeOrder.indexOf(b.type)
  )
  const byYearDesc = [...publications].sort((a, b) => b.year - a.year)

  const counts: Record<PubFilter, number> = {
    all: publications.length,
    conference: 0,
    workshop: 0,
    journal: 0,
    preprint: 0,
  }
  for (const p of publications) counts[p.type]++

  const filters: { key: PubFilter; label: string }[] = [
    { key: 'all', label: 'All' },
    { key: 'conference', label: 'Conference' },
    { key: 'workshop', label: 'Workshop' },
    { key: 'journal', label: 'Journal' },
    { key: 'preprint', label: 'Preprint' },
  ]

  const visiblePubs = filter === 'all' ? byYearDesc : byType.filter(p => p.type === filter)

  return (
    <Section id="publications" title="Publications">
      <div className="mb-6 flex flex-wrap items-center gap-2">
        {filters.map(f => {
          const active = filter === f.key
          return (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              aria-pressed={active}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-semibold tracking-wider uppercase transition-all shadow-sm ${
                active
                  ? 'bg-gray-900 border-gray-900 text-white'
                  : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300 hover:text-gray-900'
              }`}
            >
              <span>{f.label}</span>
              <span className={active ? 'text-gray-400' : 'text-gray-500'}>{counts[f.key]}</span>
            </button>
          )
        })}
      </div>
      <ul className="flex flex-col divide-y divide-gray-200">
        {visiblePubs.map((p) => (
          <li key={p.url} className="group flex gap-4 sm:gap-6 py-5 first:pt-0 last:pb-0">
            <div className="w-12 sm:w-14 shrink-0 pt-0.5">
              <p className="text-base sm:text-lg font-semibold text-gray-500 leading-none tabular-nums">{p.year}</p>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-3">
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="block text-base font-semibold text-gray-900 hover:underline leading-snug"
                >
                  {p.title}
                </a>
                <div className="shrink-0 pt-0.5">
                  <VenueBadge venue={p.venue} />
                </div>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed mt-1">
                {renderAuthors(p.authors)}
              </p>
              {p.note && (
                <p className="text-xs text-amber-700 font-medium mt-1">{p.note}</p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}

// ── Projects ──────────────────────────────────────────────────────────────────

function Projects() {
  return (
    <Section id="projects" title="Projects">
      <ul className="flex flex-col divide-y divide-gray-200">
        {projects.map((p, i) => (
          <li key={i} className="flex gap-4 sm:gap-6 py-6 first:pt-0 last:pb-0">
            <div className="w-fit pt-1">
              <p className="text-xs font-medium text-gray-500 leading-tight flex flex-col sm:flex-row sm:gap-1">
                {p.period.split(/\s*–\s*/).map((part, idx, arr) => (
                  <span key={idx} className="whitespace-nowrap">
                    {part}
                    {idx < arr.length - 1 && ' –'}
                  </span>
                ))}
              </p>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-base font-semibold text-gray-900 leading-snug">{p.title}</h3>
              <p className="text-sm mt-0.5">
                <MaybeLink href={p.orgUrl} className="text-gray-900 font-medium">{p.org}</MaybeLink>
              </p>
              <ul className="mt-2 space-y-1.5">
                {p.details.map((d, j) => (
                  <li key={j} className="text-sm text-gray-600 flex gap-2">
                    <span className="text-gray-500 mt-0.5 shrink-0">›</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}

// ── Awards ────────────────────────────────────────────────────────────────────

function Awards() {
  return (
    <Section id="awards" title="Awards">
      <ul className="flex flex-col divide-y divide-gray-200">
        {awards.map((a, i) => (
          <li key={i} className="flex gap-4 sm:gap-6 py-6 first:pt-0 last:pb-0">
            <div className="w-18 sm:w-34 pt-1">
              <p className="text-xs font-medium text-gray-500 leading-tight flex flex-col sm:flex-row sm:gap-1">
                {a.period.split(/\s*–\s*/).map((part, idx, arr) => (
                  <span key={idx} className="whitespace-nowrap">
                    {part}
                    {idx < arr.length - 1 && ' –'}
                  </span>
                ))}
              </p>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-base font-semibold text-gray-900 leading-snug">{a.title}</h3>
              <p className="text-sm mt-0.5">
                <MaybeLink href={a.orgUrl} className="text-gray-900 font-medium">{a.org}</MaybeLink>
              </p>
              <p className="text-sm text-gray-600 mt-2">{a.detail}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}

// ── Academic Services ─────────────────────────────────────────────────────────

function Services() {
  return (
    <Section id="services" title="Academic Services">
      <ul className="flex flex-col divide-y divide-gray-200">
        {services.map((s, i) => (
          <li key={i} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 py-4 first:pt-0 last:pb-0">
            <div className="flex items-baseline gap-2 shrink-0 sm:w-64">
              <span className="text-sm text-gray-500">Reviewer for</span>
              <span className="text-base font-semibold text-gray-900">{s.venue}</span>
            </div>
            <div className="flex-1 flex flex-wrap items-center gap-2">
              {s.years.map((y, j) => {
                const baseClass = `inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border text-xs font-semibold tabular-nums transition-colors ${
                  y.note
                    ? 'bg-amber-50 border-amber-200 text-amber-800'
                    : 'bg-white border-gray-200 text-gray-700'
                } ${y.url ? (y.note ? 'hover:border-amber-300' : 'hover:border-gray-300') : ''}`
                const content = (
                  <>
                    <span>{y.year}</span>
                    {y.note && <span className="font-medium">· {y.note}</span>}
                  </>
                )
                return y.url ? (
                  <a key={j} href={y.url} target="_blank" rel="noreferrer" className={baseClass}>
                    {content}
                  </a>
                ) : (
                  <span key={j} className={baseClass}>
                    {content}
                  </span>
                )
              })}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}

// ── Skills ────────────────────────────────────────────────────────────────────

function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
        {skills.map((s, i) => (
          <div key={i}>
            <p className="text-xs font-medium tracking-[0.18em] text-gray-500 uppercase mb-3">
              {s.category}
            </p>
            <div className="flex flex-wrap gap-2">
              {s.items.map((item, j) => (
                <span
                  key={j}
                  className="inline-flex items-center px-2.5 py-1 rounded-md border border-gray-200 bg-white font-mono text-xs text-gray-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

// ── App ───────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
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
        <Services />
        <div className="w-full bg-white border-y border-gray-100">
          <div className="max-w-5xl mx-auto">
            <Projects />
          </div>
        </div>
        <Awards />
        <div className="w-full bg-white border-y border-gray-100">
          <div className="max-w-5xl mx-auto">
            <Skills />
          </div>
        </div>
      </main>
    </div>
  )
}
