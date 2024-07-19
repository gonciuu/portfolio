import React from 'react';
import Image from 'next/image';

type Props = {};

export default function ProjectImage(props: Props) {
  return (
    <Image
      src='/mocks/scanning_world_mock.png'
      width={1200}
      alt='Scanning World'
      height={1200}
      className='mx-auto'
    />
  );
}
