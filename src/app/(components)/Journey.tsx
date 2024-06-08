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
      <FlexDiv className='w-full flex-col gap-40 py-24'>
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
    <FlexDiv className='w-full justify-between gap-8'>
      <div>
        <h1>{title}</h1>
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
      <ul className='w-1/3 text-lg'>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </FlexDiv>
  );
}
