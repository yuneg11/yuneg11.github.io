import type { Education } from '../types.ts'

export const education: Education[] = [
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
