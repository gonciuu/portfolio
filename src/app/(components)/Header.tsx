'use client';

import { motion } from 'framer-motion';
import React from 'react';
import { TbArrowRight } from 'react-icons/tb';

import AnimatedText from '../components/AnimatedText';
import Button from '../components/Button';
import FlexDiv from '../components/FlexDiv';

const Header = () => {
  return (
    <div className='py-32'>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -30 }}
        transition={{
          duration: 0.7,
          type: 'spring',
          bounce: 0.6,
        }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Crafting Mobile <br /> Apps with Flutter
      </motion.h1>
      <motion.h2
        className='mt-4'
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.7, type: 'spring', bounce: 0.6 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Dive into my journey as a Flutter mobile developer,
        <br /> showcasing projects that blend innovative design
        <br /> with seamless functionality.
      </motion.h2>
      <FlexDiv className='mt-14 w-full items-center justify-between'>
        <FlexDiv className='gap-4'>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{
              duration: 0.7,
              type: 'spring',
              bounce: 0.6,
              delay: 0.2,
            }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <Button>Explore portfolio</Button>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{
              duration: 0.7,
              type: 'spring',
              bounce: 0.6,
              delay: 0.4,
            }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <Button
              variant='outlined'
              className='group'
              icon={
                <TbArrowRight className='-rotate-45 text-2xl duration-200 group-hover:rotate-0' />
              }
            >
              Let&apos;s talk
            </Button>
          </motion.div>
        </FlexDiv>
        <FlexDiv className='flex-col items-end justify-end gap-1'>
          <AnimatedText className='text-md mt-1 h-5 text-end'>
            flutter developer · designer
          </AnimatedText>
          <AnimatedText className='text-md mt-1 h-5 text-end'>
            Scroll to explore
          </AnimatedText>{' '}
        </FlexDiv>
      </FlexDiv>
    </div>
  );
};

export default Header;
