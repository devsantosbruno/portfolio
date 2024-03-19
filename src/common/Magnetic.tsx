import gsap from 'gsap';
import { cloneElement, useEffect, useRef } from 'react';

export default function Magnetic({ children }: any) {
  const magnetic = useRef(null);

  useEffect(() => {
    const xTo = gsap.quickTo(magnetic.current, 'x', {
      duration: 1,
      ease: 'elastic.out(1, 0.3)',
    });
    const yTo = gsap.quickTo(magnetic.current, 'y', {
      duration: 1,
      ease: 'elastic.out(1, 0.3)',
    });

    magnetic.current.addEventListener('mousemove', (e) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } =
        magnetic.current.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      xTo(x * 2);
      yTo(y * 2);
    });
    magnetic.current.addEventListener('mouseleave', (e) => {
      xTo(0);
      yTo(0);
    });
  }, []);

  return cloneElement(children, { ref: magnetic });
}
