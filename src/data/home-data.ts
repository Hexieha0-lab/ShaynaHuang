import type { Publication } from '../components/work/Publication'

// 教育背景数据
export const EDUCATION = [
  {
    degree: 'Bachelor of Science in Computer Science',
    school: 'University Name',
    year: '2020-2024',
    description: 'Focused on software engineering and data structures'
  },
  {
    degree: 'Master of Science in Artificial Intelligence',
    school: 'Graduate School',
    year: '2024-2026',
    description: 'Specializing in machine learning and deep learning'
  }
]

// 技能数据
export const SKILLS = [
  'JavaScript/TypeScript',
  'React/Next.js',
  'Node.js',
  'Python',
  'Machine Learning',
  'Data Analysis',
  'UI/UX Design',
  'Git/GitHub'
]

// 兴趣数据
export const INTERESTS = [
  'Artificial Intelligence',
  'Web Development',
  'Data Science',
  'Photography',
  'Travel',
  'Reading',
  'Music',
  'Sports'
]

// 出版物数据
export const PUBLICATION_MOCK: Publication[] = [
  {
    title: '"Not Human, Funnier": How Machine Identity Shapes Humor Perception in Online AI Stand-up Comedy',
    year: '2026',
    authors: 'Huang, X.*; Wang, C.*; Hao, Y.*; Yang, D.; LC, R.',
    journal: 'ACM CHI 2026',
    description: '',
    image: '/images/pub3.png',
    category: 'conference',
    linkWebsite: 'https://nothumanfunnier.netlify.app/',
    linkarXiv: 'http://arxiv.org/abs/2602.12763',
    linkPdf: 'pdfs/Not Human.pdf'
  },
  {
    title: '"Ronaldo’s a poser!": How the Use of Generative AI Shapes Debates in Online Forums',
    year: '2025',
    authors: 'Zeng, Y.*; Shi, Y.*; Huang, X.*; Nah, F.; LC, R.',
    journal: 'ACM CHI 2025',
    description: '',
    image: '/images/pub1.png',
    category: 'conference',
    linkProceedings: 'https://dl.acm.org/doi/full/10.1145/3706598.3713829',
    linkarXiv: 'https://arxiv.org/abs/2502.09693',
    linkPdf: 'pdfs/Ronaldo.pdf'
  },
  {
    title: 'Innovative Interpretation of Traditional Handicraft in Product Design—A Case Study of Qinhuai Lanterns',
    year: '2023',
    authors: 'Zhang, N.; Lei, A.; Wang, L.; Huang, X.',
    journal: 'Furniture & Interior Design, 2023',
    description: '',
    image: '/images/pub2.png',
    category: 'journal',
    linkDoi: 'https://doi.org/10.16771/j.cn43-1247/ts.2023.01.015',
    linkPdf: '/pdfs/Trad.pdf'
  }
]

// 设计项目数据
export const PROJECTS_MOCK = [
  {
    title: 'ActiviKid - Web Design',
    summary: 'This is a website design for a start-up company in Hong Kong. During the internship, l was responsible for the overall web page design andpart of the visual design',
    image: '/images/Activikid.png',
    link: 'https://activikid.hk/',
    technologies: ['Figma', 'Adobe XD', 'Sketch'],
    year: '2025'
  },
  {
    title: 'AICCESS - Concept Design',
    summary: 'This project poses a question of how the future "Al refugees" will survive, and proposing acorresponding design solution',
    image: '/images/PD_1_cover.png',
    link: '/pdfs/AICCESS.pdf',
    technologies: ['Unity', 'Adobe Illustrator'],
    year: '2023'
  },
  {
    title: 'UNDERGROUND ADVISOR - Digital Design',
    summary: 'This project expresses the reflection on the current digital technology leading human beings towards convergence through an interactive exhibition',
    image: '/images/PD_3_cover.png',
    link: '/pdfs/UNDERGROUND ADVISOR.pdf',
    technologies: ['TouchDesigner', 'Python'],
    year: '2023'
  },
  {
    title: 'Energlobe - Product Design',
    summary: 'This project provides psychological comfort to children while helping parents to ensure their safety, trying to create a better life for people indisaster-prone areas',
    image: '/images/PD_2_cover.png',
    link: '/pdfs/Energlobe.pdf',
    technologies: ['Rhino', 'Keyshot'],
    year: '2023'
  },
  {
    title: 'MyoRider - Concept Design',
    summary: 'The project aims to improve the self-care ability of people with serious disabilities,by using EMG to construct a system that enables them to achieve mobility control through small movements',
    image: '/images/PD_4_cover.png',
    link: '/pdfs/MyoRider.pdf',
    technologies: ['Rhino', 'Keyshot'],
    year: '2023'
  },
  {
    title: 'Beyond Hands - Product Design',
    summary: 'Assistive photography product designed for disabled without hands.',
    image: '/images/GP_5_cover.png',
    link: '/ppts/BH.pptx',
    technologies: ['Rhino', 'Keyshot'],
    year: '2025'
  }
]
