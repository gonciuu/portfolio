'use client';

import { motion } from 'framer-motion';
import React from 'react';

import { entranceTransition } from '@/app/utils/animations';

import { useCurrentProject } from '../currentProjectStoreProvider';

const headerTransition = entranceTransition({ initialPosition: -30 });
const subHeaderTransition = entranceTransition();

export default function Header() {
  const project = useCurrentProject((state) => state.currentProject);

  return (
    <div className='pb-20 pt-24'>
      <motion.h1 {...headerTransition}>{project.name}</motion.h1>
      <motion.h2 className='mt-4' {...subHeaderTransition}>
        {project.tag}
      </motion.h2>
      <motion.h2
        className='mt-8 max-w-[700px] text-2xl'
        {...subHeaderTransition}
      >
        {project.excerpt}
      </motion.h2>
    </div>
  );
}
