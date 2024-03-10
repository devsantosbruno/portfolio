'use client';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export const MaskContainer = ({
  children,
  revealText,
  size = 0,
  revealSize = 600,
  className,
}: {
  children?: string | React.ReactNode;
  revealText?: string | React.ReactNode;
  size?: number;
  revealSize?: number;
  className?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [height, setHeight] = useState<number | undefined>(0);
  const testinho = useRef(null);
  const [mousePosition, setMousePosition] = useState<any>({ x: null, y: null });
  const containerRef = useRef<any>(null);
  const updateMousePosition = (e: any) => {
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  useEffect(() => {
    setHeight(testinho.current.clientHeight);

    containerRef.current.addEventListener('mousemove', updateMousePosition);
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener(
          'mousemove',
          updateMousePosition
        );
      }
    };
  }, []);

  const maskSize = isHovered ? revealSize : size;

  return (
    <motion.div
      ref={containerRef}
      className={cn('flex items-center justify-center relative', className)}
      animate={{
        backgroundColor: isHovered ? 'var(--black)' : 'var(--white)',
      }}
      style={{ minHeight: height ? height + 200 : '100vh' }}
    >
      <motion.div
        className='w-full h-full flex items-center justify-center text-6xl absolute bg-black bg-grid-white/[0.2] text-white [mask-image:url(/mask.svg)] [mask-size:40px] [mask-repeat:no-repeat]'
        animate={{
          WebkitMaskPosition: `${mousePosition.x - maskSize / 2}px ${
            mousePosition.y - maskSize / 2
          }px`,
          WebkitMaskSize: `${maskSize}px`,
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.5 }}
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
      >
        <div className='absolute inset-0 bg-black h-full w-full z-0 opacity-50' />
        <div
          className='max-w-4xl mx-auto text-center text-white text-4xl font-bold relative z-20'
          ref={testinho}
          id='teste'
        >
          {children}
        </div>
      </motion.div>

      <div className='w-full h-full flex items-center justify-end text-black container'>
        {revealText}
      </div>
    </motion.div>
  );
};
