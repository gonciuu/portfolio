'use client';

import { motion } from 'framer-motion';
import React from 'react';
import useCurrentProject from '../currentProject';

export default function ProjectDescription() {
  const currentProject = useCurrentProject((state) => state.currentProject);

  return (
    <div className='py-12'>
      <motion.h2>{currentProject.excerpt}</motion.h2>
      <motion.h2 className='mt-8'>{currentProject.description}</motion.h2>
    </div>
  );
}
