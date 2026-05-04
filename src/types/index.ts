// ─── Navigation ───────────────────────────────────────────────────
export interface NavLink {
  id: string;
  label: string;
  path: string;
}

// ─── Hero / Home ──────────────────────────────────────────────────
export interface Stat {
  id: string;
  value: string;
  label: string;
}

export interface TechBadge {
  id: string;
  label: string;
  highlighted: boolean;
}

export interface MiniSkill {
  id: string;
  name: string;
  percentage: number;
}

export interface HeroProfile {
  name: string;
  role: string;
  location: string;
  tagline: string;
  bio: string;
  availabilityText: string;
  availabilitySub: string;
  avatarInitials: string;
  avatarImage: string;
}

// ─── About ────────────────────────────────────────────────────────
export interface PersonalInfo {
  label: string;
  value: string;
  accent?: boolean;
}

export interface Education {
  id: string;
  icon: string;
  degree: string;
  school: string;
  year: string;
}

export interface Interest {
  id: string;
  label: string;
}

// ─── Skills ───────────────────────────────────────────────────────
export type SkillCategory = 'all' | 'frontend' | 'mobile' | 'realtime' | 'backend' | 'integration';

export interface SkillTag {
  label: string;
  highlighted?: boolean;
}

export interface Skill {
  id: string;
  icon: string;
  name: string;
  level: string;
  percentage: number;
  category: SkillCategory[];
  variant: 'orange' | 'dark';
  tags: SkillTag[];
}

export interface Tool {
  id: string;
  icon: string;
  label: string;
}

export interface SkillFilterOption {
  value: SkillCategory | 'all';
  label: string;
}

// ─── Projects ─────────────────────────────────────────────────────
// Fixed: added 'nx' and 'rd' categories that are used in constants
export type ProjectCategory = 'all' | 'rn' | 'rj' | 'nx' | 'rd';

export interface Project {
  id: string;
  category: string;
  bgColor: string;
  emoji: string;
  featured?: boolean;
  catLabel: string;
  catVariant: 'orange' | 'dark' | 'muted';
  title: string;
  description: string;
  stack: string[];
  links: boolean;
  demoUrl?: string;
  githubUrl?: string;
  demoLabel: string;
}

export interface ProjectFilterOption {
  value: string;
  label: string;
}

// ─── Experience ───────────────────────────────────────────────────
export interface ExperienceItem {
  id: string;
  dotVariant: 'orange' | 'dark' | 'muted';
  role: string;
  company: string;
  period: string;
  duration: string;
  description: string;
  achievements: string[];
  tags: string[];
}

export interface Certification {
  id: string;
  icon: string;
  name: string;
  issuer: string;
}

export interface Language {
  id: string;
  name: string;
  level: string;
}

export interface WorkStyleTag {
  id: string;
  label: string;
}

// ─── Contact ──────────────────────────────────────────────────────
export interface ContactCard {
  id: string;
  icon: string;
  label: string;
  value: string;
  href?: string;
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

export type FormStatus = 'idle' | 'submitting' | 'success' | 'error';
