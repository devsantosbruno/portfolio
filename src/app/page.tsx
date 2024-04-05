import { Courses } from '@/components/Courses';
import { Projects } from '@/components/Projects';
import { Techs } from '@/components/Techs';
import { Title } from '@/components/Title';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <section className='w-screen h-screen flex items-center justify-center'>
        <Title>Hello World!</Title>
      </section>

      <section className='w-screen min-h-screen relative bg-[#242424] flex flex-col justify-between'>
        <Image
          alt=''
          src='/images/about.webp'
          width={1920}
          height={1080}
          className='absolute inset-x-0 bottom-0 object-contain w-full h-full'
        />

        <div className='containerTeste bg-transparent mb-10'>
          <h2 className='text-6xl md:text-9xl lg:text-[15rem] text-white mb-24 font-black tracking-tighter leading-[0.8] bg-transparent'>
            ABOUT <br /> ME
          </h2>

          <div className='-mt-80 w-1/2 ml-auto relative z-10 flex flex-col gap-10'>
            <h3 className='text-6xl text-white font-thin'>
              Hello, my name's Bruno, I'm a Tech Lead based in Porto Alegre. At
              Hero99, I serve as a Tech Lead, actively contributing to the
              development of applications, systems, and websites.
            </h3>
            <h3 className='text-6xl text-white font-thin'>
              When I'm not grinding at work, you can catch me pumping iron at
              the gym, honing my poker skills or planning my next adventure to
              explore the world.
            </h3>
          </div>
        </div>
      </section>

      <section className='w-screen flex flex-col justify-between bg-lime-400 py-20'>
        <div className='containerTeste'>
          <Title className='text-black uppercase'>
            Tech Fusion <br /> Blending Creativity and <br /> Performance for
            Impact
          </Title>
        </div>

        <Techs />
      </section>

      <Projects />

      <section className='py-20 bg-black'>
        <div className='containerTeste'>
          <h2 className='text-[3.75rem] md:text-[8rem] text-white mb-16 md:mb-24 font-black tracking-tighter leading-[0.8]'>
            COURSES
            <br />
            AND
            <br />
            CERTIFIERS
          </h2>
        </div>

        <Courses />
      </section>
    </>
  );
}
