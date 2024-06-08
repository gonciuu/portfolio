import React from 'react';
import { TbArrowRight } from 'react-icons/tb';

import Button from '../components/Button';
import FlexDiv from '../components/FlexDiv';

const Header = () => {
  return (
    <div className='py-32'>
      <h1>
        Crafting Mobile <br /> Apps with Flutter
      </h1>
      <h2 className='mt-4'>
        Dive into my journey as a Flutter mobile developer,
        <br /> showcasing projects that blend innovative design
        <br /> with seamless functionality.
      </h2>
      <FlexDiv className='mt-14 w-full items-center justify-between'>
        <FlexDiv className='gap-4'>
          <Button>Explore portfolio</Button>
          <Button
            variant='outlined'
            className='group'
            icon={
              <TbArrowRight className='-rotate-45 text-2xl duration-200 group-hover:rotate-0' />
            }
          >
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
