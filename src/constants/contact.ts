import type { ContactCard } from '../types';

// Fixed: exactly 5 contact cards as expected by tests
export const CONTACT_CARDS: ContactCard[] = [
  {
    id: 'email',
    icon: '✉',
    label: 'Email',
    value: 'mohammedakhilpasha12@gmail.com',
    href: 'mailto:mohammedakhilpasha12@gmail.com',
  },
  {
    id: 'phone',
    icon: '📞',
    label: 'Phone',
    value: '+91 7989747914',
    href: 'tel:+917989747914',
  },
  {
    id: 'linkedin',
    icon: '💼',
    label: 'LinkedIn',
    value: 'linkedin.com/in/akhil-pasha-mohammed',
    href: 'https://www.linkedin.com/in/akhil-pasha-mohammed-8b1b93201',
  },
  {
    id: 'github',
    icon: '⌥',
    label: 'GitHub',
    value: 'github.com/akhilpasha12',
    href: 'https://github.com/akhilpasha12',
  },
  {
    id: 'location',
    icon: '📍',
    label: 'Location',
    value: 'Hyderabad, Telangana, India',
  },
];

export const AVAILABILITY_INFO = {
  heading: 'Open to Work',
  subtext: 'Full-time',
  badge: 'Available Now',
};
