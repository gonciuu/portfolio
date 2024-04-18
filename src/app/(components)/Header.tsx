import React from 'react';
import { TbArrowNarrowRight } from 'react-icons/tb';

import Button from '../components/Button';
import FlexDiv from '../components/FlexDiv';

const Header = () => {
  return (
    <div className='mt-32'>
      <h1 className='text-6xl font-bold leading-tight'>
        Crafting Mobile <br /> Apps with Flutter
      </h1>
      <h2 className='mt-4 text-3xl leading-tight'>
        Dive into my journey as a Flutter mobile developer,
        <br /> showcasing projects that blend innovative design
        <br /> with seamless functionality.
      </h2>
      <FlexDiv className='mt-12 w-full items-center justify-between'>
        <FlexDiv className='gap-4'>
          <Button>Explore portfolio</Button>
          <Button variant='outlined' icon={<TbArrowNarrowRight />}>
            Let&apos;s talk
          </Button>
        </FlexDiv>
        <div>
          <span>flutter developer · designer</span>
          <p>Scroll to explore</p>
        </div>
      </FlexDiv>
    </div>
  );
};

export default Header;
