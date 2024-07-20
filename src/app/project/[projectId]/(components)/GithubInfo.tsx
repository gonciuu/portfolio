'use client';

import Button from '@/app/components/Button';
import React from 'react';
import { TbBrandGithub } from 'react-icons/tb';
import { useCurrentProject } from '../currentProjectStoreProvider';

const GithubInfo = () => {
  const project = useCurrentProject((state) => state.currentProject);

  return (
    <div className='py-12'>
      <h1>Enjoy the code</h1>
      <h2 className='mt-2'>
        To get more information about the project, visit the github repository.
      </h2>
      <Button
        icon={<TbBrandGithub />}
        variant='outlined'
        className='mt-8'
        href={project.url}
        target='_blank'
        rel='noreferrer'
      >
        Visit Github
      </Button>
    </div>
  );
};

export default GithubInfo;
