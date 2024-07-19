'use client';

import FlexDiv from '@/app/components/FlexDiv';
import { motion } from 'framer-motion';
import React from 'react';

export default function ProjectData() {
  return (
    <FlexDiv
      className='items-start justify-between gap-10 md:gap-4'
      wrapInMobile
    >
      <ProjectDataView
        title='Technology'
        items={[
          'React',
          'TypeScript',
          'Tailwind CSS',
          'Framer Motion',
          'Next.js',
        ]}
      />
      <ProjectDataView
        title='Features'
        items={[
          'Responsive Design',
          'Framer Motion Animations',
          'Dark Mode',
          'SEO Optimization',
          'PWA Support',
        ]}
      />

      <ProjectDataView
        title='Challenges'
        items={[
          'Learning Framer Motion',
          'Implementing Dark Mode',
          'SEO Optimization',
          'PWA Support',
        ]}
      />
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
