// CvDocument -> LaTeX source for XeTeX (compiled with tectonic).
// Look: Source Sans Pro body, Roboto header, FontAwesome icons, Pretendard for the Korean name.
// No literal non-ASCII inside String.raw templates below: Bun turns it into \uXXXX
// escapes that String.raw keeps verbatim. Use LaTeX commands (\textbullet, ...) instead.
import { fileURLToPath } from 'node:url'
import type { CvDocument, EntryItem, Group, Item, Rich, Run, Section } from './model'

const pretendardDir = fileURLToPath(new URL('./node_modules/pretendard/dist/public/static/', import.meta.url))

/** Escape plain text for LaTeX. */
const tex = (s: string) =>
  s.replace(/[\\{}&%$#_~^]/g, (c) => ({
    '\\': '\\textbackslash{}', '{': '\\{', '}': '\\}', '&': '\\&', '%': '\\%', '$': '\\$',
    '#': '\\#', '_': '\\_', '~': '\\textasciitilde{}', '^': '\\textasciicircum{}',
  })[c]!)

/** Escape a URL for \href inside macro arguments. */
const url = (s: string) => s.replace(/[\\#%~]/g, (c) => `\\${c}`)

const run = (r: Run) => {
  let out = tex(r.text)
  if (r.strong) out = `\\textbf{${out}}`
  if (r.em) out = `\\textit{${out}}`
  return r.url ? `\\href{${url(r.url)}}{${out}}` : out
}
const rich = (rs: Rich | undefined) => (rs ?? []).map(run).join('')

const ICONS = { email: '\\faEnvelope', website: '\\faHome', github: '\\faGithubSquare', linkedin: '\\faLinkedin' }

function details(list: Rich[]): string {
  if (!list.length) return ''
  return `\\begin{details}\n${list.map((d) => `  \\item ${rich(d)}`).join('\n')}\n\\end{details}\n`
}

/** Positions (organization first) or items (title first); both keep their lines on one page. */
function entry(it: EntryItem, layout: Section['layout']): string {
  const keep = `\\needspace{${3 + it.details.length}\\baselineskip}\n`
  if (layout === 'positions') {
    return keep
      + `\\position{${rich(it.org)}}{${tex(it.place ?? '')}}{${rich(it.title)}}{${tex(it.period ?? '')}}{${rich(it.unit)}}\n`
      + details(it.details)
  }
  // Items: the unit precedes its organization on one line ("College of Computing, SKKU").
  const org = [rich(it.unit), rich(it.org)].filter(Boolean).join(', ')
  return keep + `\\honor{${rich(it.title)}}{${tex(it.period ?? '')}}{${org}}\n` + details(it.details)
}

function item(it: Item, layout: Section['layout'], doc: CvDocument): string {
  switch (it.kind) {
    case 'entry':
      return entry(it, layout)
    case 'pub': {
      const equal = it.equal ? `\\enspace(*: ${tex(doc.labels.equal)})` : ''
      const venue = (it.note ? `\\pubnote{${tex(it.note)}}\\enspace ` : '') + tex(it.venue)
      return `\\pub{${rich(it.title)}}{${venue}}{${rich(it.authors)}${equal}}{${it.year}}`
    }
    case 'service':
      return `\\service{${tex(it.role)} for \\venue{${tex(it.venue)}}}{${rich(it.years)}}`
    case 'skill':
      return `\\skill{${tex(it.label)}}{${tex(it.value)}}`
  }
}

function group(g: Group, s: Section, doc: CvDocument): string {
  const head = g.title ? `\\subsection{${tex(g.title)}}\n` : ''
  const rows = g.items.map((it) => item(it, s.layout, doc))
  // Services and skills are table rows.
  const kind = g.items[0]?.kind
  if (kind === 'service') return `${head}\\begin{services}\n${rows.join(' \\\\\n')}\n\\end{services}`
  if (kind === 'skill') return `${head}\\begin{skills}\n${rows.join(' \\\\\n')}\n\\end{skills}`
  return head + rows.join('\n')
}

const section = (s: Section, doc: CvDocument) =>
  [`\\section{${tex(s.title)}}`, ...s.groups.map((g) => group(g, s, doc))].join('\n')

export function latex(doc: CvDocument): string {
  const h = doc.header
  const name = `${h.given} ${h.family}`
  return String.raw`\documentclass[11pt]{article}
\usepackage[a4paper, top=14.5mm, bottom=22mm, left=14mm, right=14mm, footskip=7.5mm]{geometry}
\usepackage{fontspec}
\usepackage{fontawesome5}
\usepackage{xcolor}
\usepackage{tabularx}
\usepackage{enumitem}
\usepackage{fancyhdr}
\usepackage{needspace}
\usepackage[hidelinks]{hyperref}

% ------------------------------------------------------------------ fonts
\setmainfont{SourceSansPro}[
  Extension = .otf,
  UprightFont = *-Light,
  ItalicFont = *-LightIt,
  BoldFont = *-Semibold,
  BoldItalicFont = *-SemiboldIt,
  FontFace = {rg}{n}{*-Regular},
  FontFace = {rg}{it}{*-RegularIt},
]
\newfontfamily\hangulfont{Pretendard}[Path = ${pretendardDir}, Extension = .otf, UprightFont = *-Light, LetterSpace = 8]
\newcommand{\regular}{\fontseries{rg}\selectfont}
\newfontfamily\headerfont{Roboto}[Extension = .otf, UprightFont = *-Regular]
\newfontfamily\headerlight{Roboto}[Extension = .otf, UprightFont = *-Light, ItalicFont = *-LightItalic]

% ----------------------------------------------------------------- colors
\definecolor{darktext}{HTML}{414141}
\definecolor{text}{HTML}{333333}
\definecolor{graytext}{HTML}{5D5D5D}
\definecolor{lighttext}{HTML}{B5B5B5}
\color{text}

\hypersetup{pdftitle={${tex(name)} CV}, pdfauthor={${tex(name)}}, pdflang={en}}
\setlength{\parindent}{0pt}
\frenchspacing
\raggedbottom
\setlength{\emergencystretch}{3em}

% ----------------------------------------------------------------- footer
\pagestyle{fancy}
\fancyhf{}
\renewcommand{\headrulewidth}{0pt}
\fancyfoot[L]{\headerlight\color{graytext}${tex(doc.labels.updated)}: \textit{${tex(doc.updated)}}}
\fancyfoot[R]{\headerlight\color{darktext}\thepage}

% --------------------------------------------------------------- sections
\renewcommand{\section}[1]{%
  \par\addvspace{16pt}\needspace{5\baselineskip}%
  {\fontsize{18}{22}\selectfont\bfseries\color{darktext}\scshape #1\par}%
  \vspace{3pt}{\color{graytext}\hrule height 0.6pt}\vspace{4pt}\nopagebreak}
\renewcommand{\subsection}[1]{%
  \par\addvspace{14pt}\needspace{4\baselineskip}%
  {\fontsize{12}{15}\selectfont\color{darktext}\scshape #1\par}%
  \vspace{2pt}\nopagebreak}

% ---------------------------------------------------------------- entries
\newcolumntype{L}{>{\raggedright\arraybackslash}X}
% A table cell that starts with a color change needs \leavevmode first,
% or LaTeX adds an empty line above it.
\newcommand{\place}[1]{\leavevmode{\fontsize{9}{11}\selectfont\itshape\color{graytext}#1}}

% #1 organization, #2 place, #3 title, #4 period, #5 unit (next to the title, to save a line)
\newcommand{\position}[5]{%
  \par\addvspace{10pt}\noindent
  \begin{tabularx}{\linewidth}{@{}L@{\hspace{10pt}}r@{}}
    {\leavevmode\fontsize{12.5}{15}\selectfont\bfseries\color{darktext}#1} & \place{#2} \\[1pt]
    {\leavevmode\fontsize{10.5}{13}\selectfont\regular\itshape\color{darktext}#3}%
    \if\relax\detokenize{#5}\relax\else
      {\fontsize{9.5}{13}\selectfont\color{graytext}\enspace\textperiodcentered\enspace #5}%
    \fi & \place{#4}
  \end{tabularx}\par}

% #1 title, #2 period, #3 organization
\newcommand{\honor}[3]{%
  \par\addvspace{10pt}\noindent
  \begin{tabularx}{\linewidth}{@{}L@{\hspace{10pt}}r@{}}
    {\leavevmode\fontsize{11}{14}\selectfont\bfseries\color{darktext}#1} & \place{#2}
  \end{tabularx}\par
  \vspace{2pt}{\fontsize{9.5}{12}\selectfont\regular\color{text}#3\par}}

\newlist{details}{itemize}{1}
\setlist[details]{label={\textbullet}, leftmargin=10pt, labelsep=5pt, topsep=3pt, partopsep=0pt, itemsep=1.5pt, parsep=0pt}
\AddToHook{env/details/begin}{\fontsize{10}{13.5}\selectfont\color{text}}

% ------------------------------------------------------------ publications
% #1 title, #2 venue (with note), #3 authors, #4 year
\newcommand{\pubnote}[1]{{\itshape\color{graytext}#1}}
\newcommand{\pub}[4]{%
  \par\addvspace{8pt}\needspace{3\baselineskip}\noindent
  \begin{tabularx}{\linewidth}{@{}L@{\hspace{10pt}}r@{}}
    {\leavevmode\fontsize{10.5}{13}\selectfont\bfseries\color{darktext}#1} & {\leavevmode\fontsize{10.5}{13}\selectfont\regular\color{darktext}#2} \\[1pt]
    {\leavevmode\fontsize{8.5}{11}\selectfont\color{text}#3} & \place{#4}
  \end{tabularx}\par}

% --------------------------------------------------------- services, skills
\newcommand{\venue}[1]{{\bfseries\color{darktext}#1}}
\newenvironment{services}
  {\par\addvspace{6pt}\noindent\fontsize{10.5}{16}\selectfont\color{graytext}\begin{tabular}{@{}l@{\hspace{12pt}}l@{}}}
  {\end{tabular}\par}
\newcommand{\service}[2]{#1 & {\fontsize{9.5}{16}\selectfont#2}}
\newenvironment{skills}
  {\par\addvspace{6pt}\noindent\fontsize{10.5}{16}\selectfont\color{graytext}\begin{tabular}{@{}r@{\hspace{10pt}}l@{}}}
  {\end{tabular}\par}
\newcommand{\skill}[2]{\venue{#1} & #2}

\begin{document}

% ----------------------------------------------------------------- header
% Centered without a center environment: its top spacing would undo the
% negative space that lifts the header above the text block of later pages.
\vspace*{-13.5mm}
{\centering
  {\fontsize{32}{38}\selectfont\color{darktext}{\headerfont ${tex(h.given)}}\ {\headerlight ${tex(h.family)}}\par}
  \vspace{5pt}
  {\fontsize{10.5}{13}\selectfont\hangulfont\color{graytext}${tex(h.altName)}\par}
  \vspace{8pt}
  % Contacts: gray icons, text, and light separators.
  {\fontsize{8.5}{10}\selectfont\color{text}${h.contacts
    .map((c) => `\\href{${url(c.url)}}{{\\color{graytext}${ICONS[c.kind]}}\\hspace{3.5pt}${tex(c.text)}}`)
    .join(String.raw`\hspace{11pt}{\color{lighttext}|}\hspace{11pt}`)}\par}
}
\vspace{10pt}
{\color{graytext}\hrule height 0.6pt}
\vspace{12pt}
{\fontsize{11.5}{16.5}\selectfont\color{text}${doc.intro.map(rich).join('\n\n')}\par}

${doc.sections.map((s) => section(s, doc)).join('\n\n')}

\end{document}
`
}
