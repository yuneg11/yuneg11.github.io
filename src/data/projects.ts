import type { Project } from '../types.ts'

export const projects: Project[] = [
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
