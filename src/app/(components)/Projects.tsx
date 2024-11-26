'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { TbArrowRight } from 'react-icons/tb';
import { twMerge } from 'tailwind-merge';

import AnimatedText from '../components/AnimatedText';
import Button from '../components/Button';
import FlexDiv from '../components/FlexDiv';
import GradientBox from '../components/GradientBox';
import { Project, projects } from '../utils/data';

const cardVariants: Variants = {
  offscreen: {
    y: 200,
    opacity: 0,
    scale: 0.7,
  },
  onscreen: {
    y: 0,
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 0.8,
    },
  },
};

export default function Projects() {
  return (
    <div className='grid grid-cols-1 gap-16 py-16 md:grid-cols-2'>
      {projects.map((project, index) => (
        <ProjectCard key={project.name} project={project} index={index} />
      ))}
    </div>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Link href={`/project/${project.id}`}>
      <motion.div
        className='group cursor-pointer py-8'
        id='projects'
        initial='offscreen'
        whileInView='onscreen'
        viewport={{ once: true, amount: index > 1 ? 0.5 : 0 }}
      >
        <motion.div variants={cardVariants}>
          <GradientBox className='relative p-0'>
            <Button
              className='group absolute left-8 top-8 p-3 opacity-0 transition-all duration-500 ease-in-out group-hover:-rotate-45 group-hover:scale-110 group-hover:opacity-100'
              rel='noreferrer'
              target='_blank'
              ariaLabel='View Project'
              icon={
                <div className='text-2xl'>
                  <TbArrowRight />
                </div>
              }
            />
            <Image
              src={project.image}
              alt={project.name}
              className='mx-auto transition-all duration-500 ease-in-out group-hover:scale-105'
              height={600}
              width={600}
            />
            <FlexDiv className='absolute right-5 top-5 gap-2 rounded-full bg-white px-3 py-1'>
              <div
                className={twMerge(
                  'h-2 w-2 rounded-full',
                  project.language === 'Flutter'
                    ? 'bg-blue-500'
                    : 'bg-orange-500',
                )}
              />
              <span className='text-gray-700'>{project.language}</span>
            </FlexDiv>
          </GradientBox>
          <AnimatedText secondText={project.tag} className='ml-8 mt-4'>
            <FlexDiv className='gap-2'>
              {project.name}
              <TbArrowRight className='-rotate-45' />
            </FlexDiv>
          </AnimatedText>
        </motion.div>
      </motion.div>
    </Link>
  );
}
