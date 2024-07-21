import React, { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

interface FlexDivProps extends PropsWithChildren {
  className?: string;
  wrapInMobile?: boolean;
}

export default function FlexDiv({
  children,
  className,
  wrapInMobile,
}: FlexDivProps) {
  const style = wrapInMobile
    ? 'flex-col items-start justify-start md:flex-row'
    : 'flex';

  return (
    <div className={twMerge(`flex items-center gap-4`, style, className)}>
      {children}
    </div>
  );
}
