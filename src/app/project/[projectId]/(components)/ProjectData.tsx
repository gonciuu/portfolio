'use client';

import { motion } from 'framer-motion';
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
      <ProjectDataView title='Technology' items={project.technologies ?? []} />
      <ProjectDataView title='Work' items={project.workTypes ?? []} />
      <ProjectDataView title='Date' items={[project.date]} />
    </FlexDiv>
  );
}

interface ProjectDataViewProps {
  title: string;
  items: string[];
}

function ProjectDataView({ title, items }: ProjectDataViewProps) {
  return (
    <motion.div className='flex-1' initial='offscreen' whileInView='onscreen'>
      <span className='text-xl'>{title}</span>
      <div className='mt-2'>
        {items.map((item, i) => (
          <div key={i} className='text-md text-gray-600'>
            {item}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
