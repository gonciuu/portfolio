import Link from 'next/link';
import React, { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

import { HrefProps } from '../utils/data';

import FlexDiv from './FlexDiv';

interface AnimatedTextProps extends PropsWithChildren, HrefProps {
  className?: string;
  secondText?: React.ReactNode;
}

const AnimatedText = ({
  children,
  className,
  href,
  rel,
  target,
  secondText,
}: AnimatedTextProps) => {
  const text = (
    <FlexDiv
      className={twMerge(
        'group h-7 w-max cursor-pointer flex-col items-start gap-0 overflow-hidden text-lg',
        className,
      )}
    >
      <div className='text-gray-900 duration-300 group-hover:-translate-y-7'>
        <span>{children}</span>
      </div>
      <div className='text-gray-900 opacity-60 duration-300 group-hover:-translate-y-7'>
        <span>{secondText ?? children}</span>
      </div>
    </FlexDiv>
  );

  if (href) {
    return (
      <Link href={href} className='block w-max' target={target} rel={rel}>
        {text}
      </Link>
    );
  }

  return text;
};

export default AnimatedText;
