import React from 'react';
import { twMerge } from 'tailwind-merge';

interface FlexDivProps {
  children: React.ReactNode;
  className?: string;
  align?: 'center' | 'start' | 'end' | 'between' | 'around';
  justify?: 'center' | 'start' | 'end' | 'between' | 'around';
}

export default function FlexDiv({
  children,
  align = 'center',
  justify = 'center',
  className,
}: FlexDivProps) {
  return (
    <div
      className={twMerge(`flex items-${align} justify-${justify}`, className)}
    >
      {children}
    </div>
  );
}
