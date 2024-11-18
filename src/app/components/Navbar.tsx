'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { TbArrowRight } from 'react-icons/tb';

import { entranceTransition } from '../utils/animations';
import { defaultMailTo, navigationItems } from '../utils/data';

import AnimatedText from './AnimatedText';
import Button from './Button';
import FlexDiv from './FlexDiv';
import HanburgerNav from './HanburgerNav';

const navTransition = entranceTransition({ initialPosition: -30 });

export default function Navbar() {
  console.log(process.env.NEXT_PUBLIC_PORTFOLIO_EMAIL);
  console.log(process.env.NEXT_PUBLIC_PORTFOLIO_URL);
  return (
    <FlexDiv className='flex w-full justify-between py-12'>
      <motion.div {...navTransition} className='w-full'>
        <FlexDiv className='flex-1 gap-8'>
          <Link href='/'>
            <Image src='/logo.svg' alt='logo' width={100} height={50} />
          </Link>
          <FlexDiv className='hidden flex-1 justify-end gap-8 md:flex'>
            <Bookmarks />
            <Button
              variant='outlined'
              className='group px-4 py-2 transition-all'
              href={defaultMailTo}
              icon={
                <TbArrowRight className='-rotate-45 text-2xl duration-200 group-hover:rotate-0' />
              }
            >
              Catch me
            </Button>
          </FlexDiv>
        </FlexDiv>
      </motion.div>
      <HanburgerNav />
    </FlexDiv>
  );
}

export function Bookmarks() {
  return (
    <>
      {navigationItems.map((item) => (
        <Link
          key={item.href}
          href={item.href ?? '#'}
          target={item.target}
          rel={item.rel}
        >
          <AnimatedText>{item.children}</AnimatedText>
        </Link>
      ))}
    </>
  );
}
