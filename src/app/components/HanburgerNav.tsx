'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { TbMenuDeep, TbX } from 'react-icons/tb';

import { useDimensions } from '../hooks/useDimensions';
import { variantsContainer, variantItem } from '../utils/animations';
import { NavigationItem, navigationItems } from '../utils/data';

import AnimatedText from './AnimatedText';
import Button from './Button';

const sidebarAnimation: Variants = {
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
        className='fixed right-0 top-0 z-10 h-screen w-[300px] border-l border-gray-200 bg-gray-50 p-12'
        variants={sidebarAnimation}
        transition={{
          duration: 0.7,
          bounce: 0,
        }}
      >
        <Image src='/logo.svg' alt='logo' width={100} height={50} />

        <motion.div variants={variantsContainer} className='mt-8 flex flex-col'>
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

function NavItem(props: NavigationItem) {
  return (
    <motion.a
      className='group cursor-pointer list-none py-3'
      variants={variantItem}
      {...props}
    >
      <AnimatedText>{props.children}</AnimatedText>
    </motion.a>
  );
}

export default HanburgerNav;
