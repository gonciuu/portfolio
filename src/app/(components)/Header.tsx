import React from 'react';

import Button from '../components/Button';
import FlexDiv from '../components/FlexDiv';

const Header = () => {
  return (
    <div className=' mt-64'>
      <h1 className='text-6xl font-bold leading-tight'>
        Crafting Mobile <br /> Apps with Flutter
      </h1>
      <h2 className='mt-4 text-2xl'>
        Dive into my journey as a Flutter mobile developer,
        <br /> showcasing projects that blend innovative design
        <br /> with seamless functionality.
      </h2>
      <FlexDiv justify='between' align='center' className='mt-12 w-full'>
        <FlexDiv className='flex-1 gap-4'>
          <Button />
          <Button />
        </FlexDiv>
        <div>
          <span>essa</span>
          <p>esaa</p>
        </div>
      </FlexDiv>
    </div>
  );
};

export default Header;
