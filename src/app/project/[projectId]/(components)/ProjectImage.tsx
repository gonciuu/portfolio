import React from 'react';
import Image from 'next/image';
import useCurrentProject from '../currentProject';

export default function ProjectImage() {
  const project = useCurrentProject((state) => state.currentProject);

  return (
    <Image
      src={project.image}
      width={1200}
      alt={project.name}
      height={1200}
      className='mx-auto'
    />
  );
}
