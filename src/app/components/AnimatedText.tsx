import React, { PropsWithChildren } from 'react';

import FlexDiv from './FlexDiv';

interface AnimatedTextProps extends PropsWithChildren {}

const AnimatedText = ({ children }: AnimatedTextProps) => {
  return (
    <a href='#'>
      <FlexDiv className='group h-7 flex-col gap-0 overflow-hidden text-lg'>
        <div className='text-gray-900 duration-300 group-hover:-translate-y-7'>
          <span>{children}</span>
        </div>
        <div className='text-gray-900 opacity-60 duration-300 group-hover:-translate-y-7'>
          <span>{children}</span>
        </div>
      </FlexDiv>
    </a>
  );
};

export default AnimatedText;
