import React from 'react';

import FlexDiv from '../components/FlexDiv';
import { ExpertiseInfo, expertise } from '../utils/data';

export default function Expertise() {
  return (
    <section className='py-24'>
      <h2>
        Demonstrating my expertise in efficient cross-platform app development,
        sophisticated state management, seamless API integration, and optimized
        performance to deliver superior user experiences.
      </h2>
      <div className='grid grid-cols-3 gap-8 pt-20'>
        {expertise.map((expertise) => (
          <ExpertiseCard
            key={expertise.title}
            icon={expertise.icon}
            title={expertise.title}
            description={expertise.description}
          />
        ))}
      </div>
    </section>
  );
}

function ExpertiseCard({ icon, title, description }: ExpertiseInfo) {
  return (
    <div className='rounded-2xl border border-gray-100 p-6'>
      <FlexDiv className='h-16 w-16 items-center justify-center rounded-full bg-gray-50 p-4 text-3xl text-gray-800'>
        {icon}
      </FlexDiv>
      <h3 className='mt-4 text-xl font-bold'>{title}</h3>
      <p className='mt-2 text-gray-600'>{description}</p>
    </div>
  );
}
