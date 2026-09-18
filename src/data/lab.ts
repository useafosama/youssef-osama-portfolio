import { LabExperiment } from '@/types';

export const labExperiments: LabExperiment[] = [
  {
    id: 'visitor-vision-analytics',
    title: 'Smart Visitor Vision Analytics',
    arabicTitle: 'نظام ذكي لتحليل حركة الزوار',
    subtitle: 'تحليل بث الكاميرات بالرؤية الحاسوبية والذكاء الاصطناعي',
    description:
      'أعمل على بناء نظام لتحليل بث الكاميرات باستخدام خوارزميات الرؤية الحاسوبية، لمساعدة أصحاب المحلات والأعمال على فهم حركة الزوار واتخاذ قرارات أفضل بناءً على البيانات.',
    tags: ['Computer Vision', 'AI', 'Object Detection', 'People Counting', 'Analytics'],
    status: 'in-development',
    statusLabel: 'قيد التطوير',
    year: '2026 LAB',
    metrics: [
      { label: 'عدد الزوار اليوم', value: '1,284', sub: '+12.4% عن الأمس' },
      { label: 'متوسط مدة الزيارة', value: '18 دقيقة', sub: 'تفاعل ممتاز' },
      { label: 'أكثر أوقات الازدحام', value: '6:00 PM — 9:00 PM', sub: 'ساعات الذروة المسائية' },
      { label: 'معدل الدخول والتفاعل', value: '+12.4%', sub: 'معدل نمو أسبوعي' },
    ],
    accentColor: '#38BDF8',
  },
];
