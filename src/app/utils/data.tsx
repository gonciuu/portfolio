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
  id: number;
  name: string;
  tag: string;
  excerpt: string;
  description: string;
  image: string;
  url: string;
  language: 'Flutter' | 'Kotlin';
  technologies?: string[];
  workTypes?: string[];
  date: string;
}

export const projects: Project[] = [
  {
    id: 0,
    name: 'Scanning World',
    tag: 'Scan QR codes & earn rewards.',
    excerpt:
      'Scanning World is a mobile application that allows users to scan QR codes to earn rewards.',
    description:
      'Scanning World is a mobile application that allows users to scan QR codes to earn rewards. The app uses Firebase for authentication and Firestore to store user data.',
    image: '/mocks/scanning_world_mock.png',
    url: 'https://github.com/kriziu/scanningworld-explory',
    language: 'Flutter',
    date: '2021',
    technologies: ['Flutter', 'Firebase'],
    workTypes: ['Mobile App', 'App Design'],
  },
  {
    id: 1,
    name: 'Chess.io',
    tag: 'Track your chess.com stats.',
    excerpt:
      'Chess.io is a mobile application that allows users to track their chess.com stats.',
    description:
      'Chess.io is a mobile application that allows users to track their chess.com stats. The app uses the chess.com API to fetch user data.',
    image: '/mocks/chess_io_mock.png',
    url: 'https://github.com/gonciuu/chess.io',
    language: 'Flutter',
    date: '2021',
    technologies: ['Flutter', 'Chess.com API'],
    workTypes: ['Mobile App', 'App Design'],
  },
  {
    id: 2,
    name: 'Medicine App',
    tag: 'Save medicines, receive reminders.',
    excerpt:
      'Medicine App is a mobile application that allows users to save their medicines and receive reminders.',
    description:
      'Medicine App is a mobile application that allows users to save their medicines and receive reminders. The app uses Hive for local storage.',
    image: '/mocks/medicine_app_mock.png',
    url: 'https://github.com/gonciuu/Medicine-App-In-Flutter',
    language: 'Flutter',
    date: '2021',
    technologies: ['Flutter', 'Hive'],
    workTypes: ['Mobile App', 'App Design'],
  },
  {
    id: 3,
    name: 'Hangman Game',
    tag: 'Classic Hangman game in Flutter.',
    excerpt:
      'Hangman Game is a mobile application that allows users to play the classic Hangman game.',
    description:
      'Hangman Game is a mobile application that allows users to play the classic Hangman game. The app uses the Wordnik API to fetch random words.',
    image: '/mocks/hangman_mock.png',
    url: 'https://github.com/gonciuu/Hangman-game-in-flutter',
    language: 'Flutter',
    date: '2021',
    technologies: ['Flutter', 'Wordnik API'],
    workTypes: ['Mobile App', 'App Design'],
  },
  {
    id: 4,
    name: 'Imagine',
    tag: 'Search images and set as wallpaper.',
    excerpt:
      'Imagine is a mobile application that allows users to search for images.',
    description:
      'Imagine is a mobile application that allows users to search for images and set them as wallpapers. The app uses the Unsplash API to fetch images.',
    image: '/mocks/imagine_mock.png',
    url: 'https://github.com/gonciuu/imagine',
    language: 'Kotlin',
    date: '2021',
    technologies: ['Kotlin', 'Unsplash API'],
    workTypes: ['Mobile App', 'App Design'],
  },
  {
    id: 5,
    name: 'Yeebum',
    tag: 'Control Xiaomi Yeelight bulbs.',
    excerpt:
      'Yeebum is a mobile application that allows users to control Xiaomi Yeelight bulbs.',
    description:
      'Yeebum is a mobile application that allows users to control Xiaomi Yeelight bulbs. The app uses the Yeelight API to control the bulbs.',
    image: '/mocks/yeebum_mock.png',
    url: 'https://github.com/gonciuu/Yeelight-Control-Desktop-And-Mobile-Apps',
    language: 'Kotlin',
    date: '2021',
    technologies: ['Kotlin', 'Yeelight API'],
    workTypes: ['Mobile App', 'App Design'],
  },
  {
    id: 6,
    name: 'Food scanner',
    tag: 'Scan food & get nutritional info.',
    excerpt:
      'Food scanner is a mobile application that allows users to scan food items.',
    description:
      'Food scanner is a mobile application that allows users to scan food items to get nutritional information. The app uses the Nutritionix API to fetch food data.',
    image: '/mocks/food_scanner_app_mock.png',
    url: 'https://github.com/gonciuu/Food-Scanner-App',
    language: 'Kotlin',
    date: '2021',
    technologies: ['Kotlin', 'Nutritionix API'],
    workTypes: ['Mobile App', 'App Design'],
  },
  {
    id: 7,
    name: 'Currency converter',
    tag: 'Currency exchange rates & converter.',
    excerpt:
      'Currency converter is a mobile application that allows users to view currency exchange rates and convert currencies.',
    description:
      'Currency converter is a mobile application that allows users to view currency exchange rates and convert currencies. The app uses the ExchangeRate-API to fetch currency data.',
    image: '/mocks/currency_exchange_mock.png',
    url: 'https://github.com/gonciuu/currency-exchange-app-in-kotlin',
    language: 'Kotlin',
    date: '2021',
    technologies: ['Kotlin', 'ExchangeRate-API'],
    workTypes: ['Mobile App', 'App Design'],
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
