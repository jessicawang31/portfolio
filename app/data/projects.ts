import { Project } from '../components/ProjectGrid';

const currentYear = new Date().getFullYear();

export const projects: Project[] = [
  {
    title: 'MAI Monetization',
    description:
      'An applied MAI initiative examining how AI capabilities can be packaged, prototyped, and evaluated as monetizable product experiences.',
    imageSrc: '/mai.jpg',
    siteUrl: 'https://microsoft.ai/',
    tags: ['React', 'Node.js', 'TypeScript', 'AI'],
    year: `2026 - ${currentYear}`,
    highlights: [
      'Product-to-engineering translation under ambiguous requirements', 
      'AI-focused feature exploration and feasibility validation',
      'Translated research and product vision into feasible AI-powered features through rapid prototyping',
      'Collaborated cross-functionally to evaluate tradeoffs and prioritize high-impact monetization opportunities'
,          ],
  },
  {
    title: 'ReThink',
    description:
      'Sustainability made easy. A centralized, web-based platform to identify and promote small, sustainable businesses, connecting UW students with local eco-friendly businesses through a full-stack web experience.',
    imageSrc: '/rethink.png',
    siteUrl: 'https://rethinkuw.netlify.app/',
    tags: ['React', 'Node.js', 'JavaScript', 'Netlify'],
    year: `2025 - ${currentYear}`,
    highlights: [
      'Searchable listings for local Seattle sustainable businesses',
      'Browse businesses by category and impact focus',
      'Detailed profiles highlighting sustainable practices',
    ],
  },
  {
    title: 'Bop It!',
    description:
      'Interactive web-based game featuring real-time gameplay logic and persistent leaderboard tracking.',
    imageSrc: '/bopit.png',
    siteUrl: 'https://github.com/jessicawang31/bop-it',
    tags: ['React', 'Next.js', 'JavaScript', 'MongoDB', 'RESTful APIs', 'Azure', 'Real-time data'],
    year: '2024-2025',
    highlights: [
      'Implemented real-time game logic and score tracking',
      'Built persistent leaderboard storage and retrieval',
      'Optimized state management and backend performance',
    ],
  },
  {
    title: 'PetSwipe',
    description:
      'Swipe-based pet adoption platform reimagining shelter discovery through a mobile-first matching experience.',
    imageSrc: '/petswipe.png',
    siteUrl: 'https://github.com/jessicawang31/PetSwipe',
    tags: ['Swift', 'XML', 'MongoDB', 'Xcode', 'Mobile Development', 'Authentication'],
    year: '2025',
    highlights: [
      'Designed swipe-based matching interface inspired by modern dating UX patterns',
      'Implemented user authentication and persistent match storage across devices',
      'Built filtering system by species, preferences, and location with shelter mapping integration',
    ],
  }
];
