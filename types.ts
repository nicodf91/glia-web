import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

export interface NewsPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  imageUrl: string;
  date: string;
  readTime: string;
}

export interface CaseStudy {
  id: string;
  clientType: string;
  problem: string;
  solution: string;
  result: string;
  tags: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ContactFormData {
  name: string;
  company: string;
  industry: string;
  employees: string;
  email: string;
  phone: string;
  serviceType: string[];
  message: string;
  consent: boolean;
  newsletter: boolean;
}

export type FormStatus = 'idle' | 'loading' | 'success' | 'error';