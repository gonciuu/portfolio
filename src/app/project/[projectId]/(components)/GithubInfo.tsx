'use client';

import { motion } from 'framer-motion';
import React from 'react';
import { TbBrandGithub, TbMail } from 'react-icons/tb';

import Button from '@/app/components/Button';
import { entranceTransition } from '@/app/utils/animations';
import { defaultMailTo } from '@/app/utils/data';

import { useCurrentProject } from '../currentProjectStoreProvider';

const headerTransition = entranceTransition({ initialPosition: -30 });
const subHeaderTransition = entranceTransition();
const buttonTransition = entranceTransition({ delay: 0.2 });

const GithubInfo = () => {
  const project = useCurrentProject((state) => state.currentProject);

  if (!project.url)
    return (
      <div className='py-12'>
        <motion.h1 {...headerTransition}>Enjoy the app</motion.h1>
        <motion.h2 className='mt-2' {...subHeaderTransition}>
          The app is not available on Github, but you can contact me if you want
          more information about the project or if you want some support.
        </motion.h2>
        <motion.div className='mt-8' {...buttonTransition}>
          <Button
            icon={<TbMail />}
            variant='outlined'
            href={defaultMailTo}
            target='_blank'
            rel='noreferrer'
          >
            Contact me
          </Button>
        </motion.div>
      </div>
    );

  return (
    <div className='py-12'>
      <motion.h1 {...headerTransition}>Enjoy the code</motion.h1>
      <motion.h2 className='mt-2' {...subHeaderTransition}>
        To get more information about the project, visit the github repository.
      </motion.h2>
      <motion.div className='mt-8' {...buttonTransition}>
        <Button
          icon={<TbBrandGithub />}
          variant='outlined'
          href={project.url}
          target='_blank'
          rel='noreferrer'
        >
          Visit Github
        </Button>
      </motion.div>
    </div>
  );
};

export default GithubInfo;
