'use client';

import { motion } from 'framer-motion';
import React from 'react';

import { commonTransition } from '@/app/utils/animations';

import { useCurrentProject } from '../currentProjectStoreProvider';

export default function ProjectDescription() {
  const project = useCurrentProject((state) => state.currentProject);

  return (
    <motion.h2 className='mt-8 py-12' {...commonTransition}>
      {project.description}
    </motion.h2>
  );
}
