import { HTMLAttributeAnchorTarget } from 'react';
import {
  TbArrowsMaximize,
  TbDatabase,
  TbDeviceMobile,
  TbFaceId,
  TbGitPullRequest,
  TbFileText,
  TbBrandGithub,
  TbUserStar,
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
    title: 'Cross-platform Development',
    description:
      'Specialized in building seamless and performant applications for both iOS and Android using Flutter.',
  },
  {
    icon: <TbDatabase />,
    title: 'State Management with Riverpod',
    description:
      'Expert in managing complex application state efficiently using Riverpod for scalable and maintainable code.',
  },
  {
    icon: <TbDeviceMobile />,
    title: 'API Integration',
    description:
      'Skilled in integrating various RESTful APIs using the Dio package to enhance app functionality and provide seamless user experiences.',
  },
  {
    icon: <TbFaceId />,
    title: 'Performance Optimization',
    description:
      'Proficient in optimizing application performance to ensure fast, responsive, and smooth user experiences.',
  },
  {
    icon: <TbGitPullRequest />,
    title: 'Fastlane CI/CD',
    description:
      'Experienced in using Fastlane to automate building, testing, and deploying Flutter applications.',
  },
  {
    icon: <TbUserStar />,
    title: 'UI/UX Design',
    description:
      'Adept at designing intuitive and visually appealing user interfaces that enhance user engagement and satisfaction.',
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
    title: <>My Mobile Development Journey</>,
    buttonText: 'Visit Github',
    buttonIcon: <TbBrandGithub />,
    href: 'https://github.com/gonciuu',
    target: '_blank',
    rel: 'noopener noreferrer',
    items: [
      'Started with Kotlin and Android development, creating hobby projects',
      'Transitioned to Flutter for its cross-platform capabilities',
      'Developed and maintained hobby and commercial Flutter apps',
      'Extensive experience with popular Flutter packages like Riverpod, Dio, and more',
      'Contributed to open-source projects and the Flutter community',
    ],
  },
  {
    title: 'Professional Experience',
    buttonText: 'Download Resume',
    buttonIcon: <TbFileText />,
    href: '/resume.pdf',
    target: '_blank',
    rel: 'noopener noreferrer',
    items: [
      '2+ years of experience in Android development using Kotlin',
      '2+ years of experience with Flutter',
      '1+ year of experience in iOS development',
      'Proficient in using Git for version control',
      'Currently working at Nocadis, developing robust mobile solutions',
    ],
  },
];
