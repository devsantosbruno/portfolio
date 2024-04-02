'use client';

import { animatePageIn } from '@/components/PageTransition/animation';
import { useEffect } from 'react';
import { Title } from '../Title';
import { usePathname, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export function PageTransition({ children }: any) {
  const router = useRouter();
  const pathname = usePathname();

  const title = pathname === '/' ? 'Home' : pathname.replace('/', '');

  useEffect(() => {
    animatePageIn('', router);
  }, []);

  return (
    <div>
      <div
        id='pageTransitionElement'
        className='h-screen w-screen flex items-center justify-center bg-[#242424] fixed left-0 right-0 z-50'
        style={{ top: 2000 }}
      >
        <div className='absolute bottom-full right-0 -left-[10vw] bg-[#242424] rounded-t-full w-[120vw] h-[50vh]' />
        <div className='absolute top-full right-0 -left-[10vw] bg-[#242424] rounded-b-full w-[120vw] h-[50vh]' />
        <Title className='uppercase text-white'>{title}</Title>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
