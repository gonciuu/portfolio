import React, { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

interface GradientBoxProps extends PropsWithChildren {
  className?: string;
}

export default function GradientBox({ children, className }: GradientBoxProps) {
  return (
    <div
      className={twMerge(
        'w-full justify-between rounded-3xl bg-gradient-to-br from-gray-200 to-gray-100 p-12',
        className,
      )}
    >
      {children}
    </div>
  );
}
