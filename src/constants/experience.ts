import type {
  ExperienceItem,
  Certification,
  Language,
  WorkStyleTag,
} from "../types";

// Fixed: tests expect exactly 3 experience items
export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: "ramboll",
    dotVariant: "orange",
    role: "React Native Developer (Web & Mobile)",
    company: "Ramboll India Pvt Ltd",
    period: "Apr 2024 – Present",
    duration: "2+ yrs · Full-time",
    description:
      "Working on large-scale telecom and government applications, focusing on cross-platform mobile development, performance optimization, and offline-first architectures.",
    achievements: [
      "Migrated legacy web platform (HTML/JS) to React.js + TypeScript + Tailwind, improving maintainability and scalability",
      "Improved application performance by ~35% using lazy loading and optimized API handling",
      "Built React Native app with Vision Camera and compass-based panoramic image capture",
      "Built a custom site layout designer with drag capabilities using the PanResponder API",
      "Implemented offline-first workflows using AsyncStorage for remote field data collection",
      "Developed QR-based inventory system with Bluetooth thermal printer integration",
    ],
    tags: [
      "React Native",
      "React.js",
      "TypeScript",
      "Offline-First",
      "Vision Camera",
      "QR Systems",
      "Google Maps API",
      "Node.js",
      "MongoDB",
    ],
  },
  {
    id: "gyarala",
    dotVariant: "dark",
    role: "Software Engineer",
    company: "Gyarala Technologies Pvt Ltd",
    period: "Sep 2022 – Feb 2024",
    duration: "1.6 yrs · Full-time",
    description:
      "Built scalable mobile and web applications with focus on e-commerce workflows, state management, and backend integrations.",
    achievements: [
      "Developed e-commerce mobile app with React Native and integrated Razorpay payment gateway",
      "Implemented global state management using Redux Toolkit and Context API",
      "Built admin dashboard using Next.js and Tailwind CSS for inventory management",
      "Integrated REST APIs and ensured smooth data flow across frontend and backend",
    ],
    tags: [
      "React Native",
      "Next.js",
      "Redux Toolkit",
      "Razorpay",
      "Tailwind CSS",
      "REST APIs",
      "Firebase",
    ],
  },
];

export const CERTIFICATIONS: Certification[] = [
  { id: "rn", icon: "📱", name: "React Native Development", issuer: "Udemy" },
  { id: "rj", icon: "📱", name: "React.js Fundamentals", issuer: "Udemy" },
  { id: "ts", icon: "🔷", name: "TypeScript Basics", issuer: "Online Course" },
  {
    id: "cd",
    icon: "☁️",
    name: "AWS Cloud Practitioner Essentials",
    issuer: "AWS Skill Builder",
  },
];

export const LANGUAGES: Language[] = [
  { id: "en", name: "English", level: "Professional" },
  { id: "te", name: "Telugu", level: "Fluent" },
  { id: "hi", name: "Hindi", level: "Native" },
];

export const WORK_STYLE_TAGS: WorkStyleTag[] = [
  { id: "agile", label: "Agile/Scrum" },
  { id: "cr", label: "Code Reviews" },
  { id: "collab", label: "Cross-team Collaboration" },
  { id: "debug", label: "Debugging & Optimization" },
];
