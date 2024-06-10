'use client';

import { motion } from 'framer-motion';
import React from 'react';

import Button from '../components/Button';
import FlexDiv from '../components/FlexDiv';
import {
  commonTransition,
  entranceTransition,
  variantItem,
  variantsContainer,
} from '../utils/animations';
import { JourneyInfo, journeys } from '../utils/data';

export default function Journey() {
  return (
    <section>
      <motion.h2 {...commonTransition}>
        Discover My Journey: A Passionate Flutter Developer Dedicated to
        Crafting Dynamic Mobile Applications and Delivering Exceptional
        User-Centric Solutions.
      </motion.h2>
      <FlexDiv className='w-full flex-col gap-24 py-24 md:gap-40'>
        {journeys.map((journey, i) => (
          <JourneyCard key={i} {...journey} />
        ))}
      </FlexDiv>
    </section>
  );
}

const headingTransition = entranceTransition();

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
      <motion.div className='flex-1' {...headingTransition}>
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
      </motion.div>
      <motion.ul
        className='max-w-[500px] flex-1 px-8 text-lg'
        variants={variantsContainer}
        initial='closed'
        whileInView='open'
        viewport={{ once: true }}
      >
        {items.map((item, i) => (
          <motion.li key={i} variants={variantItem} viewport={{ once: true }}>
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </FlexDiv>
  );
}
