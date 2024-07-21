'use client';

import { motion, Variants } from 'framer-motion';
import React from 'react';

import FlexDiv from '@/app/components/FlexDiv';

import { useCurrentProject } from '../currentProjectStoreProvider';

export default function ProjectData() {
  const project = useCurrentProject((state) => state.currentProject);

  return (
    <FlexDiv
      className='items-start justify-between gap-10 md:gap-4'
      wrapInMobile
    >
      <ProjectDataView
        title='Technology'
        items={project.technologies}
        position={1}
      />
      <ProjectDataView title='Work' items={project.workTypes} position={2} />
      <ProjectDataView title='Date' items={[project.date]} position={3} />
    </FlexDiv>
  );
}

const dataVariants: Variants = {
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.15,
    },
  }),
};

interface ProjectDataViewProps {
  title: string;
  items: string[];
  position: number;
}

function ProjectDataView({ title, items, position }: ProjectDataViewProps) {
  return (
    <motion.div
      className='flex-1'
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ once: true, amount: 0.5 }}
    >
      <motion.div variants={dataVariants} custom={position}>
        <span className='text-xl'>{title}</span>
        <div className='mt-2'>
          {items.map((item, i) => (
            <div key={i} className='text-md text-gray-600'>
              {item}
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
