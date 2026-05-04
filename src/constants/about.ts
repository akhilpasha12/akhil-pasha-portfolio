import { calculateExp } from '@/utils';
import type { PersonalInfo, Education, Interest } from '../types';
  const myExp = calculateExp(); // Returns "myExp " (using your Sep 17 default)

export const PERSONAL_INFO: PersonalInfo[] = [
  { label: 'Name', value: 'Akhil Pasha Mohammed' },
  { label: 'Role', value: 'React & React Native Developer' },
  { label: 'Location', value: 'Hyderabad, India' },
  { label: 'Experience', value: `${myExp}+ Years` },
  { label: 'Availability', value: 'Open to Full-time', accent: true },
];

export const ABOUT_BIO: string[] = [
  `Hi, I'm <strong>Akhil Pasha</strong> — a frontend engineer with <strong>${myExp}+ years</strong> of experience building scalable web and mobile applications using React.js and React Native. I focus on creating reliable, production-ready apps that perform well under real-world conditions.`,
  `My core expertise lies in <strong>React Native</strong> cross-platform development, offline-first architectures, and integrating device capabilities such as camera, geolocation, and QR-based systems. I have also explored real-time communication using <strong>WebSockets</strong> and modern data-fetching approaches like <strong>TanStack Query</strong>.`,
  `I care about writing clean, maintainable code, optimizing performance, and delivering seamless user experiences. I continuously explore new technologies and refine my approach to building scalable, user-focused products.`,
];

export const EDUCATION: Education[] = [
  {
    id: 'btech',
    icon: '🎓',
    degree: 'Bachelor of Technology',
    school: 'Malla Reddy Engineering College and Management Sciences - Hyderabad',
    year: '2019 – 2022',
  },
  {
    id: 'rn-course',
    icon: '📱',
    degree: 'React Native Development (Online Course)',
    school: 'Udemy',
    year: '2022',
  },
];

export const INTERESTS: Interest[] = [
  { id: 'mobile', label: 'Mobile App Development' },
  { id: 'perf', label: 'Performance Optimization' },
  { id: 'ux', label: 'User Experience (UX)' },
  { id: 'offline', label: 'Offline-First Systems' },
  { id: 'integration', label: 'Device Integrations' },
];
