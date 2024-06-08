import React, { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

interface FlexDivProps extends PropsWithChildren {
  className?: string;
}

export default function FlexDiv({ children, className }: FlexDivProps) {
  return (
    <div className={twMerge(`flex items-center gap-4`, className)}>
      {children}
    </div>
  );
}
