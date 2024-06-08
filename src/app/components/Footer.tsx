import Image from 'next/image';
import * as React from 'react';
import {
  TbArrowRight,
  TbBrandLinkedin,
  TbBrandXdeep,
  TbBrandMedium,
  TbHeartFilled,
} from 'react-icons/tb';

import { HrefProps } from '../utils/data';

import AnimatedText from './AnimatedText';
import Button from './Button';
import FlexDiv from './FlexDiv';
import GradientBox from './GradientBox';
import { Bookmarks } from './Navbar';

export default function Footer() {
  return (
    <div className='py-12'>
      <GradientBox>
        <FlexDiv className='w-full justify-between gap-4'>
          <h1 className='text-5xl'>Let&apos;s talk</h1>
          <Image src='/logo.svg' alt='Logo' width={80} height={40} />
        </FlexDiv>
        <h2 className='mt-4'>
          Let&apos;s start creating amazing
          <br />
          things together
        </h2>
        <AnimatedText
          className='mt-8 font-bold underline'
          href='mailto:kacperwojak17@gmail.com'
        >
          kacperwojak17@gmail.com
        </AnimatedText>
        <FlexDiv className='mt-12 gap-4'>
          <Button
            className='group'
            icon={
              <TbArrowRight className='-rotate-45 text-2xl duration-200 group-hover:rotate-0' />
            }
          >
            Contact Me
          </Button>
          <SocialIcon
            href='https://www.linkedin.com/in/kacper-wojak/'
            icon={<TbBrandLinkedin />}
          />
          <SocialIcon
            href='https://www.linkedin.com/in/kacper-wojak/'
            icon={<TbBrandXdeep />}
          />
          <SocialIcon
            href='https://www.linkedin.com/in/kacper-wojak/'
            icon={<TbBrandMedium />}
          />
        </FlexDiv>
      </GradientBox>
      <FlexDiv className='mt-12 justify-between px-2'>
        <div className='flex-1'>© {new Date().getFullYear()}</div>
        <FlexDiv className='gap-6'>
          <Bookmarks />
        </FlexDiv>
        <FlexDiv className='flex-1 justify-end gap-1'>
          Created with
          <TbHeartFilled className='text-red-600' />
          by Kacper
        </FlexDiv>
      </FlexDiv>
    </div>
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
