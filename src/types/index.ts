export interface PersonalInfo {
  fullName: string;
  title: string;
  avatar: string;
  bio: string;
  objective: string;
  summary: string;
  experienceYears: number;
  email: string;
  phone: string;
  location: string;
  resumeUrl: string;
}

export type SkillCategoryType =
  | 'Frontend Development'
  | 'Backend Development'
  | 'Mobile Development'
  | 'Database Management'
  | 'Cloud Technologies'
  | 'UI/UX Design'
  | 'DevOps'
  | 'Version Control';

export interface Skill {
  name: string;
  level: number; // 0-100 for progress bars
  category: SkillCategoryType;
}

export type ExperienceType = 'Freelance' | 'Internship' | 'Personal' | 'Professional' | 'Academic' | 'Education';

export interface ExperienceItem {
  id: string;
  position: string;
  company: string;
  duration: string;
  description: string[];
  type: ExperienceType;
  technologies: string[];
  demoLinks?: ProjectCredential[];
  image?: string;
  images?: string[];
  video?: string;
}

export type ProjectDifficulty = 'Beginner' | 'Intermediate' | 'Advanced';
export type ProjectFilterType = 'Web Development' | 'Mobile Development' | 'Capstone' | 'Freelance' | 'Personal Projects';

export interface ProjectCredential {
  role: string;
  email: string;
  password: string;
  loginUrl: string;
}

export interface ProjectItem {
  id: string;
  name: string;
  description: string;
  difficulty: ProjectDifficulty;
  type: ProjectFilterType;
  technologies: string[];
  github: string;
  demo: string;
  status: 'Completed' | 'In Progress' | 'Maintained' | 'Beta';
  date: string;
  image: string;
  credentials?: ProjectCredential[];
}

export interface EducationItem {
  id: string;
  school: string;
  degree: string;
  year: string;
  achievements: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  organization: string;
  date: string;
  image: string;
}

export type SocialPlatform =
  | 'Facebook'
  | 'Instagram'
  | 'LinkedIn'
  | 'GitHub'
  | 'GitLab'
  | 'X (Twitter)'
  | 'YouTube'
  | 'Portfolio Website'
  | 'Email';

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  category: 'Award' | 'Competition' | 'Hackathon' | 'Academic' | 'Client Testimonial';
  date: string;
  organization: string;
  description: string;
  authorName?: string; // For Testimonials
  authorTitle?: string; // For Testimonials
}

export interface TechStackItem {
  name: string;
  category: string;
  iconName: string; // Used to select React Icons
}

export interface StatItem {
  label: string;
  value: number;
  suffix?: string;
  iconName: string;
}
