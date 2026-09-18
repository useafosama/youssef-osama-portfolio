import { SkillCategory } from '@/types';

export const skillCategories: SkillCategory[] = [
  {
    title: 'DESIGN',
    arabicTitle: 'التصميم والهوية البصرية',
    description: 'بناء هويات بصرية متكاملة وواجهات مستخدم دقيقة تراعي أدق تفاصيل التجربة.',
    skills: [
      { name: 'Figma', tag: 'UI/UX & Systems', icon: 'figma' },
      { name: 'Photoshop', tag: 'Visual Craft', icon: 'image' },
      { name: 'Illustrator', tag: 'Vector & Icons', icon: 'pen-tool' },
      { name: 'Canva', tag: 'Fast Layouts', icon: 'layout' },
      { name: 'Branding', tag: 'Identity Guidelines', icon: 'compass' },
      { name: 'Visual Identity', tag: 'Brand Systems', icon: 'palette' },
    ],
  },
  {
    title: 'DEVELOPMENT',
    arabicTitle: 'التطوير وهندسة الويب',
    description: 'تحويل التصاميم إلى كود عالي الأداء، نظيف، وسريع الاستجابة على جميع الأجهزة.',
    skills: [
      { name: 'Next.js', tag: 'Fullstack React', icon: 'layers' },
      { name: 'React', tag: 'UI Architecture', icon: 'code' },
      { name: 'Tailwind CSS', tag: 'Modern Styling', icon: 'sparkles' },
      { name: 'Firebase', tag: 'Realtime & Auth', icon: 'database' },
      { name: 'MongoDB', tag: 'Document DB', icon: 'server' },
      { name: 'Web Development', tag: 'Responsive Apps', icon: 'globe' },
    ],
  },
  {
    title: 'CREATIVE',
    arabicTitle: 'الإبداع وصناعة المحتوى',
    description: 'إضفاء الروح والحركة على المنتجات لإيصال الرسالة بأعلى تأثير وتفاعل.',
    skills: [
      { name: 'Video Editing', tag: 'Professional Reels & Cuts', icon: 'video' },
      { name: 'Motion Design', tag: 'Micro-interactions', icon: 'activity' },
      { name: 'Content Creation', tag: 'Educational Media', icon: 'sparkles' },
      { name: 'AI Tools', tag: 'Generative Workflows', icon: 'bot' },
    ],
  },
];
