import Image from 'next/image';
import * as React from 'react';
import { TbArrowRight } from 'react-icons/tb';

import { navigationItems } from '../utils/data';

import AnimatedText from './AnimatedText';
import Button from './Button';
import FlexDiv from './FlexDiv';
import HanburgerNav from './HanburgerNav';

export default function Navbar() {
  return (
    <FlexDiv className='flex w-full justify-between py-12'>
      <Image src='logo.svg' alt='logo' width={100} height={50} />
      <FlexDiv className='hidden flex-1 justify-end gap-8 md:flex'>
        <Bookmarks />
        <Button
          variant='outlined'
          className='group px-4 py-2 transition-all'
          icon={
            <TbArrowRight className='-rotate-45 text-2xl duration-200 group-hover:rotate-0' />
          }
        >
          Catch me
        </Button>
      </FlexDiv>
      <HanburgerNav />
    </FlexDiv>
  );
}

export function Bookmarks() {
  return (
    <>
      {navigationItems.map((item) => (
        <AnimatedText key={item.href}>{item.children}</AnimatedText>
      ))}
    </>
  );
}
