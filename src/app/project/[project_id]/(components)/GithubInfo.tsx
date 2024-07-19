import Button from '@/app/components/Button';
import FlexDiv from '@/app/components/FlexDiv';
import React from 'react';
import { TbBrandGithub } from 'react-icons/tb';

const GithubInfo = () => {
  return (
    <div className='py-12'>
      <h1>Enjoy the code</h1>
      <h2 className='mt-2'>
        To get more information about the project, visit the github repository.
      </h2>
      <Button icon={<TbBrandGithub />} variant='outlined' className='mt-8'>
        Visit Github
      </Button>
    </div>
  );
};

export default GithubInfo;
