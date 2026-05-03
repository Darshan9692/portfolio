import { LucideIcon } from "lucide-react";

export interface SkillItem {
  name: string;
  slug?: string;
}

export interface SkillGroup {
  icon: LucideIcon;
  title: string;
  items: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  stack: string[];
  url: string;
}

export interface Education {
  year: string;
  degree: string;
  school: string;
  grade: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  href?: string;
  github?: string;
  gradient: string;
  year: string;
  category: string;
}
