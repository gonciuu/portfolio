'use client';

import { entranceTransition } from '@/app/utils/animations';
import { motion } from 'framer-motion';
import React from 'react';

type Props = {};

const headerTransition = entranceTransition({ initialPosition: -30 });
const subHeaderTransition = entranceTransition();

export default function Header(props: Props) {
  return (
    <div className='py-24'>
      <motion.h1 {...headerTransition}>Scanning World</motion.h1>
      <motion.h2 className='mt-4' {...subHeaderTransition}>
        Travel & Explore
      </motion.h2>
      <motion.h2
        className='mt-8 max-w-[700px] text-2xl'
        {...subHeaderTransition}
      >
        Scan QR codes & earn rewards. Scan QR codes & earn rewards. Scan QR
        codes & earn rewards. Scan QR codes & earn rewards. Scan QR codes & earn
        rewards.
      </motion.h2>
    </div>
  );
}
