import { Metadata } from 'next';

import Expertise from './(components)/Expertise';
import Header from './(components)/Header';
import Journey from './(components)/Journey';
import Projects from './(components)/Projects';
import './globals.css';

export default function Home() {
  return (
    <div>
      <Header />
      <Projects />
      <Expertise />
      <Journey />
    </div>
  );
}

export const metadata: Metadata = {
  openGraph: {
    images: [
      {
        url: '/sygnet.svg',
        width: 512,
        height: 512,
        alt: 'Kacper logo',
      },
    ],
  },
};
