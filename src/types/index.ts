export interface Project {
  id: string;
  icon?: string;
  tag: string;
  category: 'AI & Automation' | 'Full-Stack & Web' | 'Games & Tools';
  title: string;
  desc: string;
  detailedOverview?: string;
  highlights?: string[];
  stack: string[];
  link?: string;
  github?: string;
  image?: string;
  featured?: boolean;
}

export interface SkillItem {
  name: string;
  level: number;
  color: string;
  category: string;
  note?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface InfoRow {
  label: string;
  value: string;
}

export interface TimelineItem {
  id: string;
  period: string;
  title: string;
  organization: string;
  location: string;
  description: string;
  highlights: string[];
  type: 'education' | 'experience';
}

export interface CorePillar {
  title: string;
  tag: string;
  description: string;
  points: string[];
  icon: string;
}
