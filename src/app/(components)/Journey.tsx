import React from 'react';

import Button from '../components/Button';
import FlexDiv from '../components/FlexDiv';
import { JourneyInfo, journeys } from '../utils/data';

export default function Journey() {
  return (
    <section>
      <h2>
        Discover My Journey: A Passionate Flutter Developer Dedicated to
        Crafting Dynamic Mobile Applications and Delivering Exceptional
        User-Centric Solutions.
      </h2>
      <FlexDiv className='w-full flex-col gap-24 py-24 md:gap-40'>
        {journeys.map((journey, i) => (
          <JourneyCard key={i} {...journey} />
        ))}
      </FlexDiv>
    </section>
  );
}

function JourneyCard({
  title,
  items,
  buttonText,
  buttonIcon,
  href,
  target,
  rel,
}: JourneyInfo) {
  return (
    <FlexDiv
      className='w-full justify-between gap-8 md:items-center'
      wrapInMobile
    >
      <div className='flex-1'>
        <h1 className='max-w-[500px]'>{title}</h1>
        <Button
          variant='outlined'
          icon={<div className='text-2xl'>{buttonIcon}</div>}
          className='mt-8'
          href={href}
          target={target}
          rel={rel}
        >
          {buttonText}
        </Button>
      </div>
      <ul className='max-w-[500px] flex-1 px-8 text-lg'>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </FlexDiv>
  );
}
