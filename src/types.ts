export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  technologies: string[];
  description: string;
  architectureNotes?: string[];
  features?: string[];
  databaseDesign?: string[];
  apiIntegration?: string[];
  status: string;
}

export interface SkillCategory {
  title: string;
  categoryKey: 'frontend' | 'backend' | 'database' | 'tools';
  description: string;
  skills: {
    name: string;
    description: string;
    badge: string;
  }[];
}

export interface ServiceItem {
  id: number;
  title: string;
  technologies: string;
  shortDescription: string;
  clientValue: string;
  deliverables: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  focus: string;
  category: 'Specialized Track' | 'Technical Training' | 'Professional Certification';
}
