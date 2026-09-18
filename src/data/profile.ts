export interface ProfileData {
  name: string;
  nameEn: string;
  title: string;
  shortBio: string;
  extendedBio: string[];
  pillars: {
    title: string;
    description: string;
    icon: string;
  }[];
  education: {
    university: string;
    faculty: string;
    department: string;
    division: string;
    year?: string;
  };
  motto: string;
}

export const profileData: ProfileData = {
  name: 'يوسف أسامة',
  nameEn: 'Youssef Osama',
  title: 'مصمم جرافيك • محرر فيديو • مطور تجارب رقمية',
  shortBio: 'أحوّل الأفكار إلى منتجات وتجارب رقمية تجمع بين التصميم، التقنية، وتجربة المستخدم بدقة متناهية وأسلوب معاصر.',
  extendedBio: [
    'مصمم جرافيك، محرر فيديو، ومطور مهتم ببناء وتطوير التجارب والمنتجات الرقمية المتكاملة.',
    'أمتلك أكثر من 3 سنوات من الخبرة في تصميم الهويات البصرية (Visual Identity & Branding)، وإنتاج المحتوى التعليمي والإبداعي، وتحرير الفيديو الاحترافي، والتعامل المتقدم مع أدوات الذكاء الاصطناعي.',
    'أجمع بين الحس الفني الدقيق وكفاءة البناء البرمجي لتطوير منتجات ويب سريعة، بديهية، وتخدم أهداف الأعمال بفاعلية.',
  ],
  pillars: [
    {
      title: 'الهوية والتصميم البصري',
      description: 'بناء هويات بصرية متكاملة (Branding & UI/UX) بأعلى معايير الإتقان.',
      icon: 'palette',
    },
    {
      title: 'صناعة المحتوى والموشن',
      description: 'تحرير فيديو احترافي (Video Editing & Motion) يوصل الرسالة بأعلى تأثير.',
      icon: 'video',
    },
    {
      title: 'الهندسة البرمجية والويب',
      description: 'تطوير تطبيقات ويب حديثة بـ Next.js و React مع أداء فائق وتجاوب كامل.',
      icon: 'code',
    },
  ],
  education: {
    university: 'جامعة الزقازيق — Zagazig University',
    faculty: 'كلية الزراعة',
    department: 'قسم وقاية النبات — Plant Protection Department',
    division: 'شعبة المبيدات والآفات — Pesticides & Pests Division',
  },
  motto: 'Design × Development × Creativity',
};
