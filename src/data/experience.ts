export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  type?: string;
  description?: string;
  featured?: boolean;
}

export const experiences: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Freelance Graphic Designer & Video Editor',
    company: 'عمل حر • Freelance',
    period: '2022 — Present',
    type: 'تصميم جرافيك ومونتاج',
    description: 'تصميم هويات بصرية متكاملة، إعلانات سوشيال ميديا، ومونتاج فيديوهات احترافية لصناع المحتوى والشركات.',
    featured: true,
  },
  {
    id: 'exp-2',
    role: 'Content Creator',
    company: 'USEAF — YouTube Channel',
    period: '2023 — Present',
    type: 'صناعة محتوى وتجارب رقمية',
    description: 'إنتاج محتوى مرئي تعليمي وإبداعي يركز على التصميم والتقنية وتطوير المهارات الرقمية.',
    featured: true,
  },
  {
    id: 'exp-3',
    role: 'Graphic Designer',
    company: 'Speak-arabi',
    period: '2025 — Present',
    type: 'تصميم هويات ومواد تعليمية',
    description: 'تصميم الهوية البصرية والمواد التعليمية والتفاعلية لمنصة تعليم اللغة العربية.',
    featured: true,
  },
  {
    id: 'exp-4',
    role: 'Graphic Designer',
    company: 'Mr. Islam Saied',
    period: '2025 — Present',
    type: 'محتوى تعليمي وبصري',
    description: 'تصميم الأغلفة والمذكرات والمحتوى الإعلاني لمنصة تعليمية متخصصة.',
    featured: true,
  },
  {
    id: 'exp-5',
    role: 'Graphic Designer',
    company: 'Al-Samy Maths',
    period: '2023 — Present',
    type: 'تصميم تعليمي وعلامة تجارية',
    description: 'تطوير الهوية البصرية والمطبوعات والمحتوى الرقمي لسلسلة السامي التعليمية.',
    featured: false,
  },
  {
    id: 'exp-6',
    role: 'Graphic Designer',
    company: 'Physics Empire',
    period: '2024 — 2025',
    type: 'تصميم جرافيك وبصريات',
    description: 'تصميم بوسترات ومطبوعات ومواد بصرية تفاعلية لطلاب الثانوية.',
    featured: false,
  },
  {
    id: 'exp-7',
    role: 'Graphic Designer',
    company: 'UE CNC',
    period: '2024 — 2025',
    type: 'تصميم علامات تجارية وصناعية',
    description: 'تصميم مطبوعات وهويات لمجال ماكينات التحكم الرقمي CNC والتصميم الصناعي.',
    featured: false,
  },
  {
    id: 'exp-8',
    role: 'Graphic Designer',
    company: 'Mohamed Shawky Chemistry',
    period: '2023 — 2024',
    type: 'تصميم تعليمي وتفاعلي',
    description: 'إنتاج المذكرات التعليمية وبوسترات المراجعات النهائية.',
    featured: false,
  },
];
