'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

import { commonTransition } from '@/app/utils/animations';

import { useCurrentProject } from '../currentProjectStoreProvider';

export default function ProjectImage() {
  const project = useCurrentProject((state) => state.currentProject);

  return (
    <motion.div {...commonTransition}>
      <Image
        src={project.image}
        width={1200}
        alt={project.name}
        height={1200}
        className='mx-auto'
      />
    </motion.div>
  );
}
