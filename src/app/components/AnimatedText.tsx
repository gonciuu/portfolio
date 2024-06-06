import Link from 'next/link';
import React, { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

import FlexDiv from './FlexDiv';

interface AnimatedTextProps extends PropsWithChildren {
  className?: string;
  href?: string;
}

const AnimatedText = ({ children, className, href }: AnimatedTextProps) => {
  const text = (
    <FlexDiv
      className={twMerge(
        'group h-7 w-max cursor-pointer flex-col gap-0 overflow-hidden text-lg',
        className,
      )}
    >
      <div className='text-gray-900 duration-300 group-hover:-translate-y-7'>
        <span>{children}</span>
      </div>
      <div className='text-gray-900 opacity-60 duration-300 group-hover:-translate-y-7'>
        <span>{children}</span>
      </div>
    </FlexDiv>
  );

  if (href) {
    return (
      <Link href={href} className='block w-max'>
        {text}
      </Link>
    );
  }

  return text;
};

export default AnimatedText;
