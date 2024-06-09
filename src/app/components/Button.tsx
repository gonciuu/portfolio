import Link from 'next/link';
import React, { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

import { HrefProps } from '../utils/data';

import FlexDiv from './FlexDiv';

interface ButtonProps extends PropsWithChildren, HrefProps {
  className?: string;
  variant?: 'filled' | 'outlined';
  icon?: React.ReactNode;
  onClick?: () => void;
}

export default function Button({
  className,
  children,
  variant = 'filled',
  icon,
  href,
  target,
  rel,
  onClick,
}: ButtonProps) {
  const filledVariantClasses =
    'bg-gray-900 text-white border border-gray-900 hover:bg-gray-700 ';
  const outlinedVariantClasses =
    'border border-gray-900 text-gray-900 hover:text-gray-600 hover:border-gray-600';

  const button = (
    <button
      className={twMerge(
        'rounded-full px-8 py-3 text-xl outline-amber-500 transition duration-200 ease-in-out hover:shadow-lg',
        variant === 'filled' ? filledVariantClasses : outlinedVariantClasses,
        className,
      )}
      onClick={onClick}
    >
      <FlexDiv className='gap-2'>
        {children}
        {icon}
      </FlexDiv>
    </button>
  );

  if (href) {
    return (
      <Link href={href} className='block' target={target} rel={rel}>
        {button}
      </Link>
    );
  }

  return button;
}
