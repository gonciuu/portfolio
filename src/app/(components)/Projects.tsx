import Image from 'next/image';
import React from 'react';
import { TbArrowRight } from 'react-icons/tb';

import AnimatedText from '../components/AnimatedText';
import Button from '../components/Button';
import FlexDiv from '../components/FlexDiv';
import GradientBox from '../components/GradientBox';
import { Project, projects } from '../utils/data';

export default function Projects() {
  return (
    <div className='grid grid-cols-2 gap-16 py-16'>
      {projects.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </div>
  );
}

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className='group cursor-pointer'>
      <GradientBox className='relative p-0'>
        <Button
          className='group absolute left-8 top-8 p-3 opacity-0 transition-all duration-500 ease-in-out group-hover:-rotate-45 group-hover:scale-110 group-hover:opacity-100'
          rel='noreferrer'
          target='_blank'
          icon={
            <div className='text-2xl'>
              <TbArrowRight />
            </div>
          }
        />
        <Image
          src={project.image}
          alt={project.name}
          className='mx-auto transition-all duration-500 ease-in-out group-hover:scale-110'
          width={500}
          height={500}
        />
      </GradientBox>
      <AnimatedText secondText={project.description} className='ml-8 mt-4'>
        <FlexDiv className='gap-2'>
          {project.name}
          <TbArrowRight className='-rotate-45' />
        </FlexDiv>
      </AnimatedText>
    </div>
  );
}
