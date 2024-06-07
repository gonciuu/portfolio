import { HTMLAttributeAnchorTarget } from 'react';

export interface HrefProps {
  href?: string;
  target?: HTMLAttributeAnchorTarget;
  rel?: string;
}

export interface Project {
  name: string;
  description: string;
  image: string;
  url: string;
}

export const projects = [
  {
    name: 'Nocadis',
    description:
      'A platform for students to share their notes and study materials',
    image: '/project_1.png',
    url: 'https://nocadis.com',
  },
  {
    name: 'Nocadis',
    description:
      'A platform for students to share their notes and study materials',
    image: '/project_1.png',
    url: 'https://nocadis.com',
  },
  {
    name: 'Nocadis',
    description:
      'A platform for students to share their notes and study materials',
    image: '/project_1.png',
    url: 'https://nocadis.com',
  },
  {
    name: 'Nocadis',
    description:
      'A platform for students to share their notes and study materials',
    image: '/project_1.png',
    url: 'https://nocadis.com',
  },
] as Project[];
