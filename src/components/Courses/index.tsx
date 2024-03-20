'use client';

import { courses } from '@/mocks/courses';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Card } from './Card';

export function Courses() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });
  const customTransform = useTransform(scrollYProgress, [0, 1], [-3999, 999]);
  const height = useTransform(scrollYProgress, [0, 1.01], [50, 0]);

  return (
    <div ref={container} className='containerTeste z-20 bg-black relative'>
      <h2 className='text-9xl text-white mb-24 font-black tracking-tighter leading-[0.8]'>
        COURSES
        <br />
        AND
        <br />
        CERTIFIERS
      </h2>

      <div className='flex flex-wrap justify-center gap-x-10 gap-y-40 relative'>
        {courses.map((item) => (
          <Card
            key={item.company}
            company={item.company}
            image={item.image}
            link={item.link}
            logo={item.logo}
            techs={item.techs}
            year={item.year}
          />
        ))}

        <div className='absolute inset-x-0 inset-y-1/2'>
          <motion.div
            className='text-[15rem] text-[#1d1e21] opacity-60 font-black text-nowrap tracking-tighter leading-[0.2] m-0 -z-10'
            style={{ translateX: customTransform }}
          >
            <span>We Build Good Sh*t </span>
            <span>We Build Good Sh*t </span>
            <span>We Build Good Sh*t </span>
            <span>We Build Good Sh*t </span>
            <span>We Build Good Sh*t </span>
          </motion.div>
        </div>
      </div>

      <motion.div style={{ height }} className='bg-red-500 relative mt-28'>
        <div className='h-[1550%] w-[120%] -left-[10%] rounded-b-[50%] bg-black z-10 absolute shadow-2xl' />
      </motion.div>
    </div>
  );
}