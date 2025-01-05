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
  url?: string;
  language: 'Flutter' | 'Kotlin';
  technologies: string[];
  workTypes: string[];
  date: string;
}

export const projects: Project[] = [
  {
    id: 8,
    name: 'Pizza Craft',
    tag: 'Craft perfect pizzas!',
    excerpt:
      'Pizza Craft is a mobile app that calculates pizza dough ingredients and lets users save recipes. It also offers a library of topping recipes for customizing the perfect pizza.',
    description:
      'Pizza Craft is a comprehensive tool designed for pizza enthusiasts, enabling users to accurately calculate the quantities of ingredients required for pizza dough by inputting parameters like the number of pizzas and desired dough size. The app allows users to save their favorite dough recipes for easy access and management. Additionally, Pizza Craft offers an extensive library of topping recipes, providing inspiration for creating unique and delicious pizza combinations. The intuitive user interface ensures a seamless experience for both amateur cooks and professional pizzaioli. The backend efficiently manages user data and recipe storage, ensuring reliability and security.',
    image: '/mocks/pizza_craft_mock.png',
    language: 'Flutter',
    date: '2025',
    technologies: ['Flutter', 'Drift database', 'Supabase'],
    workTypes: ['Mobile App', 'App Design'],
  },
  {
    id: 7,
    name: 'Scanning World',
    tag: 'Scan QR codes & earn rewards',
    excerpt:
      'Scanning World is a mobile application that allows users to scan QR codes to earn rewards. Users can accumulate points and exchange them for valuable rewards.',
    description:
      'Scanning World is a mobile application that allows users to scan QR codes placed in popular locations to earn points. These points can be exchanged for rewards such as coupons for bus tickets or restaurant discounts. The app offers a seamless user experience for scanning QR codes, tracking rewards, and managing user profiles securely. It includes a robust backend to manage user data and QR code interactions.',
    image: '/mocks/scanning_world_mock.png',
    url: 'https://github.com/gonciuu/scanningworld/tree/main/app',
    language: 'Flutter',
    date: '2022',
    technologies: [
      'Flutter',
      'API Integration',
      'Local Auth',
      'Provider',
      'Maps',
    ],
    workTypes: ['Mobile App', 'App Design'],
  },
  {
    id: 6,
    name: 'Chess.io',
    tag: 'Track your chess.com stats',
    excerpt:
      'Chess.io is a mobile application that allows users to track their chess.com stats.',
    description:
      'Chess.io is a mobile application that allows users to track their chess.com stats. The app uses the chess.com API to fetch user data, providing an easy way to monitor performance and progress in chess games. Users can view their rankings, game history, and various statistics directly from the app.',
    image: '/mocks/chess_io_mock.png',
    url: 'https://github.com/gonciuu/chess.io',
    language: 'Flutter',
    date: '2021',
    technologies: ['Flutter', 'Chess.com API', 'Google Ads'],
    workTypes: ['Mobile App', 'App Design'],
  },
  {
    id: 5,
    name: 'Medicine App',
    tag: 'Save medicines, receive reminders',
    excerpt:
      'Medicine App is a mobile application that allows users to save their medicines and receive reminders.',
    description:
      'Medicine App is a mobile application that allows users to save their medicines and receive reminders. The app uses sqflite for local storage to keep track of medications and schedules notifications to remind users when to take their medicines. It offers a user-friendly interface to add, view, and manage medications effectively.',
    image: '/mocks/medicine_app_mock.png',
    url: 'https://github.com/gonciuu/Medicine-App-In-Flutter',
    language: 'Flutter',
    date: '2020',
    technologies: ['Flutter', 'Sqflite', 'Local Notifications'],
    workTypes: ['Mobile App', 'App Design'],
  },
  {
    id: 4,
    name: 'Hangman Game',
    tag: 'Classic Hangman game in Flutter',
    excerpt:
      'Enjoy a classic Hangman game built with Flutter, featuring a random word generator and smooth gameplay.',
    description:
      'The Hangman Game in Flutter is a mobile application that offers the classic word-guessing challenge. Players can guess letters to complete random words generated by an API. The game includes a user-friendly interface and engaging graphics, providing an enjoyable experience for users of all ages.',
    image: '/mocks/hangman_mock.png',
    url: 'https://github.com/gonciuu/Hangman-game-in-flutter',
    language: 'Flutter',
    date: '2020',
    technologies: [
      'Flutter',
      'Datamuse API for word generation',
      '2 player mode',
    ],
    workTypes: ['Mobile App', 'App Design'],
  },
  {
    id: 3,
    name: 'Imagine',
    tag: 'Search images and set as wallpaper',
    excerpt:
      'Discover beautiful images and set them as your wallpaper with the Imagine app.',
    description:
      'Imagine is an app that allows users to search for images using the Pixabay API, save them to their gallery, or set them as wallpaper. Users can also share their favorite images with friends. The app features a user-friendly interface and seamless functionality, making it easy to find and use images.',
    image: '/mocks/imagine_mock.png',
    url: 'https://github.com/gonciuu/imagine',
    language: 'Kotlin',
    date: '2021',
    technologies: ['Kotlin', 'Pixabay API', 'Jetpack Navigation', 'MVVM'],
    workTypes: ['Mobile App', 'App Design'],
  },
  {
    id: 2,
    name: 'Yeebum',
    tag: 'Control Xiaomi Yeelight bulbs',
    excerpt:
      'Easily control your Xiaomi Yeelight bulbs remotely with the Yeebum app.',
    description:
      'Yeebum is an app that allows you to control your Xiaomi Yeelight LED bulbs remotely. With this app, you can adjust the color, color temperature, and brightness of your bulbs, and create custom lighting flows. The app provides a simple and intuitive interface for both desktop and mobile platforms, ensuring seamless control of your smart lighting setup.',
    image: '/mocks/yeebum_mock.png',
    url: 'https://github.com/gonciuu/Yeelight-Control-Desktop-And-Mobile-Apps',
    language: 'Kotlin',
    date: '2020',
    technologies: ['Kotlin', 'Python', 'Bluetooth', 'Yeelight API'],
    workTypes: ['Mobile App', 'Desktop App', 'App Design'],
  },
  {
    id: 1,
    name: 'Food scanner',
    tag: 'Scan food & get nutritional info',
    excerpt:
      'Food scanner is a mobile application that allows users to scan food items and get detailed nutritional information.',
    description:
      'Food scanner is a mobile application that allows users to scan food items to get nutritional information. The app uses the openfoodfacts API to fetch food data. Users can scan barcodes to quickly retrieve detailed nutritional information, making it easier to track and manage their diet.',
    image: '/mocks/food_scanner_app_mock.png',
    url: 'https://github.com/gonciuu/Food-Scanner-App',
    language: 'Kotlin',
    date: '2020',
    technologies: ['Kotlin', 'openfoodfacts API', 'Barcode Scanner'],
    workTypes: ['Mobile App', 'App Design'],
  },
  {
    id: 0,
    name: 'Currency converter',
    tag: 'Currency exchange rates & converter',
    excerpt:
      'Currency converter is a mobile application that allows users to view currency exchange rates and convert currencies.',
    description:
      'Currency converter is a mobile application that allows users to view currency exchange rates and convert currencies. The app uses the Foreign Exchange Rates API to fetch currency data and provides a simple interface for easy currency conversion. Users can input the amount and select currencies to get real-time conversion results.',
    image: '/mocks/currency_exchange_mock.png',
    url: 'https://github.com/gonciuu/currency-exchange-app-in-kotlin',
    language: 'Kotlin',
    date: '2020',
    technologies: [
      'Kotlin',
      'Foreign Exchange Rates API',
      'Real-time Conversion',
    ],
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

export const defaultEmail = process.env.NEXT_PUBLIC_PORTFOLIO_EMAIL;
export const defaultMailTo = `mailto:${defaultEmail}`;

export const defaultUrl = process.env.NEXT_PUBLIC_PORTFOLIO_URL as string;
