import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { menuSlide } from '../animation';
import { Curve } from './Curve';
import { Footer } from './Footer';
import { Item } from './Item';

const navItems = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Work',
    href: '/work',
  },
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
];

export function Nav() {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div
      variants={menuSlide}
      initial='initial'
      animate='enter'
      exit='exit'
      className='h-screen bg-black fixed right-0 top-0 text-white z-40 shadow-2xl shadow-black'
    >
      <div className='h-full p-24 flex flex-col justify-between shadow-2xl shadow-black'>
        <div
          className='flex flex-col text-6xl gap-3 mt-20'
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
        >
          {navItems.map((data, index) => {
            return (
              <Item
                key={data.title}
                data={{ ...data, index }}
                isActive={selectedIndicator === data.href}
                setSelectedIndicator={setSelectedIndicator}
              />
            );
          })}
        </div>

        <Footer />
      </div>

      <Curve />
    </motion.div>
  );
}
