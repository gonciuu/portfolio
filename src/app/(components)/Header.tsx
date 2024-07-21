'use client';

import { motion } from 'framer-motion';
import React from 'react';
import { TbArrowRight } from 'react-icons/tb';

import AnimatedText from '../components/AnimatedText';
import Button from '../components/Button';
import FlexDiv from '../components/FlexDiv';
import { entranceTransition } from '../utils/animations';
import { defaultMailTo } from '../utils/data';

const headerTransition = entranceTransition({ initialPosition: -30 });
const subHeaderTransition = entranceTransition();
const portfolioButtonTransition = entranceTransition({ delay: 0.2 });
const letsTalkButtonTransition = entranceTransition({
  delay: 0.4,
  amount: 0.3,
});

const Header = () => {
  return (
    <div className='py-32'>
      <motion.h1 {...headerTransition}>
        Crafting Mobile <br /> Apps with Flutter
      </motion.h1>
      <motion.h2 className='mt-4 max-w-[700px]' {...subHeaderTransition}>
        Dive into my journey as a Flutter mobile developer, showcasing projects
        that blend innovative design with seamless functionality.
      </motion.h2>
      <FlexDiv
        className='mt-12 w-full  md:items-center md:justify-between'
        wrapInMobile
      >
        <FlexDiv className='gap-4' wrapInMobile>
          <motion.div {...portfolioButtonTransition}>
            <Button href='/#projects'>Explore portfolio</Button>
          </motion.div>
          <motion.div {...letsTalkButtonTransition}>
            <Button
              variant='outlined'
              className='group'
              href={defaultMailTo}
              icon={
                <TbArrowRight className='-rotate-45 text-2xl duration-200 group-hover:rotate-0' />
              }
            >
              Let&apos;s talk
            </Button>
          </motion.div>
        </FlexDiv>
        <FlexDiv className='ml-2 mt-4 flex-col items-start gap-1 md:ml-0 md:mt-0 md:items-end md:justify-end'>
          <motion.div {...portfolioButtonTransition}>
            <AnimatedText className='text-md mt-1 h-5 md:text-end'>
              flutter developer · designer
            </AnimatedText>
          </motion.div>
          <motion.div {...letsTalkButtonTransition}>
            <AnimatedText className='text-md mt-1 h-5 md:text-end'>
              Scroll to explore
            </AnimatedText>
          </motion.div>
        </FlexDiv>
      </FlexDiv>
    </div>
  );
};

export default Header;
