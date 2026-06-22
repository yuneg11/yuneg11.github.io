import type { Service } from '../types.ts'

export const services: Service[] = [
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
