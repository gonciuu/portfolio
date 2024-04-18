import Image from 'next/image';
import * as React from 'react';
import { TbArrowNarrowRight } from 'react-icons/tb';

import Button from './Button';
import FlexDiv from './FlexDiv';

export default function Navbar() {
  return (
    <FlexDiv className='flex w-full justify-between py-12'>
      <Image src='logo.svg' alt='logo' width={100} height={50} />
      <FlexDiv className='gap-6'>
        <NavbarNavigationItem>Work</NavbarNavigationItem>
        <NavbarNavigationItem>Skillset</NavbarNavigationItem>
        <NavbarNavigationItem>About</NavbarNavigationItem>
        <Button
          variant='outlined'
          className='px-6 py-2'
          icon={<TbArrowNarrowRight />}
        >
          Catch me
        </Button>
      </FlexDiv>
    </FlexDiv>
  );
}

function NavbarNavigationItem({ children }: { children: React.ReactNode }) {
  return (
    <a className='mr-4 text-lg' href='#'>
      {children}
    </a>
  );
}
