'use client';

import { motion } from 'framer-motion';
import React from 'react';

import { useCurrentProject } from '../currentProjectStoreProvider';

export default function ProjectDescription() {
  const project = useCurrentProject((state) => state.currentProject);

  return (
    <div className='py-12'>
      <motion.h2>{project.excerpt}</motion.h2>
      <motion.h2 className='mt-8'>{project.description}</motion.h2>
    </div>
  );
}
