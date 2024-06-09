'use client';

import { motion, Variants } from 'framer-motion';
import React, { useRef, useState } from 'react';
import { TbMenuDeep, TbX } from 'react-icons/tb';

import { useDimensions } from '../hooks/useDimensions';
import { navigationItems } from '../utils/data';

import AnimatedText from './AnimatedText';
import Button from './Button';
import FlexDiv from './FlexDiv';

const sidebar: Variants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 244px 56px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(24px at 244px 56px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

const container = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const item = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const mobileNavItems = [
  ...navigationItems,
  {
    children: 'Contact me',
    href: 'mailto: [email protected]',
  },
];

const HanburgerNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      className='md:hidden'
      initial='closed'
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}
    >
      <motion.div
        className='fixed right-0 top-0 z-10 h-screen w-[300px] bg-gray-100 px-12 py-24'
        variants={sidebar}
        transition={{
          duration: 0.7,
          bounce: 0,
        }}
      >
        <motion.div variants={container} className='flex flex-col'>
          {mobileNavItems.map((item) => (
            <NavItem key={item.href} {...item}>
              {item.children}
            </NavItem>
          ))}
        </motion.div>
      </motion.div>
      <Button
        variant='outlined'
        className='fixed right-8 top-8 z-10 h-12 w-12 p-3'
        icon={
          isOpen ? (
            <TbX className='text-2xl' />
          ) : (
            <TbMenuDeep className='text-2xl' />
          )
        }
        onClick={() => setIsOpen((prev) => !prev)}
      />
    </motion.nav>
  );
};

function NavItem(props: { children: React.ReactNode }) {
  return (
    <motion.a
      className='group cursor-pointer list-none py-3'
      variants={item}
      {...props}
    >
      <AnimatedText>{props.children}</AnimatedText>
    </motion.a>
  );
}

export default HanburgerNav;
