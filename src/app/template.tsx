'use client';

import { Cursor } from '@/components/Cursor';
import { PageTransition } from '@/components/PageTransition';
import { Preloader } from '@/components/Preloader';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Template({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 3500);
  }, []);

  return (
    <div>
      <AnimatePresence mode='wait'>
        {isLoading ? (
          <Preloader />
        ) : (
          <>
            <Cursor />
            <PageTransition />
            {children}
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
