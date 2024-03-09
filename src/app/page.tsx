import dynamic from 'next/dynamic';

const Scene = dynamic(() => import('@/components/Scene/Index'), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <section className='w-screen'>
        <Scene />
      </section>

      <section></section>
    </>
  );
}
