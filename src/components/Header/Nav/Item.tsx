'use client';
import { animatePageOut } from '@/components/PageTransition/animation';
import { motion } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import { scale, slide } from '../animation';

export function Item({ data, isActive, setSelectedIndicator }: any) {
  const { title, href, index } = data;
  const pathname = usePathname();
  const router = useRouter();

  function handleClick() {
    if (pathname !== href) {
      animatePageOut(href, router);
    }
  }

  return (
    <motion.div
      className='relative flex items-center'
      onMouseEnter={() => {
        setSelectedIndicator(href);
      }}
      custom={index}
      variants={slide}
      initial='initial'
      animate='enter'
      exit='exit'
    >
      <motion.div
        variants={scale}
        animate={isActive ? 'open' : 'closed'}
        className='w-3 h-3 bg-white rounded-full absolute -left-8'
      />
      <button
        type='button'
        className={`font-black transition duration-500 tracking-tighter hover:text-lime-400 ${
          isActive && 'text-lime-400'
        }`}
        onClick={handleClick}
      >
        {title}
      </button>
    </motion.div>
  );
}
