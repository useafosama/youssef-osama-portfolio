export interface ContactInfo {
  email: string;
  phone: string;
  phoneDisplay: string;
  location: string;
}

export interface SocialLinkItem {
  id: string;
  name: string;
  platform: string;
  handle: string;
  url: string;
  color?: string;
  featured?: boolean;
}

export const contactInfo: ContactInfo = {
  email: 'useafosama@gmail.com',
  phone: '+201067890109',
  phoneDisplay: '+20 106 789 0109',
  location: 'مصر 🇪🇬',
};

export const socialLinks: SocialLinkItem[] = [
  {
    id: 'linkedin',
    name: 'LinkedIn',
    platform: 'LinkedIn',
    handle: 'in/youssef-osama1',
    url: 'https://www.linkedin.com/in/youssef-osama1/',
    featured: true,
  },
  {
    id: 'behance',
    name: 'Behance',
    platform: 'Behance',
    handle: 'youssefosamaa1',
    url: 'https://www.behance.net/youssefosamaa1',
    featured: true,
  },
  {
    id: 'youtube',
    name: 'YouTube',
    platform: 'YouTube',
    handle: '@useaf',
    url: 'https://www.youtube.com/@useaf',
    featured: true,
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    platform: 'TikTok',
    handle: '@youssef.osama.graphic',
    url: 'https://www.tiktok.com/@youssef.osama.graphic',
    featured: true,
  },
  {
    id: 'facebook',
    name: 'Facebook',
    platform: 'Facebook',
    handle: 'youssef.osama.812133',
    url: 'https://www.facebook.com/youssef.osama.812133',
    featured: true,
  },
];
