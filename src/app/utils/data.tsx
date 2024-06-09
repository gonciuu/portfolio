import { HTMLAttributeAnchorTarget } from 'react';
import {
  TbArrowsMaximize,
  TbDatabase,
  TbDeviceMobile,
  TbFaceId,
  TbGitPullRequest,
  TbCircleLetterR,
  TbFileText,
  TbBrandGithub,
} from 'react-icons/tb';

export interface NavigationItem extends HrefProps {
  children: React.ReactNode;
}

export const navigationItems: NavigationItem[] = [
  {
    children: 'Work',
    href: '/#projects',
  },
  {
    children: 'Skillset',
    href: '/#expertise',
  },
  {
    children: 'About',
    href: '/#about',
  },
  {
    children: 'Nocadis',
    href: 'https://nocadis.com',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
];

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

export const projects: Project[] = [
  {
    name: 'Sample App',
    description: 'Short description of the project',
    image: '/project_1.png',
    url: 'https://nocadis.com',
  },
  {
    name: 'Another App',
    description: 'Short description of the project',
    image: '/project_1.png',
    url: 'https://nocadis.com',
  },
  {
    name: 'Final App',
    description: 'Short description of the project',
    image: '/project_1.png',
    url: 'https://nocadis.com',
  },
  {
    name: 'Nice App',
    description: 'Short description of the project',
    image: '/project_1.png',
    url: 'https://nocadis.com',
  },
];

export interface ExpertiseInfo {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const expertise: ExpertiseInfo[] = [
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
];

export interface JourneyInfo extends HrefProps {
  title: React.ReactNode;
  buttonText: string;
  buttonIcon?: React.ReactNode;
  items: string[];
}

export const journeys: JourneyInfo[] = [
  {
    title: <>My mobile dev journey</>,
    buttonText: 'Visit Github',
    buttonIcon: <TbBrandGithub />,
    href: 'https://github.com/gonciuu',
    target: '_blank',
    rel: 'noopener noreferrer',
    items: [
      'Kotlin beginnings with hobby Android Apps',
      'Transitioned to Flutter for cross-platform development',
      'Developed and maintained 10+ Flutter apps',
      'Contributed to open-source projects',
      'Published 5+ Flutter packages',
    ],
  },
  {
    title: 'Experience',
    buttonText: 'Download Resume',
    buttonIcon: <TbFileText />,
    href: '/resume.pdf',
    target: '_blank',
    rel: 'noopener noreferrer',
    items: [
      '2+ years of experience in Flutter',
      '2+ years of experience in Android',
      '1+ year of experience in iOS',
      '2+ years of experience in Firebase',
      '2+ years of experience in Git',
    ],
  },
];
