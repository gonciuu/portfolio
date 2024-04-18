import React, { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

import FlexDiv from './FlexDiv';

interface ButtonProps extends PropsWithChildren {
  className?: string;
  variant?: 'filled' | 'outlined';
  icon?: React.ReactNode;
}

export default function Button({
  className,
  children,
  variant = 'filled',
  icon,
}: ButtonProps) {
  const filledVariantClasses =
    'bg-gray-900 text-white border border-gray-900 hover:bg-gray-700 ';
  const outlinedVariantClasses =
    'border border-gray-900 text-gray-900 hover:text-gray-500 hover:border-gray-500';

  return (
    <button
      className={twMerge(
        'rounded-full px-8 py-3 text-xl outline-amber-500 transition duration-200 ease-in-out hover:shadow-lg',
        variant === 'filled' ? filledVariantClasses : outlinedVariantClasses,
        className,
      )}
    >
      <FlexDiv className='gap-2'>
        {children}
        {icon}
      </FlexDiv>
    </button>
  );
}
