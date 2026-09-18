export type ProjectCategory = 'all' | 'web' | 'apps' | 'design' | 'branding' | 'video';

export interface Project {
  id: string;
  title: string;
  arabicTitle?: string;
  subtitle: string;
  description: string;
  category: ProjectCategory;
  categoryLabel: string;
  tags: string[];
  link?: string;
  githubUrl?: string;
  featured?: boolean;
  year: string;
  client?: string;
  deliverables?: string[];
  accentColor?: string;
}

export interface SkillItem {
  name: string;
  level?: string;
  icon?: string;
  tag?: string;
}

export interface SkillCategory {
  title: string;
  arabicTitle: string;
  description: string;
  skills: SkillItem[];
}

export interface ProcessStep {
  number: string;
  title: string;
  tagline: string;
  description: string;
  details: string[];
}

export interface SocialLink {
  name: string;
  handle: string;
  url: string;
  icon: string;
  isPrimary?: boolean;
}

export interface LabExperiment {
  id: string;
  title: string;
  arabicTitle: string;
  subtitle: string;
  description: string;
  tags: string[];
  status: 'in-development' | 'prototype' | 'concept';
  statusLabel: string;
  year: string;
  metrics: {
    label: string;
    value: string;
    sub?: string;
  }[];
  accentColor?: string;
  link?: string;
}

export interface StatItem {
  id: string;
  value: number | string;
  suffix?: string;
  prefix?: string;
  label: string;
  sublabel: string;
  isText?: boolean;
}
