import { calculateExp } from "@/utils";
import type { HeroProfile, Stat, TechBadge, MiniSkill } from "../types";
  const myExp = calculateExp(); // Returns "3.6" (using your Sep 17 default)

export const HERO_PROFILE: HeroProfile = {
  name: "Akhil Pasha",
  role: "React & React Native Developer",
  location: "Hyderabad, India",
  tagline: "React, React Native & MERN Stack Developer",
  bio: "Focused on building scalable mobile and web applications using React Native and React.js. Experienced in offline-first architectures, performance optimization, and integrating real-world device capabilities like camera, geolocation, and QR systems to deliver reliable production-ready apps.",
  availabilityText: "Available for React Native & React.js roles",
  availabilitySub: "Full-time",
  avatarInitials: "AP",
  avatarImage: "/assets/images/profile.jpg",
};

export const HERO_STATS: Stat[] = [
  { id: "experience", value: `${myExp}+`, label: "Years Experience" },
  { id: "projects", value: "7+", label: "Projects Shipped" },
  { id: "clients", value: "4+", label: "Apps Built" },
];

export const TECH_BADGES: TechBadge[] = [
  { id: "rn", label: "React Native", highlighted: true },
  { id: "react", label: "React.js", highlighted: true },
  { id: "ts", label: "TypeScript", highlighted: true },
  { id: "next", label: "Next.js", highlighted: true },
  { id: "node", label: "Node.js", highlighted: true },
  { id: "offline", label: "Offline-First Apps", highlighted: true },
  { id: "ws", label: "WebSockets", highlighted: false },
  { id: "rq", label: "TanStack Query", highlighted: false },
];

export const MINI_SKILLS: MiniSkill[] = [
  { id: "rn", name: "React Native", percentage: 80 },
  { id: "react", name: "React.js", percentage: 80 },
  { id: "nxt", name: "Next.js", percentage: 55 },
  { id: "ts", name: "TypeScript", percentage: 60 },
  { id: "ws", name: "WebSockets", percentage: 60 },
  { id: "rq", name: "TanStack Query", percentage: 60 },
];
