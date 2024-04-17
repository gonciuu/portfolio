import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps {
  className?: string;
}

export default function Button({ className }: ButtonProps) {
  return (
    <button
      className={twMerge(
        'rounded-full bg-gray-500 px-8 py-3 text-xl text-white',
        className,
      )}
    >
      Explore portfolio
    </button>
  );
}
