import type { Experience } from '../types.ts'

export const experiences: Experience[] = [
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
