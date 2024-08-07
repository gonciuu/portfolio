'use client';

import { motion, Variants } from 'framer-motion';
import React from 'react';

import FlexDiv from '../components/FlexDiv';
import { commonTransition } from '../utils/animations';
import { ExpertiseInfo, expertise } from '../utils/data';

export default function Expertise() {
  return (
    <section className='py-24' id='expertise'>
      <motion.h2 {...commonTransition}>
        Demonstrating my expertise in efficient cross-platform app development,
        sophisticated state management, seamless API integration, and optimized
        performance to deliver superior user experiences.
      </motion.h2>
      <motion.div className='grid grid-cols-1 gap-8 pt-20 xs:grid-cols-2 lg:grid-cols-3'>
        {expertise.map((expertise, index) => (
          <ExpertiseCard
            key={expertise.title}
            icon={expertise.icon}
            title={expertise.title}
            description={expertise.description}
            position={index}
          />
        ))}
      </motion.div>
    </section>
  );
}

const expertiseVariants: Variants = {
  offscreen: {
    y: 30,
    opacity: 0,
  },
  onscreen: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
    },
  }),
};

function ExpertiseCard({
  icon,
  title,
  description,
  position,
}: ExpertiseInfo & { position: number }) {
  return (
    <motion.div
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        variants={expertiseVariants}
        custom={position}
        className='rounded-2xl border border-gray-100 p-6'
      >
        <FlexDiv className='h-16 w-16 items-center justify-center rounded-full bg-gray-50 p-4 text-3xl text-gray-800'>
          {icon}
        </FlexDiv>
        <h3 className='mt-4 text-xl font-bold'>{title}</h3>
        <p className='mt-2 text-gray-600'>{description}</p>
      </motion.div>
    </motion.div>
  );
}
