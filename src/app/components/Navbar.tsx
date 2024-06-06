import Image from 'next/image';
import * as React from 'react';
import { TbArrowRight } from 'react-icons/tb';

import AnimatedText from './AnimatedText';
import Button from './Button';
import FlexDiv from './FlexDiv';

export default function Navbar() {
  return (
    <FlexDiv className='flex w-full justify-between py-12'>
      <Image src='logo.svg' alt='logo' width={100} height={50} />
      <FlexDiv className='gap-8'>
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
    </FlexDiv>
  );
}

export function Bookmarks() {
  return (
    <>
      <AnimatedText>Work</AnimatedText>
      <AnimatedText>Skillset</AnimatedText>
      <AnimatedText>About</AnimatedText>
      <AnimatedText>Contact</AnimatedText>
    </>
  );
}
