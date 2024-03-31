'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { opacity, slideUp } from './anim';

const words = [
  'Hello',
  'Moïen',
  'Olá',
  'Halløj',
  'Bonjour',
  'Hola',
  '你好',
  'Hallo',
  'مرحبا',
  'Ciao',
];

export function Preloader() {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    if (index === words.length - 1) return;
    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index === 0 ? 1500 : 150
    );
  }, [index]);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  }  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  return (
    <motion.div
      variants={slideUp}
      initial='initial'
      exit='exit'
      className='h-screen w-screen flex items-center justify-center fixed z-50 bg-[#1d1e21] cursor-wait'
    >
      {dimension.width > 0 && (
        <>
          <motion.p
            variants={opacity}
            initial='initial'
            animate='enter'
            className='text-lime-200 text-[5rem] items-center absolute z-50 font-black leading-[0.8] tracking-tighter'
          >
            {words[index]}
          </motion.p>

          <svg className='absolute top-0 w-full h-[calc(100% + 300px)]'>
            <motion.path
              variants={curve}
              initial='initial'
              exit='exit'
              className='fill-[#1d1e21]'
            />
          </svg>
        </>
      )}
    </motion.div>
  );
}
