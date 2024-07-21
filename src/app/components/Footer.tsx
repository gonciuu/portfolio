'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import {
  TbArrowRight,
  TbBrandLinkedin,
  TbBrandXdeep,
  TbBrandMedium,
  TbHeartFilled,
  TbBrandReddit,
} from 'react-icons/tb';

import { commonTransition } from '../utils/animations';
import { defaultEmail, defaultMailTo, HrefProps } from '../utils/data';

import AnimatedText from './AnimatedText';
import Button from './Button';
import FlexDiv from './FlexDiv';
import GradientBox from './GradientBox';
import { Bookmarks } from './Navbar';

export default function Footer() {
  return (
    <motion.div className='py-12' {...commonTransition}>
      <GradientBox className='p-8 md:p-12'>
        <FlexDiv className='w-full justify-between gap-4' wrapInMobile>
          <h1 className='text-4xl md:text-5xl'>Let&apos;s talk</h1>
          <Link href='/'>
            <Image src='/logo.svg' alt='Logo' width={80} height={40} />
          </Link>
        </FlexDiv>
        <h2 className='mt-4 max-w-[400px]'>
          Let&apos;s start creating amazing things together
        </h2>
        <AnimatedText className='mt-8 font-bold underline' href={defaultMailTo}>
          {defaultEmail}
        </AnimatedText>
        <FlexDiv className='mt-12 gap-4' wrapInMobile>
          <Button
            className='group'
            href={defaultMailTo}
            icon={
              <TbArrowRight className='-rotate-45 text-2xl duration-200 group-hover:rotate-0' />
            }
          >
            Contact Me
          </Button>
          <FlexDiv className='gap-4'>
            <SocialIcon
              href='https://www.linkedin.com/in/kacper-wojak/'
              icon={<TbBrandLinkedin />}
            />
            <SocialIcon href='https://x.com/gonciuu' icon={<TbBrandXdeep />} />
            <SocialIcon
              href='https://www.reddit.com/user/FYEF/'
              icon={<TbBrandReddit />}
            />
            <SocialIcon
              href='https://medium.com/@gonciu'
              icon={<TbBrandMedium />}
            />
          </FlexDiv>
        </FlexDiv>
      </GradientBox>
      <FlexDiv className='mt-12 justify-between px-2' wrapInMobile>
        <div className='flex-1'>© {new Date().getFullYear()}</div>
        <FlexDiv className='gap-6'>
          <Bookmarks />
        </FlexDiv>
        <FlexDiv className='flex-1 justify-end gap-1'>
          Created with
          <motion.div
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <TbHeartFilled className='text-red-600' />
          </motion.div>
          by Kacper
        </FlexDiv>
      </FlexDiv>
    </motion.div>
  );
}

interface SocialIconProps extends HrefProps {
  icon: React.ReactNode;
}

function SocialIcon({ icon, href }: SocialIconProps) {
  return (
    <Button
      variant='outlined'
      href={href}
      className='group p-3'
      rel='noreferrer'
      target='_blank'
      icon={
        <div className='text-2xl duration-200 ease-in-out group-hover:scale-110'>
          {icon}
        </div>
      }
    />
  );
}
