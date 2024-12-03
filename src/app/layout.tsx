import { DM_Sans } from 'next/font/google';

import Footer from './components/Footer';
import Navbar from './components/Navbar';

import type { Metadata } from 'next';

import './globals.css';

const dmSans = DM_Sans({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='icon' href='/sygnet.svg' type='image/svg+xml' />
        <script
          defer
          src='https://stats.gonciu.dev/script.js'
          data-website-id='52cc0779-fb21-4ade-afb4-6fc9fc574e1b'
        ></script>
      </head>
      <body className={dmSans.className}>
        <div className='mx-auto max-w-screen-xl px-4'>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio-phi-five-57.vercel.app'),
  applicationName: 'Portfolio',
  keywords:
    'Kacper, Flutter, Mobile App Developer, iOS, Android, Dart, UI/UX Design, API Integration, Performance Optimization',
  creator: 'Kacper',
  title: 'Kacper | Flutter Mobile App Developer',
  description:
    'Explore my portfolio featuring innovative Flutter mobile app development, UI/UX design, API integration, and performance optimization for iOS and Android projects.',
};
