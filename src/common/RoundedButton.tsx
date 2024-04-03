import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import Magnetic from './Magnetic';

export function RoundedButton({
  children,
  backgroundColor = '#242424',
  ...attributes
}: any) {
  const circleRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  let timeoutId: NodeJS.Timeout | null = null;

  useEffect(() => {
    if (circleRef.current) {
      timelineRef.current = gsap.timeline({ paused: true });
      timelineRef.current
        .to(
          circleRef.current,
          { top: '-25%', width: '150%', duration: 0.4, ease: 'power3.in' },
          'enter'
        )
        .to(
          circleRef.current,
          { top: '-150%', width: '125%', duration: 0.25 },
          'exit'
        );
    }
  }, []);

  const manageMouseEnter = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    if (timelineRef.current) {
      timelineRef.current.tweenFromTo('enter', 'exit');
    }
  };

  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      if (timelineRef.current) {
        timelineRef.current.play();
      }
    }, 300);
  };

  return (
    <Magnetic>
      <div
        className='rounded-[3em] border border-lime-700 cursor-pointer relative flex items-center justify-center py-4 px-14'
        style={{ overflow: 'hidden' }}
        onMouseEnter={() => {
          manageMouseEnter();
        }}
        onMouseLeave={() => {
          manageMouseLeave();
        }}
        {...attributes}
      >
        {children}
        <div
          ref={circleRef}
          className='w-full h-[150%] absolute rounded-full top-full bg-lime-400'
        />
      </div>
    </Magnetic>
  );
}
