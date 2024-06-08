import { HTMLAttributeAnchorTarget } from 'react';
import {
  TbArrowsMaximize,
  TbDatabase,
  TbDeviceMobile,
  TbFaceId,
  TbGitPullRequest,
  TbCircleLetterR,
} from 'react-icons/tb';

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

export interface ExpertiseInfo {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const expertise = [
  {
    icon: <TbArrowsMaximize />,
    title: 'Cross-platform',
    description:
      'Understanding and implementing applications that work seamlessly on both iOS and Android.',
  },
  {
    icon: <TbDatabase />,
    title: 'State Management',
    description: 'Efficiently managing the state of the application.',
  },
  {
    icon: <TbDeviceMobile />,
    title: 'API Integration',
    description:
      'Seamlessly integrating APIs to enhance the app functionality.',
  },
  {
    icon: <TbFaceId />,
    title: 'Performance Optimization',
    description:
      'Optimizing app performance to deliver superior user experiences.',
  },
  {
    icon: <TbGitPullRequest />,
    title: 'API Integration',
    description:
      'Seamlessly integrating APIs to enhance the app functionality.',
  },
  {
    icon: <TbCircleLetterR />,
    title: 'Performance Optimization',
    description:
      'Optimizing app performance to deliver superior user experiences.',
  },
] as ExpertiseInfo[];
