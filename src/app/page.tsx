import { Contact } from '@/components/Contact';
import { MaskContainer } from '@/components/ui/svg-mask-effect';
import dynamic from 'next/dynamic';

const Scene = dynamic(() => import('@/components/Scene/Index'), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <section className='w-screen h-screen'>
        <Scene />
      </section>

      <section className='bg-white'>
        <MaskContainer
          revealText={
            <h2 className='text-8xl text-lime-400 mb-10 font-black tracking-tighter'>
              HOVER HERE
            </h2>
          }
        >
          <h1>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
            ratione rem veritatis repudiandae ullam dolore minus accusantium
            alias ut, eos eum suscipit dignissimos, laborum sed perferendis!
            Aspernatur, veniam totam. Praesentium. The first rule of{' '}
            <span className='text-lime-400'>MRR Club</span> is you do not talk
            about MRR Club. The second rule of MRR Club is you DO NOT talk about{' '}
            <span className='text-lime-400'>MRR Club</span>.
          </h1>
        </MaskContainer>
      </section>

      <section className='py-20'>
        <Contact />
      </section>
    </>
  );
}
