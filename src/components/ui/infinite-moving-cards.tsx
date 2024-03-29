'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

type InfiniteMovingCardsProps = {
  items: {
    name: string;
    image: string;
  };
  direction?: 'left' | 'right';
  speed?: 'fast' | 'normal' | 'slow';
  pauseOnHover?: boolean;
  className?: string;
};

export const InfiniteMovingCards = ({
  items,
  direction = 'left',
  speed = 'normal',
  pauseOnHover = true,
  className,
}: InfiniteMovingCardsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);

  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === 'left') {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'forwards'
        );
      } else {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'reverse'
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === 'fast') {
        return containerRef.current.style.setProperty(
          '--animation-duration',
          '20s'
        );
      }
      if (speed === 'normal') {
        return containerRef.current.style.setProperty(
          '--animation-duration',
          '40s'
        );
      }

      return containerRef.current.style.setProperty(
        '--animation-duration',
        '80s'
      );
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn('scroller relative z-20 overflow-hidden', className)}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          'flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap',
          start && 'animate-scroll ',
          pauseOnHover && 'hover:[animation-play-state:paused]'
        )}
      >
        {items.map((item) => (
          <li
            className='w-full max-w-[200px] relative rounded-2xl bg-[#1d1e21] border-none flex items-center justify-center p-6 hover:scale-110 transition duration-300'
            key={item}
          >
            <Image
              alt=''
              src={`/images/${item.image}`}
              width={200}
              height={200}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
